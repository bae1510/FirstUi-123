import React from 'react'
import Button from '../Attoms/Button'
import { useState } from 'react'
import List from './List';
//import Styles from './todoList.module.css'
import Styles from "./List.module.css"

function TodoList() {

    const[listTodo , setListTodo] = useState([]);
    let addList = (inputText) =>{
      if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }
    const deleteListItem = (key) => {
      let newListTodo = [...listTodo];
      newListTodo.splice(key,1)
      setListTodo([...newListTodo])
    }
  return (
    <div>
    <Button addList={addList}/>
    {/* <List/> */}
    
    <h1 className={Styles.heading}>TODO</h1>
    {/* <hr/> */}
    {listTodo.map((listItem,i)=>{
      return(
       <List key={i} index={i} item={listItem} deleteItem={deleteListItem}  /> 
      )
    })}
    
    </div>
  )
}

export default TodoList