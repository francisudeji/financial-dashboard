import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import TopContent from './components/TopContent';

function App() {
  return (
    <div className='h-screen w-full flex relative'>
      <div className='w-240px h-screen relative'>
        <Sidebar />
      </div>
      <MainContent>
        <div className='space-y-14-98px'>
          <TopContent />
          <div>bottom content</div>
        </div>
      </MainContent>
    </div>
  );
}

export default App;
