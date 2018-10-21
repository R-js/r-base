import { Renhance, $class, $attr, UseMethod, $matrix, $list, $vector, $default } from './src/s3';
import { factor } from './src/factor'
//import { FactorType } from './src/types'

const matrix = Renhance({});
const list  = Renhance({});
const vector = Renhance({});

matrix[$attr][$class] = $matrix;

list[$attr][$class] = $list;

vector[$attr][$class] = $vector;

const fn = UseMethod('testM');

fn[$matrix] = () => `this function will handle matrices`;
fn[$list] = () => `this function will handle lists`;
fn[$default] = () => `default was called`;

const r1 = fn(matrix);
const r2 = fn(list);
const r3 = fn(vector);

const allattribs = Object.getOwnPropertySymbols(matrix[$attr])
const name = ''+fn;
console.log(r1, '\n', r2, '\n', r3, '\n', allattribs, '\n', name);

const f1 = factor(true, false, ()=>'hoi', false, false,1);

console.log(f1[2]);