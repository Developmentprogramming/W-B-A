import React from 'react';
import './SideBar.css';
import SelectCmp, { launchSelectCmp } from './SelectCmp/SelectCmp';
import CreateCmp, { launchCreateCmp } from './CreateCmp/CreateCmp';
import ShutCmp, { launchShutCmp } from './ShutCmp/ShutCmp';
import CurrentDate, { launchDate } from './CurrentDate/CurrentDate';
import CurrentPeriod, { launchPeriod } from './CurrentPeriod/CurrentPeriod';
import Create from '../GateWay/Ledgers/Create/Create';

const openNav = () => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  if(w <= 700 || h <= 500)
    document.getElementById("mySidenav").style.width = "100%";
  else
    document.getElementById("mySidenav").style.width = "250px";
  let closebtn = document.getElementsByClassName('sidenav-menu')[0];
  closebtn.style.display = 'none';
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  let closebtn = document.getElementsByClassName('sidenav-menu')[0];
  closebtn.style.display = 'block';
}

const SideBar = () => {
  return (
    <div  id='mySidenav' className="sidenav">
      <p className="closebtn" onClick={() => {closeNav()}}>&times;</p>
      <p onClick={() => {launchSelectCmp()}} >Select Cmp</p>
      <p onClick={() => {launchCreateCmp()}} >Create Cmp</p>
      <p onClick={() => {launchShutCmp()}} >Alter Cmp</p>
      <p onClick={() => {launchDate()}} >Date</p>
      <p onClick={() => {launchPeriod()}} >Period</p>
      <SelectCmp />
      <CreateCmp />
      <ShutCmp />
      <CurrentDate />
      <CurrentPeriod />
      <Create />
    </div>
  );
};

export default SideBar;
export {
  openNav
}
