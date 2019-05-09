import React from 'react';
import Menu from '../Menu/Menu';
import AccountInfo from '../AccountInfo/AccountInfo';
import AccountingVouchers from '../AccountingVouchers/AccountingVouchers';
import Ledgers from '../Ledgers/Ledgers';

const Switch = (gateWayRouteChange, self) => {
  if(self.state.route === 'gateway')
    return <Menu gateWayRouteChange={gateWayRouteChange} />
  else if(self.state.route === 'Accounts Info')
    return <AccountInfo gateWayRouteChange={gateWayRouteChange} />
  else if(self.state.route === 'Accounting Vouchers')
    return <AccountingVouchers gateWayRouteChange={gateWayRouteChange} />
  else if(self.state.route === 'Ledgers')
    return <Ledgers gateWayRouteChange={gateWayRouteChange} />
  else
    return <Menu gateWayRouteChange={gateWayRouteChange} />
}

const Route = ({ gateWayRouteChange, self }) => {
  return (
    <div>
    {
      Switch(gateWayRouteChange, self)
    }
    </div>
  );
}

export default Route;
