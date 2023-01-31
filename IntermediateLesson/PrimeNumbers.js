//소수 구하기
//O(n)

function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//효율성 개선하기
function isPrimeVersion2(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//에라스토테네스의 체
//1~n 까지 모든 소수 구하기
//o(nlog logn)
function getPrimes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  console.log(
    prime
      .map((value, index) => ({ value: value, index: index }))
      .filter(({ value }) => value === true)
  );

  return prime.filter(Boolean);
}

getPrimes(10);
