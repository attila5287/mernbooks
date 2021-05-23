import React from "react";
import Container from "react-bootstrap/Container";
function Footer() {
  return (
		<div className='mt-5'>
      <Container fluid className='fixed-bottom'>
        <span className='bg-secondary rounded-xl'>
				<img
					className='img-minix rounded-circle bg-secondary'
					src='https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg'
					alt=''
          />

        </span>
			</Container>
		</div>
	);
}

export default Footer;
