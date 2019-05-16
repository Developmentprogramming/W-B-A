import React from 'react';
import './Register.css';
import { toggleShowButton, focusPasswdInput } from'../Login/Login';

const Register = () => {
  return (
    <div className='registercontainer'>
      <h2>Register and Leave accounting on us</h2>

      <div className="input-container">
        <i className="fas fa-signature icon"></i>
        <input maxLength='12' minLength='5' className="input-field" type="text" placeholder="Fullname" name="fllnm" />
      </div>

      <div className="input-container">
        <i className="fa fa-user icon"></i>
        <input maxLength='8' minLength='5' className="input-field" type="text" placeholder="Username" name="usrnm" />
      </div>

      <div className="input-container">
        <i className="fa fa-envelope icon"></i>
        <input className="input-field" type="email" placeholder="Email" name="email" />
      </div>

      <div className="input-container">
        <i className="fa fa-key icon"></i>
        <input maxLength='12' minLength='8' id='passwd' type="password" placeholder="Password" name="psw" />
        <button onFocus={() => {focusPasswdInput()}} onClick={() => {toggleShowButton()}} className='fas fa-eye icon' id='show-button' ></button>
      </div>

      <button type="submit" className="btn">Register</button>
    </div>
  )
}

export default Register;
