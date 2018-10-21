import { getLogger } from './logger';
import { $ch, $list, $listProps, $attr, Renhance, } from './s3';
import { indexOf, asSymbol, extractSymbolName } from './helpers';

// R - list are more like R objects 
// collection of arrays (if they are numeric use Float64ArrayIn)
// for integers use Uint32Array or just numeric with Number.isInteger check on creation
// different sections can have unequal length? -> yes 

const logger = getLogger('list')

// constructs a list a list
export function list(args: any) {
    
    const col1 = Object.keys(args) // because an array would return 'length' if used with getOwnPropertyNames()
    const col2 = Object.getOwnPropertySymbols(args);
    const allProps = col1.concat(<any[]>col2);

    // check of name does not exist as Symbol.for(name) elsewhere
    const duplicates = allProps.filter((f, i, arr) => indexOf(f, i+1, arr) >= 0 );
    if (duplicates.length){
       const errMsg = 'Duplicate names found in "list" elements:'+duplicates.map(asSymbol).map(extractSymbolName).join(','); 
       logger.errorAndThrow(TypeError, errMsg)
    }
    const robj = Renhance({});
    const listprops =  robj[$attr][$listProps] = new Map();
    for (const key in allProps) {
        listprops.set(asSymbol(key), allProps[key]);
    }
    robj[$attr][$ch] = $list // hidden class
}


