import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Saved from "./pages/Saved";
import About from "./pages/About";
import Search from './pages/Search';

class Portfolio extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Saved") {
      return <Saved />;
    } else if (this.state.currentPage === 'Search') {
			return <Search />;
		} else if (this.state.currentPage === 'About') {
			return <About />;
		} 
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
