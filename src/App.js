import logo from './logo.svg';
import './App.css';
import Card from './components/card';


function App() {
  return (
    <div className="App">




      <Card
      image ="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
      ProductName = "Shoues"
      Brand = "adidas"
      productDescription ="which will depend on a couple of factors including the number of artwork placements and colours used in the design."
      Price ="7$"
      Rating = "4*"
      
      />
      <Card
      image ="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600"
      ProductName = "T-shirt"
      Brand = "Bevkoof"
      productDescription ="which will depend on a couple of factors including the number of artwork placements and colours used in the design."
      Price ="7$"
      Rating = "3*"
      
      />
      <Card
      image ="https://media.istockphoto.com/id/639511940/photo/beautiful-denim-pants.jpg?b=1&s=612x612&w=0&k=20&c=tqlxWhlI687DOAnrA4tw9_7oJmM_wVoLEb8REuvEACs="
      ProductName = "jeans"
      Brand = "Levi's"
      productDescription ="which will depend on a couple of factors including the number of artwork placements and colours used in the design."
      Price ="5$"
      Rating = "5*"
      
      />

      <Card
      image ="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
      ProductName = "Laptop"
      Brand = "Apple"
      productDescription ="which will depend on a couple of factors including the number of artwork placements and colours used in the design."
      Price ="7$"
      Rating = "4*"
      
      />

      <Card
      image ="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ProductName = "Watch"
      Brand = "Titen"
      productDescription ="which will depend on a couple of factors including the number of artwork placements and colours used in the design."
      Price ="5$"
      Rating = "4*"
      
      />
      </div>
   
  );
}

export default App;
