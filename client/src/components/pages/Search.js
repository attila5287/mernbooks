import React, { useEffect, useState } from "react";
import {Animated} from 'react-animated-css';
import Col from 'react-bootstrap/Col';
import Footer from "../Footer";
import DeleteBtn from "../DeleteBtn";
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
			<Row className='my-2'>
				<Col xs={2}>
					<Animated
						animationIn='slideInLeft'
						isVisible={true}
						animationInDelay={1250}
					>
						<h1 className='maxi bg-purple text-light p-1 rounded h-100'>
							<i className='fab fa-searchengin'></i>
						</h1>
					</Animated>
				</Col>
				<Col xs={10}>
					<Animated
						animationIn='slideInRight'
						isVisible={true}
						animationInDelay={1250}
					>
						<Form.Group className='bg-secondary rounded px-1 h-100'>
							<Input
								className='form-control  form-control-lg border-light p-2'
								handleInputChange={(event) => handleInputChange(event)}
								name='title'
								placeholder='Title (required)'
							/>
							<p className='text-left'>
								<i className='fas fa-sort'></i>
								<i>
									Type book title above and check search results simultaneously
									below
								</i>
							</p>
						</Form.Group>
					</Animated>
				</Col>
			</Row>

      
			<Row >
        <Col xs={ 1 } className='text-right px-1'>
          	<Animated
						animationIn='bounceInUp'
						isVisible={true}
						animationInDelay={1500}
					>
          <h1 className='text-center medi fas fa-angle-double-down bg-success px-2 py-5 rounded-lg'></h1>
          <div className='rotate-text text-nowrap text-2xl'><b>
            <i>
            Search Results
            </i>
          <i className='fas fa-angle-right mx-4 bg-success py-2 px-3 rounded'></i>
          </b>
            </div>
            
          </Animated>
      </Col>
				<Col xs={11} className='pl-1'>
					{books.length ? (
						<List>
							{books.map((book, idx) => {
                return (
                  <Animated
						animationIn='slideInRight'
						isVisible={true}
						animationInDelay={idx*250}
						>
									<ListItem key={idx}>
										<div className='d-flex flex-row justify-content-between bg-secondary p-1 rounded-xl'>
											<img
												src={book?.volumeInfo?.imageLinks?.smallThumbnail}
												alt='thumbnail'
												className='img-mini rounded-lg shadow'
											/>
											<a className='nav-link' href={'/api/book/' + book?._id}>
												<span className='text-capitalize'>
													{book?.volumeInfo?.title}
												</span>{' '}
												by{' '}
												<strong>
													<i className='text-reg text-primary'>
														{book?.volumeInfo?.authors?  book.volumeInfo.authors[0] : ''}
													</i>
												</strong>
											</a>
											<span className='fa-pull-right'>
												<DeleteBtn
													className='px-1 py-0 rounded-lg bg-danger text-light'
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
				</Col>
      </Row>
      <Footer>
      </Footer>
		</div>
	);
}

export default Search;
