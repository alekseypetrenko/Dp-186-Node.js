    let board0 = [
        [1, 2, 1],
        [2, 1, 2],
        [2, 2, 1]
    ]
    let board1 = [
        [1, 1, 1],
        [2, 1, 2],
        [2, 2, 1]
    ]
    let board2 = [
        [1, 2, 1],
        [2, 2, 2],
        [2, 2, 1]
    ]
    let boardMinus1 = [
        [1, 2, 1],
        [2, 1, 0],
        [2, 2, 1]
    ]
    function checkBoard(board){
        let row0 = board[0];
        let row1 = board[1];
        let row2 = board[2];
        let col0 = []
        let col1 = []
        let col2 = []
        let diagonal1 = []
        let diagonal2 = []
        col0.push(board[0][0], board[1][0], board[2][0]);
        col1.push(board[0][1], board[1][1], board[2][1]);
        col2.push(board[0][2], board[1][2], board[2][2]);
        diagonal1.push(board[0][0], board[1][1], board[2][2]);
        diagonal2.push(board[0][2], board[1][1], board[2][0]);

        if( checkX(row0) || checkX(row1) || checkX(row2) || checkX(col0) || checkX(col1) || checkX(col2)) {
            console.log(1);
        } else if(checkO(row0) || checkO(row1) || checkO(row2) || checkO(col0) || checkO(col1) || checkO(col2)){
            console.log(2);
            
        } else if (
            checkZero(row0) || checkZero(row1) || checkZero(row2) || checkZero(col0) || checkZero(col1) || checkZero(col2)
            && !(checkX(row0) || checkX(row1) || checkX(row2) || checkX(col0) || checkX(col1) || checkX(col2)) 
            && !(checkO(row0) || checkO(row1) || checkO(row2) || checkO(col0) || checkO(col1) || checkO(col2))){
                console.log(-1);
        } else {
            console.log(0);
            
        }

        
    }
    
    function checkX(arr){
        return arr.every(el => el == 1)
    }
    function checkO(arr){
        return arr.every(el => el == 2)
    }
    function checkZero(arr){
        return arr.some(el => el == 0)
    }

checkBoard(board0)
checkBoard(board1)
checkBoard(board2)
checkBoard(boardMinus1)

