import React from 'react'
//import Card from './components/atoms/card.js'
import Styles from './profile.module.css'


function Profile() {
    const data = [
        {
          image :"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
          ProductName :"Shoues",
          Brand : "adidas",
          productDescription :"which will depend on a couple of factors including the number of artwork placements and colours used in the design.",
          Price :"7000₹",
          
    
        },
        {
            image :"https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600",
            ProductName : "T-shirt",
            Brand : "Bevkoof",
            productDescription :"which will depend on a couple of factors including the number of artwork placements and colours used in the design.",
            Price :"700₹",
            
            
        },
        {
          image :"https://media.istockphoto.com/id/639511940/photo/beautiful-denim-pants.jpg?b=1&s=612x612&w=0&k=20&c=tqlxWhlI687DOAnrA4tw9_7oJmM_wVoLEb8REuvEACs=",
          ProductName : "jeans",
          Brand :"Levi's",
          productDescription :"which will depend on a couple of factors including the number of artwork placements and colours used in the design.",
          Price :"5000₹",
        
        },
        {
            image :"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
          ProductName :"Laptop",
          Brand : "Apple",
          productDescription :"which will depend on a couple of factors including the number of artwork placements and colours used in the design.",
          Price :"51000₹",
         
          
        },
        {
            image :"https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ProductName : "Watch",
            Brand : "Titen",
            productDescription :"which will depend on a couple of factors including the number of artwork placements and colours used in the design.",
            Price :"1100₹",
            
            
        }
    
    ]

  return (
    <div className={Styles.wrapper}>
    {data.map((elem)=>(
        <li className={Styles.card} key ={elem.index}>
      
           
            <img className={Styles.img} src={elem.image}/>
            <h2>{elem.ProductName}</h2>
            <h5>{elem.Brand}</h5>
            <p>{elem.productDescription}</p>
            <h3>{elem.Price}</h3>
            
  
        
        </li>
    ))}

    </div>
  )
}

export default Profile