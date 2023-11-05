// A prime factor is a natural number, other than 1, whose only factors are 1 and itself. The first few prime numbers are actually 2, 3, 5, 7, 11, and so on. Now we can also use what’s called prime factorization for numbers which actually consist of using factor trees. Prime factorization is a process of writing all numbers as a product of primes.So, for example, say if we have something like the number 20. We can break that down into two factors. We can say, “well, that’s 4 times 5.” And notice, 5 is a prime number. 4 is not a prime number. That’s called a composite number. But if we break these things down, then we‘ve got 2 times 2 equals 4, and these 2’s are actually prime numbers, so we can circle those. So, we can say the prime factorization of 20 actually equals 2 times 2 times 5. And you don’t always have to do the 4 times 5. You could break 20 down into 2 times 10. 

//// Largest Prime Factor


// The prime factors of 13195 are 5,7,13 and 29.



// What is the largest prime factor of the number 600851475143
function largestPrimeFactor(n) {
  let largestPrime = 2;

  for (let i = 2; i <= n; i++) {
    // console.log("1")
    // console.log(`the is n: ${n}`)
    // console.log(`the is prime: ${largestPrime}`)
    // console.log(`the is i: ${i}`)
    while (n % i === 0) {
    // console.log("2")
    // console.log(`the is n2: ${n}`)
    // console.log(`the is prime2: ${largestPrime}`)
    // console.log(`the is i2: ${i}`)
      largestPrime = i;
      n /= i;
    // console.log("3")
    // console.log(`the is n3: ${n}`)
    // console.log(`the is prime3: ${largestPrime}`)
    // console.log(`the is i3: ${i}`)
    }
  }
  console.log(largestPrime)
  return largestPrime;
}

largestPrimeFactor(13195)
largestPrimeFactor(600851475143)

// console.log(45 % 2)
// console.log(45 % 3)