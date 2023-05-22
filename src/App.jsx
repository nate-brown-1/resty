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
  const callApi = (requestParams) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    const data = JSON.stringify({
      "abilities": [
        {
          "ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "imposter",
            "url": "https://pokeapi.co/api/v2/ability/150/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ],
      "base_experience": 101,
      "forms": [
        {
          "name": "ditto",
          "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
        }
      ]
    });
    
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
