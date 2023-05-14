import React from 'react'
import Styles from "./button.module.css"
import {useState} from 'react'



function Button(props) {
  const [inputText, setInputText] = useState(' ');
  return (
    <div>

    <input type='text' placeholder='Enter your Todo '  className={Styles.input}
      value={inputText}
      onChange={e=>{
        setInputText(e.target.value)
      }}


    />
    <button className={Styles.btn}
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>
    {/* <div>{inputText}</div> */}
    </div>
  )
}

export default Button