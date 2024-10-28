import React from 'react';

export default function Piece({ player_num, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-10/12 aspect-square flex items-center justify-center cursor-pointer 
        ${player_num === 0 ? 'bg-transparent' : 
          player_num === 1 ?  'bg-primary border-tertiary' :'bg-tertiary border-primary'} 
        rounded-full shadow-piece transform border-[2px] hover:scale-105 transition-transform duration-200
        ${player_num !== 0 && 'bg-gradient-to-t from-gray-600 via-gray-300 to-gray-100'}`}
    >
        {
            player_num == 0? <p>Empty</p>:
            player_num == 1? <p className='text-tertiary'>Player</p> : <p className='text-primary'>Bot</p>
        }
    </div>
  );
}
