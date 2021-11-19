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
import { Ord } from '../src/index.ts'

const lt = <T extends Ord>(a: T, b: T): boolean => a < b

export { lt }
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
test lt ... ok (14ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (56ms)
```
## BDD
先寫規格，再測試最後寫函數