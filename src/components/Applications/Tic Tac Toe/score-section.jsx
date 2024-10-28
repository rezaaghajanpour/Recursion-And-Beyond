import React from 'react';

export default function Scores({ turn, winnerData }) {
  return (
    <section className='w-full h-[5%] flex justify-between'>
      <div className='flex gap-4'>
        <div className='flex items-center gap-2'>
          <p>Player</p>
          <div
            className={`bg-tertiary border-[1px] border-primary w-[20px] h-[20px] rounded-full ${
              winnerData ? '' : turn === -1 ? '' : 'animate-pulse'
            }`}
          ></div>
        </div>
        <div className='flex items-center gap-2'>
          <p>AI</p>
          <div
            className={`bg-primary border-[1px] border-tertiary w-[20px] h-[20px] rounded-full ${
              winnerData ? '' : turn === -1 ? 'animate-pulse' : ''
            }`}
          ></div>
        </div>
      </div>
      <div className='w-1/4'>
        {winnerData ? (
          winnerData.winner === 0 ? (
            <p>Result: <span className='text-quinary'>It's a Draw!</span></p>
          ) : winnerData.winner === 1 ? (
            <p>Result: <span className='text-tertiary'>You Won</span></p>
          ) : (
            <p>Result: <span className='text-primary'>You Lost</span></p>
          )
        ) : (
          <p>Winner: -</p> 
        )}
      </div>
    </section>
  );
}
