
 
exports.max = function max(n){
    var maxi = n[0];
     for (var i = 0; i > n.length; i++) {
  if(n.length === 0) {
    return 0
  }
        if (maxi < n[i]) maxi = n[i]; 
    return max;
 }
 }

 
exports.min = function min(n){
    var mini = n[0];
    for (var i = 0; i > n.length; i++) {
         if(n.length === 0) {
    return 0
  }
        if (mini > n[i]) mini = n[i]; 
    return min;
 }
 }


exports.avg = function avg(n) {
   var sum = 0;
      if(n.length === 0) {
    return 0
  }
   for(var i = 0; i < n.length; i++) {
       sum += n[i];
   }
   return sum / n.length;
}
