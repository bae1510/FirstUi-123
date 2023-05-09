import React from 'react'
import styles from './header.module.css';
//import {ImSphere} from 'react-icons/im'
//ImSphere

function header() {

   const navOptions = [
        'Home',
        'About' ,
        'Project' ,
        'Videos' ,
        'Contact' 
        
    ]
  return (
    <header>
        <div  className={styles.navOptions}>
        {/* <ImSphere className={styles.icon}/> */}
        <img  className={styles.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-X4ppRWmpB1bwnpjS3jgQysBW-znbhFjNKA&usqp=CAU"/>
            {
                navOptions.map(page =>
                (<p>{page}</p>))
            }
            <button className={styles.btn}>Login</button>
        </div>
       
    </header>
    
  )
}

export default header