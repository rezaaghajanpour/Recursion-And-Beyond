import React, { useState, useEffect, useRef } from 'react';
import "./Exhanoi.css";
import HanoiForm from './hanoi-form';
import Disk from './Disk';
import { hanoi } from './agent';


export default function Hanoi() {
  const [diskNum, setDiskNum] = useState(0);
  const [disks, setDisks] = useState({
    A: [],
    B: [],
    C: []
  });
  const [moves, setMoves] = useState([]);
  const [movesB, setMovesB] = useState([]);

  const [isMoving, setIsMoving] = useState(false);
  const [wantsEnd, setWantsEnd] = useState(false);
  const [reset, setReset] = useState(false)

  const intervalRef = useRef(null);
  useEffect(() => {
    initializeDisks(diskNum);
    setMoves([])
    if (diskNum > 0) {
      const movesCp = [];
      hanoi('A', 'B', 'C', diskNum, movesCp);
      setMoves(movesCp);
      setMovesB([]);
    }
  }, [diskNum, reset]);

  useEffect(() => {
    let TIME = 1000;
    if(wantsEnd){
        TIME = 1
        setIsMoving(true)
    }
    if (isMoving) {
      if (moves.length) {
        intervalRef.current = setInterval(() => {
          if (moves.length) {
            const [from, to] = moves.shift();
            moveDisk(from, to);
            setMovesB((prevMovesB) => [...prevMovesB, [from, to]]);
            setMoves([...moves]); 
          } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsMoving(false);
          }
        }, TIME);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsMoving(false);
        setWantsEnd(false)
      }

      return () => clearInterval(intervalRef.current);
    }
  }, [isMoving, moves, wantsEnd]);

  const initializeDisks = (num) => {
    const initialDisks = [];
    for (let i = 0; i < num; i++) {
      const size = num > 10 ? num * 14 - (i + 1) * 10 : 200 - (i + 1) * 10;
      initialDisks.push({ size, num: i + 1 });
    }
    setDisks({ A: initialDisks, B: [], C: [] });
  };

  const renderRod = (rod) => {
    return disks[rod].map((disk, index) => (
      <Disk key={index} size={disk.size} num={disk.num} />
    ));
  };

  const moveDisk = (from, to) => {
    setDisks((prevDisks) => {
      if (prevDisks[from].length === 0) return prevDisks;

      const diskToMove = prevDisks[from][prevDisks[from].length - 1];
      const newFromRod = prevDisks[from].slice(0, -1);
      const newToRod = [...prevDisks[to], diskToMove];

      return {
        ...prevDisks,
        [from]: newFromRod,
        [to]: newToRod
      };
    });
  };

  const handleStart = () => {
    if (!isMoving && moves.length) {
      setReset(false)
      setIsMoving(true);
    }
  };

  const handleStop = () => {
    if (isMoving) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsMoving(false);
    }
  };

  const nextHandler = () => {
    if (moves.length) {
      const [from, to] = moves.shift();
      moveDisk(from, to);
      setMovesB((prevMovesB) => [...prevMovesB, [from, to]]);
      setMoves([...moves]); 
    }
  };

  const prevHandler = () => {
    if (movesB.length) {
      const [to, from] = movesB.pop();
      moveDisk(from, to);
      setMovesB([...movesB]);
      setMoves((prevMoves) => [[to, from], ...prevMoves]);
    }
  };

  const endHandler = () => {
    setWantsEnd(true)
  }
  const resetHandler =() => {
    setMoves([])
    initializeDisks(diskNum)
    setIsMoving(false)
    setReset(true)
  }

  return (
    <dialog id="hanoi" className="modal">
      <div className="modal-box w-11/12 max-w-5xl h-[80vh] border-2 border-primary hanoiBG text-black">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Welcome To The Simple Hanoi 😊</h3>
        <div className='h-[90%] mt-4 flex flex-col justify-center'>
          <HanoiForm 
            diskNum={diskNum} 
            setDiskNum={setDiskNum} 
            handleStop={handleStop} 
            handleStart={handleStart} 
            nextHandler={nextHandler} 
            prevHandler={prevHandler} 
            endHandler={endHandler}
            resetHandler={resetHandler}
          />
          <div className='bg-secondary h-[96%] w-full pt-4 flex flex-col items-center'>
            <div className='w-8/12 flex justify-between'>
              <div className='flex flex-col-reverse items-center gap-[1px] h-[54vh] bg-quinary w-8 -mb-3 z-10 rounded-md border-[1px] border-tertiary'>
                {renderRod('A')}
              </div>
              <div className='flex flex-col-reverse items-center gap-[1px] h-[54vh] bg-quinary w-8 -mb-3 z-10 rounded-md border-[1px] border-tertiary'>
                {renderRod('B')}
              </div>
              <div className='flex flex-col-reverse items-center gap-[1px] h-[54vh] bg-quinary w-8 -mb-3 z-10 rounded-md border-[1px] border-tertiary'>
                {renderRod('C')}
              </div>
            </div>
            <div className='w-10/12 h-6 rounded-md bg-quinary'></div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
