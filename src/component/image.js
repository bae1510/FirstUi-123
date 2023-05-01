import { useState , useEffect } from 'react';


export default function Image(){

    const  [image ,setImage] = useState(false)
  const images={
    img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpebiXZUYDI2ntXXFgdCM1OmK54zWl3H4GA&usqp=CAU',
    img2:'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg'
  }



const handleClick=()=>{
  setImage(!image)
}
    return(
        <div>
        <img id="img" src={image?images.img1:images.img2}/>
         <br></br>
        <button onClick= {handleClick}>CLick to change image</button>
   
        </div>
    )
}