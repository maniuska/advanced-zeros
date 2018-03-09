module.exports = function getZerosCount(number, base) {
  'use strict';

  var test = base;
  var arr =[base];
  for (var i=2; i<=base/2; i++){
	  while ((test%i === 0)&& (test >=i)) {
      if (test%i === 0){
        arr.push(i);
      }
      test = test/i;
	  }
  }	

  var counterPow=1;
  for (var i=0; i<arr.length-1; i++){
    if (arr[i] == arr[arr.length-1])
    counterPow++;
  } 
   
    var base = arr[arr.length-1];
    var k=0; 
    for (var i=base; i<number; i*=base){
      if (number>1){
        k+=parseInt(number/i); 
      }  
    }

    if (counterPow !==1)
    return Math.floor(k/counterPow);
    if  ((counterPow ==1)&&(arr.length >7)) 
    return (k-1)/3;
  else
   return k;

}