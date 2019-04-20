import React from 'react';
import './SelectCmp.css';
import List from './List/List';

const launchSelectCmp = () => {
  let container = document.getElementsByClassName('select-cmp-container')[0];
  container.style.display = 'block';
}

const closeSelectCmp = () => {
  let container = document.getElementsByClassName('select-cmp-container')[0];
  container.style.display = 'none';
}

class SelectCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      listCmp: ['Big Cmp' ,'Cmp 1', 'Cmp 2', 'Cmp 3', 'Cmp 4', 'Cmp 5', 'Cmp 6', 'Cmp 7', 'Cmp 8', 'Cmp 9', 'Cmp 10', 'Cmp 11', 'Cmp 12']
    }
  }

  render() {
    return (
      <div className='w3-modal select-cmp-container'>
        <div className='w3-modal-content w3-animate-left' style={{borderRadius: '5px 5px 0px 0px'}}>
          <header className='w3-container header-container' style={{borderRadius: '5px 5px 0px 0px'}}>
            <span onClick={() => closeSelectCmp()} className='close'>&times;</span>
            <h1>Select Company</h1>
          </header>
          
          <div className='w3-container content-container'>
            <div className='w3-ul' style={{width: '100%', overflowY: 'auto', position: 'relative'}}>
              {
                this.state.listCmp.map((name, i) => {
                  return <List key={i} name={name} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCmp;
export {
  launchSelectCmp
}