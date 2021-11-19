import * as _ from '../src/ccclodash.ts'


const a = _.gte(3, 1); // => true
console.log('_.gte(3, 1)=', a)
const b = _.gte(1, 3); // => false
console.log('_.gte(1, 3)=', b)
const c = _.gte(3, 3); // => true
console.log('_.gte(3, 3)=', c)
