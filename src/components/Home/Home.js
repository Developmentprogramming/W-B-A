import React from 'react';
import NavigationBar from './NavigationBar/NavigtionBar';

const Home = ({ onRouteChange }) => {
  return (
    <div>
      <NavigationBar onRouteChange={onRouteChange} />
    </div>
  )
}

export default Home;