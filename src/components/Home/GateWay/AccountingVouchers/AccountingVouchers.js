import React from 'react';
import backButton from '../back-button-black.png';
// import './AccountingVouchers.css';

const AccountingVouchers = ({ gateWayRouteChange }) => {
  return (
    <div className='gateway accounting-voucher'>
      <button onClick={() => {gateWayRouteChange('gateway')}} className='button'><img src={backButton} alt='backButton' /></button>
      <h1>Accounting Vouchers</h1>
    </div>
  )
}

export default AccountingVouchers;
