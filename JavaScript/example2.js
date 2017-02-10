"use strict";

var HOUR, MINUTE, PERIOD;

function readTheTime(hr,min,per) {
  var str1, str2;
  if (min<30) {
    str1="just after";
  }
  else {
    str1="almost";
    hr++; /* just before the NEXT hour */
  }
  if (per==="AM") {
    str2="in the morning";
  }
  else {
    str2="in the evening";
  }

  console.log("It's",str1,hr,str2);
}

HOUR = 8;
MINUTE = 50;
PERIOD = "AM";
readTheTime(HOUR,MINUTE,PERIOD);

HOUR = 7;
MINUTE = 15;
PERIOD = "PM";
readTheTime(HOUR,MINUTE,PERIOD);
