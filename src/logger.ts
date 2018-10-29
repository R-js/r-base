import * as debug from 'debug';

export function getLogger(name: string){
    const printer = debug(name);
    return {
        warning: printer,
        error: printer,
        trace: printer,
        debug: printer,
        errorAndThrow(errorType: TypeErrorConstructor, msg, ...args){
            this.error(msg, ...args);
            throw new errorType(msg);
        }
    }
}