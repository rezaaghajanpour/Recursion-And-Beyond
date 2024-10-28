import React, { useState, useEffect } from 'react';
import { initial_state, check_win } from './logic';
import { getBestMove } from './agent';
import Piece from './piece';

export default function TicTacToeTable({ turn, setTurn, winnerData, setWinnerData }) {
  const [boardState, setBoardState] = useState(initial_state);

  const handlePieceClick = (rowIndex, colIndex) => {
    if (winnerData || boardState[rowIndex][colIndex] !== 0 || turn !== 1) return;

    const newBoardState = boardState.map((row, rIndex) =>
      row.map((piece, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex && piece === 0 ? 1 : piece
      )
    );
    setBoardState(newBoardState);

    const winResult = check_win(newBoardState, 1);
    if (winResult) {
      setWinnerData(winResult);
    } else {
      setTurn(-1);
    }
  };

  useEffect(() => {
    if (turn === -1 && !winnerData) {
      const bestMove = getBestMove(boardState);
      if (bestMove) {
        const [row, col] = bestMove;
        const newBoardState = boardState.map((rowArr, rIndex) =>
          rowArr.map((piece, cIndex) =>
            rIndex === row && cIndex === col ? -1 : piece
          )
        );
        setBoardState(newBoardState);
  
        const winResult = check_win(newBoardState, -1);
        if (winResult) {
          setWinnerData(winResult);
        } else {
          setTurn(1);
        }
      }
    }
  }, [turn, boardState, winnerData, setWinnerData]);
  

  const isWinningPiece = (rowIndex, colIndex) => {
    if (!winnerData || !winnerData.winningLine) return false;
    return winnerData.winningLine.some(
      ([winRow, winCol]) => winRow === rowIndex && winCol === colIndex
    );
  };

  return (
    <div className='h-[90%] w-full mt-4 flex flex-col items-center justify-center'>
      <div className='aspect-square bg-gradient-to-br from-quaternary to-tertiary w-11/12 lg:w-auto lg:h-5/6 grid grid-cols-3 grid-rows-3 gap-2 p-2 rounded-lg shadow-3xl border-4 border-primary'>
        {boardState.map((row, rowIndex) =>
          row.map((player_num, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex items-center justify-center shadow-inner-3xl rounded-lg bg-gradient-to-b from-secondary via-quaternary to-quinary border border-primary ${isWinningPiece(rowIndex, colIndex) ? 'winning-piece' : ''}`}
            >
              <Piece
                player_num={player_num}
                onClick={() => turn === 1 && handlePieceClick(rowIndex, colIndex)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
