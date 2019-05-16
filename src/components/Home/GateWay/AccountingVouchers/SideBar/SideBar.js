import React from 'react';
import './SideBar.css';
import { launchDate } from '../../../SideBar/CurrentDate/CurrentDate';

const openNav = () => {
  document.getElementById("accountingVoucherSideBar").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("accountingVoucherSideBar").style.width = "0";
}

let self;
class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    }
  }

  selectedTypes = (value) => {
    this.setState({selected: value});
    let typeContainer = document.getElementById('type-container');
    typeContainer.textContent = value;
    closeNav();
  }

  render() {
    self = this.state;
    return (
      <div id='accountingVoucherSideBar' className='sidenav sidenavedit'>
        <p className="closebtn" onClick={() => {closeNav()}}>&times;</p>
        <div>
          <label>Preference</label>
        </div>
        <p onClick={() => {launchDate()}}>Date</p>
        <div>
          <label>Voucher Types</label>
        </div>
        <p onClick={() => {this.selectedTypes('Contra')}}>Contra</p>
        <p onClick={() => {this.selectedTypes('Payment')}}>Payment</p>
        <p onClick={() => {this.selectedTypes('Receipt')}}>Receipt</p>
        <p onClick={() => {this.selectedTypes('Journal')}}>Journal</p>
        <p onClick={() => {this.selectedTypes('Sales')}}>Sales</p>
        <p onClick={() => {this.selectedTypes('Purchase')}}>Purchase</p>
      </div>
    )
  }
}

export default SideBar;
export {
  openNav,
  self
}
