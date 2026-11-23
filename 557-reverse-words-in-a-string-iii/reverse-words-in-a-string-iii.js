/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words=s.split(" ")
    let result=words.map((word)=>{
       return word.split("").reverse().join("")
    })
    return result.join(" ");
};
