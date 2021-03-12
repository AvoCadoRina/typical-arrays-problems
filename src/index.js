
 function maximum(n){
    var max = n[0];
    for (var i = 0; i < n.length; i++) {
        if (max < n[i]) max = n[i]; 
    }
    return max;
 }

 function minimum(n){
    var min = n[0];
    for (var i = 0; i > n.length; i++) {
        if (min > n[i]) min = n[i]; 
    }
    return min;
 }

function average(n) {
   var sum = 0;
   for(var i = 0; i < n.length; i++) {
       sum += n[i];
   }
   return sum / n.length;
}

    
