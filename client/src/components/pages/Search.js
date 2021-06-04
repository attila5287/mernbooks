import React, { useEffect, useState } from "react";
import {Animated} from 'react-animated-css';
import Col from 'react-bootstrap/Col';
import Footer from "../Footer";
import SaveBtn from '../SaveBtn';
import Form from 'react-bootstrap/Form';
import {Row, Container} from "../Grid";
import {List, ListItem} from "../List";
import {Input} from "../Form";
import API from '../../utils/API';

function Search() {
  // Setting our component's initial state
  const [books,
    setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    API
      .googleBooks('attila')
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, [])

  // Loads all books and sets them to books
  function handleInputChange(event) {
    const q = event
      .target
      .value
      .trim()
    console.log(`>> q`, q)
    API
      .googleBooks(q)
      .then(res => {
        console.log(`res.data.items`, res.data.items)
        setBooks(res.data.items)
      })
      .catch(err => console.log(err));
  };

  return (
		<div className='mini'>
			<Animated
				animationIn='bounceInRight'
				isVisible={true}
				animationInDelay={1000}
			>
				<h2 className=''>
					<i className='fas fa-caret-down mx-1'></i>
					Search
				</h2>
				<p className='text-left'>
					<i className='text-xl fas fa-info-circle mx-1'></i>
					<i>Type book title and check search results simultaneously below</i>
				</p>
			</Animated>
			<Row className='my-2 align-items-center'>
				<Col xs={2} className='p-2'>
					<h1 className='maxi bg-secondary text-secondary rounded h-100 w-100'>
						<i className='fab fa-searchengin'></i>
					</h1>
				</Col>
				<Col xs={10} >
						<Input
							handleInputChange={(event) => handleInputChange(event)}
							name='title'
							placeholder='Search Book Title'
						/>
				</Col>
			</Row>

			<Animated
				animationIn='bounceInLeft'
				isVisible={true}
				animationInDelay={1500}
			>
				<h2 className=''>
					<i className='fas fa-caret-down mx-1'></i>
					Search Results
				</h2>
				<p className='text-left'>
					<i className='text-xl fas fa-info-circle mx-1'></i>
          <i>Save a book by using
					  <i className='fas fa-save mx-1'></i>
              save buttons
          </i>
				</p>
			</Animated>
			{books?.length ? (
				<List>
					{books.map((book, idx) => {
						return (
							<ListItem key={idx}>
								<Animated
									animationIn='slideInRight'
									isVisible={true}
									animationInDelay={idx * 250}
								>
									<div className='d-flex flex-row justify-content-between align-items-start bg-secondary rounded px-3 py-2'>
										<img
											src={book?.volumeInfo?.imageLinks?.smallThumbnail}
											alt='thumbnail'
											className='img-list'
										/>
										<span className='w-100 h-100 rounded-xl'>
											<h5 className='text-capitalize mb-0'>
												<span className='text-titlecase text-capitalize text-blue'>
													<i className='fas fa-book mx-1'></i>

													{book?.volumeInfo?.title}
												</span>
												<a className='text-primary' href='/by/author/'>
													{' by '}
													<i className='fas fa-user-edit mx-0'></i>
													{book?.volumeInfo?.authors?.map((a, i) => (
														<i
															className='text-primary'
															href='/by/author/'
															className='text-titlecase'
														>
															{a}
														</i>
													))}
												</a>
											</h5>
											<p className='text-left text-dark bg-secondary rounded-2xl p-1 m-3 mt-1 pt-0'>
												<i className='fab fa-readme text-dark mx-1'></i>
												<i>
													{book?.volumeInfo?.description
														?.slice(0, 250)
														?.slice(0, 500)}{' '}
												</i>
											</p>
										</span>
										<SaveBtn
											onClick={(event, index) => {
												let obj = {
													title: book?.volumeInfo?.title || 'title',
													description: book?.volumeInfo?.description || 'desc',
													authors: book?.volumeInfo?.authors || [],
													image:
														book?.volumeInfo?.imageLinks?.smallThumbnail ||
														'image-link',
													link: book?.selfLink
												};

												console.log(index);
												console.log(':>> obj ----> save to db');
												console.log(obj);
												console.log(':>> obj ----> saved');
											}}
										/>
									</div>
								</Animated>
							</ListItem>
						);
					})}
				</List>
			) : (
				<h3>No Results to Display</h3>
			)}
			<Footer></Footer>
		</div>
	);
}

export default Search;
