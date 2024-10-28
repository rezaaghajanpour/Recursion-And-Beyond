import React from 'react';

export default function Application({ img, name, appID }) {
  const showModal = () => {
    const modal = document.getElementById(appID);
    if (modal) {
      modal.showModal();
    } else {
      console.error(`Modal with id ${appID} not found`);
    }
  };

  return (
    <button onClick={showModal} className='flex flex-col p-1 w-20 items-center text-secondary hover:bg-quaternary transition-all duration-300 rounded-sm'>
      <img className='rounded-sm h-12 w-12' src={img} alt="icon-image" />
      <p className='text-xs'>{name}</p>
    </button>
  );
}
