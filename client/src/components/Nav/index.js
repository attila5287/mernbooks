import React from "react";
import { Animated } from 'react-animated-css';


function Nav() {
  return (
		<nav className='navbar navbar-expand navbar-dark bg-transparent py-0 my-2'>
			<a
				className='navbar-brand bg-secondary px-3'
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
					<i className='text-lg fas fa-info-circle'></i>
					<i>
						<small className='text-muted text-sm'>
							{' '}
							mongoDB, express, React, nodejs
						</small>
					</i>
				</Animated>
			</a>
			<a
				className='nav-item nav-link bg-transparent'
				href='https://attila5287.github.io/portfolio/'
			>
				<Animated
					animationIn='bounceInRight'
					isVisible={true}
					animationInDelay={1250}
				>
					<i className='text-lg fab fa-github'></i>
					attila5287
				</Animated>
			</a>
		</nav>
	);
}

export default Nav;
