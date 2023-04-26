import React,{ useState } from "react";
import './counting.css';

export default function Count(){
    
    const [data, setData] = useState(1)
    const [data1 ,setData1]= useState(10)


    function handleClick(){
    //   let count = 1
        setData(data => data+ 1 );
    
    };

    const decreaseClick=() =>{
       data1 >0 && setData1(data1 => data1-1);
    }


    return(
        <div>

        <h3>{data}</h3>
        <button onClick={handleClick} className='test'>Increasing(+)</button>
        <h3>{data1}</h3>
        <button onClick= {decreaseClick} className='test'>Decreasing(-)</button>
        </div>
    )
}