import React from 'react';
import DownArrowIcon from '../assets/down-arrow.svg';

function DropdownButton({ name }) {
  return (
    <button className='bg-medium-gray flex justify-between items-center px-3 h-28-96px bg-opacity-0.1 rounded-6px text-11px text-dark-blue'>
      <span>{name}</span>
      <img src={DownArrowIcon} alt='down arrow' />
    </button>
  );
}

export default DropdownButton;
