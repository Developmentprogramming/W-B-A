import React from 'react';
import NavigationBar from './NavigationBar/NavigtionBar';
import SideBar from './SideBar/SideBar';
import GateWay from './GateWay/GateWay';

const Home = ({ onRouteChange }) => {
  return (
    <div>
      <NavigationBar onRouteChange={onRouteChange} />
      <SideBar />
      <GateWay />
    </div>
  );
}

export default Home;
