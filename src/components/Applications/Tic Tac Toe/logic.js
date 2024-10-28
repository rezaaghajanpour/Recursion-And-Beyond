export const initial_state = [[0, 0, 0],
                              [0, 0, 0],
                              [0, 0, 0]]

export const check_win = (board, turn) => {
//  >-------------------------------ROWS--------------------------------------------<
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === turn && board[row][1] === turn && board[row][2] === turn) {
        return { winner: turn, winningLine: [[row, 0], [row, 1], [row, 2]] };
        }
    }

//  >-------------------------------COLS--------------------------------------------<
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === turn && board[1][col] === turn && board[2][col] === turn) {
        return { winner: turn, winningLine: [[0, col], [1, col], [2, col]] };
        }
    }

//  >-------------------------------DIAG--------------------------------------------<
    if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn) {
        return { winner: turn, winningLine: [[0, 0], [1, 1], [2, 2]] };
    }
    if (board[0][2] === turn && board[1][1] === turn && board[2][0] === turn) {
        return { winner: turn, winningLine: [[0, 2], [1, 1], [2, 0]] };
    }

//  >-------------------------------DRAW--------------------------------------------<
    const isDraw = board.flat().every(cell => cell !== 0);
        if (isDraw) {
            return { winner: 0, winningLine: [] };
        }
//  >----------------------------NO Winner-----------------------------------------<
    return null;
};              