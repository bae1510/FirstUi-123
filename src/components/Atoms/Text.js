import React from 'react'
import { useState } from 'react'

function Text() {
  const[List , setList] = useState([
    {id:1, name:"Ankit"},
    {id:2, name:"Rajesh"},
    {id:3, name:"nehaa"},
    {id:4, name:"Vinni"},
  ])

  function removeList(id){
    const newList = List.filter((el) => el.id !== id);
    setList(newList);
  }
  return (
    <div>
        {/* <input type='text' placeholder='Type Something...'/> */}
        <ul>
          {
            List.map((todo)=>{
              return <li key={todo.id}>{todo.name}
              <span onClick={()=>removeList(todo.id)} style ={{marginLeft:"10px", color :"red", cursor:"pointer"}}>X</span></li>
            })
          }
        </ul>
        
    </div>
  )
}

export default Text