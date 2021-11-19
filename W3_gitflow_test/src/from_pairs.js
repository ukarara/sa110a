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


  
