function solution(n) {
    let result = null;
    
    Array(n).fill(n).forEach((val, i) => {
        val % i === 1 && result === null ? result = i : false
    });
    
    return result;
}
