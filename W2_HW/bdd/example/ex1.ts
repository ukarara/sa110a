import * as _ from '../src/ccclodash.ts'
import { expect } from 'https://deno.land/x/tdd/mod.ts'

console.log("_.chunk(['a', 'b', 'c', 'd'], 2)=", _.chunk(['a', 'b', 'c', 'd'], 2))
console.log("_.chunk(['a', 'b', 'c', 'd'], 3)=", _.chunk(['a', 'b', 'c', 'd'], 3))
// console.log("_.chunk(['a', 'b', 'c', 'd'], 3)=", _.chunk(['a', 'b', 'c', 'd'], '3'))

var array = [1];
var c1 = _.concat(array, 2, [3], [[4]])
console.log(c1)

var takeWhile = require('lodash.takewhile');