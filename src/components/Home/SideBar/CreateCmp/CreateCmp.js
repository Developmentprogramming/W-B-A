import React from 'react';
import './CreateCmp.css';
import Country from './Country/Country';
import CurrencySymbol from './CurrencySymbol/CurrencySymbol';

const launchCreateCmp = () => {
  let createcmp = document.getElementsByClassName('create-cmp-container')[0];
  createcmp.style.display = 'block';
}

const closeCreateCmp = () => {
  let createcmp = document.getElementsByClassName('create-cmp-container')[0];
  createcmp.style.display = 'none';
}

const getDate = () => {
  let date = new Date();
  return (`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`);
}

class CreateCmp extends React.Component {
  constructor() {
    super()
    this.state = {
      currencySymbols: [],
      countriesList: [],
      Cmp: {
        cmpName: '',
        financialDate: ' ',
        booksBeginDate: ' '
      }
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(body => {
      this.setState({countriesList: body});
    })
    .catch(err => console.log(err))

    fetch('https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json')
    .then(res => res.json())
    .then(data => {
      let values = Object.keys(data).map((value, i) => {
        return data[value];
      })
      this.setState({currencySymbols: values});
    })
    .catch(err => {console.log(err)})
  }

  onfinancialDateChange = (event) => {
    this.setState({Cmp: {financialDate: event.target.value}});
  }

  onbooksBeginDateChange = (event) => {
    this.setState({Cmp: {booksBeginDate: event.target.value}});
  }

  onCompanyNameChange = (event) => {
    this.setState({Cmp: {cmpName: event.target.value}});
  }

  render() {
    return (
      <div className='w3-modal create-cmp-container'>
        <div className='w3-modal-content w3-animate-left' style={{borderRadius: '5px 5px 0px 0px'}}>
          <header className='w3-container create-cmp-header header-container'>
            <span onClick={() => {closeCreateCmp()}} className='close'>&times;</span>
            <h1>Company Creation</h1>
          </header>
  
          <div className='w3-container create-cmp-content'>
            <div>
              <h3>Company Name</h3>
              <input onChange={this.onCompanyNameChange} type='text' placeholder='Name' id='dialog-input' />
            </div>
            <div className='sep'>
              <label>Primary Mailing Details</label>
            </div>
            <div>
              <h3>Mailing Name</h3>
              <input type='text' placeholder='Mailing Name' id='dialog-input' />
            </div>
            <div>
              <h3>Country</h3>
              <div className="select-dropdown">
                <select>
                  {
                    this.state.countriesList.map((country, i) => {
                      return <Country countryName={country.name} timeZone={country.timezones[0]} key={i} />
                    })
                  }
                </select>
              </div>
            </div><br /><br />
            <div className='sep'>
              <label>contact Details</label>
            </div>
            <div>
              <h3>Phone Number</h3>
              <input type='tel' placeholder='Phone Number' id='dialog-input' />
            </div>
            <div>
              <h3>Mobile Number</h3>
              <input type='tel' placeholder='Mobile Number' id='dialog-input' />
            </div>
            <div>
              <h3>Email</h3>
              <input type='text' placeholder='Email' id='dialog-input' />
            </div>
            <div>
              <h3>Website(optional)</h3>
              <input type='text' placeholder='Website' id='dialog-input' />
            </div>
            <div style={{textAlign: 'center', borderTop: '1px solid #353b48', marginTop: '10px', paddingTop: '10px'}}>
              <label>Books and Financial Year Details</label>
            </div>
            <div>
              <h3>Financial year begins from</h3>
              <input type='date' placeholder='Date' id='dialog-input' value={this.state.Cmp.financialDate} onChange={this.onfinancialDateChange} />
            </div>
            <div>
              <h3>Books beginning from</h3>
              <input type='date' placeholder='Date' id='dialog-input' value={this.state.Cmp.booksBeginDate} onChange={this.onbooksBeginDateChange} />
            </div>
            <div className='sep'>
              <label>Base Currency Information</label>
            </div>
            <div>
              <h3>Base currency symbol</h3>
              <div className='select-dropdown'>
                <select>
                  {
                    this.state.currencySymbols.map((currency, i) => {
                      return <CurrencySymbol symbol={currency.symbol} name={currency.name} key={i} />
                    })
                  }
                </select>
              </div>
            </div>
          </div>
  
          <footer className='w3-container create-cmp-footer'>
            <button className='dialog-button'>Create</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default CreateCmp;
export {
  launchCreateCmp
}