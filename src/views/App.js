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

const App = () => {
    const [status, setStatus] = useState(STATUS.SUCCESS);
    const [position, setPosition] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        console.log("userEffect")
        readQuestions().then(data => {
            console.log("data:", data);
            setQuestions(data.results);
        })
    }, []);

    return (
        <main className="container">
                {console.log("Container:", questions[position])}
                {
                    status === STATUS.START ?
                        <></>
                        :
                        <>
                            {
                                status === STATUS.LOADING ?
                                    <>
                                    </>
                                    :
                                    <>
                                        {
                                            status === STATUS.SUCCESS ?
                                                <Question question={questions[position]} position={position} setPosition={setPosition}/>
                                                :
                                                <p>foo</p>
                                        }
                                    </>
                            }
                        </>
                }
                
                {/* {
                    
                        questions.map((question, index) => 
                            <Question question={question} key={index}/>
                        )
                    
                } */}
               
        </main>
    )
}

export default App;
