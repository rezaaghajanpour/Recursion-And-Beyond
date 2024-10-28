import { check_win } from './logic';

// Minimax function to be completed by students
export const minimax = (board, depth, isMaximizing) => {
    // Step 1: Handle the base case
    // Use `check_win` to determine if the game is over (a win, loss, or draw)
    // - If AI (-1) wins, return a positive score, adjusted by depth
    // - If the player (1) wins, return a negative score, adjusted by depth
    // - If it's a draw, return 0
    
    // Step 2: Recursive minimax logic
    // - If `isMaximizing` is true, loop over possible moves, placing the AI's piece (-1)
    //   and call minimax recursively to find the maximum score.
    // - If `isMaximizing` is false, loop over possible moves, placing the player’s piece (1)
    //   and call minimax recursively to find the minimum score.

    // Remember to undo each move after testing it, and return the best score.
};

// Function to determine the best move for the AI
export const getBestMove = (board) => {
    alert("Complete minimax algorithm to play");
    return;
    
    // This function uses minimax to evaluate each possible move for the AI
    // and returns the best move (row and column) for the AI.
};
