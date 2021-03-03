import {useState, useEffect} from 'react';

import Question from "../components/Question.js"
import QuizConfig from '../components/QuizConfig.js';
import '../styles/App.css';

const URL = "https://opentdb.com/api.php";

const STATUS = {
    START: "start",
    LOADING: "loading",
    SUCCESS: "success",
    FAIL: "fail",
    DONE: "done"
}


const readQuestions = async (url) => {
    {console.log("Requesting from: ", url)}
    let response = await fetch(url);
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

const assembleURL = (queryParams) => {
    let url = URL + "?amount=" + queryParams.num;
    if (queryParams.cat !== "any") {
        url = url + "&category=" + queryParams.cat;
    }
    if (queryParams.dif !== "any") {
        url = url + "&difficulty=" + queryParams.dif; 
    }
    return url;
  }

const App = () => {
    const [status, setStatus] = useState(STATUS.START);
    const [questions, setQuestions] = useState(null);
    const [position, setPosition] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [queryParams, setQueryParams] = useState({num: "2", cat: "any", dif: "any"});

    useEffect(() => {
        if (status === STATUS.LOADING) {
            console.log("userEffect")
            let url = assembleURL(queryParams);
            readQuestions(url).then(data => {
                console.log("data:", data);
                data.results.map((result, index)=> {
                    result.all_answers = processAnswers(result);
                })
                console.log("Post set-questions:", data.results); 
                
                setQuestions(data.results);
                setStatus(STATUS.SUCCESS);
                  
            })
        }        
    }, [status, queryParams]);


    return (
        <main className="container">
                {console.log("Current Status:", status)}
                {console.log("Container:", questions)}
                {
                    status === STATUS.START ?
                        <QuizConfig 
                            STATUS={STATUS} setStatus={setStatus}
                            queryParams={queryParams} setQueryParams={setQueryParams}
                        />
                        :
                        <>
                            {
                                status === STATUS.LOADING ?
                                    <p>foo2</p>
                                    :
                                    <>
                                        {
                                            status === STATUS.SUCCESS ?
                                                <Question
                                                    question={questions[position]}
                                                    position={position} setPosition={setPosition}
                                                    selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}
                                                    answered={answered} setAnswered={setAnswered}
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
