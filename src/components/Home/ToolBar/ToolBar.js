import React from 'react';
import './ToolBar.css';
import Cmp from './Cmp/Cmp';

class ToolBar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCmp: '',
      cmpList: ['Cmp 1', 'Cmp 2', 'Cmp 3', 'Cmp 4', 'Cmp 5', 'Cmp 6', 'Cmp 7', 'Cmp 8', 'Cmp 9', 'Cmp 10'],
    }
  }

  render(){
    const self = this;
    return (
      <div id='container' >
        <div className="navbar">
          <div className='dropdown'>
            <button className='dropbtn' ><i className='fab fa-stripe-s' ></i>elect Cmp <i className='fa fa-caret-down'></i></button>
            <div className='dropdown-content' >
              {
                this.state.cmpList.map((cmp, i) => {
                  return <Cmp key={i} id={i} cmp={cmp} self={self} />
                })
              }
            </div>
          </div>
          <p ><i className="fas fa-window-close"></i> Shut Cmp</p>
          <p ><i className='fas fa-edit'></i>Alter Cmp</p>
          <p ><i className="far fa-calendar-alt"></i> Date</p>
          <p ><i className="fas fa-business-time"></i> Period</p>
          <div id='selectedCmpContainer'>
            <label id='selectedCmp' >Current Cmp: {this.state.currentCmp}</label>
          </div>
        </div>
      </div>
    )
  }  
};

export default ToolBar;