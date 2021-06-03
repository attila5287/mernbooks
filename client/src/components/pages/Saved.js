import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import { List, ListItem } from '../List';
import { Animated } from 'react-animated-css';
import API from '../../utils/API';


const Saved = () => {
	console.log(`Saved test`);

	const [saves, setSaves] = useState([]);

	// Load all books and store them with setBooks
	useEffect(() => {
		API.getBooksDB()
			.then((res) => setSaves(res.data))
			.catch((err) => console.log(err));
  }, [] );
  

	return (
		<div className='mini'>
			<Animated
				animationIn='bounceInLeft'
				isVisible={true}
				animationInDelay={250}
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

			<List>
				{saves.map((book, idx) => {
					return (
            <ListItem key={'id ' + idx}>
						<Animated
							animationIn='slideInRight'
							isVisible={true}
							animationInDelay={idx * 250}
						>
								<div className='d-flex flex-row justify-content-between bg-secondary p-1 rounded-xl'>
									<img
										src={book?.image}
										alt='thumbnail'
										className='img-list rounded-lg shadow'
									/>
									<a className='nav-link' href={book?.link}>
										<span className='text-capitalize'>{book?.title}</span> by{' '}
										<strong>
											<i className='text-reg text-primary'>
												{book?.authors ? book.authors[0] : ''}
											</i>
										</strong>
									</a>
									<span className='btn btn-group-vertical'>
										<a
											className='btn btn-primary btn-sm h-100'
											type='button'
											href={book?.link}
										>
											<i className='text-light fab fa-fw fa-google my-4'></i>
										</a>
										<button
											className='btn btn-outline-primary btn-sm'
											type='button'
										>
											<i className='text-light fa-fw fas fa-times'></i>
										</button>
									</span>
								</div>
						</Animated>
							</ListItem>
					);
				})}
			</List>

			<Animated
				animationIn='bounceInRight'
				isVisible={true}
				animationInDelay={750}
			>
				<Footer></Footer>
			</Animated>
		</div>
	);
};

export default Saved;
