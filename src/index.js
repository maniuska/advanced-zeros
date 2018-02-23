module.exports = function getZerosCount(number, base) {
  'use strict';

  var test = base;
  for (var i=2; i<=base/2; i++){
	  while ((test%i === 0)&& (test >i)) {
	    test = test/i;
	  }
  }	
  base = test;

  var k=0; 
  for (var i=base; i<=number; i*=base){
    if (number!=i){
      k+=parseInt(number/i); 
    }  
  }
  return k;
}