# 從 lodash 上面選三個函數，撰寫函數與測試
[lodash](https://lodash.com/)
1. 先用傳統方式，先寫函數再寫測試fromPairs
2. 用 TDD 方式，先寫測試再寫函數unzip
3. 用 BDD 方式，先寫測試再寫函數zipWith

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
## lt(a,n)
功能:驗證在長度為n的array中第a個是否存在

* 測試
```
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/ccclodash.ts";


Deno.test("lt", () => {
  assertEquals(_.lt(1, 3))
  assertEquals(_.lt(3, 1))
})


```
* 程式
```
export function lt( value: number, other: number) {
  if (!(typeof value === 'string' && typeof other === 'string')) {
    value = +value
    other = +other
  }
  return value < other
}
```
* 測試成功
```
PS D:\110-2Note\SA\sa110a\W2_HW\tdd\example> deno test ex1.ts
Check file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/example/ex1.ts
_.lt(1,3)= true
_.lt(1,3)= false
running 0 tests from file:///D:/110-2Note/SA/sa110a/W2_HW/tdd/example/ex1.ts

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (53ms)
```