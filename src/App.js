import React from 'react';
import Sidebar from './components/Sidebar';
import './css/styles.css';

function App() {
  return (
    <div className='h-screen w-full flex relative'>
      <div className='w-240px h-screen relative'>
        <Sidebar />
      </div>
      <main className='bg-light-gray h-screen flex-1 p-40-33px'>
        <p>hello</p>
      </main>
    </div>
  );
}

export default App;
