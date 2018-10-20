'use strict';

import { checks } from './checks';
import * as debug from 'debug';

const printers3router = debug('s3router');

export const $matrix = Symbol.for('matrix');
export const $arr = Symbol.for('array');
export const $df = Symbol.for('data.frame');
export const $num_version = Symbol.for('numeric_version');
export const $pack_vers = Symbol.for('package_version');
export const $POSIXlt = Symbol.for('POSIXlt');
export const $POSIXct = Symbol.for('POSIXct');
export const $POSIXt = Symbol.for('POSIXt');
export const $numeric = Symbol.for('numeric');
export const $chr = Symbol.for('character');
export const $fs = Symbol.for('file');
export const $difftime = Symbol.for('difftime');
export const $vect = Symbol.for('vector');
export const $list = Symbol.for('list');
export const $raw = Symbol.for('raw');
export const $AsIs = Symbol.for('AsIs');
export const $fact = Symbol.for('factor');
export const $int = Symbol.for('integer');
export const $cmplx = Symbol.for('complex');
export const $logic = Symbol.for('logical');
export const $ts = Symbol.for('ts');
export const $noq = Symbol.for('noquote');
export const $env = Symbol.for('environment');
export const $form = Symbol.for('formula');
export const $qr = Symbol.for('qr');
export const $lm = Symbol.for('lm');
export const $err = Symbol.for('error');
export const $glm = Symbol.for('glm');
export const $Date = Symbol.for('Date');
export const $dbl = Symbol.for('double')
export const $lan = Symbol.for('language')
export const $s3 = Symbol.for('s3System')
export const $ah = Symbol.for('attributeHidden');
export const $attr = Symbol.for('attributes')
export const $default = Symbol.for('S3-default')
export const $class = Symbol.for('s3class');
export const blessed = [$list, $matrix, $arr];

//from specific -> general
export const hierarchy = {
  [$matrix]: $arr, // a matrix is also an array
  [$df]: $list, // a dataframe is a list
  [$POSIXct]: $POSIXt,
  [$POSIXlt]: $POSIXt
}

function s3class(obj: any): symbol[] {
  if (Object.getOwnPropertyDescriptor(obj, $attr)){
     return obj[$attr][$class];
  }
  if (Object.getOwnPropertyDescriptor(obj, $ah)){
     return obj[$ah][$class];
  }
  return []
}

function s3className(s3c: symbol): string {
  const match = s3c.toString().match(/^Symbol\(([^()]+)\)$/);
  if (match === null) throw new Error(`argument s3c is not a symbol: ${String(s3c)}`)
  return match[1];  
}

function s3Router(obj: any, ...rest: any[]): any {
  const s3Classes = s3class(obj);
  if (!s3Classes.length){
     throw new Error(`argument object is not an s3 class ${String(obj)}`);
  }
  for (const s3Class of s3Classes) {
    if (this[s3Class]) {
      return this[s3Class](obj);
    }
  }
  const allClassNames = s3Classes.map(s3className).join(',');
  printers3router(`No specific handler found for: ${allClassNames}`)
  
  // try to route to default
  if (this[$default]){
     return this[$default](obj, ...rest);
  }
  throw new Error(`No default defined for function: [${this.name}] for s3 classes: ${allClassNames}`);
}

export function UseMethod(methodName: string) {
  if (typeof methodName !== 'string') {
    throw new Error(`methodname not a string`)
  }
  if (!methodName.trim()) {
    throw new Error(`methodname cannot be empty string`)
  }
  checks.validateIdentifier({ name: methodName }); // will throw if not
  // create the function
  const fn = Function(`
      const fn = function ${methodName}(...rest) { 
         if (this instanceof ${methodName}){ 
           throw 'dont call function ${methodName} with "new"'; 
         }
         return ${methodName}[Symbol.for("s3System")](...rest);
      };
      this.${methodName}=fn;
      return fn;
      `)();
  Object.defineProperties(fn, {
    [Symbol.toStringTag]: {
      value: `S3 ${methodName}`,
      writable: false,
      enumerable: false,
      configurable: false
    },
    [$s3]: {
      writable: false,
      enumerable: false,
      configurable: false,
      value: (...rest: any[]) => `s3 router called`
    },
    toString: {
      writable: false,
      enumerable: false,
      configurable: false,
      value: () => `s3 method ${methodName}`
    }
  });
  return fn;
}

