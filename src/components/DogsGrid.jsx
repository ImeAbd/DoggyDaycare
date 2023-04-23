import {useState} from "react";
import './register.css';
import { Link, useNavigate, useParams } from "react-router-dom";

const DogsGrid = (props) =>{
    const data = props.data;
    const container = [];
    let navigate = useNavigate();
    const params = useParams();

    if(data != null){
        const content = data.map( (dog, index)=>(
            <div className="dog" key={index}>
                <img src={dog.img} alt="missing pic" onClick={()=>{navigate("/dogdetails/"+index)}} />
                <br />
                <label>{dog.name}</label>
            </div>
        ) );
        container.push(content);
    }

    return(
        <div className="dogscontainer">
            <h2>All of our registered friends!</h2>
            <div className="doggrid">
                {container}
            </div>
        </div>

    );
    
}

export default DogsGrid;