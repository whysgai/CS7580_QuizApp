const Summary = props => 
    <div className="card">
        <div class="card-header">
            <h2>Results</h2>
        </div>
        <div className="card-body">
            <h2 className="text-center">You got {props.score.points}/{props.score.correct_answers.length} questions correct</h2>
            <ul className="results-list">
            {
                props.score.correct_answers.map((answer, index) => 
                    <li key={index}>Question {index+1}: {answer ? "Right" : "Wrong"}</li>
                )
            }
            </ul>
            <button onClick={() => props.retakeQuiz()}>Retake This Quiz</button>
            <button onClick={() => props.reset()}>Take Another Quiz</button>
        </div>
    </div>

export default Summary;