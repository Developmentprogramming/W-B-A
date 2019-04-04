import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
	return (
		<div className='container'>
			 <div>
				  <h2>Register</h2>
				  <div className="input-container">
				    <i className="fas fa-signature icon"></i>
				    <input className="input-field" type="text" placeholder="Fullname" name="usrnm" />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-user icon"></i>
				    <input className="input-field" type="text" placeholder="Username" name="usrnm" />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-envelope icon"></i>
				    <input className="input-field" type="text" placeholder="Email" name="email" />
				  </div>

				  <div className="input-container">
				    <i className="fa fa-key icon"></i>
				    <input className="input-field" type="password" placeholder="Password" name="psw" />
				  </div>

				  <button onclick={() => {onRouteChange('home')}} type="submit" className="btn">Register</button>
			</div> 
		</div>
	)
}

export default Register;