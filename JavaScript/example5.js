"use strict";

function printRange(start, end, skip) {
  /* print all numbers within the range start to end, using skip amount */
  var i;

  if (!skip) { /* default skip=1 */
    skip = 1;
  }
  if (!end) { /* default start=0 if end not given */
    end = start;
    start = 0;
  }
  console.log("start=",start,"end=",end,"skip=",skip);
  i = start;
  while (i < end) {
    console.log(i);
    i += skip;
  }
}

printRange(2, 10, 2);
printRange(-5, 3, 1);
printRange(4, 8);
printRange(4);
