import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Books from './pages/Books';
import Nav from './components/Nav';


function App() {
  return (
		<div className='App'>
			<div className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h2>Welcome to React</h2>
			</div>
			<Nav />
			<Books />
		</div>
	);
}


export default App;
