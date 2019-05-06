import React from 'react';
import './CurrentDate.css';

const getDate = () => {
  let date = new Date();
  return (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

const launchDate = () => {
  let date = document.getElementsByClassName('main-date-container')[0];
  date.style.display = 'block';
}

const closeDate = () => {
  let date = document.getElementsByClassName('main-date-container')[0];
  date.style.display = 'none';
}

class CurrentDate extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: ''
    }
  };

  componentDidMount() {
    let currentdate = getDate();
    this.setState({currentDate: currentdate});
  };

  setNewDate = (event) => {
    let changeDateInput = document.getElementsByClassName('change-date-input')[0];
    this.setState({currentDate: changeDateInput.value});
  };

  render() {
    return (
      <div className='w3-modal main-date-container'>
        <div className='w3-modal-content w3-animate-left'>
          <header className='w3-container header-container'>
            <span onClick={() => {closeDate()}} className='close'>&times;</span>
            <h1>Date</h1>
          </header>

          <div className='w3-container date-content'>
            <div style={{textAlign: 'center'}}>
              <div className='date-container'>
                <label>Current Date</label><br />
                <label>{this.state.currentDate}</label>
              </div>
            </div>
            <div className='date-content-value'>
              <h3>Change Date</h3>
              <input className='change-date-input' type='date' id='dialog-input' placeholder='Change date' />
            </div>
          </div>

          <footer className='w2-container create-cmp-footer'>
            <button className='dialog-button' onClick={this.setNewDate} >Save</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default CurrentDate;
export {
  launchDate,
  getDate
}
