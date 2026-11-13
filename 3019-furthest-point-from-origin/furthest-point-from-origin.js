/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let position=0;
    let count=0

    for (let move of moves){
        if(move==="R"){
            position++
        }
        else if(move==="L"){
        position--
        }
    else{
        count++
    }
    }
    return Math.abs(position) + count
    
};