import React from 'react';
import CardTitle from './CardTitle';
import Card from '../assets/card.png';
import Card2 from '../assets/card2.png';

function BottomCenterCard() {
  return (
    <div className='flex flex-col rounded-8px bg-white'>
      <div className='p-28-53px'>
        <CardTitle title='Active Cards' />
      </div>
      <div className='-mt-8 w-full flex items-center justify-between'>
        <div className='md:h-64 w-auto md:w-4/5'>
          <img className='md:h-full md:w-full' src={Card} alt='Visa Card' />
        </div>
        <div className='md:h-48'>
          <img className='md:h-full' src={Card2} alt='Visa Card' />
        </div>
      </div>
      <div className='flex mb-3 md:-mt-2 items-center justify-center text-center space-x-2'>
        <span className='rounded-full bg-medium-gray h-6px w-6px'></span>
        <span className='rounded-full bg-current-gray h-6px w-6px'></span>
        <span className='rounded-full bg-medium-gray h-6px w-6px'></span>
      </div>
    </div>
  );
}

export default BottomCenterCard;
