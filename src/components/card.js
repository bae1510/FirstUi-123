import './Sytel.css';

export default function Clipboard(props){


    function Click(){
        alert("Product of is  1 , which is props.Brand of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!!");
    }

    return (

        <div className="outer" >
        <div className = "inner">
        <img src={props.image} alt=" "  className="img" />
        <h3> {props.ProductName}</h3>
        <h4> {props.Brand}</h4>
        <h4> {props.productDescription}</h4>
        <h4 style = {{color : "orange"}}> {props.Price}</h4>
        <h4 style = {{color : "red"}}> {props.Rating}</h4>

        <button onClick = {Click} className="btn">Add To Cart</button>
        </div>
        
        </div>
    )

}