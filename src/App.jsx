import React, { useState, useReducer } from 'react';
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
import History from './Components/History';

function reducer(history, action) {
  switch (action) {
    case 'addHistory':
      return {}
    case 'selectHistory':
      return {}
  }
}

function App () {

  const [history, dispatch] = useReducer(reducer, []);
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [requestParams, setRequestParams] = useState({});
  const [displayResults, setDisplayResults] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const callApi = (formData) => {
    let method = formData.method.toLowerCase();
    if (method === 'get') {
      axios.get(formData.url)
        .then(response => {
          // Handle the successful response here
          setStatus(response.status);
          setData(response.data);
      }).catch(err => {
        // Handle any errors that occur during the request
        setStatus(err.status);
        setData(err);
      });
    } else if (method === 'post') {
      let config = document.getElementById('objectEntry').value;
      // console.log(JSON.parse(config));
      try{
      axios.post(formData.url, JSON.parse(config), {
        headers: {
          'Content-Type': 'application/json'
    }})
        .then(response => {
          // Handle the successful response here
          setStatus(response.status);
          setData(response.data);
          console.log(data);
      })} catch(err) {
        // Handle any errors that occur during the request
        console.log('we had an error');
        setStatus(err.status);
        setData(err);
      }
    } else if (method === 'put') {
      axios.put(formData.url, document.getElementById('objectEntry').value)
        .then(response => {
          // Handle the successful response here
          setStatus(response.status);
          setData(response.data);
      }).catch(err => {
        // Handle any errors that occur during the request
        setStatus(err.status);
        setData(err);
      }); 
    } else if (method === 'delete') {
      axios.delete(formData.url)
        .then(response => {
          // Handle the successful response here
          setStatus(response.status);
          setData(response.data);
      }).catch(err => {
        // Handle any errors that occur during the request
        setStatus(err.status);
        setData(err);
      });
    }
    setDisplayResults(true);
    setRequestParams(formData);
  }

    return (
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} setShowSpinner={setShowSpinner} />
        {displayResults && <div style={{margin: "0 auto"}}>Request Method: {requestParams.method}</div>}
        {displayResults && <div style={{margin: "1rem auto"}}>URL: {requestParams.url}</div>}
        {displayResults && <Results status={status} data={data} showSpinner={showSpinner} />}
        <History />
        <Footer />
      </React.Fragment>
    );
}

export default App;
