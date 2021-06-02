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
						<Animated
							animationIn='slideInRight'
							isVisible={true}
							animationInDelay={idx * 250}
						>
							<ListItem key={idx}>
								<div className='d-flex flex-row justify-content-between bg-secondary p-1 rounded-xl'>
									<img
										src={book?.image}
										alt='thumbnail'
										className='img-list rounded-lg shadow'
									/>
									<a className='nav-link' href={'/api/book/' + book?._id}>
										<span className='text-capitalize'>
											{book?.title}
										</span>{' '}
										by{' '}
										<strong>
											<i className='text-reg text-primary'>
												{book?.authors
													? book.authors[0]
													: ''}
											</i>
										</strong>
									</a>
									<span className='fa-pull-right'>
									</span>
								</div>
							</ListItem>
						</Animated>
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
