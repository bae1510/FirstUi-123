import React from 'react'
import "./SearchList.css"
import  SearchResult  from "./SearchResult";

export const SearchList = ({ results }) => {
  return (
    <div className="resultList">
      {results.map((result, id) => {
        return <SearchResult result={result.state_name} key={id} />;
      })}
    </div>
  );
};

