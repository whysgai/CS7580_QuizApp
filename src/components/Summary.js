const Summary = props => 
    <div className="card">
        <div class="card-header question-header">
            <h2>Results</h2>
            <button className="btn btn-outline-dark" onClick={() => props.reset()}>X</button>
        </div>
        <div className="card-body summary">
            <h2 className="text-center">You got {props.score.points} out of {props.score.correct_answers.length} questions correct</h2>
            {/* <div className="summary-spacer"/> */}
            <ul className="results-list list-group">
            {
                props.score.correct_answers.map((answer, index) => 
                    <li key={index} className={`list-group-item result ${answer ? "border-success text-success" : "text-danger border-danger"}`}>
                        <h4>Question {index+1}:</h4>
                        <h4>{answer ? "Right" : "Wrong"}</h4>
                    </li>
                )
            }
            </ul>
            {/* <div className="summary-spacer"/> */}
            <div className="btn-group summary-buttons" role="group" aria-label="Buttons">
                <button className="btn btn-success summary-btn" onClick={() => props.retakeQuiz()}><h4>Retake This Quiz</h4></button>
                <button className="btn btn-primary summary-btn" onClick={() => props.reset()}><h4>Take Another Quiz</h4></button>
            </div>
            <div className="btn-group-vertical summary-buttons-500" role="group" aria-label="Buttons">
                <button className="btn btn-success summary-btn" onClick={() => props.retakeQuiz()}><h4>Retake This Quiz</h4></button>
                <button className="btn btn-primary summary-btn" onClick={() => props.reset()}><h4>Take Another Quiz</h4></button>
            </div>
        </div>
    </div>

export default Summary;