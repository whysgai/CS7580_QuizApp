import categories from '../data/categories'

const QuizConfig = props => 
    <div className="card card-body">
        <label>
            Number of questions:
            <input type="number" min="1" max="50"/>
        </label>
        <label>
            Difficulty:
            <select>
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </label>
        <label>
            Category:
            <select>
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