import React, { useState } from "react";
import axios from 'axios';

function OtpForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateMobileNumber(mobileNumber)) {
      setResponse("Please enter a valid 10 digit Indian mobile number.");
      return;
    }
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ mobile: mobileNumber }),
    // };
    axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      mobile: `${mobileNumber}`
    })
      .then((response) => {
        if (response.status === 200) {
          setResponse("OTP sent successfully!");
          setMobileNumber("");
          setTimeout(() => setResponse(""), 2000);
        } else {
          setResponse("Failed to send OTP. Please try again later.");
        }
      })
      .catch((error) => console.log(error));
  };

  const validateMobileNumber = (mobileNumber) => 
  {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobileNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobileNumber">Mobile Number: </label>
        <input
          type="number"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default OtpForm;