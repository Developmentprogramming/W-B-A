import React from 'react';
import './SideBar.css';
import SelectCmp, { launchSelectCmp } from './SelectCmp/SelectCmp';
import CreateCmp, { launchCreateCmp } from './CreateCmp/CreateCmp';
import ShutCmp, { launchShutCmp } from './ShutCmp/ShutCmp';

const SideBar = () => {
  return (
    <div className="sidenav">
      <p onClick={() => {launchSelectCmp()}} >Select Cmp</p>
      <p onClick={() => {launchCreateCmp()}} >Create Cmp</p>
      <p onClick={() => {launchShutCmp()}} >Shut Cmp</p>
      <p >Date</p>
      <p >Period</p>
      <SelectCmp />
      <CreateCmp />
      <ShutCmp />
    </div>
  );
};

export default SideBar;