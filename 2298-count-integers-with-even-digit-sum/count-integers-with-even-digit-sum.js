/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {

    let count = 0;

    for(let i = 1; i <= num; i++) {

        let sum = 0;
        let temp = i;

        while(temp > 0) {
            let digit = temp % 10;
            sum += digit;
            temp = Math.floor(temp / 10);
        }

        if(sum % 2 === 0) {
            count++;
        }
    }

    return count;
};



