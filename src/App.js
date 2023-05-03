import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {

  const [mobile, setMobile] = useState("");

  const handle = (e) => {
    setMobile(e.target.value);

  }
  // const mobileRegex = /^(\+91|0)?[6789]\d{9}$/;
  // const mobileInput = document.getElementById('mobile-input').value;
  // if (!mobileRegex.test(mobileInput)) {
  //   alert('Invalid mobile number. Please enter a 10-digit number starting with 6, 7, 8, or 9.');
  //   return;
  // }



  function saveUser() {
    console.log(mobile);





    let data = { mobile }
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: {
        'Accept': 'application/json',//json data ko accept krega
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      //console.log("result",result);
      result.json().then((response) => {
        console.log("response", response)
      })
    })
  }

  return (
    <div className="App">
    <div className='div'>
      <input type="text" value={mobile} onChange={handle} placeHolder="mobile" className='test' /><br />
      <button onClick={saveUser}>Get Otp</button>
    </div>
    </div>
  );
}

export default App;
