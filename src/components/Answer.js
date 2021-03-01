const Answer = props =>
    <label className="list-group-item-action">
        <span>{props.answer}</span>                        
        <input className="form-check-input" type="radio" name="answer"  onChange={() => props.setSelectedAnswer(props.answer)}></input>                                              
    </label>  

export default Answer;