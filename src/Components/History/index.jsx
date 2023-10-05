function History (props) {

    const sendEventInfo = async (e) => {
        // await console.log(e.target.childNodes[1].childNodes[1], e.target.childNodes[2].childNodes[1]);
        await props.dispatch({case: 'selectHistory', callApi: props.handleApiCall, method: e.target.childNodes[1].childNodes[1], url: e.target.childNodes[2].childNodes[1] })
    }

    return (
    <div className="history">
        <h4>History</h4>
        <ul>
            {props.history.map((item, idx) => {
                return(
                <li key={idx} style={{margin:"1rem", overflowX: "auto"}} onClick={sendEventInfo}>
                    <hr />
                    <p>Method: {item.method}</p>
                    <p>URL: {item.url}</p>
                </li> 
                )
            })}   
        </ul>
    </div>
)}

export default History;