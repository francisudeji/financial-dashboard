import React from 'react';
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
  return (
    <div className='h-screen w-full flex relative font-product-sans'>
      <div className='w-240px h-screen relative hidden lg:block'>
        <Sidebar />
      </div>
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
