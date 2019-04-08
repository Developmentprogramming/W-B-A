import React from 'react';
import './NavigationBar.css';
import backButton from '../../../components/NavigationBar/back-button.png';

const NavigationBar = ({ onRouteChange }) => {
	return (
		<div id='container'>
			<nav>
			 	<div id='line' >
					<button onClick={() => {onRouteChange('login')}} id='back-button' ><img alt='back-button' src={backButton} /></button>
			 		<label id='SignOut' >LogOut</label>
					<div id='userIcon'>
						<div id='userIconContainer' >
							<i className='fa fa-user' id='UserIcon' ></i><br />
							<label id='userName' >User's Name</label>
						</div>
					</div>
			 	</div>
			</nav>
		</div> 
	)
}

export default NavigationBar;