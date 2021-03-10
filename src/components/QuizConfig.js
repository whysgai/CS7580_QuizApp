import categories from '../data/categories'

const QuizConfig = props => 
    <div className="card">
        <div class="card-header">
            <h2>Configure Your Quiz</h2>
        </div>
        <div className="card-body config">
            <div className="config-inputs">
                <label className="form-label config-setting">
                    Number of questions:
                    <input className="form-control"
                        type="number" min="1" max="50" 
                        value={props.queryParams.num}
                        onChange={e => props.setQueryParams(
                            {
                                ...props.queryParams,
                                num: e.target.value
                            }
                        )}
                    />
                </label>
                <label className="form-label config-setting">
                    Difficulty:
                    <select className="form-control"
                        value={props.queryParams.dif}
                        onChange={e => props.setQueryParams(
                            {
                                ...props.queryParams,
                                dif: e.target.value
                            }
                        )}
                    >
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <label className="form-label config-setting">
                    Category:
                    <select className="form-control"
                        value={props.queryParams.cat}
                        onChange={e => props.setQueryParams(
                            {
                                ...props.queryParams,
                                cat: e.target.value
                            }
                        )}
                    >
                        <option value="any">Any Category</option>
                        {
                            categories.categories.map((category, index) => 
                                <option key={index} value={index + 9}>
                                    {category}
                                </option>
                            )
                        }
                    </select>
                </label>
            </div>
            <button className="btn btn-success config-confirm" 
                onClick={() => props.setStatus(props.STATUS.LOADING)}
            >
                <h2 className="big-button-text">START</h2>
            </button>
        </div>
    </div>

export default QuizConfig