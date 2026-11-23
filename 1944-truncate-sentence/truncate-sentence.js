/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let words = s.split(" ");

    let result = words.slice(0, k);

    return result.join(" ");
};
