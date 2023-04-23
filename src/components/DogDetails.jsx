import { Link, useParams } from "react-router-dom";
import './dogdetails.css';

function getImg(data, selected){

    const imgSection = [];

    const test = ()=>{
        if (selected != null){
            return true
        }else{
            return false
        }
    }

    if(data != null){
        const index = randomDog(data);

        const dogImg = data[test ? selected : index].img;
        const dogName = data[test ? selected : index].name;

        const img = <div className="dogimg">
            <h2>{dogName}</h2>
            <img src={dogImg} alt="missing pic"/>
        </div>

        imgSection.push(img);
    }
    return imgSection;

};

function getDtl(data, selected){
    const dtlSection = [];
    
    const test = ()=>{
        if (selected != null){
            return true
        }else{
            return false
        }
    }

    if(data != null){
        const index = randomDog(data);

        const dogSex = data[test ? selected : index].sex;
        const dogbreed = data[test ? selected : index].breed;
        const present = data[test ? selected : index].present; 
        const age = data[test ? selected : index].age;
        const chipNumber= data[test ? selected : index].chipNumber;
        const owner = data[test ? selected : index].owner.name;

        const dtl = <div className="dogdtls">
            <h3>Owner: {owner}</h3>
            <h3>Presence:{present ? " With us today!" : " Not here today!"}</h3>
            <h3>Age: {age}</h3>
            <h3>Breed: {dogbreed}</h3>
            <h3>Sex: {dogSex}</h3>
            <h3>Chip Number: {chipNumber}</h3>
        </div>

        dtlSection.push(dtl);
    }
    console.log("dtl: ", typeof dtlSection)

    return dtlSection;
    
};
function randomDog(record){
    const random = Math.floor(Math.random() * record.length);
    return random;
};

const DogDetails=(props)=>{
    const data = props.data;

    const params = useParams();
    let id = 0;

    if('id' in params && data != null){
        if (params.id > 0 && params.id <= data.length){
            id = Number(params.id);
        };
    };

    const imgSection = getImg(data, id);
    const dtlSection = getDtl(data, id);
        

    return(
        <div className="recordcomponent">
            <h1>Registered Info</h1>
            <section className="homemenu">
                <Link to='/'>
                    <button className="btn">Home</button>
                </Link>
                <Link to='/'>
                    <button className="btn">Dog Register</button>
                </Link>
            </section>

            <div className="sections">
                <section>{imgSection}</section>
                <section>{dtlSection}</section>
            </div>
        </div>

    );

}

export default DogDetails;