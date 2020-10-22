import React from 'react';

const cards = [
  { title: 'NP 250 04', amount: '$45682.01', color: '#4CD964' },
  { title: 'NP 250 07', amount: '$4562.01', color: '#F9A000' },
  { title: 'NP 250 09', amount: '$-1562.01', color: '#FD3758' },
];

function BottomLeftCard() {
  return (
    <div className='row-2 rounded-8px grid grid-rows-3 gap-14-98px'>
      {cards.map((card) => (
        <div
          key={card.title}
          className='bg-white grid grid-cols-2 rounded-8px p-24px'
        >
          <div className='flex flex-col'>
            <span className='text-11px text-dark-gray'>{card.title}</span>
            <p className='text-dark-blue font-product-sans-bold'>
              {card.amount}
            </p>
          </div>
          <span>
            <svg
              width='103'
              height='31'
              viewBox='0 0 103 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.20438 17.6188L10.5833 4.75124L19.8947 10.944L28.7206 5.05L37.7135 29.7065L46.982 3.54168L55.9399 18.3356L65.6638 8.4659L74.3769 12.3948L83.265 5.05L92.7673 8.4659L101.942 1.65595'
                stroke={card.color}
                strokeWidth='1.65'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

export default BottomLeftCard;
