import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect( () => {
    API.googleBooks('attila')
			.then((res) => setBooks(res.data.items))
			.catch((err) => console.log(err));
  }, [])

  // Loads all books and sets them to books
  function handleInputChange ( event ) {
    const q = event.target.value.trim()
    console.log(`>> q`, q)
    API.googleBooks(q)
      .then(res => 
      {
        console.log(`res.data.items`, res.data.items)
        setBooks( res.data.items )
      }
      )
      .catch(err => console.log(err));
  };


    return (
			<Container fluid>
				<Row>
					<Col size='md-6'>
						<Jumbotron>
              <h1>
                <i>Be awesome, be a book nut! </i>
              </h1>
              <hr />
              <h5><i className="text-secondary">
                Please let this app enjoy being your virtual librarian and type a book title to search:
              </i>
              </h5>
						</Jumbotron>
						<form>
							<Input
                handleInputChange={ ( event ) => handleInputChange( event ) }
								name='title'
                placeholder='Title (required)'
							/>
						</form>
					</Col>
					<Col size='md-6 sm-12'>
						<Jumbotron>
							<h1>Search Results</h1>
						</Jumbotron>
						{books.length ? (
							<List>
								{books.map((book, idx) => {
									return (
										<ListItem key={idx}>
											<a href={'/books/' + book._id}>
												<strong>
													{book.volumeInfo.title} by {book.author}
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
			</Container>
		);
  }


export default Books;
