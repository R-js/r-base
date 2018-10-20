'use strict'

export function asSymbol(val: string | symbol | number): symbol {
    const rc = typeof val === 'string' ? Symbol.for(val) : typeof val === 'symbol' ? val : undefined;
    if (rc === undefined) {
        throw new TypeError(`${String(val)} is not of type "string" or "symbol"`)
    }
    return rc;
}

export function extractSymbolName(s: symbol): string {
    const match = s.toString().match(/^Symbol\(([^()]+)\)$/);
    if (match === null) throw new Error(`argument "s" is not a symbol: ${String(s)}`)
    return match[1];
}