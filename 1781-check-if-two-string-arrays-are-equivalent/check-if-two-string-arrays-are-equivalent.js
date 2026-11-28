/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let a= word1.join("");
    let b= word2.join("");

    return a===b;
};

