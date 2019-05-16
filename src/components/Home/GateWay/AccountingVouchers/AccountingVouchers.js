import React from 'react';
import './AccountingVouchers.css';
import menu from './menu.png';
import SideBar, { openNav } from './SideBar/SideBar';
import { getDate } from '../../SideBar/CurrentDate/CurrentDate';

const launchAccountingVouchers = () => {
  let av = document.getElementsByClassName('accounting-voucher')[0];
  av.style.display = 'block';
}

const closeAccountingVouchers = () => {
  let av = document.getElementsByClassName('accounting-voucher')[0];
  av.style.display = 'none';
}

class AccountingVouchers extends React.Component {
  componentDidMount() {
    let currentDate = getDate();
    let dateContainer = document.getElementById('date');
    dateContainer.textContent = currentDate;
  }

  render() {
    return (
      <div className='w3-modal accounting-voucher'>
        <div className='w3-modal-content w3-animate-opacity' style={{width: '100%', height: '100%'}}>
          <header className='w3-container header-container'>
            <span onClick={() => {closeAccountingVouchers()}} className='close'>&times;</span>
            <span onClick={() => {openNav()}} style={{float: 'left', marginLeft: '10px', marginTop: '10px', cursor: 'pointer'}} ><img src={menu} alt='' /></span>
            <h1>Accounting Voucher Creation</h1>
          </header>

          <div className='w3-container create-cmp-content' style={{width: '100%', height: '82%', overflowY: 'auto'}}>
            <div>
              <h3>Type: <label id='type-container'></label> <label id='date'></label></h3>
            </div>
          </div>

          <footer className='w3-container create-cmp-footer'>
            <button className='dialog-button'>Save</button>
          </footer>
          <SideBar />
        </div>
      </div>
    )
  }
}

export default AccountingVouchers;
export {
  launchAccountingVouchers
}
