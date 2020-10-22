import React from 'react';
import CardTitle from './CardTitle';

function TopCenterCard() {
  return (
    <div className='flex flex-col rounded-8px bg-white p-28-53px'>
      <CardTitle title='Transaction Summary' />

      <div className='flex-1 flex'>
        <div className='grid grid-cols-6 mt-22-58px flex-1'>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Mon</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-purple rounded-31px h-full block w-full absolute top-0 left-0 mt-8'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-20'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-32'></span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Tue</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-5'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-10'></span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Wed</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-12'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-24'></span>
              <span className='bg-purple rounded-31px h-full block w-full absolute top-0 left-0 mt-32'></span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Thu</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-5'></span>
              <span className='bg-purple rounded-31px h-full block w-full absolute top-0 left-0 mt-12'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-32'></span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Fri</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-8'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-12'></span>
              <span className='bg-purple rounded-31px h-full block w-full absolute top-0 left-0 mt-40'></span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-11px text-medium-gray'>Sun</span>
            <span className='my-18-24px w-4-84px flex-1 rounded-31px flex overflow-hidden h-full relative'>
              <span className='bg-medium-gray-2 rounded-31px h-full block w-full absolute top-0 left-0'></span>
              <span className='bg-light-blue rounded-31px h-full block w-full absolute top-0 left-0 mt-5'></span>
              <span className='bg-red rounded-31px h-full block w-full absolute top-0 left-0 mt-10'></span>
              <span className='bg-purple rounded-31px h-full block w-full absolute top-0 left-0 mt-16'></span>
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 text-center text-dark-gray text-11px'>
        <div className='flex items-center justify-start pl-4 space-x-3'>
          <span>
            <svg
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='4.24777' cy='4.31119' r='4' fill='#046AF3' />
            </svg>
          </span>
          <span>ATM Cards</span>
        </div>
        <div className='flex items-center justify-start space-x-3'>
          <span>
            <svg
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='4.48801' cy='4.31119' r='4' fill='#FD3758' />
            </svg>
          </span>
          <span>Remittance</span>
        </div>
        <div className='flex items-center  space-x-3'>
          <span>
            <svg
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='4.72824' cy='4.31119' r='4' fill='#02C39A' />
            </svg>
          </span>
          <span>Online Transaction</span>
        </div>
      </div>
    </div>
  );
}

export default TopCenterCard;
