import Answer from "./Answer";


const Question = props => 
    <div className="card card-body">
        {console.log("Question:", props.question)}
        {console.log("Selected answer:", props.selectedAnswer)}
        <div className="question">  
            <div className="question-header">
                <p className="card-subtitle">Question #{props.position+1}</p>
                <button className="btn btn-outline-dark" onClick={() => props.reset()}>X</button>
            </div>
            
            <h2 className="card-title text-center">{props.question.question}</h2>
            <div className="answers">
                {
                    props.question.all_answers.map((answer, index) => 
                        <Answer key={index} index={index} answer={answer} correct_answer={props.question.correct_answer} selectedAnswer={props.selectedAnswer} setSelectedAnswer={props.setSelectedAnswer} answered={props.answered}/>
                    )
                }
            </div>
            {
                props.selectedAnswer !== "" ?
                    <>{
                        !props.answered ?
                            <button onClick={props.validateAnswer}>Ok</button>
                            :
                            <div>
                                <p>Correct answer: {props.question.correct_answer}</p>
                                <p>Your answer: {props.selectedAnswer}</p>
                                <button onClick={() => {props.setPosition(props.position + 1); props.setAnswered(false);}}>Next</button> 
                            </div>                 
                    }</>
                    :<></>
            }
        </div>
     
              
    </div>

export default Question