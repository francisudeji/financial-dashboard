import React from 'react';
import Map from '../assets/map.png';

function BottomRightCard() {
  return (
    <div className='rounded-8px bg-red overflow-hidden flex items-center justify-center text-center'>
      <img className='block object-cover w-full h-full' src={Map} alt='Map' />
    </div>
  );
}

export default BottomRightCard;
