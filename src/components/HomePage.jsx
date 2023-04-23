import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import './homepage.css';



const HomePage = (props)=>{
    const [dogs, setDogs] = useState(0);
    const number = props.data;
    const present = [];
    
    
    if(number!=null){
        for(const x of number){
            if(x.present){
                present.push(x);
            }
        }
    }
    
    useEffect( ()=>{
        setDogs(present.length);
    }, []);
    

    return(
        <div className="homepage">
            <div>
                <h1>Doggy Daycare</h1>
                <section className="homemenu">
                    <Link to='/registry'>
                        <button>Registered Dogs</button>
                    </Link>
                    <Link to='/dogdetails'>
                        <button>Dog</button>
                    </Link>
                </section>
                <section>
                    We have {dogs} dogs in our daycare!
                </section>
            </div>

            <DogCard dog={props.sample} />



        </div>
    );
}


export default HomePage;
