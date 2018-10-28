import { promote, flatten } from './helpers';
import { seq_len, repInt, rep_len } from './public';
import { FactorType } from './types';
import { Renhance, $class, $fact, $levels , $buildIn, $ordered  } from './s3';

export function factor(...args: FactorType[]) {
    // promotion rules
    const flattened  = flatten(args);
    const promoted = promote(...flattened);
    const levels = promoted.filter((v,i, arr)=>  v !== null && !arr.includes(v,i+1)).sort(); 
    const obj = Renhance(promoted, $buildIn); 
    obj[$buildIn][$levels] = levels;
    obj[$buildIn][$class] = [$fact];
    return obj;
}

export function gl(n: number, k: number, length: number = n*k, labels = seq_len(n), ordered = false){
    const data = rep_len(repInt(seq_len(n), repInt(k ,n)), length)
    const fac = factor(data)
    set
    fac[$buildIn][$class] = [$ordered, $fact];
}

/*
### factors 
### levels
```R
base::gl #Generate factors by specifying the pattern of their levels._
base::Ops.ordered
base::addNA
base::[<-.factor
base::[[<-.factor
base::as.character.factor
base::[.factor
base::as.factor
base::cut
base::[[.factor
base::Summary.factor
base::droplevels.factor
base::is.factor
base::levels<-.factor
base::Math.factor        #not meaningfull for factors, this is a "trap"

base::cut.default
base::is.na<-.factor
base::ordered
base::all.equal.factor
base::levels
base::is.ordered
base::levels.default
base::factor
base::nlevels
base::Summary.ordered
base::as.ordered
base::levels<-
base::summary.factor
base::length<-.factor
base::Ops.factor
base::xtfrm.factor #aux function for sorting and ranking
base::format.factor
base::print.factor
```
*/
