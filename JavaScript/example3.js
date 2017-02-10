"use strict";

var daysUntilMyBirthday = 60;

function countDown(daysLeft) {
  var string;
  var i = daysLeft;

  while (i>=0) {
    if (i==0) {
      string = "HAPPY BIRTHDAY!!!";
    }
    else if (i<5) {
      string = "DAYS TO MY BIRTHDAY!";
    }
    else if (i<30) {
      string = "days to my birthday :)";
    }
    else {
      string = "days to my birthday :(";
    }
    console.log(i,string);
    i--;
  }
}

countDown(40);
