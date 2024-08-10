import React, { useState, useEffect } from 'react';
import TaskBarStartSection from './taskbar-start-section';
import "./Taskbar.css"

export default function TaskBarSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const startMenuHandler = () => {
    setShowStart(!showStart);
  };

  return (
    <section className='w-full h-[4vh] taskbar-gradient lg:flex hidden items-center justify-between rounded-l-md'>
      <button className='start-button-gradient h-full w-[10vw] flex items-center justify-center rounded-md' onClick={startMenuHandler}>
        <div className='flex items-center gap-0.5 px-2'>
          <img src="/img/xpLogo.png" alt="logo" className='w-5' />
          <p className='text-secondary font-bold'>START</p>
        </div>
      </button>
      <TaskBarStartSection showStart={showStart} setShowStart={setShowStart} />
      <div className='text-secondary font-bold pr-4 select-none'>
        {formatTime(currentTime)}
      </div>
    </section>
  );
}
