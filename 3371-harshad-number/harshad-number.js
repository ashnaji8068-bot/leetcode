/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    
    let sum = 0;
    let temp = x;

    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + digit;
        temp = Math.floor(temp / 10);
    }

    if (x % sum === 0) {
        return sum;
    }

    return -1;
};
