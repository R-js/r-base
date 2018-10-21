import { promote } from './helpers';
import { FactorType } from './types';
import { Renhance, $attr, $class, $fact, $levels   } from './s3';

export function factor(...args: FactorType[]) {
    // promotion rules
    const promoted = promote(...args);
    const levels = promoted.filter((v,i, arr)=>  v !== null && arr.indexOf(v,i+1) === -1).sort(); 
    const obj = Renhance(promoted);
    obj[$attr][$levels] = levels;
    obj[$attr][$class] = $fact;
    return obj;
}