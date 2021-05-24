import React, { useEffect, useState } from "react";
import {Animated} from 'react-animated-css';
import Col from 'react-bootstrap/Col';
import Footer from "../Footer";
import SaveBtn from '../SaveBtn';
import Form from 'react-bootstrap/Form';
import {Row, Container} from "../Grid";
import {List, ListItem} from "../List";
import {Input, TextArea, FormBtn} from "../Form";
import API from '../../utils/API';

function Search() {
  // Setting our component's initial state
  const [books,
    setBooks] = useState([])
  const [formObject,
    setFormObject] = useState({})

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
					<i>Save a book by using save buttons </i>
				</p>
			</Animated>
			{books.length ? (
				<List>
					{books.map((book, idx) => {
						return (
							<Animated
								animationIn='slideInRight'
								isVisible={true}
								animationInDelay={idx * 250}
							>
								<ListItem key={idx}>
									<div className='d-flex flex-row justify-content-between bg-secondary p-1 rounded-xl'>
										<img
											src={book?.volumeInfo?.imageLinks?.smallThumbnail}
											alt='thumbnail'
											className='img-list rounded-lg shadow'
										/>
										<a className='nav-link' href={'/api/book/' + book?._id}>
											<span className='text-capitalize'>
												{book?.volumeInfo?.title}
											</span>{' '}
											by{' '}
											<strong>
												<i className='text-reg text-primary'>
													{book?.volumeInfo?.authors
														? book.volumeInfo.authors[0]
														: ''}
												</i>
											</strong>
										</a>
										<span className='fa-pull-right'>
											<SaveBtn
												className='p-1 rounded-lg bg-info text-dark text-xl'
												onClick={() => {}}
											/>
										</span>
									</div>
								</ListItem>
							</Animated>
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
