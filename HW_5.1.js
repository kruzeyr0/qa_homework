function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x; 
    }

    return result;
}

console.log(pow(2, 3)); // return 8
console.log(pow(5, 4)); // return 625
console.log(pow(10, 10)); // return 10000000000