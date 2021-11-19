import * as _ from '../src/ccclodash.ts'
import { expect } from 'https://deno.land/x/tdd/mod.ts'

Deno.test("gte", () => {
    const a = _.gte(3, 1); // => true
    console.log('gte(3, 1)=', a)
    expect(a).to.equal(true)

    const b = _.gte(1, 3); // => false
    console.log('gte(1, 3)=', b)
    expect(b).to.equal(false)

    const c = _.gte(3, 3); // => true
    console.log('gte(3, 3)=', c)
    expect(c).to.equal(true)

})
  