import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NavigationBar from '../NavigationBar/NavigationBar';
import InfoBar from '../InfoBar/InfoBar';
import Home from '../Home/Home';

const Switch = (route, onRouteChange) => {
  if(route === 'login') {
    return <Login onRouteChange={onRouteChange} />
  } else if (route === 'register') {
    return <Register onRouteChange={onRouteChange} />
  } else if (route === 'home') {
    return <Home onRouteChange={onRouteChange} />
  }
}

const Route = ({ route, onRouteChange, showBackButton }) => {
  return (
    <div>
      <InfoBar />
      <NavigationBar onRouteChange={onRouteChange} showBackButton={showBackButton} />
      {
        Switch(route, onRouteChange)
      }
    </div>
  );
}

export default Route;