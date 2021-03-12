exports.min = function min (n) {
       if(n.length === 0) {
    return 0
  }
  else
  return Math.min(...n);
}

exports.max = function max (n) {
   if(n.length === 0) {
    return 0
  }
  else
  return Math.max(...n);
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
