function solution(n) {
    return n.toString().split("").reduce((accum, curr) => accum + parseInt(curr), 0);
}
