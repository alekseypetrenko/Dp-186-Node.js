export function multi(...nums){
    return nums.reduce((p, el) => {
        return p* el
    })
}