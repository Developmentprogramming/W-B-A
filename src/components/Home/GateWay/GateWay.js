import React from 'react';
import './GateWay.css';
import Item from './Item/Item';

class GateWay extends React.Component {
  constructor() {
    super();
    this.state = {
      Company: '',
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
      ]
    }
  }

  render() {
    return (
      <div className='gateway'>
        <h1>GateWay</h1>
        <div className='selected-cmp'>
          <h3>Company -> <label id='current-cmp'>{this.state.Company}</label></h3>
        </div>
        <div className='gateway-header'>
          <label>Masters</label>
        </div>
        {
          this.state.Masters.map((item, i) => {
            return <Item name={item.name} key={i} />
          })
        }
        <div className='gateway-header'>
          <label>Transactions</label>
        </div>
        {
          this.state.Transactions.map((item, i) => {
            return <Item name={item.name} key={i} />
          })
        }
      </div>
    );
  }
}

export default GateWay;
