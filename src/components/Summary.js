const Summary = props => 
    <div className="card card-body">
        <p>You got {props.score.points}/{props.score.correct_answers.length} questions correct</p>
        {
            props.score.correct_answers.map((answer, index) => 
                <span key={index}>Question {index+1}: {answer ? "Right" : "Wrong"}</span>
            )
        }
        <button onClick={() => props.retakeQuiz()}>Retake This Quiz</button>
        <button onClick={() => props.reset()}>Take Another Quiz</button>
    </div>

export default Summary;