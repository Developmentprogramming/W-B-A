import React from 'react';
import NavigationBar from './NavigationBar/NavigtionBar';
import SideBar from './SideBar/SideBar';
import GateWay from './GateWay/GateWay';
import InfoBar from '../InfoBar/InfoBar';

const Home = ({ onRouteChange }) => {
  return (
    <div>
      <NavigationBar onRouteChange={onRouteChange} />
      <SideBar />
      <GateWay />
      <InfoBar />
    </div>
  );
}

export default Home;
