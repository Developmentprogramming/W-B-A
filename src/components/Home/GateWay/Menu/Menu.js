import React from 'react';
import './Menu.css';
import Item from '../Item/Item';
import arrow from '../right-arrow.png';
import { self } from '../../SideBar/SelectCmp/SelectCmp';
import { openNav } from '../../SideBar/SideBar';
import menu from './gateway-menu.png';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      Masters:
      [
        {
          name: 'Accounts Info',
        }
      ],
      Transactions:
      [
        {
          name: 'Accounting Vouchers',
        }
      ],
      Reports:
      [
        {
          name: 'Balance Sheet'
        },
        {
          name: 'Display',
        }
      ]
    }
  }

  render() {
    return (
      <div className='gateway'>
        <p onClick={() => {openNav()}} className='sidenav-menu' ><img src={menu} alt='menu' /></p>
        <h1>GateWay</h1>
        <div className='selected-cmp'>
          <h3>Company<img src={arrow} alt='arrow' /> <label id='current-cmp'>{self.state.company}</label> </h3>
        </div>
        <div className='gateway-header'>
          <label>Masters</label>
        </div>
        {
          this.state.Masters.map((item, i) => {
            return <Item name={item.name} key={i} gateWayRouteChange={this.props.gateWayRouteChange} />
          })
        }
        <div className='gateway-header'>
          <label>Transactions</label>
        </div>
        {
          this.state.Transactions.map((item, i) => {
            return <Item name={item.name} key={i} gateWayRouteChange={this.props.gateWayRouteChange} />
          })
        }
        <div className='gateway-header'>
          <label>Reports</label>
        </div>
        {
          this.state.Reports.map((item, i) => {
            return <Item name={item.name} key={i} gateWayRouteChange={this.props.gateWayRouteChange} />
          })
        }
      </div>
    );
  }
}

export default Menu;
export {
  menu
}
