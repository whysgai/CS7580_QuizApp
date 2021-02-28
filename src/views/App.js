import {useState, useEffect} from 'react';

import Question from "../components/Question.js"
import '../styles/App.css';

const URL = "https://opentdb.com/api.php";

const readQuestions = async () => {
    let response = await fetch(URL + "?amount=2");
    let questions = await response.json();
    return questions;
}

const App = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        readQuestions().then(data => {
            console.log("data:", data);
            setQuestions(data.results);
        })
    }, []);

    return (
        <main className="container">
                {console.log("Container:", questions)}
                {
                    
                        questions.map((question, index) => 
                            <Question question={question} key={index}/>
                        )
                    
                }
               
        </main>
    )
}

export default App;
