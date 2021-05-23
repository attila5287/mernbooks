import React from "react";
import { Animated } from 'react-animated-css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../../logo.svg';
import '../../App.css';
const About = () => (
	<div>
		<h1>About Page</h1>
		<Jumbotron className='bg-secondary rounded py-2 mt-0 my-2'>
			<h1 className='maxi d-flex justify-content-center align-items-center'>
				<Animated
					animationIn='zoomIn'
					isVisible={true}
					animationInDelay={1250}
					className='d-flex justify-content-center align-items-center'
				>
					<i className='fab fa-google bg-danger p-1 rounded-4xl'></i>
					<img
						src={logo}
						className='border-dark border-med img-thumbnail rounded-circle img-mini App-logo-smr ml-1 mr-0 px-0 py-1'
						alt='logo'
					/>
					<img src={logo} className='App-logo-sms m-0 p-0' alt='logo' />
					<i className='text-warning'> g </i>
					<i className='text-primary'> l </i>
					<i className='text-success'> e </i>
					<span className='mx-1'>
						<i className='mx-1 text-4xl fas fa-book-open p-1 bg-info rounded'></i>
						<p className='text-lg text-secondary my-0'>
							<i>Books API </i>
						</p>
					</span>
				</Animated>
			</h1>
		</Jumbotron>
	</div>
);

export default About;
