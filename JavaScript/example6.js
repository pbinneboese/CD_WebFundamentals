"use strict";

var arr1=[], arr2=[];

function numbersOnly(arrIn) {
  /* remove non-numeric elements from array */
  var i=0, j=0;
  var arrOut = [];

  while (i < arrIn.length) {
    if (typeof arrIn[i] ==="number") {
      arrOut.push(arrIn[i]);
      j++;
    }
    i++;
  }
  /* here j=length of arr2, i=length of arr1 */
  return arrOut;
}

console.log("using 2 arrays");
arr1 = [1, "apple", -3, "orange", 0.5];
arr2 = numbersOnly(arr1);
console.log("Input =",arr1, "Output =",arr2);

arr1 = [Infinity, true, "billy", 3.14159, null, "7"];
arr2 = numbersOnly(arr1);
console.log("Input =",arr1, "Output =",arr2);

function numbersOnlyOneArray(arrIn) {
  /* remove non-numeric elements from array, return same array */
  var i=0, j=0;

  while (j < arrIn.length) {
    if (typeof arrIn[j] !="number") {
      j++;  /* look ahead to next */
    }
    else {  /* pack the number */
      arrIn[i] = arrIn[j];
      i++;
      j++;
    }
  }
      /* here j-i = number of non-numeric elements to pop */
  while (j>i) {
    arrIn.pop();
    i++;
  }
}

console.log("using 1 array");
arr1 = [1, "apple", -3, "orange", 0.5];
console.log("Input =",arr1);
numbersOnlyOneArray(arr1);
console.log("Output =",arr1);

arr1 = [Infinity, true, "billy", 3.14159, null, "7"];
console.log("Input =",arr1);
numbersOnlyOneArray(arr1);
console.log("Output =",arr1);
