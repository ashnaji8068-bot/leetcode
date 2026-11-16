/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0;
    let digitsum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    for(let i=0;i<nums.length;i++){
       let num=nums[i]
        while(num>0){
        digitsum+=num%10
        num=Math.floor(num/10)
        }
    }
    return Math.abs(digitsum-sum)
};