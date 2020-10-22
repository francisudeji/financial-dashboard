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
      <div className='w-240px h-screen relative'>
        <Sidebar />
      </div>
      <MainContent>
        <div className='space-y-14-98px h-screen flex flex-col mb-32'>
          <TopContent />
          <div className='bottom-content flex justify-between flex-1 space-x-14-98px'>
            <section className='w-1/4 grid grid-rows-60x40 gap-14-98px'>
              <TopLeftCard />
              <BottomLeftCard />
            </section>
            <section className='w-2/4 one grid grid-rows-60x40 gap-14-98px'>
              <TopCenterCard />
              <BottomCenterCard />
            </section>
            <section className='w-1/4 one grid grid-rows-75x25 gap-14-98px'>
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
