import React from 'react';
import './Login.css';

const toggleShowButton = () => {
  let showButton = document.getElementById('show-button');
  let passwdinput = document.getElementById('passwd');
  passwdinput.focus();
  if (showButton.className === 'fas fa-eye icon' && passwdinput.type === 'password') {
    showButton.className = 'fas fa-eye-slash icon';
    passwdinput.type = 'text';
  } else {
    showButton.className = 'fas fa-eye icon';
    passwdinput.type = 'password';
  }
}

const focusPasswdInput = () => {
  let passwdinput = document.getElementById('passwd');
  passwdinput.focus();
}

// Using the infobar
// const test = () => {
//   document.getElementById('infobar-text').parentElement.style.background = '#4CAF50';
//   document.getElementById('infobar-text').textContent = 'You clicked the Login button';
//   document.getElementById('infobar-text').parentElement.style.display = 'inline';
//   document.getElementById('infobar-text').parentElement.style.opacity = '0.83';
// }

const Login = ({ onRouteChange }) => {
  return (
    <div className='logincontainer'>
      <h2>Login</h2>
      <div className="input-container">
        <i className="fa fa-user icon"></i>
        <input className="input-field" type="text" placeholder="Username" name="usrnm" />
      </div>

      <div className="input-container">
        <i className="fa fa-key icon"></i>
        <input id='passwd' type="password" placeholder="Password" name="psw" />
        <button onFocus={() => {focusPasswdInput()}} onClick={() => {toggleShowButton()}} className='fas fa-eye icon' id='show-button' ></button>
      </div>

      <button onClick={() => {onRouteChange('home')}} type="submit" className="btn">Login</button>
      <p> or </p>
      <button className='btn' onClick={() => {onRouteChange('register');}} >Register</button>
    </div>
  )
}

export default Login;
export {
  toggleShowButton,
  focusPasswdInput
};
