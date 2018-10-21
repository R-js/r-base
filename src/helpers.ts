'use strict'

import { FactorType } from './types';




export function asSymbol(val: string | symbol | number): symbol {
    const rc = typeof val === 'string' ? Symbol.for(val) : typeof val === 'symbol' ? val : undefined;
    if (rc === undefined) {
        throw new TypeError(`${String(val)} is not of type "string" or "symbol"`)
    }
    return rc;
}

export function extractSymbolName(s: symbol | string): string {
    const match = s.toString().match(/^Symbol\(([^()]+)\)$/);
    if (match === null) throw new Error(`argument "s" is not a symbol: ${String(s)}`)
    return match[1];
}

export function isEqualPropKey(a: PropertyKey, b: PropertyKey) {
    // promotion rules
    if (typeof a === 'symbol' && typeof b === 'symbol') return a == b;
    if (typeof a === 'symbol' && typeof b !== 'symbol') return a == Symbol.for(String(b));
    if (typeof a !== 'symbol' && typeof b === 'symbol') return Symbol.for(String(a)) === b;
    /*if (typeof a !== 'symbol' && typeof b !== 'symbol' ) */
    return String(a) === String(b)
}

export function indexOf(value: PropertyKey, start: number, arr: PropertyKey[]): number {
    for (let i = start; i < arr.length; i++) {
        if (isEqualPropKey(arr[i], value)) return i;
    }
    return -1
}

function createPromotor() {

    let finalpromo = 'boolean';

    return {
        find: function (v, i, arr) {
            const _type = typeof v;
            if (_type === 'string') {
                finalpromo = 'string'
                return true;
            }
            if (_type === 'number') {
                finalpromo = 'number'
            }
            if (_type === 'boolean' && finalpromo !== 'number') {
                finalpromo = 'boolean'
            }
            if (_type === 'function') {
                return this.find(v(), i, arr)
            }
            return false;
        },
        code: () => finalpromo
    }
}

//typeof returns -> "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function"



export function promote(...n: FactorType[]) {
    const promotor = createPromotor();
    n.find(promotor.find);
    const op = promotor.code() === 'string' ? String : promotor.code() === 'number' ? Number : Boolean;
    const rc = n.slice();
    for (let i = 0; i < n.length; i++) {
        const p = n[i];
        const _type = typeof p;
        if (['symbol' , 'undefined' , 'object'].includes(_type)){
            rc[i] = null
            continue;
        }
        // use typeof because of tslint
        if (typeof p === 'function'){
            let  fn = (p) => {
               const an = p()
               if (typeof an == 'function') { 
                   return fn(an)
               }
               return an;  
            }
            rc[i] = op(fn(p));
            continue;
        }
        rc[i] = op(p);
    }
    return rc;
}
