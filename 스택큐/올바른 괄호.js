function solution(s){
    let openNum = 0;

    for (let par of s) {
        par === '(' ?  openNum++ : openNum--;
        if (openNum < 0) return false;
    }

   return openNum === 0;
}
