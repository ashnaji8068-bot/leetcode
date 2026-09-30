/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for (let ch of s){
        if(ch==='('||ch==='['||ch==='{'){
            stack.push(ch);
        }else{
            let last=stack.pop();
            if(
                (ch===')'&&
                last!=='(')||
                (ch===']'&&
                last!=='[')||
                (ch==='}'&&
                last!=='{')
            ) {
                return false;
            }
        }
    }
    return stack.length===0;
};