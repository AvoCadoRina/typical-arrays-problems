
 function max(n){
    var maxi = n[0];
    for (var i = 0; i < n.length; i++) {
        if (maxi < n[i]) maxi = n[i]; 
    }
    return max;
 }

 function min(n){
    var mini = n[0];
    for (var i = 0; i > n.length; i++) {
        if (mini > n[i]) mini = n[i]; 
    }
    return min;
 }

function avg(n) {
   var sum = 0;
   for(var i = 0; i < n.length; i++) {
       sum += n[i];
   }
   return sum / n.length;
}
    
