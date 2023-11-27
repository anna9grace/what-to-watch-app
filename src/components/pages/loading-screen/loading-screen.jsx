import React from 'react';

import './loading-screen.css';

function LoadingScreen() {
  return (
    <div className='loader' data-testid='loader'>
      <div className='loader__spinner'>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default LoadingScreen;

