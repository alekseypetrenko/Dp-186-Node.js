export function sum(...nums) {
    if(nums.length == 0){
        return {
            status: "failed",
            reason: "No arguments"
        }
    }

    return nums.reduce((acc, cur) => {
        if (typeof cur == "number" && !isNaN(cur)){
            return acc + cur;
        } else {
            return acc;
        }
    }, 0);
}