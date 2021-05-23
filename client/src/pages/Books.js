import React, { useEffect, useState } from "react";
import logo from '.././logo.svg';
import '.././App.css';
import {Animated} from 'react-animated-css';
import Col from 'react-bootstrap/Col';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import API from "../utils/API";
import {Row, Container} from "../components/Grid";
import {List, ListItem} from "../components/List";
import {Input, TextArea, FormBtn} from "../components/Form";

function Books() {
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
			<Jumbotron className='bg-dark rounded py-2 mt-0 my-2'>
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
							className='border-light border-med img-thumbnail rounded-circle img-mini App-logo-smr ml-1 mr-0 px-0 py-1'
							alt='logo'
						/>
						<img
							src={logo}
							className='App-logo-sms m-0 p-0'
							alt='logo'
						/>
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
			<Row className='my-2'>
				<Col xs={2}>
					<Animated
						animationIn='slideInLeft'
						isVisible={true}
						animationInDelay={1250}
					>
						<h1 className='maxi bg-success text-light p-1 rounded h-100'>
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
							<Form.Control
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
				<Col xs={1} className='text-right px-1'>
          <h1 className='text-center medi fas fa-angle-double-down bg-primary p-1 rounded-lg'></h1>
          <hr className='my-1 border-light' />
          <br />
          <div className='rotate-text text-lg pb-2'><b>
            Search Results
          </b>
          </div>
      </Col>
				<Col xs={11}>
					{books.length ? (
						<List>
							{books.map((book, idx) => {
								return (
									<ListItem key={idx}>
										<a href={'/books/' + book._id}>
											<strong>
												{book.volumeInfo.title}
												by {book.author}
											</strong>
										</a>
										<DeleteBtn onClick={() => {}} />
									</ListItem>
								);
							})}
						</List>
					) : (
						<h3>No Results to Display</h3>
					)}
				</Col>
			</Row>
		</div>
	);
}

export default Books;
