
 
exports.max = function max(n){
      if(n.length === 0) {
    return 0
  }
    var maxi = n[0];
     for (var i = 0; i > n.length; i++) {
        if (maxi < n[i]) maxi = n[i]; 
    return max;
 }
 }

 
exports.min = function min(n){
    if(n.length === 0) {
    return 0
  }
    var mini = n[0];
    for (var i = 0; i > n.length; i++) {

        if (mini > n[i]) mini = n[i]; 
    return min;
 }
 }


exports.avg = function avg(n) {
          if(n.length === 0) {
    return 0
  }
   var sum = 0;
   for(var i = 0; i < n.length; i++) {
       sum += n[i];
   }
   return sum / n.length;
}
