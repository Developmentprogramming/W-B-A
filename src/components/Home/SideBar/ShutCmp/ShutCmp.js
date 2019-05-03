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
      listCmp:
      [
        {
        cmpName: 'Big Cmp',
        email: 'something@gmail.com'
        },
        {
        cmpName: 'Cmp 1',
        email: 'john@gmail.com'
        },
        {
          cmpName: 'Cmp 2',
          email: 'something@gmail.com'
        },
        {
          cmpName: 'Cmp 3',
          email: 'something@gmail.com'
        },
        {
          cmpName: 'Cmp 4',
          email: 'something@gmail.com'
        },
        {
          cmpName: 'Cmp 5',
          email: 'something@gmail.com'
        },
        {
          cmpName: 'Cmp 6',
          email: 'something@gmail.com'
        },
        {
          cmpName: 'Cmp 7',
          email: 'something@gmail.com'
        }
      ]
    }
  }


  render() {
    return (
      <div className='w3-modal shut-cmp-container'>
        <div className='w3-modal-content w3-animate-left' style={{borderRadius: '5px 0px'}}>
          <header className='w3-container shut-header header-container'>
            <span onClick={() => {closeShutCmp()}} className='close'>&times;</span>
            <h1>Alter Company</h1>
          </header>

          <div className='w3-container shut-content'>
            <div className='w3-ul' style={{width: '100%', overflowY: 'auto', position: 'relative'}}>
              {
                this.state.listCmp.map((name, i) => {
                  return <ShutList name={name.cmpName} key={i} email={name.email} />
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
