import { Link } from "react-router-dom";
import DogsGrid from "./DogsGrid";



const DogsRegister = (props)=>{
    
    return(
        <div className="registercomp">
            <h1>Registered Dogs.</h1>
            <section className="registermenu">
                <Link to='/'>
                    <button className="btn">Home</button>
                </Link>
                <Link to='/dogdetails'>
                    <button className="btn">Dog</button>
                </Link>
            </section>
            <DogsGrid data={props.data}/>
        </div>
    );
}

export default DogsRegister;