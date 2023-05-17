import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/header.js';
import Section from './components/molecules/section.js';
import Home from './components/pages/Home/home';
import About from './components/pages/About/about';
import Project from './components/pages/Project/Project';
import Contact from './components/pages/Contact/Contact';
import Video from './components/pages/Video/Video';
import {Routes, Route, } from "react-router-dom";
import { Link } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <Header />
      <Section/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
         <Route path = "/project"  element={<Project/>}/>
       {/* <Route path = "/video"  element={<Video/>}/>
        <Route path = "/contact"  element={<Contact/>}/>
         */}
      </Routes>
    </div>
  );
}

export default App;
