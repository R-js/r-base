//import { Renhance, $class, $attr, UseMethod, $matrix, $list, $vector, $default } from './src/s3';
import {  gl } from './src/factor'
import { $buildIn, $levels, $class } from './src/s3';

const l1 =gl(3,4, 16);
const l2 = gl(3,4, 16, ['one', 'two', 'red', 'green'])
console.log(l1)
console.log(l2[$buildIn][$levels], l2[$buildIn][$class])