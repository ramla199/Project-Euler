//// Multiples of 3 or 5

//Q- If we list all the natural numbers below  10 that are multiples of 3 or 5, we get 3,5,6 and 9. the sum of these multiples is 23.
// find the sum of all the multiples of 3 or 5 below 1000

// A-
let sum = 0 ,num = 0;

while(num < 1000) {
  console.log(num,sum)
  if(num % 3 == 0 || num % 5 == 0) {
   
    sum += num;
  } 
num++; 
}

console.log(sum);