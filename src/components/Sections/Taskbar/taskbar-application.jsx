import React from 'react'

export default function TaskBarApplication({name, appID, img, setShowStart}) {
  const showModal = () => {
    const modal = document.getElementById(appID);
    if (modal) {
      modal.showModal();
      setShowStart(false)
    } else {
      console.error(`Modal with id ${appID} not found`);
    }
  };
  return (
    <button onClick={showModal} className='flex gap-1 items-center hover:bg-tertiary hover:text-secondary w-full p-1'>
        <img className='w-[40px] rounded-lg' src={img} alt="app-logo" />
        <p className='lg:text-sm'>{name}</p>
    </button>
  )
}