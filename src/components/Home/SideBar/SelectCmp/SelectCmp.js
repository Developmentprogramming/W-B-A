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

let self;

class SelectCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
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
        },
        {
          cmpName: 'The huge company names',
          email: 'something@gmail.com'
        }
      ]
    }
  }

  render() {
    self = this;
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
                  return <List key={i} name={name.cmpName} email={name.email} self={self} id={i} />
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
  launchSelectCmp,
}
