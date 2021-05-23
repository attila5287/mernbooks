import React from "react";

function NavTabs(props) {
  return (
		<ul className='nav nav-tabs nav-fill my-1 align-items-start'>
			<li className='nav-item navbar-brand rounded-xl py-0'>
				<a className='text-2xl nav-link disabled mx-1 bg-transparent'>
					<i className='fab fa-google text-blue'></i>
					<i className='text-2xl text-success fab fa-react fa-spin'></i>
					<i className='text-2xl text-info fab fa-react fa-pulse'></i>
					<span className='text-red'>g</span>
					<span className='text-blue'>l</span>
					<span className='text-warning'>e</span>
					<i className='text-xl fas fa-book-open text-light bg-info p-1 rounded-xl'></i>
				</a>
				<p className='text-sm text-left text-light my-0'>
					<b>
						<i>
							search books with
							<i className='text-lg fab fa-google-plus-g text-light mx-1'></i>
							API services
						</i>
					</b>
				</p>
			</li>
			<li className='nav-item'>
				<a
					href='#search'
					onClick={() => props.handlePageChange('Search')}
					className={
						props.currentPage === 'Search'
							? 'nav-link active text-purple text-2xl'
							: 'nav-link'
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
						props.currentPage === 'Saved'
							? 'nav-link active text-purple text-2xl'
							: 'nav-link'
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
						props.currentPage === 'About'
							? 'nav-link active text-purple text-2xl'
							: 'nav-link'
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