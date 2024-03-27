function solution(n) {
    const inputArray = n.toString().split("");
    const answer = inputArray.reduce((accum, curr) => accum + Number(curr), 0);
    
    return answer;
}
