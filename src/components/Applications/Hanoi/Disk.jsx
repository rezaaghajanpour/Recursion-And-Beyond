import React from 'react';

export default function Disk({ size, num }) {
  return (
    <div 
      className={`bg-primary rounded-xl h-5 select-none flex justify-center items-center border-[1px] border-tertiary shadow-quaternary`}
      style={{ width: `${size}px` }}
    >
      {num}
    </div>
  );
}
