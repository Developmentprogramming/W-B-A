import React from 'react';
import './ShutCmp.css';
import ShutList from './ShutList/ShutList';

const launchShutCmp = () => {
  let shutCmp = document.getElementsByClassName('shut-cmp-container')[0];
  shutCmp.style.display = 'block';
}

const closeShutCmp = () => {
  let shutCmp = document.getElementsByClassName('shut-cmp-container')[0];
  shutCmp.style.display = 'none';
}

class ShutCmp extends React.Component {
  constructor() {
    super();
    this.state= {
      listCmp: ['Big Cmp' ,'Cmp 1', 'Cmp 2', 'Cmp 3', 'Cmp 4', 'Cmp 5', 'Cmp 6', 'Cmp 7', 'Cmp 8', 'Cmp 9', 'Cmp 10', 'Cmp 11', 'Cmp 12']
    }
  }


  render() {
    return (
      <div className='w3-modal shut-cmp-container'>
        <div className='w3-modal-content w3-animate-left' style={{borderRadius: '5px 0px'}}>
          <header className='w3-container shut-header header-container'>
            <span onClick={() => {closeShutCmp()}} className='close'>&times;</span>
            <h1>Shut Company</h1>
          </header>
  
          <div className='w3-container shut-content'>
            <div className='w3-ul' style={{width: '100%', overflowY: 'auto', position: 'relative'}}>
              {
                this.state.listCmp.map((name, i) => {
                  return <ShutList name={name} key={i} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShutCmp;
export {
  launchShutCmp
}