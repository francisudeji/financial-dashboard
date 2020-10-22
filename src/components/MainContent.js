import React from 'react';

function MainContent({ children }) {
  return (
    <main className='bg-light-gray h-screen overflow-y-auto flex-1 p-40-33px'>
      {children}
    </main>
  );
}

export default MainContent;
