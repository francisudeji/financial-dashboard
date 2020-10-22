import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import TopContent from './components/TopContent';
import DownArrowIcon from './assets/down-arrow.svg';
import Man from './assets/man.png';
import Man2 from './assets/man2.png';
import Man3 from './assets/man3.png';
import Woman from './assets/woman.png';
import Woman2 from './assets/woman2.png';
import Map from './assets/map.png';
import Card from './assets/card.png';
import Card2 from './assets/card2.png';

function App() {
  return (
    <div className='h-screen w-full flex relative font-product-sans'>
      <div className='w-240px h-screen relative'>
        <Sidebar />
      </div>
      <MainContent>
        <div className='space-y-14-98px h-screen flex flex-col mb-32'>
          <TopContent />
          <div className='bottom-content flex justify-between flex-1 space-x-14-98px'>
            <section className='w-1/4 grid grid-rows-60x40 gap-14-98px'>
              <div className='rounded-8px bg-white p-28-53px flex flex-col'>
                <div className='flex items-center justify-between'>
                  <p className='text-19px font-bold font-product-sans-bold text-dark-blue'>
                    $28,941.69
                  </p>
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
                        <g clip-path='url(#clip0)'>
                          <path
                            d='M4.42783 7.13657L6.92783 9.63657L9.42783 7.13657H4.42783Z'
                            fill='#79828E'
                          />
                          <g clip-path='url(#clip1)'>
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
                        <g clip-path='url(#clip0)'>
                          <path
                            d='M4.42783 7.13657L6.92783 9.63657L9.42783 7.13657H4.42783Z'
                            fill='#79828E'
                          />
                          <g clip-path='url(#clip1)'>
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
                  <li className='flex items-center justify-between py-2'>
                    <span className='text-dark-gray'>NP 250 03</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green'>+12.5%</span>
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
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 04</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green'>+12.5%</span>
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
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 05</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green'>+10.5%</span>
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
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 06</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green'>+6.5%</span>
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
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 07</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-red'>-4.5%</span>
                      <span>
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
                      </span>
                    </div>
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 08</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-red'>-2.5%</span>
                      <span>
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
                      </span>
                    </div>
                  </li>
                  <li className='flex items-center justify-between py-1'>
                    <span className='text-dark-gray'>NP 250 09</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-red'>-2.5%</span>
                      <span>
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
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='row-2 rounded-8px grid grid-rows-3 gap-14-98px'>
                <div className='bg-white grid grid-cols-2 rounded-8px p-24px'>
                  <div className='flex flex-col'>
                    <span className='text-11px text-dark-gray'>NP 250 04</span>
                    <p className='text-dark-blue font-product-sans-bold'>
                      $45682.01
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
                        stroke='#4CD964'
                        stroke-width='1.65'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </span>
                </div>
                <div className='bg-white grid grid-cols-2 rounded-8px p-24px'>
                  <div className='flex flex-col'>
                    <span className='text-11px text-dark-gray'>NP 250 07</span>
                    <p className='text-dark-blue font-product-sans-bold'>
                      $4562.01
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
                        d='M1.20438 17.1325L10.5833 4.26492L19.8947 10.4576L28.7206 4.56367L37.7135 29.2201L46.982 3.05535L55.9399 17.8493L65.6638 7.97957L74.3769 11.9085L83.265 4.56367L92.7673 7.97957L101.942 1.16963'
                        stroke='#F9A000'
                        stroke-width='1.65'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </span>
                </div>
                <div className='bg-white grid grid-cols-2 rounded-8px p-24px'>
                  <div className='flex flex-col'>
                    <span className='text-11px text-dark-gray'>NP 250 09</span>
                    <p className='text-dark-blue font-product-sans-bold'>
                      $-1562.01
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
                        d='M1.20438 17.604L10.5833 4.73643L19.8947 10.9291L28.7206 5.03519L37.7135 29.6917L46.982 3.52687L55.9399 18.3208L65.6638 8.45109L74.3769 12.38L83.265 5.03519L92.7673 8.45109L101.942 1.64114'
                        stroke='#FD3758'
                        stroke-width='1.65'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </section>

            <section className='w-2/4 one grid grid-rows-60x40 gap-14-98px'>
              <div className='flex flex-col rounded-8px bg-white p-28-53px'>
                <p className='text-19px text-dark-blue font-product-sans-bold'>
                  Transaction Summary
                </p>

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
                        <circle
                          cx='4.24777'
                          cy='4.31119'
                          r='4'
                          fill='#046AF3'
                        />
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
                        <circle
                          cx='4.48801'
                          cy='4.31119'
                          r='4'
                          fill='#FD3758'
                        />
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
                        <circle
                          cx='4.72824'
                          cy='4.31119'
                          r='4'
                          fill='#02C39A'
                        />
                      </svg>
                    </span>
                    <span>Online Transaction</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col rounded-8px bg-white '>
                <p className='text-19px p-28-53px text-dark-blue font-product-sans-bold'>
                  Active Cards
                </p>
                <div className='-mt-8 w-full flex items-center justify-between'>
                  <div className='h-64 w-4/5'>
                    <img className='h-full w-full' src={Card} alt='Visa Card' />
                  </div>
                  <div className='h-48'>
                    <img className='h-full' src={Card2} alt='Visa Card' />
                  </div>
                </div>
                <div className='flex -mt-2 items-center justify-center text-center space-x-2'>
                  <span className='rounded-full bg-medium-gray h-6px w-6px'></span>
                  <span className='rounded-full bg-current-gray h-6px w-6px'></span>
                  <span className='rounded-full bg-medium-gray h-6px w-6px'></span>
                </div>
              </div>
            </section>

            <section className='w-1/4 one grid grid-rows-75x25 gap-14-98px'>
              <div className='flex flex-col rounded-8px bg-white px-22-53px py-31-36px'>
                <p className='text-19px text-dark-blue font-product-sans-bold'>
                  Users
                </p>
                <div className='mt-12-42px grid grid-cols-2 gap-2'>
                  <button className='bg-medium-gray flex justify-between items-center px-3 h-28-96px bg-opacity-0.1 rounded-6px text-11px text-dark-blue'>
                    <span>All time</span>
                    <img src={DownArrowIcon} alt='down arrow' />
                  </button>
                  <button className='bg-medium-gray flex justify-between items-center px-3 h-28-96px bg-opacity-0.1 rounded-6px text-11px text-dark-blue'>
                    <span>Nepal</span>
                    <img src={DownArrowIcon} alt='down arrow' />
                  </button>
                </div>
                <ul className='mt-12-42px flex-1 grid grid-rows-5 divide-y divide-light-gray'>
                  <li className='flex py-2 space-x-14-98px items-center'>
                    <span>
                      <img
                        className='rounded-full h-16 w-16'
                        src={Man}
                        alt='Randy Westervelt'
                      />
                    </span>
                    <div>
                      <p className='text-11px text-dark-blue'>
                        Randy Westervelt
                      </p>
                      <span className='text-9px text-medium-gray'>
                        $15025.10
                      </span>
                    </div>
                  </li>
                  <li className='flex py-2 space-x-14-98px items-center'>
                    <span>
                      <img
                        className='rounded-full h-16 w-16'
                        src={Man2}
                        alt='Alfredo Levin'
                      />
                    </span>
                    <div>
                      <p className='text-11px text-dark-blue'>Alfredo Levin</p>
                      <span className='text-9px text-medium-gray'>
                        $12056.75
                      </span>
                    </div>
                  </li>
                  <li className='flex py-2 space-x-14-98px items-center'>
                    <span>
                      <img
                        className='rounded-full h-16 w-16'
                        src={Woman}
                        alt='Adison Gouse'
                      />
                    </span>
                    <div>
                      <p className='text-11px text-dark-blue'>Adison Gouse</p>
                      <span className='text-9px text-medium-gray'>
                        $11084.25
                      </span>
                    </div>
                  </li>
                  <li className='flex py-2 space-x-14-98px items-center'>
                    <span>
                      <img
                        className='rounded-full h-16 w-16'
                        src={Man3}
                        alt='Jaxson Franci'
                      />
                    </span>
                    <div>
                      <p className='text-11px text-dark-blue'>Jaxson Franci</p>
                      <span className='text-9px text-medium-gray'>
                        $10090.55
                      </span>
                    </div>
                  </li>
                  <li className='flex py-2 space-x-14-98px items-center'>
                    <span>
                      <img
                        className='rounded-full h-16 w-16'
                        src={Woman2}
                        alt='Edwards Steve'
                      />
                    </span>
                    <div>
                      <p className='text-11px text-dark-blue'>Edwards Steve</p>
                      <span className='text-9px text-medium-gray'>
                        $8094.68
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='rounded-8px bg-red overflow-hidden flex items-center justify-center text-center'>
                <img
                  className='block object-cover w-full h-full'
                  src={Map}
                  alt='Map'
                />
              </div>
            </section>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default App;
