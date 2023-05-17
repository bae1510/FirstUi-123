import React from 'react';
//import styles from './section.module.css';
import styles from './section.module.css';


function Section() {
  return (
    <section >
    <div className={styles.content}>
    <div>
        <h1>Be There</h1>
        <p>Delivery brilliant messages in the moments that truly define your brand.</p>

        <button className={styles.btn}> See How  </button>
        </div>
 
        

      <div className={styles.img}>
        <img  src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtup5VLYJzhr-fTDNDLNqi0v_LF_GSq_g6Q&usqp=CAU"/>
   
      </div>
      </div>
   
    </section>
    
    
  )
}

export default Section