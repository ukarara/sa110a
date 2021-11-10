import filter from './filter.js';
import map from './map.js';
import baseProperty from './baseProperty.js';
import isArrayLikeObject from './isArrayLikeObject.js';

export function chunk(list:any[], n:number):any[] {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}

export function unzip(array) {
  const unzip = arr =>
   arr.reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
         length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
   );
}