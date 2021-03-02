import categories from '../data/categories'

const QuizConfig = props => 
    <div className="card card-body">
        {console.log("Categories:", categories.categories)}
        <label>
            Number of questions:
            <input type="number" min="1" max="100" value="10"/>
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
                        <option>
                            {console.log("Category: ", category)}
                            {category}
                        </option>
                    )
                }
            </select>
        </label>
    </div>

export default QuizConfig