import React from 'react';
import './InfoBar.css';

const closeInfoBar = () => {
  let acc = document.getElementsByClassName('closebtn');
  for (let i = 0;i <= acc.length - 1; i++) {
    acc[i].parentElement.style.opacity = '0';
    setTimeout(() => {acc[i].parentElement.style.display = 'none'}, 600);
  }
}

const InfoBar = () => {
  return (
    <div className="infobar">
      <span className="closebtn" onClick={() => {closeInfoBar()}} >&times;</span>
      <p id='infobar-text'>This is an alert box.</p>
    </div> 
  );
}

export default InfoBar;