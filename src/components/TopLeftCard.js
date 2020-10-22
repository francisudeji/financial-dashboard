import React from 'react';
import CardTitle from './CardTitle';

const listItems = [
  { title: 'NP 250 03', amount: '+12.5%', type: 'up' },
  { title: 'NP 250 04', amount: '+12.5%', type: 'up' },
  { title: 'NP 250 05', amount: '+10.5%', type: 'up' },
  { title: 'NP 250 06', amount: '+6.5%', type: 'up' },
  { title: 'NP 250 07', amount: '-4.5%', type: 'down' },
  { title: 'NP 250 08', amount: '-2.5%', type: 'down' },
  { title: 'NP 250 09', amount: '-2.5%', type: 'down' },
];

function TopLeftCard() {
  return (
    <div className='rounded-8px bg-white p-28-53px flex flex-col'>
      <div className='flex items-center justify-between'>
        <CardTitle title='$28,941.69' />
        <div className='flex items-center space-x-2'>
          <span className='text-11px text-medium-gray'>+1.01%</span>
          <span>
            <svg
              width='13'
              height='8'
              viewBox='0 0 13 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.99702 0.659515L10.3329 1.99535L7.48618 4.84202L5.15285 2.50868L0.830349 6.83702L1.65285 7.65952L5.15285 4.15952L7.48618 6.49285L11.1612 2.82368L12.497 4.15952V0.659515H8.99702Z'
                fill='#01D066'
              />
            </svg>
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between mt-22-58px'>
        <div className='flex items-center space-x-2'>
          <span className='text-11px text-medium-gray'>Bank</span>
          <span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0)'>
                <path
                  d='M4.42783 7.13657L6.92783 9.63657L9.42783 7.13657H4.42783Z'
                  fill='#79828E'
                />
                <g clipPath='url(#clip1)'>
                  <path
                    d='M9.42783 5.30963L6.92783 2.80963L4.42783 5.30963H9.42783Z'
                    fill='#79828E'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect
                    width='12'
                    height='12'
                    fill='white'
                    transform='translate(0.927826 0.24292)'
                  />
                </clipPath>
                <clipPath id='clip1'>
                  <rect
                    width='12'
                    height='12'
                    fill='white'
                    transform='translate(12.9278 8.41599) rotate(-180)'
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='text-11px text-medium-gray'>Income</span>
          <span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0)'>
                <path
                  d='M4.42783 7.13657L6.92783 9.63657L9.42783 7.13657H4.42783Z'
                  fill='#79828E'
                />
                <g clipPath='url(#clip1)'>
                  <path
                    d='M9.42783 5.30963L6.92783 2.80963L4.42783 5.30963H9.42783Z'
                    fill='#79828E'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect
                    width='12'
                    height='12'
                    fill='white'
                    transform='translate(0.927826 0.24292)'
                  />
                </clipPath>
                <clipPath id='clip1'>
                  <rect
                    width='12'
                    height='12'
                    fill='white'
                    transform='translate(12.9278 8.41599) rotate(-180)'
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>

      <ul className='flex-1 mt-22-58px text-11px divide-y divide-light-gray grid grid-rows-7'>
        {listItems.map((listItem) => (
          <li
            key={listItem.title}
            className='flex items-center justify-between py-2'
          >
            <span className='text-dark-gray'>{listItem.title} - ee</span>
            <div className='flex items-center space-x-2'>
              <span
                className={`${
                  listItem.type === 'up' ? 'text-green' : 'text-red'
                }`}
              >
                {listItem.amount}
              </span>
              <span
                className={listItem.type === 'up' ? 'text-green' : 'text-red'}
              >
                {listItem.type === 'up' ? (
                  <svg
                    width='13'
                    height='8'
                    viewBox='0 0 13 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='fill-current'
                  >
                    <path d='M8.99702 0.659515L10.3329 1.99535L7.48618 4.84202L5.15285 2.50868L0.830349 6.83702L1.65285 7.65952L5.15285 4.15952L7.48618 6.49285L11.1612 2.82368L12.497 4.15952V0.659515H8.99702Z' />
                  </svg>
                ) : (
                  <svg
                    width='13'
                    height='8'
                    viewBox='0 0 13 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.83034 7.04715L10.1662 5.71132L7.31951 2.86465L4.98618 5.19798L0.663677 0.86965L1.48618 0.0471497L4.98618 3.54715L7.31951 1.21382L10.9945 4.88298L12.3303 3.54715V7.04715H8.83034Z'
                      fill='#FD3758'
                    />
                  </svg>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopLeftCard;
