import React from 'react'
import TaskBarApplication from './taskbar-application'
import Hanoi from '../../Applications/Hanoi/hanoi'

export default function TaskBarStartSection({showStart, setShowStart}) {
  return (
    <section className={`absolute bottom-[4vh] shadow-[0_0_2px]  shadow-tertiary border-2 border-tertiary h-[70vh] w-[30vw] bg-white ${showStart? 'flex flex-col': 'hidden'} `} >
        <div className='w-full h-[12%] bg-tertiary flex items-center px-2'>
            <div className='flex items-center gap-2 text-secondary'>
                <img className= 'rounded-xl w-[46px]' src="/img/LOGO.jpg" alt="my-Logo" />
                <h2>Created By <strong>Aryanoor</strong></h2>
            </div>
        </div>
        <div className='flex w-full h-[88%]'>
            <div className='border-r-2 w-1/2 bg-secondary'>
              <TaskBarApplication name={"Tic Tac Toe"} appID={"tic-tac-toe"} img={"/img/tic-tac-toe.jpg"} setShowStart={setShowStart} />
              <TaskBarApplication name={"Hanoi"} appID={"hanoi"} img={"/img/hanoi.jpg"} setShowStart={setShowStart} />
              <TaskBarApplication name={"Extended Hanoi 1"} appID={"exhanoi1"} img={"/img/hanoi1.jpg"} setShowStart={setShowStart} />
              <TaskBarApplication name={"Extended Hanoi 2"} appID={"exhanoi2"} img={"/img/hanoi2.jpg"} setShowStart={setShowStart} />
              <TaskBarApplication name={"Extended Hanoi 3"} appID={"exhanoi3"} img={"/img/hanoi3.jpg"} setShowStart={setShowStart} />
              <TaskBarApplication name={"Extended Hanoi 4"} appID={"exhanoi4"} img={"/img/hanoi4.jpg"} setShowStart={setShowStart} />
              <h2 className='p-2 h-[24%] flex items-end justify-center animate-bounce select-none'>Comming Soon...</h2>
            </div>
            <div className='bg-quaternary w-1/2'></div>
        </div>

        <Hanoi />
    </section>
  )
}
