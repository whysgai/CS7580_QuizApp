import categories from '../data/categories'

const QuizConfig = props => 
    <div className="card card-body">
        <label>
            Number of questions:
            <input type="number" min="1" max="50" value={props.queryParams.num}
                onChange={e => props.setQueryParams(
                    {
                        ...props.queryParams,
                        num: e.target.value
                    }
                )}
            />
        </label>
        <label>
            Difficulty:
            <select value={props.queryParams.dif}
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
        <label>
            Category:
            <select value={props.queryParams.cat}
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
        <button onClick={() => props.setStatus(props.STATUS.LOADING)}>GO</button>
    </div>

export default QuizConfig