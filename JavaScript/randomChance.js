"use strict";

function randomChance(numQuarters, limit) {
  var probability = 0;  /* will be 1 to 100 */
  var payout = 0;  /* will be 50 to 99 */
  var total = numQuarters;

  while (total > 0) {
    total--;
//    console.log(total);
    probability = Math.floor(Math.random()*100+1);
    if (probability == 100) {
      payout = Math.floor(Math.random()*51+50);
      total += payout;
      console.log("paid out",payout," now at",total);
      if (limit > 0 && total < limit) {
        continue;
      }
      break;
    }
  }
  console.log("I now have",total," left");
}

//randomChance(75, 200);
