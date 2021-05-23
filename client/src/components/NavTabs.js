import React from "react";

function NavTabs(props) {
  return (
		<ul className='nav nav-tabs my-1 align-items-start'>
			<li className='navbar-brand rounded-xl py-0'>
				<p className='text-sm text-left text-light my-0'>
					<b>
						<i>
							search books with
							<i className='text-lg fab fa-google-plus-g text-light mx-1'></i>
							API services
						</i>
					</b>
				</p>
				<a className='text-2xl nav-link disabled bg-light rounded-3xl mx-1'>
					<i className='fab fa-google text-blue'></i>
					<i className='text-2xl text-info fab fa-react fa-spin'></i>
					<i className='text-2xl text-info fab fa-react fa-pulse'></i>
					<span className='text-red'>g</span>
					<span className='text-blue'>l</span>
					<span className='text-warning'>e</span>
					<i className='mx-1 fas fa-book-open bg-success p-1 rounded-xl'></i>
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#search'
					onClick={() => props.handlePageChange('Search')}
					className={
						props.currentPage === 'Search' ? 'nav-link active bg-info' : 'nav-link'
					}
				>
					<i className='fas fa-search'></i>
					Search
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#saved'
					onClick={() => props.handlePageChange('Saved')}
					className={
						props.currentPage === 'Saved' ? 'nav-link active bg-info' : 'nav-link'
					}
				>
					<i className='fas fa-save mx-1'></i>
					Saved
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#about'
					onClick={() => props.handlePageChange('About')}
					className={
						props.currentPage === 'About' ? 'nav-link active bg-info' : 'nav-link'
					}
				>
					<i className='fas fa-info-circle mx-1'></i>
					About
				</a>
			</li>
		</ul>
	);
}

export default NavTabs;
