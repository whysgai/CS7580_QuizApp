
const Question = props => 
    <div className="card card-body">
        {console.log("Question:", props.question)}
        <p>{props.question.question}</p>
        <ul>
            {/* {
                props.question.incorrect_answers.map((ia, index) => {
                    <li key={index}>ia</li>
                })
            } */}
        </ul>
        <button onClick={() => props.setPosition(props.position + 1)}>Next</button>        
    </div>

export default Question