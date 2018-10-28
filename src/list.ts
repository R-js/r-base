import { getLogger } from './logger';
import { $class, $attr, $list, $listProps, Renhance, UseMethod, $buildIn, $default } from './s3';
import { asSymbol, extractSymbolName, duplicates } from './helpers';

// R - list are more like R objects 
// collection of arrays (if they are numeric use Float64ArrayIn)
// for integers use Uint32Array or just numeric with Number.isInteger check on creation
// different sections can have unequal length? -> yes 

const logger = getLogger('list')

const list = UseMethod('list')

list[$default] = function(args: object) {
    
    
    const col1 = Object.keys(args) // because an array would return 'length' if used with getOwnPropertyNames()
    const col2 = Object.getOwnPropertySymbols(args);
    const allProps = col1.concat(<any[]>col2);

    // check of name does not exist as Symbol.for(name) elsewhere
    const dups = duplicates(allProps);
    if (dups.length){
       const errMsg = 'Duplicate names found in "list" elements:'+dups.map(asSymbol).map(extractSymbolName).join(','); 
       logger.errorAndThrow(TypeError, errMsg)
    }
    const robj = Renhance({}, $buildIn);
    const listprops =  robj[$attr][$listProps] = new Map();
    for (const key in allProps) {
        listprops.set(asSymbol(key), allProps[key]);
    }
    robj[$buildIn][$class] = [$list] //hidden class
}

export  { list }


