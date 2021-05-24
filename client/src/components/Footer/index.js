import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


function Footer () {
  return (
		<div className='mt-5'>
			<Container fluid className='mini d-flex flex-row justify-content-between align-items-center bg-primary rounded-xl py-0'>
				<span>
					<a href='https://attila5287.github.io/portfolio'>
						<h2 className='far fa-address-card p-1'> Portfolio</h2>
					</a>
				</span>

        <span>
				<img
					className='img-minix rounded-circle bg-secondary'
					src='https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg'
					alt='dev'
        />
        <i className='text-xl mx-1'>attila turkoz</i>
        </span>
        

				<span>
					<a href='https://github.com/attila5287/mernbooks'>
						<h2 className='fab fa-github p-1'> Repo</h2>
					</a>
				</span>
			</Container>
		</div>
	);
}

export default Footer;
