# 從 lodash 上面選三個函數，撰寫函數與測試
[lodash](https://lodash.com/)
1. 先用傳統方式，先寫函數再寫測試fromPairs
2. 用 TDD 方式，先寫測試再寫函數zipObject
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
## zipObject
功能:類似_.fromPairs。接受兩數組，第一組為key，第二組為對應的value

