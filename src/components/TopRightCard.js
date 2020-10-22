import React from 'react';
import Man from '../assets/man.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Woman from '../assets/woman.png';
import Woman2 from '../assets/woman2.png';
import CardTitle from '../components/CardTitle';
import DropdownButton from './DropdownButton';

const users = [
  { name: 'Randy Westervelt', amount: '$15025.10', passport: Man },
  { name: 'Alfredo Levin', amount: '12056.75', passport: Man2 },
  { name: 'Adison Gouse', amount: '$11084.25', passport: Woman },
  { name: 'Jaxson Franci', amount: '$10090.55', passport: Man3 },
  { name: 'Edwards Steve', amount: '$8094.68', passport: Woman2 },
];
function TopRightCard() {
  return (
    <div className='flex flex-col rounded-8px bg-white px-22-53px py-31-36px'>
      <CardTitle title='Users' />

      <div className='mt-12-42px grid grid-cols-2 gap-2'>
        <DropdownButton name='All time' />
        <DropdownButton name='Nepal' />
      </div>

      <ul className='mt-12-42px flex-1 grid grid-rows-5 divide-y divide-light-gray'>
        {users.map((user) => (
          <li
            key={user.name}
            className='flex py-2 space-x-14-98px items-center'
          >
            <span>
              <img
                className='rounded-full h-16 w-16'
                src={user.passport}
                alt={user.name}
              />
            </span>
            <div>
              <p className='text-11px text-dark-blue'>{user.name}</p>
              <span className='text-9px text-medium-gray'>{user.amount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopRightCard;
