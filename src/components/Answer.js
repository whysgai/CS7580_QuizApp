const Answer = props =>
    <>
        <input className={`btn-check`} 
            id={`Answer${props.index}`} type="radio" name="answers"
            checked={props.selectedAnswer === props.answer && !props.answered}
            disabled={props.answered}
            onChange={() => props.setSelectedAnswer(props.answer)}/>
        <label className={`btn  answer
            ${!props.answered ? 
                "btn-outline-secondary" 
                : props.selectedAnswer === props.correct_answer && props.selectedAnswer === props.answer ? 
                    "btn-success" 
                    : props.selectedAnswer === props.answer ? 
                        "btn-danger" 
                        : props.correct_answer === props.answer ? 
                            "btn-primary" 
                            : "btn-outline-dark"}        
        `}
        
        htmlFor={`Answer${props.index}`}>
            <h3>{props.answer}</h3>                   
        </label>
    </>
 

export default Answer;