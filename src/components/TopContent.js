import React from 'react';
import SearchIcon from '../assets/search.svg';
import DownArrowIcon from '../assets/down-arrow.svg';
import CalendarIcon from '../assets/calendar.svg';
import AvatarIcon from '../assets/avatar.svg';
import BellIcon from '../assets/bell.svg';
import MoreIcon from '../assets/more.svg';

function TopContent() {
  return (
    <div className='grid grid-cols-2 gap-14-98px'>
      <div className='relative'>
        <img
          src={SearchIcon}
          alt='search'
          className='absolute ml-21-53px top-0 left-0 mt-5'
        />
        <input
          className='w-full placeholder-medium-gray bg-white pl-47-77px rounded-8px h-47-47px flex items-center'
          type='text'
          name='search'
          id='search'
          placeholder='Search'
        />
      </div>
      <div className='grid grid-cols-2 gap-14-98px'>
        <button className='flex px-21-53px items-center bg-white rounded-8px justify-between'>
          <img src={CalendarIcon} alt='calendar' />
          <span className='text-medium-gray'>January - December</span>
          <img src={DownArrowIcon} alt='down arrow' />
        </button>
        <button className='flex px-21-53px items-center bg-white rounded-8px justify-between'>
          <img src={BellIcon} alt='notifications' />
          <div className='flex items-center space-x-3'>
            <span className='text-medium-gray'>John Camp</span>
            <img src={AvatarIcon} alt='John Camp' />
            <img src={MoreIcon} alt='more' />
          </div>
        </button>
      </div>
    </div>
  );
}

export default TopContent;
