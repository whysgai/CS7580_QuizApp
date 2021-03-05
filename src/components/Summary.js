const Summary = props => 
    <div className="card card-body">
        <p>You got {props.score.points}/{props.score.correct_answers.length} questions correct</p>
        {
            props.score.correct_answers.map((answer, index) => 
                <span key={index}>Question {index+1}: {answer ? "Right" : "Wrong"}</span>
            )
        }
        <button>Retry This Quiz</button>
        <button>Take Another Quiz</button>
    </div>

export default Summary;