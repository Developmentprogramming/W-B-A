import React from 'react';
import './SideBar.css';

const openNav = () => {
  document.getElementById("accountingVoucherSideBar").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("accountingVoucherSideBar").style.width = "0";
}

class SideBar extends React.Component {
  render() {
    return (
      <div id='accountingVoucherSideBar' className='sidenav sidenavedit'>
        <p className="closebtn" onClick={() => {closeNav()}}>&times;</p>
        <p>Date</p>
        <div>
          <label>Voucher Types</label>
        </div>
        <p>Contra</p>
        <p>Payment</p>
        <p>Receipt</p>
        <p>Journal</p>
        <p>Sales</p>
        <p>Purchase</p>
      </div>
    )
  }
}

export default SideBar;
export {
  openNav
}
