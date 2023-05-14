import React from 'react'
import Styles from "./List.module.css"


function List(props) {
  return (
   
    <li className={Styles.list}>
        {props.item}
       <span class={Styles.icons}>
       <i className="fa-sharp fa-solid fa-trash icon-delete"
       onClick={e=>{
        props.deleteItem(props.index)
       }}
       ></i>
       </span>
    </li>

    
  )
}

export default List