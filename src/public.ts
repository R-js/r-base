'use strict';

import { UseMethod, Rclass, /* $default, */ $ordered, $list, $df, $int, $string, $double, $logical, $jsArray, isR } from "./s3";
import { multiplexer } from './helpers';

function seq_len(length: number, offset = 1) {
    return Array.from({ length }).map((_, i) => i + offset);
}

const repInt = UseMethod('rep$int')


repInt[$list] = function () { throw new TypeError(`List is not implemented for ${this.name}`); }
repInt[$df] = function () { throw new TypeError(`dataFrame is not implemented for ${this.name}`); }
repInt[$int] = repInt[$string] = repInt[$logical] = repInt[$double] = function (x, times) {
    return Array.from({ length: times }).fill(x);
}

repInt[$jsArray] = Rcycle(repInt[$int]);/*  function(x: any[], times){
   if (typeof times !== 'number' || times  <= 0) return [];
   const flattened = flatten(x);
   const length = flattened.length * times; 
   const rc = Array.from({length});
   for (let i = 0; i < times; i += flattened.length){
       for (let j = 0; j < flattened.length; j++){
           rc[i+j] = flattened[j]   
       }
   }
}*/

const rep_len = UseMethod('rep_len');
rep_len[$int] = rep_len[$string] = repInt[$logical] = repInt[$double] = function (x, times) {
    return Array.from({ length: times }).fill(x);
}
rep_len[$jsArray] = function (x: any, length: number) {
    let rc = x.slice()
    if (length === rc.length) {
        return rc;
    }
    if (length < rc.length) {
        rc.length = length
        return rc;
    }
    rc = Array.from({ length });
    for (let i = 0; i < rc.length; i++) {
        rc[i] = x[i % length]
    }
    return rc;
}


function Rcycle(fn: (...rest: (any | any[])[]) => any) {
    return function (...rest: (any | any[])[]) {
        return multiplexer(...rest)(fn);
    };
}

function isOrdered(x: any) {
    const classNames: symbol[] = Rclass(x);
    return classNames.includes($ordered)
}


export { repInt, rep_len, seq_len, Rcycle, isOrdered }