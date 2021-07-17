import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button className="btn btn-lg btn-outline-primary border-0" {...props} role="button" tabIndex="0">
      <h1 className='far fa-save'></h1>
    </button>
  );
}

export default SaveBtn;
