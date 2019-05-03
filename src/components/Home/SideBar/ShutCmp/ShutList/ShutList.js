import React from 'react';

const ShutList = ({ name, email }) => {
  return (
    <div className='w3-panel w3-border' style={{margin: '10px 0px'}}>
      <li className="w3-large w3-padding-small">{name}</li>
      <label>{email}</label>
      <button id='shut-cmp' className='dialog-button'>Alter</button>
      <button id='shut-cmp' className='dialog-button'>Shut</button>
    </div>
  )
}

export default ShutList;
