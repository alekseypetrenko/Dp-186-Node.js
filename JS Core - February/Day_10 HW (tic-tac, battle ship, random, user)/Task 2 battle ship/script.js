let board = [
    [0, 0, 0, 2, 2, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 0, 1, 0, 0],
    [0, 3, 0, 1, 0, 0]
];
let attacks = [[2, 1], [1, 3], [4, 2]];

function sunkOrDamaged(board, attacks) {
    let result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    }

    let damage = coordsAndDamadge(attacks);
    let shipsLengthByNumber = shipLength(board);

    let ship1 = shipsLengthByNumber.ship1;
    let ship2 = shipsLengthByNumber.ship2;
    let ship3 = shipsLengthByNumber.ship3;

    let damageShip1 = damage.filter(el => el == 1).length;
    let damageShip2 = damage.filter(el => el == 2).length;
    let damageShip3 = damage.filter(el => el == 3).length;

    if (ship1 == damageShip1) {
        result.sunk++;
        result.points++;
    }

    if (ship2 == damageShip2) {
        result.sunk++;;
        result.points++;
    }
    if (ship3 == damageShip3) {
        result.sunk++;;
        result.points++;
    }

    if (ship1 > damageShip1 && damageShip1 > 0) {
        result.damaged++;
        result.points += 0.5;
    }

    if (ship2 > damageShip2 && damageShip2 > 0) {
        result.damaged++;
        result.points += 0.5;
    }

    if (ship3 > damageShip3 && damageShip3 > 0) {
        result.damaged++;
        result.points += 0.5;
    }

    if (damageShip1 == 0) {
        result.notTouched++;
        result.points--;
    }

    if (damageShip2 == 0) {
        result.notTouched++;
        result.points--;
    }

    if (damageShip3 == 0) {
        result.notTouched++;
        result.points--;
    }

    function coordsAndDamadge(attacks) {
        let coordX, coordY;
        let damage = [];
        for (let i = 0; i < attacks.length; i++) {
            coordX = attacks[i][0] - 1;
            coordY = attacks[i][1] - 1;
            let reversed = board.reverse();
            damage.push(reversed[coordY][coordX]);
        }
        return damage;
    }

    function shipLength(board) {
        let ship1 = 0, ship2 = 0, ship3 = 0;
        board.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                if (element[i] == 1) {
                    ship1++;
                }
                if (element[i] == 2) {
                    ship2++;
                }
                if (element[i] == 3) {
                    ship3++;
                }

            }
        });
        return { ship1, ship2, ship3 };
    }
    return result;
}

console.log(sunkOrDamaged(board, attacks));