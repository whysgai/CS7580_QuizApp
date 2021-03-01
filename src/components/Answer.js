const Answer = props =>
    <label className="list-group-item list-group-item-action">
        <span>{props.answer}</span>                        
        <input className="form-check-input" type="checkbox" value="project-filter"></input>                                              
    </label>  

export default Answer;