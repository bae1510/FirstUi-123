import React, { useState } from 'react';
import './counting.css';


function Change() {
  

 const[name , setName] =useState('priyal')
 const[place , setPlace] =useState('****')


 const changeName=(event)=>{

    const newValue=event.target.value;
    setName(newValue)
 }

 const handleSubmit=(event)=>{
    event.preventDefault();
    //if(name != ''){
        setPlace(name);
        setName('')
   // }
 }


 




  return (
    <div className="mystyle">
      <form onSubmit={handleSubmit} >
        <label > Name :   </label>
        <input type="text"    onChange={changeName} placeholder='Add your Name...' />
        <button type="submit">Submit</button>
      </form>
      <h1>Hii My Name Is : {place} !</h1>
    </div>
  );
}

export default Change;
