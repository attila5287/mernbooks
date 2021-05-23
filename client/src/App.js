import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Books from './pages/Books';
import Nav from './components/Nav';


function App() {
  return (
    <div className='App'>
			<Nav />
			<Books />
		</div>
	);
}


export default App;
