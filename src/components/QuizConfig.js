import categories from '../data/categories'

const QuizConfig = props => 
    <div className="card card-body">
        <label>
            Number of questions:
            <input type="number" min="1" max="100"/>
        </label>
        <label>
            Difficulty:
            <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
        </label>
        <label>
            Category:
            <select>
                {
                    categories.categories.map((category, index) => 
                        <option key={index}>
                            {category}
                        </option>
                    )
                }
            </select>
        </label>
        <button onClick={() => props.setStatus(props.STATUS.LOADING)}>GO</button>
    </div>

export default QuizConfig