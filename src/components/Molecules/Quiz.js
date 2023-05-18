import React from 'react'
import { QuizData } from '../Data/QuizData'
import Styles from './Quiz.module.css'
import { useState } from 'react';
import './Quiz.css';
import QuizResult from './QuizResult';

function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[clickedOption, setClickedOption] = useState(0)
   const[showResult,setShowResult] =useState(false)
   
    const changeQuestion = () => {
        updateScore();
    if(currentQuestion<QuizData.length-1){
    setCurrentQuestion(currentQuestion+1);
  // setClickedOption(0)

}
   else{
    setShowResult(true)
   }
}
const updateScore=()=>{
    if(clickedOption === QuizData[currentQuestion].answer){
        setScore(score+1)
    }
}
const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0)
}
   
  
    return (
    <div>
    <h1 className={Styles.heading}>Quiz App</h1>
    <div className={Styles.container}>
    {showResult ? (
        < QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
    ) :(
        <>
    
    
    <div className={Styles.question}>
    <span id={Styles.questionnumber}>{currentQuestion+1}.</span>
    <span id={Styles.questiontxt}>{QuizData[currentQuestion].question}</span>

    </div>
    <div className={Styles.optioncontainer}>
    {QuizData[currentQuestion].options.map((option,i)=>{
        return(
            <button 
            className={`optionbtn ${
                clickedOption === i+1 ? "checked" : null
            }`}
            key ={i}
            onClick ={()=> setClickedOption(i+1)}
            >
            {option}
            </button>
        )
    })}
    </div>
    <input type="button" value="Next" id={Styles.nextbutton} onClick={changeQuestion} />
    </>
    )}
    </div>
    
    </div>
    
  )
}

export default Quiz