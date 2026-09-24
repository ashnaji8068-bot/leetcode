var smallestIndex=
function(nums){
    for (let i=0;i<nums.length;i++){
        let num=nums[i];
        let sum=String(num)
        .split("")
        .reduce((a,b)=>a+Number(b),0);
        if (sum===i){
            return i;
        }
    }
    return -1;
}