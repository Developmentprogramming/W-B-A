import React from 'react';
import './NavigationBar.css';
import backButton from './back-button.png';

const toggleBackButton = (toggle, onRouteChange) => {
  if(toggle) {
    return <button onClick={() => {onRouteChange('login')}} className='button' ><img alt='back-button' src={backButton} /></button>
  } else {
    return <button onClick={() => {onRouteChange('login')}} className='button' ><img alt='back-button' src={backButton} style={{display: 'none'}} /></button>
  }
}

const NavigationBar = ({ onRouteChange, showBackButton }) => {
  return (
    <div>
      <nav>
        {
          toggleBackButton(showBackButton, onRouteChange)
        }
      </nav>
    </div>
  );
}

export default NavigationBar;