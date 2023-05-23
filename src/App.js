
import './App.css';
import SearchBar from './components/SearchBar';
import {SearchList} from './components/SearchList';
import { useState } from 'react';


function App() {
  const [results , setResults] = useState([])
  return (
    <div className="App">
    <div className="searchbarContainer">
        <SearchBar setResults={setResults}/>
       <SearchList results={results}/>
       
    </div>  


    </div>
  );
}

export default App;
