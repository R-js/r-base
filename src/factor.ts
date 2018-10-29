import { promoteArray, flatten, unique, multiplexer } from './helpers';
import { seq_len, repInt, isOrdered } from './public';
import { FactorType } from './types';
import { getLogger } from './logger';
import { Renhance, $jsArray, $class, $fact, $levels, $buildIn, UseMethod, $ordered } from './s3';

const _factor = UseMethod('factor');
const logger = getLogger('factor');

_factor[$fact] = function (x: any, levels: string[], labels = levels, exclude: any[] = [], ordered = isOrdered(x)) {
    throw new Error(`factor.factor not implemented yet`);
}

_factor[$jsArray] = function factorDefault(x: FactorType[], levels: FactorType[] = [], labels = levels, exclude: any[] = [], ordered = false, nmax?: number) {
    //
    // promotion rules
    //
    const flatX = flatten(x.slice(0));
    const { promoted, type } = promoteArray(flatX);
    const promoCode = { string: String, number: Number, boolean: Boolean }[type] || String;
    const flatExc = flatten(exclude).map(v => promoCode(v))
    const flatLev = unique(flatten(levels).map(v => promoCode(v)))

    if (flatExc.length || flatLev.length) {
        for (let i = 0; i < promoted.length; i++) {
            const pi = promoted[i]
            promoted[i] = exclude.includes(pi) ? null : pi
            promoted[i] = flatLev.length && flatLev.includes(promoted[i]) ? promoted[i] : null
        }
    }

    const _levels = promoted.filter((v, i, arr) => v !== null && !arr.includes(v, i + 1));
    const flatLab = (labels !== levels) ? flatten(labels).map(v => promoCode(v)) : [];

    if (flatLab.length && flatLab.length !== _levels.length) {
        logger.errorAndThrow(Error, `invalid labels; length ${labels.length} should be 1 or ${_levels.length}`)
    }

    // optional reformatting of data
    // 
    if (flatLab.length) {
        //construct mapper 
        const mapper = multiplexer(<any>flatLab, <any>_levels)
            ((lab, lev) => [lev, lab])
            .reduce((coll: { [index: string]: any }, v) => {
                coll[v[0]] = v[1];
                return coll;
            }, {} as { [index: string]: any });

        for (let i = 0; i < promoted.length; i++) {
            const pi = mapper[<any>promoted[i]]
            promoted[i] = pi;
        }
    }

    const obj = Renhance(promoted, $buildIn);
    obj[$buildIn][$levels] = levels
    obj[$buildIn][$class] = ordered ? [$ordered, $fact] : [$fact]

    return obj;
}

export function gl(n: number, k: number, length: number = n * k, labels = seq_len(n), ordered = false) {
    const data = seq_len(repInt(seq_len(n), repInt(k, n)), length)
    const fac = _factor(data, undefined, labels, undefined, ordered)
    return fac;
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
