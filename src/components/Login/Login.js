import React from 'react';
import './Login.css';

const showButtonClick = () => {
	let x = document.getElementById('showButton');
	let y = document.getElementById('passwd');
	y.focus();
	if (x.className === 'fas fa-eye icon' && y.type === 'password') {
		x.className = 'fas fa-eye-slash icon';
		y.type = 'text';
	} else if (x.className === 'fas fa-eye-slash icon' && y.type === 'text') {
		x.className = 'fas fa-eye icon';
		y.type = 'password';
	}
}

const Login = ({ onRouteChange }) => {
	return (
		<div className='container'>
			 <div>
				  <h2>Login</h2>

				  <div className="input-container">
				    <i className="fa fa-user icon"></i>
				    <input id='username' className="input-field" type="text" placeholder="Username" name="usrnm" />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-key icon"></i>
				    <input id='passwd' className="input-field" type="password" placeholder="Password" name="psw" />
						<i onClick={() => {showButtonClick()}} className='fas fa-eye icon' id='showButton'></i>
				  </div>

				  <button onClick={() => {onRouteChange('home')}}  type="submit" className="btn">Login</button>
				  <div id='main-container'> <p id='sep' ></p> <p id='or' > or </p> <p id='sep' ></p> </div>
				  <button onClick={() => {onRouteChange('register')}} type="button" className="btn">Register</button>
			</div> 
		</div>
	)
}

export default Login;