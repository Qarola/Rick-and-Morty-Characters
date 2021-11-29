import React from 'react';

const Reset = (props) => {
    const handleReset = () => {
      props.resetInputs();
    };
    return (
      <div className="form__reset">
        <i class="fas fa-trash form__reset--icon" onClick={handleReset}></i>
        <span className="form__reset--text">Remove all filters</span>
      </div>
    );
  }
  export default Reset;