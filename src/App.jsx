import { useState } from 'react'
import './App.css'
import ApplicationsSection from './components/Sections/applications-section'
import TaskBarSection from './components/Sections/Taskbar/taskbar-section'

function App() {

  return (
    <div className='bg-[url("/img/xpbg.jpg")] bg-cover bg-no-repeat h-[100vh] w-[100vw] flex flex-col justify-end'>
      <ApplicationsSection />
      <TaskBarSection />
    </div>
  )
}

export default App
