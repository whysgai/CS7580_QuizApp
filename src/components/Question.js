import Answer from "./Answer";

const Question = props => 
    <div className="card card-body">
        {console.log("Question:", props.question)}
        {console.log("Selected answer:", props.selectedAnswer)}
        <p className="card-subtitle">Question Number</p>
        <h2 className="card-title h5">{props.question.question}</h2>
        <ul>
            {
                props.question.all_answers.map((answer, index) => 
                    <li key={index}><Answer answer={answer} selectedAnswer={props.selectedAnswer} setSelectedAnswer={props.setSelectedAnswer}/></li>
                )
            }
        </ul>
        {/* <button onClick={() => props.setPosition(props.position + 1)}>Ok</button> */}
        <button onClick={() => props.setPosition(props.position + 1)}>Next</button>        
    </div>

export default Question