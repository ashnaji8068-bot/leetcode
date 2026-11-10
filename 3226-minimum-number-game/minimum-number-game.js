/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=>a-b)
    let arr=[]
    while(nums.length>0){
        let alice=nums.shift()
          let bob=nums.shift()

          arr.push(bob)
          arr.push(alice)
    }
    return arr
};