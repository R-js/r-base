import { promote } from './helpers';
import { FactorType } from './types';
import { Renhance, $attr, $class, $fact, $levels   } from './s3';

export function factor(...args: FactorType[]) {
    // promotion rules
    const promoted = promote(...args);
    const levels = promoted.filter((v,i, arr)=>  v !== null && !arr.includes(v,i+1)).sort(); 
    const obj = Renhance(promoted);
    obj[$attr][$levels] = levels;
    obj[$attr][$class] = $fact;
    return obj;
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
