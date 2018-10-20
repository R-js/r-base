import { Renhance, $class, $attr, UseMethod, $matrix, $list } from './src/s3';

const matrix = Renhance({});
const list  = Renhance({});

matrix[$attr][$class] = $matrix;

list[$attr][$class] = $list;

const fn = UseMethod('testM');

fn[$matrix] = () => `this function will handle matrices`;
fn[$list] = () => `this function will handle lists`;

const r1 = fn(matrix);
const r2 = fn(list);
const allattribs = Object.getOwnPropertySymbols(matrix[$attr])
const name = ''+fn;
console.log(r1,r2,allattribs, name)