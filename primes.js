function getPrimes (n) {
    var max = n
    var integers = []
    var primes = []
    var i, j
  
    // if (check.not.integer(n)) {
    //   throw new TypeError('Expected an integer')
    // }
  
    // if (check.not.greaterOrEqual(n, 2)) {
    //   throw new TypeError('Expected an integer 2 or greater')
    // }
  
    for (i = 2; i < max + 1; i++) {
      integers[i] = true
    }
  
    integers[0] = false
    integers[1] = false
  
    i = 2
    while (i <= Math.floor(Math.sqrt(max))) {
      if (integers[i]) {
        for (j = i * i; j <= max; j = j + i) {
          integers[j] = false
        }
      }
      i++
    }
  
    for (i = 0; i < integers.length; i++) {
      if (integers[i]) {
        primes.push(i)
      }
    }
    return primes
  }

  module.exports= getPrimes