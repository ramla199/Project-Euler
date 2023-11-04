// Factors and Multiples

// Factors
// Factors are numbers that divide the given number without leaving a remainder.A factor of a number is less than or equal to itself.Factors are finite in number and include 1 and the number itself.1 is the smallest factor of any number.0 cannot be a factor of any number.Example: Factors of 8 are 1, 2, 4, 8.
// How can we find factors?
// To find the factors of a given number, divide the number by each integer between 1 and the number itself. The integers that give us a remainder of 0 are factors of the number. 
// For example, to find the factors of 6, divide 6 by numbers 1 to 6.
// The factors of 6 are 1, 2, 3, and 6.

// Multiples
// Multiples are the numbers obtained as a product of a given number and integers.Multiples are always greater than or equal to the given number.There are an infinite number of multiples for a given number.Every number is a multiple of 1. 0 is a multiple of every number.	Example: Multiples of 8 are 8, 16, 24,…
// How to find multiples
// To find the multiples of a given number, multiply the number by each positive integer.
// For example, to find the multiples of 5, you would multiply 5 by 1, 2, 3, 4, and so on.
// Multiples of 5= 5,10,15,20,25,30...etc
// Multiples of 9= 9,18,27,36,45,54...etc

// Every number has at least two factors, which are 1 and itself.
// A number can have an infinite number of multiples, but only a finite number of factors.
// Factors and multiples can be used to find the patterns and symmetries in nature, such as the arrangement of petals in flowers and the formation of crystals.
// Prime numbers have only two factors, 1 and itself, while composite numbers have more than two factors.
// The number 1 is neither prime nor composite. It only has one factor, which is itself.
// 0 is neither prime nor composite.



// Least Common Multiple (LCM)
// LCM of two numbers is the smallest positive integer that is a multiple of both the numbers. It is the smallest number among the common multiples of the given two numbers.
// Let’s find the LCM of 4 and 6.
// Common multiples = 12,24,36...
// Least common multiple = 12
// LCM (4, 6) =12

// Greatest Common Factor (GCF)
// It is the largest positive integer that divides the given two integers without leaving any remainder. In other words, it is the largest number that is a factor of all the given integers.
// Let’s find the GCD of 12 and 18.
//The largest number that appears in both lists is 6. 
// GCF of 12 and 18 is 6.


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