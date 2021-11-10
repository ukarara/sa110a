import * as _ from '../src/ccclodash.ts'
import { expect } from 'https://deno.land/x/tdd/mod.ts'

console.log("_.chunk(['a', 'b', 'c', 'd'], 2)=", _.chunk(['a', 'b', 'c', 'd'], 2))
console.log("_.chunk(['a', 'b', 'c', 'd'], 3)=", _.chunk(['a', 'b', 'c', 'd'], 3))
// console.log("_.chunk(['a', 'b', 'c', 'd'], 3)=", _.chunk(['a', 'b', 'c', 'd'], '3'))
