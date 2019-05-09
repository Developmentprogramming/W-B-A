import React from 'react';
import './AccountInfo.css';
import backButton from '../back-button-black.png';
import Item from '../Item/Item';
import { openNav } from '../../SideBar/SideBar';
import { menu } from '../Menu/Menu';

const AccountInfo = ({ gateWayRouteChange }) => {
  return (
    <div className='gateway'>
      <p onClick={() => {openNav()}} className='sidenav-menu' ><img src={menu} alt='menu' /></p>
      <button onClick={() => {
        gateWayRouteChange('gateway');
      }} className='button'><img src={backButton} alt='backButton' /></button>
      <h1>Account Info</h1>
      <Item name={'Ledgers'} gateWayRouteChange={gateWayRouteChange} />
    </div>
  )
}

export default AccountInfo;
