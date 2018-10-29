'use strict';

import { assertNonEmptyString, assertValidIdentifier, isDefined } from './checks';
import { getLogger } from './logger';
import { asSymbol, extractSymbolName, isType, exclude, lowerCaseIfString, unique } from './helpers';


const { isArray } = Array;
const { abs, trunc } = Math;
const { EPSILON } = Number;
const s3logger = getLogger('s3router');
const elogger = getLogger('Renhance');

// instrumentation

const $buildIn = Symbol.for('buildins');
const $hiddenAttr = Symbol.for('hiddenAttributes');
const $s3 = Symbol.for('s3System');
const $attr = Symbol.for('attributes');
const $default = Symbol.for('S3-default');
const $class = Symbol.for('s3class');


export{ $buildIn, $hiddenAttr, $s3, $attr, $default, $class }; 


//classes
export const $matrix = Symbol.for('matrix');
export const $arr = Symbol.for('array');
export const $df = Symbol.for('data.frame');
export const $num_version = Symbol.for('numeric_version');
export const $pack_vers = Symbol.for('package_version');
export const $POSIXlt = Symbol.for('POSIXlt');
export const $POSIXct = Symbol.for('POSIXct');
export const $POSIXt = Symbol.for('POSIXt');
export const $numeric = Symbol.for('numeric');
export const $fs = Symbol.for('file');
export const $difftime = Symbol.for('difftime');
export const $vector = Symbol.for('vector');
export const $list = Symbol.for('list');
export const $raw = Symbol.for('raw');
export const $AsIs = Symbol.for('AsIs');
export const $fact = Symbol.for('factor');
export const $cmplx = Symbol.for('complex');
export const $lan = Symbol.for('language');
export const $levels = Symbol.for('levels');
export const $ordered = Symbol.for('ordered');
export const $NA = Symbol.for('NA');


export const $ts = Symbol.for('ts');
export const $listProps = Symbol.for('ts');
export const $noq = Symbol.for('noquote');
export const $env = Symbol.for('environment');
export const $form = Symbol.for('formula');
export const $qr = Symbol.for('qr');
export const $lm = Symbol.for('lm');
export const $err = Symbol.for('error');
export const $glm = Symbol.for('glm');

//TODO: remap JS types to these 
export const $logical = Symbol.for('logical');
export const $jsDate = Symbol.for('jsDate');
export const $double = Symbol.for('double')
export const $int = Symbol.for('integer');
export const $string = Symbol.for('character');
export const $undefined = Symbol.for('undefined');
export const $jsArray = Symbol.for('$jsArray');

export const blessed = [$list, $matrix, $arr, $fact];

//from specific -> general
export const hierarchy = {
  [$matrix]: $arr, // a matrix is also an array
  [$df]: $list, // a dataframe is a list
  [$POSIXct]: $POSIXt,
  [$POSIXlt]: $POSIXt
}

export const mimicIfNotExist = [
  $buildIn, $hiddenAttr,
];

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


function createAttribProxy() {
  return new Proxy(new Map(), {
    get(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      const found = o.get(key);
      return found || [];
    },
    set(o, propName: PropertyKey, propValue: Function | string, originalObj) {
      const key = asSymbol(propName);
      if (isDefined(propValue)) {
        if (isArray(propValue)) {
          o.set(key, propValue);
        }
        else {
          o.set(key, [propValue]);
        }
        return true;
      }
      elogger.warning('will delete:' + String(propName))
      o.delete(key);
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
      const found = o.has(key);
      return found;
    },
    deleteProperty(o, propName: PropertyKey) {
      const key = asSymbol(propName);
      return o.delete(key);
    },
    ownKeys(o) {
      return Array.from(o.keys());
    },
    apply(o, thisArg, argumentList) {
      throw new TypeError('not a function');
    },
    construct(o, argumentList, newTarget) {
      throw new TypeError('this is not a class function');
    }
  })
}

export function Renhance(obj, ...roots: any[]) {
  /* attribute virtual handler is here */
  /**
   * Clean up roots, if $attr or "attr" or "$attr" is there remove it
   */
  const f1 = roots.filter(r => isDefined(r) || isType(r, 'string', 'symbol')).map(lowerCaseIfString)
  if (f1.length !== roots.length) {
    const errMsg = `roots must be either symbols or strings`;
    elogger.error(errMsg);
    throw new TypeError(errMsg);
  }

  const f2 = [/* always here */$attr, ...exclude(f1, ['$attr', 'attr', $attr, Symbol.for('attr')]).map(asSymbol)];
  const _roots = new Map<symbol, object>();
  f2.forEach(v => _roots.set(v, createAttribProxy()));

  return new Proxy(obj, {
    get(o, propName: PropertyKey) {
      const symbol = asSymbol(propName);
      // intercept if the symbol is in root 
      const found = _roots.get(symbol);
      if (found) {
        return found
      }
      // predefined symbol? 
      return o[propName];
    },
    set(o, propName: PropertyKey, value, receiver) {
      const symbol = asSymbol(propName);
      const found = _roots.get(symbol)
      if (found) {
        return true;
      }
      o[propName] = value;
      return true;
    },
    has(o, propName: PropertyKey) {
      const symbol = asSymbol(propName);
      const found = _roots.get(symbol)
      if (found) {
        return false
      }
      return propName in o;
    },
  });
}

export function getExtendedType(arg: any) {
  const otype = typeof arg
  switch (otype) {
    case 'number':
      if (abs(trunc(arg) - arg) < EPSILON) return $int;
      return $double;
    case 'string':
      return $string;
    case 'boolean':
      return $logical;
    case 'undefined':
      return $undefined;
    default:
      if (arg instanceof Array) return $jsArray;
      if (arg instanceof Date) return $jsDate;
  }
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
    _processNonRArguments(o, argumentList) {
      const first = argumentList[0];
      const lookupKey = getExtendedType(first);
      const fn = fns.get(lookupKey) || fns.get($default)
      if (!fn) {
        s3logger.errorAndThrow(Error, `No handler for: ${extractSymbolName(lookupKey || $default)} `)
      }
      return fn.apply(o, argumentList.slice());
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
        return this._processNonRArguments(o, argumentList);
      }
      const s3Classes = Rclass(obj);
      if (!s3Classes.length) {
        s3logger.errorAndThrow(Error, `It is an R object but with no classes defined [ ${String(obj)} ]`)
      }
      for (const s3Class of s3Classes) {
        const method = fns.get(s3Class)
        if (method) {
          return method.apply(o, argumentList.slice())
        }
      }
      //
      // try default
      //
      const _default = fns.get($default);
      if (!_default) {
        const allClassNames = s3Classes.map(extractSymbolName).join(',');
        const errMsg = `No default defined for function: [${o.name}] for s3 classes: ${allClassNames}`
        s3logger.errorAndThrow(Error, errMsg)
      }
      return _default.apply(o, argumentList.slice());
    }
  } // router end
  return new Proxy(fnStub, s3MethodRouter);
}

export const names = UseMethod('names');
export const labels = UseMethod('labels');
export const Rclass = UseMethod('Rclass');
export const attributes = UseMethod('attributes')
export const print = UseMethod('print')

Rclass[$default] = function (obj) {
  if (isR(obj)) {
    const explicit = obj[$attr][$class]
    const buildin = obj[$buildIn][$class]
    return unique([...explicit, ...buildin]);
  }
}



