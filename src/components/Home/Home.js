import React from 'react';
import NavigationBar from './NavigationBar/NavigtionBar';
import SideBar from './SideBar/SideBar';

const Home = ({ onRouteChange }) => {
  return (
    <div>
      <NavigationBar onRouteChange={onRouteChange} />
      <SideBar />
    </div>
  )
}

export default Home;