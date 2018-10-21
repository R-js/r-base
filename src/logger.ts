import * as debug from 'debug';

export function getLogger(name){
    const printer = debug(name);
    return {
        waring: printer,
        error: printer,
        trace: printer,
        debug: printer,
        errorAndThrow(errorType: TypeErrorConstructor, msg, ...args){
            this.error(msg, ...args);
            throw new errorType(msg);
        }
    }
}