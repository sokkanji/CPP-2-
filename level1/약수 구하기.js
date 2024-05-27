function solution(n) {
     return Array(n+1).fill(null).reduce((acc, curr, i) => n % i === 0 ? acc += i : acc, 0);
}
