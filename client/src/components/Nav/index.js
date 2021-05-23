import React from "react";
import { Animated } from 'react-animated-css';


function Nav() {
  return (
		<nav className='navbar navbar-expand navbar-dark bg-primary p-2 mb-2'>
			<a
				className='navbar-brand bg-transparent'
				href='https://mernbooks.herokuapp.com'
			>
				<Animated
					animationIn='bounceInLeft'
					isVisible={true}
					animationInDelay={500}
				>
					<i className='text-2xl fas fa-passport'></i>
					<i className='text-xl'> MERN&middot;books </i>
				</Animated>
			</a>
			<a className='nav-item nav-link disabled bg-transparent'>
				<Animated
					animationIn='bounceInRight'
					isVisible={true}
					animationInDelay={1000}
				>
					<i className='text-xl fas fa-info-circle'></i>
					<i>
						<small> mongoDB, express, React, nodejs</small>
					</i>
				</Animated>
			</a>
		</nav>
	);
}

export default Nav;
