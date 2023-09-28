import Spinner from 'react-bootstrap/Spinner';

function Results (props) {



    return (
      <section>
        <h4>Results</h4>
        {props.showSpinner && <Spinner animation="border" variant="danger" className='spinner'/>}
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
}

export default Results;
