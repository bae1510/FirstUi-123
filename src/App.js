import logo from './logo.svg';
import './App.css';
import Profile from './component/profile';


function App() {

  return (
    <div className="App">
      
      <Profile 
      image ='https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
      designation="UI/UX DESIGNER"
      Name="Aryan Shirani"
      jobDescription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      
      <Profile 
      image ='https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
      designation="Project Manager"
      Name="Jon Devin"
      jobDescription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />


      <Profile 
      image ='https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
      designation="Software Engineer"
      Name="Mr. Harry Potter"
      jobDescription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />


      



    </div>
  );
}

export default App;
