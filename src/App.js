import logo from './logo.svg';
import './App.css';
import { Invitation } from './component/Invitation';

function App() {
  return (
    <div className="App" >
   <Invitation 
    event = "Birthday party Invitation "
    occ = "birthday party"
    mail= "jaGdish@gmail.com"
    name= "jaGdish"
    Names= "Ritu , Saurabh , Kartik"
    venu = "Green field Avenue"
   />
    </div>
  );
}

export default App;
