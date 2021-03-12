
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
      return 0;
}
 
function avg(n)
 {
var arr = []
let Summa = 0;
let Items_all = 0;
const len = arr.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = arr[i];
    if (item.found) {
        Summa = item.avg + Summa;
        Items_all = Items_all + 1;
    
}
const average_all = Summa / Items_all;
console.log("Average is:", average_all);
    
