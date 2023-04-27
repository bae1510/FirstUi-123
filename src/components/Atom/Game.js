import React, { useState } from 'react';

function Game() {

    const [Guess, setGuess] = useState(' ')
    const [userCount, setUserCount] = useState(0)
    const [randomnumber, setRandomnumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [msg, setMsg] = useState("")

    const changeHandler = (event) => {
        setGuess(event.target.value)
    }

    const submitHandler = () => {
        // alert(Guess)
        if (Number(randomnumber) === Number(Guess)) {
            setMsg("Congratulation!!");
        } else if (userCount === 3) {
            setMsg("GameOver!!!!");
        } else {
            setMsg("Wrong Guess!!")


            if (randomnumber > Guess) {
                alert("you guessed a smaller number")
            }
            if (randomnumber < Guess) {
                alert("you guessed a bigger number ")
            }
        }
        setUserCount(userCount + 1)
    }




    return (

        <div>
            <h1>Number Guessing !!</h1>
            <input type="text" value={Guess} onChange={changeHandler} placeholder="Guess lucky number"   className='txt'/>

            <button onClick={submitHandler}  className='txt'>Match-Number</button>
            <h5>Message : {msg}</h5>

            <h5>Total Round of Count {userCount}</h5>

           
        </div>


    )
}
export default Game;