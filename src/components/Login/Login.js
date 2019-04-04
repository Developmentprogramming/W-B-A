import React from 'react';
import './Login.css';

const Login = ({ onRouteChange }) => {
	return (
		<div className='container'>
			 <div>
				  <h2>Login</h2>

				  <div className="input-container">
				    <i className="fa fa-user icon"></i>
				    <input className="input-field" type="text" placeholder="Username" name="usrnm" />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-key icon"></i>
				    <input className="input-field" type="password" placeholder="Password" name="psw" />
				  </div>

				  <button onClick={() => {onRouteChange('home')}}  type="submit" className="btn">Login</button>
				  <div id='main-container'> <p id='sep' ></p> <p id='or' >or</p> <p id='sep' ></p> </div>
				  <button onClick={() => {onRouteChange('register')}} type="button" className="btn">Register</button>
			</div> 
		</div>
	)
}

export default Login;