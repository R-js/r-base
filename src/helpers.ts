'use strict'

export function asSymbol(val: string | symbol | number): symbol {
    const rc = typeof val === 'string' ? Symbol.for(val) : typeof val === 'symbol' ? val : undefined;
    if (rc === undefined) {
        throw new TypeError(`${String(val)} is not of type "string" or "symbol"`)
    }
    return rc;
}

export function extractSymbolName(s: symbol|string): string {
    const match = s.toString().match(/^Symbol\(([^()]+)\)$/);
    if (match === null) throw new Error(`argument "s" is not a symbol: ${String(s)}`)
    return match[1];
}

export function isEqualPropKey(a: PropertyKey,b: PropertyKey){
    // promotion rules
    if (typeof a === 'symbol' && typeof b === 'symbol' ) return a==b;
    if (typeof a === 'symbol' && typeof b !== 'symbol' ) return a==Symbol.for(String(b));
    if (typeof a !== 'symbol' && typeof b === 'symbol' ) return Symbol.for(String(a)) === b; 
    /*if (typeof a !== 'symbol' && typeof b !== 'symbol' ) */ 
    return String(a) === String(b)
} 

export function indexOf(value: PropertyKey, start: number, arr: PropertyKey[]): number{
    for (let i = start; i < arr.length; i++){
        if (isEqualPropKey(arr[i], value)) return i;
    }
    return -1
}