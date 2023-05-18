import React from 'react'
import Styles from './Quiz.module.css';

function QuizResult(props) {
  return (
    <>
    <div className={Styles.showscore}>
   Your Score: {props.score} <br/>
   Total Score :{props.totalScore}
    </div>
    <button id={Styles.nextbutton} onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult