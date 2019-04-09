import React from 'react';
import './Register.css';

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

const Register = ({ onRouteChange }) => {
	return (
		<div className='container'>
			 <div>
				  <h2>Register and Leave accounting on us</h2>
				  <div className="input-container">
				    <i className="fas fa-signature icon"></i>
				    <input id='fullname' className="input-field" type="text" placeholder="Fullname" name="fllnm" required />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-user icon"></i>
				    <input id='username' className="input-field" type="text" placeholder="Username" name="usrnm" required />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-envelope icon"></i>
				    <input className="input-field" type="text" placeholder="Email" name="email" required />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-key icon"></i>
				    <input id='passwd' className="input-field" type="password" placeholder="Password" name="psw" required />
						<i onClick={() => {showButtonClick()}} className='fas fa-eye icon' id='showButton'></i>
				  </div>

				  <button onClick={() => {onRouteChange('home')}} type="submit" className="btn">Register</button>
			</div> 
		</div>
	)
}

export default Register;