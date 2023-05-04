
import { useEffect, useState } from 'react';
import axios from 'axios';

export function ImageRefresher() {

    const [image, setImage] = useState([]);

    useEffect(() => {

       axios.get('https://dog.ceo/api/breeds/image/randomy')
            //.then((data) => data.json())
           .then((response) =>setImage(response.data.message))
          
            .catch((error) => console.log(error));

    }, [])

    return (

        <img src={image} alt="Not found"
            style={{ width: '550px' }}
        />
    )
}