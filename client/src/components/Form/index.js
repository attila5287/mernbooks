import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
		<div className='form-group mt-2'>
			<input
				className='form-control form-control-lg border-light py-2'
				onChange={props.handleInputChange}
				placeholder={props.placeholder}
      />
      <hr />
		</div>
	);
}

