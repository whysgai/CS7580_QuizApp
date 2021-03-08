const Answer = props =>
    <>
        <input className="btn-check" id={`Answer${props.index}`}
            type="radio" name="answers"
            checked={props.selectedAnswer === props.answer}
            onChange={() => props.setSelectedAnswer(props.answer)}/>
        <label className="btn btn-outline-secondary answer" htmlFor={`Answer${props.index}`}>
            <h3>{props.answer}</h3>                   
        </label>

    </>
 

export default Answer;