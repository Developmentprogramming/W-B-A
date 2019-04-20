import React from 'react';
import './SideBar.css';
import SelectCmp, { launchSelectCmp } from './SelectCmp/SelectCmp';
import CreateCmp, { launchCreateCmp } from './CreateCmp/CreateCmp';

const SideBar = () => {
  return (
    <div className="sidenav">
      <p onClick={() => launchSelectCmp()} >Select Cmp</p>
      <p onClick={() => {launchCreateCmp()}} >Create Cmp</p>
      <p >Clients</p>
      <p >Contact</p>
      <SelectCmp />
      <CreateCmp />
    </div>
  );
};

export default SideBar;