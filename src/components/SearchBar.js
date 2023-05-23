import React from 'react'

import { useState } from 'react'
//FaSearch
import { FaSearch } from "react-icons/fa"
import "./Searchbar.css"

function SearchBar({setResults}) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states ")
            .then((response) => response.json())
            .then((data) => {
                //console.log(json)
                //console.log(data)
                const results = data.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.state_name &&
                        user.state_name.toLowerCase().includes(value)
                
                     );
                    });
                //console.log(results)
                setResults(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='inputWraper'>
            <FaSearch className='searchIcon' />
            <input placeholder='Type To Search...' value={input} onChange={(e) =>  handleChange(e.target.value)} />

        </div>
    )
}

export default SearchBar