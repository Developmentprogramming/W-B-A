import React from 'react';
import './SideBar.css';
import SelectCmp, { launchSelectCmp } from './SelectCmp/SelectCmp';
import CreateCmp, { launchCreateCmp } from './CreateCmp/CreateCmp';
import ShutCmp, { launchShutCmp } from './ShutCmp/ShutCmp';
import CurrentDate, { launchDate } from './CurrentDate/CurrentDate';
import CurrentPeriod, { launchPeriod } from './CurrentPeriod/CurrentPeriod';

const SideBar = () => {
  return (
    <div className="sidenav">
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
    </div>
  );
};

export default SideBar;
