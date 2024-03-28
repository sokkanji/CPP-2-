function solution(n) { 
    let result = '';
    Array(n).fill(null).forEach((_, i) => i % 2 === 0 ? result+='수' : result+='박');
    return result;
}
