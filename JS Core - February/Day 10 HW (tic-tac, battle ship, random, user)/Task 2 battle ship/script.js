let board = [
    [0, 0, 0, 2, 2, 0],
    [9, 3, 0, 0, 0, 0],
    [0, 3, 0, 1, 0, 0],
    [0, 3, 0, 1, 0, 0]
];
let attacks = [[2, 1], [1, 3], [4, 2]];
let result = {
    sunk: 0,
    damaged: 0,
    notTouched: 0,
    points: 0
}

function coordsAndDamadge(attacks) {
    let coordX, coordY;
    let damage = [];
    for (let i = 0; i < attacks.length; i++) {
        coordX = attacks[i][0] - 1;
        coordY = attacks[i][1] - 1;
        console.log("X :", coordX);
        console.log("Y :", coordY);
        let reversed = board.reverse()
        damage.push(reversed[coordY][coordX])
    }
    return damage
}


function shipLength(board) {
    let ship1 = 0, ship2 = 0, ship3 = 0;
    board.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            if (element[i] == 1) {
                ship1++
            }
            if (element[i] == 2) {
                ship2++
            }
            if (element[i] == 3) {
                ship3++
            }

        }
    });
    return { ship1, ship2, ship3 }
}
