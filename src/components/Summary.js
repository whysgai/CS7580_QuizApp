const Summary = props => 
    <div className="card">
        <div class="card-header">
            <h2>Results</h2>
        </div>
        <div className="card-body summary">
            <h2 className="text-center">You got {props.score.points}/{props.score.correct_answers.length} questions correct</h2>
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
            <button onClick={() => props.retakeQuiz()}>Retake This Quiz</button>
            <button onClick={() => props.reset()}>Take Another Quiz</button>
        </div>
    </div>

export default Summary;