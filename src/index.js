module.exports = function getZerosCount(number, base) {
  'use strict';

  var test = base;
  for (var i=2; i<=base/2, test >i ; i++){
	  while (test%i === 0) {
	    test = test/i;
	  }
  }	
  base = test;

  var k=0; 
  for (var i=base; i<=number; i*=base){  
    k+=parseInt(number/i);  
  }
  return k;
}