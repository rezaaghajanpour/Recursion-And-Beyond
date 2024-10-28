import React from 'react'
import "./tic-tac-toe.css"
import Scores from './score-section';
import TicTacToeTable from './table';
import { useState } from 'react';

export default function TicTacToeGame() {
    const [turn, setTurn] = useState(1);
    const [winnerData, setWinnerData] = useState(null); 

    return (
        <dialog id="tic-tac-toe" className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-[80vh] border-2 border-quaternary TicTacToe-bg text-black">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello From Tic Tac Toe 😎</h3>
            <div className='h-[90%] bg-secondary mt-2 p-2 rounded-md border-2'>
                <Scores turn={turn} winnerData={winnerData} />
                <TicTacToeTable turn={turn} setTurn={setTurn} setWinnerData={setWinnerData} winnerData={winnerData} />
            </div>  
          </div>
        </dialog>
      );
}
