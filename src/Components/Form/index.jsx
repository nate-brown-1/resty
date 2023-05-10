import React, { useState } from 'react';

import './Form.scss';

// form functional component
function Form(props) {

  // pull the these things out of the formData object so that we can change them
  const [ method, setMethod ] = useState(null);
  const [ url, setUrl ] = useState(null);

  const handleUrlInput = event => {
    event.preventDefault();
    let value = event.target.value;
    setUrl(value);
  }

  const handleMethodInput = event => {
    event.preventDefault();
    let id = event.target.id;
    setMethod(id);
  }

  // submit event handler helper sub-function
  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    console.log(formData);
    props.handleApiCall(formData);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="url-input" name="url" placeholder="http://www.api.url" onChange={handleUrlInput} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethodInput}>GET</span>
          <span id="post" onClick={handleMethodInput}>POST</span>
          <span id="put" onClick={handleMethodInput}>PUT</span>
          <span id="delete" onClick={handleMethodInput}>DELETE</span>
        </label>
      </form>
    </>
  );
}

// leave class component version for reference

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

export default Form;
