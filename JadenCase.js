function solution(s) {
    let result = '', isUpper = false;
    
    s.split('').forEach((value, i) => {
        result = 
            isUpper || i === 0 
            ? result + value.toUpperCase() 
            : result + value.toLowerCase();
        isUpper = value  === ' ' ? true : false;
    });

    
    return result;
}
