    let board1= [
        [1, 2, 1],
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
        [2, 2, 0]
    ]
    let boardO = [
        [2, 2, 1],
        [1, 1, 2],
        [2, 2, 1]
    ]
    function checkBoard(board){
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

        if( checkX(board) || checkXCol(col0) || checkXCol(col1) || checkXCol(col2) || checkXCol(diagonal1) || checkXCol(diagonal2)) {
            console.log(1);
        } else if(checkOCol(board) || checkOCol(col0) || checkOCol(col1) || checkOCol(col2) || checkOCol(diagonal2) || checkOCol(diagonal2)){
            console.log(2);
        } else if (
            checkZero(board) || checkZeroCol(col0) || checkZeroCol(col1) || checkZeroCol(col2) || checkZeroCol(diagonal1) || checkZeroCol(diagonal2)
            && !(checkX(board) || checkXCol(col0) || checkXCol(col1) || checkXCol(col2) || checkXCol(diagonal1) || checkXCol(diagonal2)) 
            && !(checkO(board) || checkOCol(col0) || checkOCol(col1) || checkOCol(col2) || checkOCol(diagonal2) || checkOCol(diagonal2))){
                console.log(-1);
        } else {
            console.log(0);
        }
    }
    
    function checkX(arr){
        for (let i = 0; i < arr.length; i++){
            return arr[i].every(el => el == 1)
        }
    }    
    
    function checkXCol(arr){
        return arr.every(el => el == 1)
    }
    
    function checkO(arr){
        for (let i = 0; i < arr.length; i++){
            return arr[i].every(el => el == 2)
        }  
    }    
    
    function checkOCol(arr){
        return arr.every(el => el == 2)
    }

    function checkZero(arr){
        for (let i = 0; i < arr.length; i++){
            return arr[i].every(el => el == 1)
        }
    }
    
    function checkZeroCol(arr){
        return arr.some(el => el == 0)
    }

checkBoard(board1)
checkBoard(board2)
checkBoard(boardMinus1)
checkBoard(boardO)

