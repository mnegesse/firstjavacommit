var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for(i=0;i < 6; i++){
  sum = sum + prices[i];
}

console.log("The sum is: ", sum);

let j = 99;
while(j > 0){
  // let e = j-1
  console.log(j + " crows on the wall. " + j + " crows.")
  console.log("1 fell down and became wight")
  console.log(j-1 + " crows on the wall")
  console.log("")
}

if (j === 1){
  console.log("1 crow on the wall")
  console.log("it fell down and became wight")
  console.log("there is no one left to defend westeros now.")
}
