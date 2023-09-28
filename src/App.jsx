import React, { useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App () {

  const [data, setData] = useState();
  const [requestParams, setRequestParams] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState(null);


  const callApi = (formData) => {
    let method = formData.method.toLowerCase();
    console.log(method);
    axios.get(formData.url)
      .then(response => {
        // Handle the successful response here
        console.log(response);
        setData(response.data);
      })
      .catch(err => {
        // Handle any errors that occur during the request
        setError(err);
      });
    // mock output

    setRequestParams(formData);
  }

    return (
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} setShowSpinner={setShowSpinner} />
        <div style={{margin: "0 auto"}}>Request Method: {requestParams.method}</div>
        <div style={{margin: "1rem auto"}}>URL: {requestParams.url}</div>
        <Results data={data} error={error} showSpinner={showSpinner} />
        <Footer />
      </React.Fragment>
    );
}

export default App;
