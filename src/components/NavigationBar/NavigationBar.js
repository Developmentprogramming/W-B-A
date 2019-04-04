import React from 'react';
import './NavigationBar.css';
import backButton from './back-button.png';

const NavigationBar = ({ backButtonShow, onRouteChange }) => {
	if(backButtonShow) {
		return (
			<div>
				<nav>
					<div id='filled-nav' ><label id='label' >WBA</label></div>
					<button onClick={() => {onRouteChange('login')}} id="back-button" ><img alt='back-button' src={backButton} /></button>
				</nav>
			</div>
		)
	} else {
		return (
			<div>
				<nav>
					<div id='empty-nav' ><label id='label' >WBA</label></div>
				</nav>
			</div>
		)
	}
}

export default NavigationBar;