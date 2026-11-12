/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let up=0
    let down=0
    let left=0
    let right=0

for(let move of moves){


    if(move==="U"){
        up++
    }
    if(move==="D"){
        down++
    }
    if(move==="L"){
        left++
    }
    if(move==="R"){
        right++
    }

}
return up===down&& left===right
};