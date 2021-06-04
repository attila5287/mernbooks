import React from "react";
import Container from "react-bootstrap/Container";


function Footer () {
  return (
		<div className='mt-5'>
			<Container
				fluid
				className='mini d-flex flex-row justify-content-between align-items-center bg-primary rounded-xl text-secondary py-0'
			>
				<a
					href='https://attila5287.github.io/portfolio'
					className='align-middle text-secondary'
				>
					<h2 className='far fa-address-card my-0'> Portfolio</h2>
				</a>
				<span>
					<img
						className='img-minix rounded-circle bg-secondary'
						src='https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg'
						alt='dev'
					/>
					<i className='text-xl mx-1'>attila turkoz</i>
				</span>

				<a
					href='https://github.com/attila5287/mernbooks'
					className='align-middle text-secondary'
				>
					<h2 className='fab fa-github my-0'> Repo</h2>
				</a>
			</Container>
		</div>
	);
}

export default Footer;
