import React from 'react';

const getDate = () => {
  let date = new Date();
  return (`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`);
}

const CurrentDate = () => {
  return (
    <div className='date-container'>
      <label>{getDate()}</label>
    </div>
  );
;}

export default CurrentDate;