function meeting(rooms, chairs){
    if(chairs === 0) {
        return "Game On";
    }

    let copyOfArr = [...rooms]
    let chairsSum = 0;
    let result = [];
    let freeChair = 0;

    for (let i = 0; i < copyOfArr.length; i++) {
        let occupants = copyOfArr[i][0].length;
        let chairsInTheRoom = copyOfArr[i][1];
        if (occupants == chairsInTheRoom || occupants > chairsInTheRoom ){
            freeChair = 0;
            result.push(freeChair)
        } else if (occupants < chairsInTheRoom){
            freeChair = chairsInTheRoom - occupants;
            chairsSum += freeChair;
            result.push(freeChair);
            if (chairsSum == chairs || chairsSum > chairs) {
                break;
            } 
        } else if (chairsSum < chairs) {
            return "Not enought!";
        }
    }
    return result
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));  // -> (3) [0, 1, 3]
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ); // -> (5) [0, 0, 1, 2, 2]
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); // -> Game On
console.log(meeting([['XX', 2], ['XXXX', 6]], 8)); // -> Not enought! Doesn't work!!!
