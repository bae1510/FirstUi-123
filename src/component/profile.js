import './Style.css';



export default function Profile(props){

    function handleClick(){
        alert(props.Name);
    };

    return(
        
        <div className = "outer" >
        <div className ="card">
        <img src={props.image} alt=" "  className="img" />
        <h2>{props.designation}</h2>
        <h3 >{props.Name}</h3>
        <p>{props.jobDescription}</p>
        <button onClick ={handleClick} className="btn">See more</button>
        </div>
        </div>
        
    )
}