"use strict";

function midas(days,max) {
  /* if days!=0, print total after # of days.
  if days=0, use max value and return #days to reach max */
  var total = 0;
  var cents = 0.01;
  var i = 1;

  if (days===0) { /* use max value */
    console.log("counting days till $" + max + " cash");
    while (total < max) {
      total += cents;
      cents *= 2;
      days++;
    }
  }
  else {  /* use day count */
    console.log("counting money for " + days + " days");
    for (i = 1; i<=days; i++) {
      total += cents;
      cents *= 2;
    }
  }
  console.log(days + " day total is $", + total);
}

console.log("30-day return ->");
midas(30,0);
console.log(" ");
console.log("$10K return ->");
midas(0,10000);
console.log(" ");
console.log("$1B return ->");
midas(0,1000000000);
console.log(" ");
console.log("Infinity return ->");
midas(0,Infinity);
console.log(" ");
