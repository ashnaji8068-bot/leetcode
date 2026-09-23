/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const str = x.toString();
    return str === str.split('').reverse().join('');
};

