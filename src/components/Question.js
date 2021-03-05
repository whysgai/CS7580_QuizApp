import Answer from "./Answer";

const Question = props => 
    <div className="card card-body">
        {console.log("Question:", props.question)}
        {console.log("Selected answer:", props.selectedAnswer)}
        <p className="card-subtitle">Question #{props.position+1}</p>
        <button onClick={() => props.reset()}>X</button>
        <h2 className="card-title h5">{props.question.question}</h2>
        <ul>
            {
                props.question.all_answers.map((answer, index) => 
                    <li key={index}><Answer answer={answer} selectedAnswer={props.selectedAnswer} setSelectedAnswer={props.setSelectedAnswer}/></li>
                )
            }
        </ul>
        {
            !props.answered ?
                <button onClick={props.validateAnswer}>Ok</button>
                :
                <div>
                    <p>Correct answer: {props.question.correct_answer}</p>
                    <p>Your answer: {props.selectedAnswer}</p>
                    <button onClick={() => {props.setPosition(props.position + 1); props.setAnswered(false);}}>Next</button> 
                </div>                 
        }
              
    </div>

export default Question