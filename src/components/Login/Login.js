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

const checkUandP = ( onRouteChange ) => {
	let closebutton = document.getElementsByClassName('closebtn');
	let boxText = document.getElementById('box-text');
	const username = document.getElementById('username').value;
	const password = document.getElementById('passwd').value;
	if (username === 'parth' && password === '#Main_user#') {
		onRouteChange('home');
	} else {
		boxText.textContent = 'Error: Username or Password does\'nt match, Please try again';
		closebutton[0].parentElement.style.display = 'block';
		closebutton[0].parentElement.style.opacity = '0.83';
	}
}

const Login = ({ onRouteChange }) => {
	return (
		<div className='container'>
			 <div>
				  <h2>Login</h2>

				  <div className="input-container">
				    <i className="fa fa-user icon"></i>
				    <input id='username' className="input-field" type="text" placeholder="Username" name="usrnm" required />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-key icon"></i>
				    <input id='passwd' className="input-field" type="password" placeholder="Password" name="psw" required />
						<i onClick={() => {showButtonClick()}} className='fas fa-eye icon' id='showButton'></i>
				  </div>

				  <button onClick={() => {checkUandP(onRouteChange);}}  type="submit" className="btn">Login</button>
				  <div id='main-container'> <p></p> <p id='or' > or </p> <p></p> </div>
				  <button onClick={() => {onRouteChange('register')}} type="button" className="btn">Register</button>
			</div> 
		</div>
	)
}

export default Login;