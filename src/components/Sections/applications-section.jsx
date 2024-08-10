import React from 'react';
import Application from '../application';
import Hanoi from '../Applications/Hanoi/hanoi';
import Exhanoi1 from '../Applications/Hanoi/ExHanoi-1';
import Exhanoi2 from '../Applications/Hanoi/ExHanoi-2';
import Exhanoi3 from '../Applications/Hanoi/ExHanoi-3';
import Exhanoi4 from '../Applications/Hanoi/ExHanoi-4';

export default function ApplicationsSection() {
  return (
    <section className='grid grid-flow-col grid-rows-8 gap-1 h-[94vh] lg:w-[15vw] p-3'>
      <Application img={"/img/xpbg.jpg"} name={"Hanoi"} appID={"hanoi"} />
      <Application img={"/img/xpbg.jpg"} name={"Tic Tac Toe"} appID={"exhanoi1"}/>
      <Application img={"/img/xpbg.jpg"} name={"Extended Hanoi 1"} appID={"exhanoi1"} />
      <Application img={"/img/xpbg.jpg"} name={"Extended Hanoi 2"} appID={"exhanoi2"}/>
      <Application img={"/img/xpbg.jpg"} name={"Extended Hanoi 3"} appID={"exhanoi3"}/>
      <Application img={"/img/xpbg.jpg"} name={"Extended Hanoi 4"} appID={"exhanoi4"}/>
      <Application img={"/img/xpbg.jpg"} name={"Sudoku"} appID={"exhanoi1"} />

      {/* Include the modal component */}
      <Hanoi />
      <Exhanoi1 />
      <Exhanoi2 />
      <Exhanoi3 />
      <Exhanoi4 />
    </section>
  );
}
