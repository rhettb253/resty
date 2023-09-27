import { useState } from 'react';
import './Form.scss';

function Form (props) {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e) => setUrl(e.target.innerText)} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span onClick={(e) => setMethod(e.target.innerText)} id="get" >GET</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="post" >POST</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="put" >PUT</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="delete" >DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
