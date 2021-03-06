import Answer from "./Answer";


const Question = props => 
    <div className="card">
        {console.log("Question:", props.question)}
        {console.log("Selected answer:", props.selectedAnswer)}
        <div class="card-header">
            <div className="question-header">
                <p className="card-subtitle">Question #{props.position+1}</p>
                <button className="btn btn-outline-dark" onClick={() => props.reset()}>X</button>
            </div>
            
        </div>
        <div className="question card-body">  
        <h2 className="card-title text-center">{props.question.question}</h2>
            <div className="question-attributes">
                <span className="card-subtitle display-attribute">Category: {props.question.category}</span>
                <span className="card-subtitle display-attribute">Difficulty: {props.question.difficulty}</span>
            </div>
            <div className="answers">
                {
                    props.question.all_answers.map((answer, index) => 
                        <Answer key={index} index={index} answer={answer} correct_answer={props.question.correct_answer} selectedAnswer={props.selectedAnswer} setSelectedAnswer={props.setSelectedAnswer} answered={props.answered}/>
                    )
                }
            </div>
            {
                props.selectedAnswer !== "" ?
                    <div className="question-results">
                        {
                            !props.answered ?
                                <button className="btn btn-outline-primary btn-result" onClick={props.validateAnswer}><span className="h4">OK</span></button>
                                :
                                <>
                                    {
                                        props.question.correct_answer !== props.selectedAnswer ?
                                            <>
                                                <div className="question-result"><h4>Your answer: {props.selectedAnswer}</h4></div>
                                                <div className="question-result"><h4>Correct answer: {props.question.correct_answer}</h4></div>
                                            </>
                                            :
                                            <div className="question-result"><h4>Correct!</h4></div>

                                    }
                                    
                                    <button className="btn btn-outline-secondary btn-result" onClick={() => {props.setPosition(props.position + 1); props.setAnswered(false);}}><h4>Next</h4></button>                                    
                                </>                 
                        }
                    </div>
                    :<></>
            }
        </div>
     
              
    </div>

export default Question