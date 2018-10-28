'use strict';

import { UseMethod, /* $default, */ $list, $df, $int, $string, $double, $logical, $jsArray } from "./s3";
import { multiplexer } from './helpers';

function seq_len(length: number, offset = 1) {
    return Array.from({ length }).map((_, i) => i + offset);
}

const repInt = UseMethod('rep$int')
const rep_len = UseMethod('rep_len');

repInt[$list] = function () { throw new TypeError(`List is not implemented for ${this.name}`); }
repInt[$df] = function () { throw new TypeError(`dataFrame is not implemented for ${this.name}`); }
repInt[$int] = repInt[$string] = repInt[$logical] = repInt[$double] = function (x, times) {
    return Array.from({ length: times }).fill(x);
}

repInt[$jsArray] = Rcycle(repInt);/*  function(x: any[], times){
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

function Rcycle(fn: (...rest: (any | any[])[]) => any) {
    return function (...rest: (any | any[])[]) {
        return multiplexer(...rest)(fn);
    };
}

export { repInt, rep_len, seq_len, Rcycle }