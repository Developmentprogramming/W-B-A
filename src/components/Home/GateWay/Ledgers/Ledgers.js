import React from 'react';
import Item from '../Item/Item';
import backButton from '../back-button-black.png';

class Ledgers extends React.Component {
  constructor() {
    super();
    this.state = {
      Ledgers:
      [
        {
          name: 'Create'
        },
        {
          name: 'Display'
        },
        {
          name: 'Alter'
        }
      ],
    }
  }

  backButtonClick = () => {
    let gateWayRouteChange = this.props.gateWayRouteChange;
    gateWayRouteChange('Accounts Info');
  }

  render() {
    return (
      <div className='gateway'>
        <button onClick={() => {this.backButtonClick();}} className='button'><img src={backButton} alt={'back-button'} /></button>
        <h1>Ledgers</h1>
        <div className='gateway-header'>
          <label>Single Ledgers</label>
        </div>
        <div>
          {
            this.state.Ledgers.map((item, i) => {
              return <Item name={item.name} gateWayRouteChange={this.props.gateWayRouteChange} key={i} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Ledgers;
