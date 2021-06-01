import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import { List, ListItem } from '../List';
import { Animated } from 'react-animated-css';

const Saved = () => {
	console.log(`Saved test`);

	const [items, setItems] = useState([]);

	return (
		<div className='mini'>
			<Animated
				animationIn='bounceInRight'
				isVisible={true}
				animationInDelay={500}
			>
				<h2 className=''>
					<i className='fas fa-caret-down mx-1'></i>
					Saved List
				</h2>
				<p className='text-left'>
					<i className='text-xl fas fa-info-circle mx-1'></i>
					<i>Visit book on Google store by using butons </i>
				</p>
			</Animated>

			<Footer></Footer>
		</div>
	);
};

export default Saved;
