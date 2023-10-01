import Spinner from 'react-bootstrap/Spinner';

function Results (props) {

    return (
      <section>
        <h4>Results</h4>
        <hr />
        {props.showSpinner && <Spinner animation="border" variant="danger" className='spinner'/>}
        <pre>{props.status && 'status code: ' + props.status}</pre>
        <pre>{props.data && JSON.stringify(props.data, undefined, 2)}</pre>
      </section>
    );
}

export default Results;
