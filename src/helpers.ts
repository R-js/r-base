'use strict'

import { FactorType, TYPESASSTRINGS } from './types';

const { max } = Math;

export function asSymbol(val: string | symbol | number): symbol {
    const rc = typeof val === 'string' ? Symbol.for(val) : typeof val === 'symbol' ? val : undefined;
    if (rc === undefined) {
        throw new TypeError(`${String(val)} is not of type "string" or "symbol"`)
    }
    return rc;
}

export function extractSymbolName(s: symbol | string): string {
    const match = s.toString().match(/^Symbol\(([^()]+)\)$/)
    if (match === null) throw new Error(`argument "s" is not a symbol: ${String(s)}`)
    return match[1]
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

function _typeOf(v: any): TYPESASSTRINGS {
    if (v === null) return 'null';
    if (v instanceof Array) return 'array';
    if (v instanceof Function) return 'function';
    const k = typeof v;
    return k;
}

function createPromotor() {

    let finalpromo = 'boolean';

    function find(v, i, arr) {
        const _type = _typeOf(v);
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
            return find(v(), i, arr)
        }
        return false;
    }

    return {
        find,
        code: () => finalpromo
    }
}

export function lowerCaseIfString(v) {
    if (typeof v === 'string') {
        return v.toLowerCase()
    }
    return v;
}

export function isType(s: any, ...tests: TYPESASSTRINGS[]) {
    return tests.indexOf(typeof s) >= 0
}

export function exclude(arr: any[], exclusionList: (string | symbol)[]): any[] {
    return arr.filter(v => {
        for (const entry of exclusionList) {
            if (entry == v) {
                return false
            }
        }
        return true
    })
}

export function duplicates(input: any[]): any[] {
    return input.filter((f, i, arr) => indexOf(f, i + 1, arr) >= 0);
}

export function unique(input: any[]): any[] {
    return input.filter((f, i, arr) => indexOf(f, i + 1, arr) === -1);
}

export function promote(...args: FactorType[]) {
    return promoteArray(args);
}

export function promoteArray(n: FactorType[]) {
    const promotor = createPromotor();
    n.find(promotor.find);
    const op = promotor.code() === 'string' ? String : promotor.code() === 'number' ? Number : Boolean;
    const rc = n.slice();
    for (let i = 0; i < n.length; i++) {
        const p = n[i];
        const _type = typeof p;
        if (['symbol', 'undefined', 'object'].includes(_type)) {
            rc[i] = null
            continue;
        }
        // use typeof because of tslint
        if (typeof p === 'function') {
            let fn = (p) => {
                const an = p()
                if (typeof an === 'function') {
                    return fn(an)
                }
                return an;
            }
            rc[i] = op(fn(p));
            continue;
        }
        rc[i] = op(p);
    }
    return { promoted: rc, type: promotor.code() };
}

export function flatten<T>(...rest: (T | T[])[]): T[] {
    let rc: T[] = [];
    for (const itm of rest) {
        if (Array.isArray(itm)) {
            let rc2: T[] = flatten(...itm);
            rc.push(...rc2);
            continue;
        }
        rc.push(itm);
    }
    return rc as any;
}

export type system = boolean | number | undefined | string | null | symbol;

export function multiplexer(...rest: (system | system)[]) {
    //
    // Analyze
    //  
    const analyzed: _t[] = [];
    type _t = boolean[] | number[] | undefined[] | string[] | null[] | symbol[] | Array<any>;

    const select = {
        ['undefined'](v: null) { analyzed.push([v]); },
        ['null'](v: null) { analyzed.push([v]); },
        ['string'](v: string) { analyzed.push(v.split('')) },
        ['boolean'](v: boolean) { analyzed.push([v]) },
        ['array'](v: _t) { analyzed.push(v) },
        ['object'](v: _t) { throw new Error('Sorry, looping over properties not yet supported'); },
        ['function'](v: _t) { throw new Error('Sorry function arguments are not yet supported'); }
    };

    for (let k = 0; k < rest.length; k++) {
        const arg = rest[k];
        const to = _typeOf(arg);
        const selector = select[to];
        selector(arg);
    }//for
    // find the longest array
    const _max = max(...analyzed.map(a => a.length));
    return function (fn: (...rest: system[]) => any): any[] {
        const rc: any[] = [];

        for (let k = 0; k < _max; k++) {
            const result: any[] = [];
            for (let j = 0; j < analyzed.length; j++) {
                const arr: any[] = analyzed[j];
                const idx = k % arr.length;
                result.push(arr[idx]);
            }
            rc.push(fn(...result));
        }
        return flatten(rc);
    };
}


