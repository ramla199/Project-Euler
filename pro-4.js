//// Largest Palindrome Product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is:
// 9009 = 99 * 91
/////// Q- Find the largest palindrome made from the product of two 3-digit numbers


/// A palindrome number is a number that reads the same forward and backward. In other words, when the digits of a number are reversed, if the reversed number is the same as the original number, then it is a palindrome.
// For instance, numbers like 121, 1331, 1221, and 12321 are palindromes because they read the same forward and backward.
// To determine if a number is a palindrome, you can use various programming approaches. One common method involves converting the number to a string, reversing the string, and then checking if the reversed string is equal to the original string.

// Here's an example in JavaScript:
// function isPalindrome(num) {
//   const strNum = num.toString(); // Convert number to a string
//   const reversedStr = strNum.split('').reverse().join(''); // Reverse the string

//   return strNum === reversedStr; // Check if the original and reversed strings are equal
// }

// // Example usage:
// console.log(isPalindrome(12321)); // Output: true
// console.log(isPalindrome(12345)); // Output: false



// To find the largest palindrome made from the product of two-digit numbers, you can create a simple algorithm to check the products of all two-digit numbers and identify the largest palindrome among them.
// Here's an example in JavaScript:
// function isPalindrome(num) {
//   return num.toString() === num.toString().split('').reverse().join('');
// }

// function largestPalindromeFromTwoDigitNumbers() {
//   let largestPalindrome = 0;

//   for (let i = 99; i >= 10; i--) {
//     for (let j = i; j >= 10; j--) {
//       let product = i * j;
//       if (isPalindrome(product) && product > largestPalindrome) {
//         largestPalindrome = product;
//       }
//     }
//   }

//   return largestPalindrome;
// }

// const result = largestPalindromeFromTwoDigitNumbers();
// console.log("The largest palindrome made from the product of two 2-digit numbers is: " + result);


function largestPalindromeOf3() {
  let largestPalindrome = 0;
 function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
 }

 for(let i = 999; i >= 100; i--){
  for(let j = i; j >= 100; j--){
    let product = i * j;
   if(isPalindrome(product) && product > largestPalindrome){
    largestPalindrome = product;
   }
  }
 }
 return largestPalindrome;
}

const result2 = largestPalindromeOf3();
console.log("The largest palindrome made from the product of two 3-digit numbers is: " + result2);



