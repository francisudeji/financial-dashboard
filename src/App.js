import React, { useState } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import TopContent from './components/TopContent';
import BottomLeftCard from './components/BottomLeftCard';
import TopLeftCard from './components/TopLeftCard';
import TopCenterCard from './components/TopCenterCard';
import BottomCenterCard from './components/BottomCenterCard';
import BottomRightCard from './components/BottomRightCard';
import TopRightCard from './components/TopRightCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='h-screen w-full flex relative font-product-sans rel'>
      <div
        className={`w-240px h-screen relative ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <Sidebar />
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute flex items-center justify-center text-center top-0 left-0 ${
          isSidebarOpen && 'ml-240px'
        } mt-12 text-light-blue h-10 w-10`}
      >
        <svg
          className='w-5 h-5 fill-current'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </button>

      <MainContent>
        <div className='space-y-14-98px flex flex-col'>
          <TopContent />
          <div className='flex flex-col md:flex-row justify-between flex-1 mt-4 md:mt-0 md:space-x-14-98px'>
            <section className='w-full md:w-1/4 grid grid-rows-60x40 gap-14-98px'>
              <TopLeftCard />
              <BottomLeftCard />
            </section>
            <section className='w-full md:w-2/4 grid md:grid-rows-60x40 gap-14-98px'>
              <TopCenterCard />
              <BottomCenterCard />
            </section>
            <section className='w-full md:w-1/4 mt-4 md:mt-0 grid grid-rows-75x25 gap-14-98px'>
              <TopRightCard />
              <BottomRightCard />
            </section>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default App;
