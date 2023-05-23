import React from 'react'
import "./SearchResult.css"

function SearchResult({result}) {
  return (
    <div className='searchResult'>
        {result.state_name}
    </div>
  )
}

export default SearchResult