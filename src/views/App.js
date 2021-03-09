import {useState, useEffect} from 'react';

import Loading from '../components/Loading.js';
import Error from '../components/Error.js';
import Question from '../components/Question.js';
import QuizConfig from '../components/QuizConfig.js';
import Summary from '../components/Summary.js';
import '../styles/App.css';
import '../styles/styles.css';

const URL = "https://opentdb.com/api.php";
// const URL = "https://opentb.com/api.php";

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
        allAnswers.push(decode(answer))
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

const decode = txt => {
    return new DOMParser().parseFromString(txt, 'text/html').body.innerText;
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
    const [questions, setQuestions] = useState([]);
    const [position, setPosition] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [queryParams, setQueryParams] = useState({num: "2", cat: "any", dif: "any"});
    const [score, setScore] = useState({points: 0, correct_answers: []});

    useEffect(() => {
        if (status === STATUS.LOADING) {
            console.log("userEffect")
            let url = assembleURL(queryParams);
            readQuestions(url).then(data => {
                console.log("data:", data);
                data.results.map((result, index)=> {
                    result.all_answers = processAnswers(result);
                    result.question = decode(result.question);
                })
                console.log("Post set-questions:", data.results);
                setQuestions(data.results);
                setStatus(STATUS.SUCCESS);             
            }).catch(error => {
                setStatus(STATUS.FAIL);
                console.log(error);
            })
        }        
    }, [status, queryParams]);

    const validateAnswer = () => {
        setAnswered(true);
        let points = score.points;
        let answers = [];
        score.correct_answers.map((answer, index) => {
            answers.push(answer);
        });        
        if (selectedAnswer === questions[position].correct_answer) {
            console.log("Right!");
            points++;
            answers.push(true);
            setScore({
                ...score,
                points: points,
                correct_answers: answers
            });
        } else {
            console.log("Wrong!");
            answers.push(false);
            setScore({
                ...score,
                correct_answers: answers
            });
        }     
    }

    const retakeQuiz = () => {
        setScore({points: 0, correct_answers: []});
        setPosition(0);
        setStatus(STATUS.SUCCESS);
    }

    const reset = () => {
        setScore({points: 0, correct_answers: []});
        setPosition(0);
        setStatus(STATUS.START);
    }


    return (
        <main className="container">
                {console.log("Current Status:", status)}
                {console.log("Container:", questions)}
                {console.log("Score is now: ", score)}
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
                                    <Loading />
                                    :
                                    <>
                                        {
                                            status === STATUS.SUCCESS ?
                                                <>{
                                                    position < questions.length ?
                                                        <Question
                                                            question={questions[position]}
                                                            position={position} setPosition={setPosition}
                                                            selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}
                                                            answered={answered} setAnswered={setAnswered}
                                                            validateAnswer={validateAnswer}
                                                            reset={reset}
                                                        />
                                                        :
                                                        <Summary score={score} reset={reset} retakeQuiz={retakeQuiz}/>
                                                }</>                                               
                                                :
                                                <Error reset={reset}/>
                                        }
                                    </>
                            }
                        </>
                }
               
        </main>
    )
}

export default App;
