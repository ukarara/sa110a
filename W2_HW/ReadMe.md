# 從 lodash 上面選三個函數，撰寫函數與測試
[lodash](https://lodash.com/)
1. 先用傳統方式，先寫函數再寫測試 :_fromPairs
2. 用 TDD 方式，先寫測試再寫函數 :_lt
3. 用 BDD 方式，先寫規格再寫測試最後寫函數 :_gte

## 傳統
## fromPairs(pairs)
* 功能 : 返回一個由 key-value 組成的對象pairs

* 程式
```js
import _ from "https://dev.jspm.io/lodash";//引入lodash

//設定A的keyValue
let pairsA = [['a', 4], ['b', 6], ['c', 2]] 

//設定B的keyValue
let pairsB = [ 
    ['name', 'lodash'],  
    ['time', '0922'],  
    ['used', 'js'] 
] 
//儲存keyValue對應pairs構成的對象
let objA = _.fromPairs(pairsA); 
let objB = _.fromPairs(pairsB); 

console.log("objA=", objA, "objB=", objB)
```
* 結果
```PS
D:\110-2Note\WS\ws110a\W2_HW\傳統> deno run from_pairs.js
objA= { a: 4, b: 6, c: 2 } objB= { name: "lodash", time: "0922", used: "js" }
```

## TDD
* 先寫測試再寫函數
## lt(a,b)
功能:檢查a是否小於b

* 程式
```
const lt = <T extends Ord>(a: T, b: T): boolean => a < b
export { lt }
```

* 測試
```ts
Deno.test('lt', () => {
  const table: [Ord, Ord, boolean][] = [
    [3, 3, false],
    [1, 0, false],
    [0, 1, true],
    [0n, 0n, false],
    [1n, 0n, false],
    [0n, 1n, true],
    ['a', 'a', false],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'z', true],
    [true, true, false],
    [false, false, false],
    [true, false, false],
    [false, true, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(_.lt(a, b), expected, `lt(${a}, ${b}) -> ${expected}`)
  })
})
```

* 測試成功
```PS
PS D:\110-2Note\SA\sa110a\W2_HW\tdd\example> deno test ex1.ts
Check file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/example/ex1.ts
_.lt(1,3)= true
_.lt(3,3)= false
running 0 tests from file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/example/ex1.ts     

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (26ms)

```
```
PS D:\110-2Note\SA\sa110a\W2_HW\tdd\test> deno test lt.ts
Check file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/test/lt.ts
running 1 test from file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/test/lt.ts
test lt ... ok (29ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (162ms)
```
## BDD
* 先寫規格，再測試最後寫函數
## gte(a,b)
* 功能 :檢查a是否大於或等於b
* 規格
```
export function gte(value:Number, other:Number) {
  if (value >= other){
    return true
  }
  else return false
}
```
* 測試
```
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
```
* 測試成功
```
PS D:\110-2Note\SA\sa110a\W2_HW\bdd\test> deno test gte.ts   
Check file:///D:/110-2Note/SA/sa110a/W2_HW/bdd/test/gte.ts
running 1 test from file:///D:/110-2Note/SA/sa110a/W2_HW/bdd/test/gte.ts
test gte ...gte(3, 1)= true

gte(1, 3)= false

gte(3, 3)= true

 ok (15ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (49ms)
```