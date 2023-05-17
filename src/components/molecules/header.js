import React from 'react'
import styles from './header.module.css';
//import {ImSphere} from 'react-icons/im'
//ImSphere
// BiMenu
import {BiMenu} from 'react-icons/bi'
// import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  // const navigate =useNavigate()


  // function handleClickHome(){
  //   navigate('/home')
  // }

  // function handleClickAbout(){
  //   navigate('/about')
  // }

   const navOptions = [
    // {
    //     home:'/home',
    //     about:'/about' ,
    //     project:'/Project' ,
    //     video:'/Videos' ,
    //     Contact:'/Contact' 
    //  }

    // <button onClick={handleClickHome}>Home</button>,
    // <button onClick={handleClickAbout}>about</button>,
    // <button onClick={handleClickProject}>Project</button>,
    // <button onClick={handleClickVideo}>Video</button>

    <Link to="/home" >Home</Link>,
              <Link to="/about" >About </Link>,
              <Link to='/services' >Project</Link>,
              <Link to="/terms" >Video</Link>,
              <Link to="/contact" >Contact</Link>,
             
    ]

    
    // const handleClick = function (e) {
    //    // console.log(e)
    //    const pathToRedirect = navOptions[e]
    //    navigate(pathToRedirect);

    // }
  return (
    <header>
        <div  className={styles.navOptions}>
        {/* <ImSphere className={styles.icon}/> */}
        <img  className={styles.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-X4ppRWmpB1bwnpjS3jgQysBW-znbhFjNKA&usqp=CAU"/>
            {
                navOptions.map(page =>
                (<p >{page}</p>))
            }
            <button className={styles.btn}>Login</button>
            <BiMenu className={styles.menu}/>
        </div>

       
    </header>
    
  )
}

export default Header