import React from 'react';

export default function HanoiForm({ setDiskNum, diskNum, handleStop, handleStart, nextHandler, prevHandler, endHandler, resetHandler }) {
  const handleDiskNumChange = (e) => {
    const value = e.target.value;
    setDiskNum(+value);
  };

  return (
    <div className='bg-secondary w-full flex lg:flex-row flex-col gap-2 p-1 justify-between'>
      <select 
        className="select bg-secondary border-tertiary select-info w-full max-w-xs"
        onChange={handleDiskNumChange}
        defaultValue=""
      >
        <option disabled value="">Select The Number Of Disks</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option disabled value="5">Five</option>
      </select>
      <div className='flex items-center gap-4'>
        <button
          className='py-1 px-2 bg-tertiary text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className='py-1 px-2 bg-tertiary text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={prevHandler}
        >
          Prev
        </button>
        <button
          className='py-1 px-2 bg-tertiary text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className='py-1 px-2 bg-tertiary text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={nextHandler}
        >
          Next
        </button>
        <button
          className='py-1 px-2 bg-tertiary text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={endHandler}
        >
          End
        </button>
        <button
          className='py-1 px-2 bg-tertiary hover:cursor-pointer text-secondary rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'
          disabled={diskNum === 0}
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
