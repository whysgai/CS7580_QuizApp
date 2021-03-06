const Error = props => 
    <div className="card card-body api-error">
        <h3 className="card-title">Something went wrong while contacting the server. Please try again.</h3>
        <button onClick={() => props.reset()}>Try Again</button>
    </div>

export default Error;