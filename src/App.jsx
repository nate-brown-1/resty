import React, { useState } from 'react';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [ data, setData ] = useState(null);
  const [requestParams, setRequestParams ] = useState({});

  // copy this helper function from class component version
  const callApi = async (requestParams) => {
    
    console.log(requestParams);
    console.log(requestParams.url);
    console.log(requestParams.method);

    let fetchRequest = await fetch(requestParams.url, {
      method: requestParams.method
    });

    console.log(fetchRequest);
    let fetchResults = await fetchRequest.json();
    console.log(fetchResults);
    let data = JSON.stringify(fetchResults);
    setData(data);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
