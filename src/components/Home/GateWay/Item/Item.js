import React from 'react';
import { launchCreate } from '../Ledgers/Create/Create';

const Item = ({ name, gateWayRouteChange }) => {
  return (
    <div onClick={() => {
      if(name === 'Create')
        launchCreate()
      else
        gateWayRouteChange(name);
      }} className='item'>
      <h3>{name}</h3>
    </div>
  );
}

export default Item;
