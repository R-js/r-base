'use strict';

import { assertNonEmptyString, assertValidIdentifier, isDefined } from './checks';
import { getLogger } from './logger';
import { asSymbol, extractSymbolName } from './helpers';
import { isArray } from 'util';

const s3logger = getLogger('s3router');
const elogger = getLogger('Renhance');

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
export const $vector = Symbol.for('vector');
export const $list = Symbol.for('list');
export const $raw = Symbol.for('raw');
export const $AsIs = Symbol.for('AsIs');
export const $fact = Symbol.for('factor');
export const $int = Symbol.for('integer');
export const $cmplx = Symbol.for('complex');
export const $logic = Symbol.for('logical');
export const $ts = Symbol.for('ts');
export const $listProps = Symbol.for('ts');
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
export const $s3 = Symbol.for('s3System');
export const $ch = Symbol.for('classHidden');
export const $attr = Symbol.for('attributes')
export const $default = Symbol.for('S3-default')
export const $class = Symbol.for('s3class');
export const blessed = [$list, $matrix, $arr];
export const $levels = Symbol.for('levels');

//from specific -> general
export const hierarchy = {
  [$matrix]: $arr, // a matrix is also an array
  [$df]: $list, // a dataframe is a list
  [$POSIXct]: $POSIXt,
  [$POSIXlt]: $POSIXt
}

/*functions:
 isR
 assertR
 Renhance
 UseMethod
 getClass
*/

export function isR(obj) {
  // was the JS object R-enhanced?
  // its on the object but "has" returns false
  return obj && !(obj[$attr] == undefined) && !($attr in obj)
}

export function assertR(obj) {
  if (!isR(obj)) {
    throw new TypeError(`object is not an R object`)
  }
}

export function Renhance(obj) {
  /* attribute virtual handler is here */
  const dict = new Map()
  const attributes = new Proxy({}, {
    get(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      const found = dict.get(key);
      return found || [];
    },
    set(o, propName: PropertyKey, propValue: Function | string, originalObj) {
      const key = asSymbol(propName);
      if (isDefined(propValue)) {
        if (isArray(propValue)) {
          dict.set(key, propValue);
        }
        else {
          dict.set(key, [propValue]);
        }
        return true;
      }
      elogger.warning('will delete:' + String(propName))
      dict.delete(key);
      return true;
    },
    getPrototypeOf(o) {
      return null;
    },
    setPrototypeOf(o, prototype) {
      return false;
    },
    isExtensible(o) {
      return false;
    },
    preventExtensions(o) {
      return false; // didnt succeed ot make unextendable
    },
    getOwnPropertyDescriptor(o, prop) {
      return undefined;
    },
    defineProperty(o, prop, descr) {
      return false;
    },
    has(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      const found = dict.get(key);
      return !!found;
    },
    deleteProperty(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      return dict.delete(key);
    },
    ownKeys(o) {
      return Array.from(dict.keys());
    },
    apply(o, thisArg, argumentList) {
      throw new TypeError('not a function');
    },
    construct(o, argumentList, newTarget) {
      throw new TypeError('this is not a class function');
    }
  });

  return new Proxy(obj, {
    get(o, propName: PropertyKey) {
      const symbol = asSymbol(propName);
      if (symbol === $attr) {
        return attributes;
      }
      return o[propName];
    },
    set(o, propName: PropertyKey, value, receiver) {
      const symbol = asSymbol(propName);
      if (symbol === $attr) {
        return true;
      }
      o[propName] = value;
      return true;
    },
    has(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      if (key === $attr) {
        return false
      }
      return propName in o;
    },
  });
}

export const UseMethod = (methodName: string) => {
  assertNonEmptyString(methodName)
  assertValidIdentifier(methodName);
  const fns = new Map()

  var fnStub = Function(`
    const fn = function ${methodName}() { /* S3 generic function */};
    return fn;
  `)();

  const s3MethodRouter = {
    //hidden
    _processNonRArguments(o, thisArg, argumentList) {
      const _default = fns.get($default);
      if (!_default) {
         const errMsg = `default defined for function: [${o.name}]`
         s3logger.errorAndThrow(Error, errMsg)
      }
      return _default.apply(thisArg, argumentList.slice());
    },
     //traps
    get(o, propName: PropertyKey) {
      switch (propName) {
        case 'toString':
          return o[propName].bind(o);
        case Symbol.toPrimitive:
          return o[propName];
        case 'valueOf':
          return o[propName] //o[propName];
        default:
          break;
      }
      const symbol = asSymbol(propName);
      let fn = fns.get(symbol);
      if (fn === undefined) {
        fn = fns.get($default);
        if (fn === undefined) {
          throw new TypeError(`class ${String(propName)} has no handler`)
        }
      }
      return fn;
    },
    //
    set(o, propName: PropertyKey, propValue: Function | string, originalObj) {
      const symbol = asSymbol(propName);
      if (propValue === null || propValue === undefined || propValue === '') {
        fns.delete(symbol)
        return true
      }
      fns.set(symbol, propValue)
      return true;
    },
    // actual routing is here
    apply(o, thisArg, argumentList) {
      const obj = argumentList[0];
      if (!isR(obj)) {
        return this._processNonRArguments(o, thisArg, argumentList);
      }
      const s3Classes = obj[$attr][$class].concat(obj[$attr][$ch]);
      if (!s3Classes.length) {
        throw new Error(`It is an R object but with no classes defined [${String(obj)}]`);
      }
      for (const s3Class of s3Classes) {
        const method = fns.get(s3Class)
        if (method) {
          return method.apply(obj, argumentList.slice())
        }
      }
      // try default
      const _default = fns.get($default);
      if (!_default) {
        if (isR(obj)) {
          const allClassNames = s3Classes.map(extractSymbolName).join(',');
          const errMsg = `No default defined for function: [${o.name}] for s3 classes: ${allClassNames}`
          s3logger.errorAndThrow(Error, errMsg)
        }
        return _default.apply(obj, argumentList.slice());
      }
    }
  } // router end
  return new Proxy(fnStub, s3MethodRouter);
}

// gets hidden class
export function getClass(obj) {
  if (isR) {
    return obj[$attr][$class] || obj[$attr][$ch]
  }
}

//TODO:
// implement names and lables

export const names = UseMethod('names');
export const labels = UseMethod('labels');
export const Rclass = UseMethod('Rclass');
export const attributes = UseMethod('attributes')



