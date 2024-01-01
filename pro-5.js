/////// Smallest Multiple
//////// Q-  2025 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// The smallest multiple of a given number is the smallest number that can be evenly divided by that given number. The smallest multiple of a number is obtained by multiplying that number by the integers 1, 2, 3, and so on until you find a number that is divisible by the given number.
// For example:
// The smallest multiple of 2 is 2 (2 * 1).
// The smallest multiple of 3 is 3 (3 * 1).
// If you're looking for the smallest common multiple of two or more numbers, you need to find the smallest number that is a multiple of each of those numbers. This is often done using the concept of the least common multiple (LCM).
// For example:
// The smallest common multiple of 2 and 3 is 6 (2 * 3).
// The smallest common multiple of 4, 5, and 6 is 60 (4 * 5 * 3).

// So to find the Least Common Multiple (LCM) of two or more numbers, you can use various methods. One common method is to use the prime factorization of each number. Here's a step-by-step process:
// 1. **Prime Factorization:**
//    Find the prime factorization of each number. Prime factorization is the process of expressing a number as the product of its prime factors.

// 2. **Identify Prime Factors:**
//    Identify all the unique prime factors from the prime factorization of each number.

// 3. **Maximum Exponent:**
//    For each prime factor, find the highest exponent among all the numbers. If a prime factor doesn't appear in the factorization of a particular number, its exponent for that number is 0.

// 4. **LCM Calculation:**
//    Multiply together the prime factors with their corresponding highest exponents. The result is the LCM.

// Let's illustrate this with an example:

// **Example: Find the LCM of 12 and 18**
//// 1. Prime Factorization:
//    - 12 = 2 ^ 2 * 3
//    - 18 = 2 * 3 ^ 2
//// 2. Identify Prime Factors:
//    - Prime factors: 2, 3
//// 3. Maximum Exponent:
//    - For 2: 2 ^ 2 in 12, 2 ^ 1 in 18 (maximum is 2 ^ 2)
//    - For 3: 3 ^ 1 in 12, 3 ^ 2 in 18 (maximum is 3 ^ 2)
//// 4. LCM Calculation:
//    - LCM = 2 ^ 2 *  3 ^ 2 = 4 * 9 = 36 

// So, the LCM of 12 and 18 is 36.

// This method can be extended to more than two numbers by including all the prime factors and their corresponding maximum exponents from the factorizations of each number.

// so To find the smallest multiple that is evenly divisible by all integers from 1 to 10, you can use the concept of the least common multiple (LCM). 

// 1. Prime factorize each number:
//    - 1: No prime factors (1 is not a prime number).
//    - 2: 2
//    - 3: 3
//    - 4: 2^2
//    - 5: 5
//    - 6: 2 * 3
//    - 7: 7
//    - 8: 2^3
//    - 9: 3^2
//    - 10: 2 * 5

// 2. Identify the highest power of each prime factor present in the factorization of any number:

//    - 2^3 (from 8)
//    - 3^2 (from 9)
//    - 5 (from 5)
//    - 7 (from 7)

// 3. Multiply these together to find the LCM:

//    LCM = 2^3 * 3^2 * 5 * 7
//        = 8 * 9 * 5 * 7
//        = 2520

// So, the smallest multiple that is evenly divisible by all integers from 1 to 10 is 2520.





