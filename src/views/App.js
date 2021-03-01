import {useState, useEffect} from 'react';

import Question from "../components/Question.js"
import '../styles/App.css';

const URL = "https://opentdb.com/api.php";

const STATUS = {
    START: "start",
    LOADING: "loading",
    SUCCESS: "success",
    FAIL: "fail",
    DONE: "done"
}


const readQuestions = async () => {
    let response = await fetch(URL + "?amount=2");
    let questions = await response.json();
    return questions;
}

const processAnswers = question => {
    console.log("Process question:", question);
    let allAnswers = [];
    question.incorrect_answers.map(answer => 
        allAnswers.push(answer)
    )
    allAnswers.push(question.correct_answer);    

    let i, j, k;
    for (i = 0; i < allAnswers.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        k = allAnswers[i];
        allAnswers[i] = allAnswers[j];
        allAnswers[j] = k;
    }

    return allAnswers;
}

const App = () => {
    const [status, setStatus] = useState(STATUS.SUCCESS);
    const [questions, setQuestions] = useState(null);
    const [position, setPosition] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    useEffect(() => {
        console.log("userEffect")
        readQuestions().then(data => {
            console.log("data:", data);
            data.results.map((result, index)=> {
                result.all_answers = processAnswers(result);
            })
            console.log("Post set-questions:", data.results); 
            setQuestions(data.results);  
        })
    }, []);

    return (
        <main className="container">
                {console.log("Container:", questions)}
                {
                    status === STATUS.START ?
                        <p>foo1</p>
                        :
                        <>
                            {
                                status === STATUS.LOADING ?
                                    <p>foo2</p>
                                    :
                                    <>
                                        {
                                            status === STATUS.SUCCESS && questions !== null?
                                                <Question
                                                    question={questions[position]}
                                                    position={position} setPosition={setPosition}
                                                    selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}
                                                />
                                                :
                                                <p>foo3</p>
                                        }
                                    </>
                            }
                        </>
                }
               
        </main>
    )
}

export default App;
