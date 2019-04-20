import React from 'react';

const List = ({ name }) => {
  return (
    <div id='list' className='w3-panel w3-border' style={{margin: '10px 0px'}}>
      <li className="w3-large w3-padding-small">{name}</li>
      <label>Email</label>
    </div>
  );
};

export default List;