import React from 'react';
import backButton from '../../NavigationBar/back-button.png';
import '../../NavigationBar/NavigationBar.css';
import UserProfile from './UserProfile/UserProfile';
import './NavigationBar.css';

const NavigationBar = ({ onRouteChange }) => {
  return (
    <div>
      <nav>
        <div className='tooltip'>
          <button onClick={() => {onRouteChange('login');}} className='button' ><img src={backButton} alt='back-button' /></button>
          <span className='tooltiptext'>LogOut</span>
        </div>
        <UserProfile />
      </nav>
    </div>
  )
}

export default NavigationBar;