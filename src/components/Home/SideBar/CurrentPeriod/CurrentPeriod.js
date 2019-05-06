import React from 'react';
import './CurrentPeriod.css';
import { getDate } from '../CurrentDate/CurrentDate';

const closePeriod = () => {
  let period = document.getElementsByClassName('period-container')[0];
  period.style.display = 'none';
}

const launchPeriod = () => {
  let period = document.getElementsByClassName('period-container')[0];
  period.style.display = 'block';
}

const getPeriodTo = () => {
  let date = new Date();
  return (`${date.getUTCFullYear()+1}-${date.getMonth()+1}-${date.getDate()}`);
}

class CurrentPeriod extends React.Component {
  constructor() {
    super();
    this.state = {
      periodFrom: getDate(),
      periodTo: getPeriodTo()
    }
  }

  setNewPeriod = () => {
    let periodFrom = document.getElementsByClassName('period-from')[0].value;
    let periodTo = document.getElementsByClassName('period-to')[0].value;
    this.setState({periodFrom: periodFrom});
    this.setState({periodTo: periodTo});
  }

  render() {
    return (
      <div className='w3-modal period-container'>
        <div className='w3-modal-content w3-animate-left'>
          <header className='w3-container header-container'>
            <span onClick={() => {closePeriod()}} className='close'>&times;</span>
            <h1>Period</h1>
          </header>

          <div className='w3-container period-content'>
            <div style={{textAlign: 'center'}}>
              <div className='period-container-value'>
                <label>Current Period</label><br />
                <label>{this.state.periodFrom}</label><br />
                <label>To</label><br />
                <label>{this.state.periodTo}</label>
              </div>
            </div>
            <div className='date-content-value'>
              <h3>Period From</h3>
              <input className='period-from' type='date' id='dialog-input' placeholder='Period From' />
            </div>
            <div className='date-content-value'>
              <h3>Period To</h3>
              <input className='period-to' type='date' id='dialog-input' placeholder='Period To' />
            </div>
          </div>

          <footer className='w3-container create-cmp-footer'>
            <button className='dialog-button' onClick={this.setNewPeriod}>Save</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default CurrentPeriod;
export {
  launchPeriod
}
