import React from 'react';
import GroupList from './GroupList/GroupList';
import Country from '../../../SideBar/CreateCmp/Country/Country';

const launchCreate = () => {
  let create = document.getElementsByClassName('create-container')[0];
  create.style.display = 'block';
}

const closeCreate = () => {
  let create = document.getElementsByClassName('create-container')[0];
  create.style.display = 'none';
}

const groupNames =
[
  'Back Accounts',
  'Branch / Divisions',
  'Capital Account',
  'Cash in Hand',
  'Current Assets',
  'Current Liabilities',
  'Deposits (Asset)',
  'Direct Expenses',
  'Direct Incomes',
  'Duties & Taxes',
  'Expenses (Direct)',
  'Expenses (Indirect)',
  'Fixed Assets',
  'Incomes (Direct)',
  'Incomes (Indirect)',
  'Indirect Expenses',
  'Investments',
  'Loans & Advances (Asset)',
  'Loans (Liability)',
  'Misc. Expenses (ASSET)',
  'Provisions',
  'Purchase Accounts',
  'Reserves & Surplus',
  'Retained Earnings',
  'Sales Accounts',
  'Secured Loans',
  'Stock in Hand',
  'Sundry Creditors',
  'Sundry Debitors',
  'Suspense A/c',
  'Unsecured Loans'
]

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesList: []
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(body => {
      this.setState({countriesList: body});
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='w3-modal create-container' style={{display: 'none', textAlign: 'left'}}>
        <div className='w3-modal-content w3-animate-opacity'>
          <header className='w3-container header-container'>
            <span onClick={() => {closeCreate()}} className='close'>&times;</span>
            <h1>Ledger Creation</h1>
          </header>

          <div className='w3-container create-cmp-content'>
            <div>
              <h3>Name</h3>
              <input type='text' placeholder='Name' id='dialog-input' />
            </div>
            <div>
              <h3>Under</h3>
              <div className='select-dropdown'>
                <select>
                  {
                    groupNames.map((name, i) => {
                      return <GroupList name={name} key={i} />
                    })
                  }
                </select>
              </div>
            </div><br /><br />
            <div className='sep'>
              <label>Mailing Details</label>
            </div>
            <div>
              <h3>Name</h3>
              <input type='text' placeholder='Mailing Name' id='dialog-input' />
            </div>
            <div>
              <h3>Country</h3>
              <div className='select-dropdown'>
                <select>
                  {
                    this.state.countriesList.map((country, i) => {
                      return <Country countryName={country.name} timeZone={country.timezones[0]} key={i} />
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
    )
  }
}

export default Create;
export {
  launchCreate
}
