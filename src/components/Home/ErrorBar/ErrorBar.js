import React from 'react';
import './ErrorBar.css';

const closeErrorBar = () => {
  let acc = document.getElementsByClassName('closebtn');
  acc[0].parentElement.style.opacity = '0';
  setTimeout(() => {
    acc[0].parentElement.style.display = 'none';
  }, 600);
}

const ErrorBar = () => {
  return (
    <div id='alertContainer'>
      <div className="alert" >
        <span className="closebtn" onClick={() => {closeErrorBar()}} >&times;</span>
        <label id='box-text' >This is the alert Box</label>
      </div>
    </div>
  )
}

export default ErrorBar;