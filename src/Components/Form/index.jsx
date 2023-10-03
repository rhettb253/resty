import { useState } from 'react';
import './Form.scss';

function Form (props) {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState();
  // const [config, setConfig] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    props.setShowSpinner(true);
    const formData = {
      method: method,
      url: url
    };
    props.handleApiCall(formData);
    //so we can see the spinner super quick
    setTimeout(() => {
      props.setShowSpinner(false);
    }, 100);
  }

  const getDeleteClick = e => {
    setMethod(e.target.innerText);
    console.log(method, url);
    // Remove background color from all spans
    document.querySelectorAll('.methods span').forEach(span => {
      span.style.backgroundColor = '#ccc';
      span.style.color = 'black';
    });
    //add red to selected bg
    let el = document.getElementById(e.target.id);
    el.style.backgroundColor = "rgb(246, 88, 88)";
    el.style.color = "black";
    //remove text area
    if (document.getElementById('objectEntry')) {
      document.getElementById('objectEntry').remove();
    }
  }

  const postPutClick = e => {
    setMethod(e.target.innerText);
    // Remove background color from all spans
    document.querySelectorAll('.methods span').forEach(span => {
      span.style.backgroundColor = '#ccc';
      span.style.color = 'black';
    });
    //add red to selected bg
    let el = document.getElementById(e.target.id);
    el.style.backgroundColor = "rgb(246, 88, 88)";
    el.style.color = "black";
    //add text area
    if (!document.getElementById('objectEntry')){
      let taEl = document.createElement('textarea');
      taEl.id = 'objectEntry';
      taEl.style.width = '17rem';
      taEl.style.height = '7rem';
      taEl.placeholder = "Request JSON Object"
      let formEl = document.querySelector('.form');
      formEl.appendChild(taEl);
    }
  }

    return (
      <>
        <form className='form' onSubmit={handleSubmit}>
          <label >
            <span className='url'>URL: </span>
            <input name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
            <button data-testid="goButton" type="submit">GO!</button>
          </label>
          <label className="methods">
            <span onClick={getDeleteClick} id="get" >GET</span>
            <span onClick={postPutClick} id="post" >POST</span>
            <span onClick={postPutClick} id="put" >PUT</span>
            <span onClick={getDeleteClick} id="delete" >DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
