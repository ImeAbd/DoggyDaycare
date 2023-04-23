
const DogCard = (props)=>{
    const dog = props.dog;

    if (dog != null){
        return(
            <div className="dogcard">
                <h2>Meet our friend {props.dog.name}</h2>
                <h2>{props.dog.id}</h2>
                <img src={props.dog.img} alt={props.dog.chipNumber}/>
                <h2>{props.dog.breed}</h2>
            </div>
        )
    }else{
        console.log("card state is null");
    }
}
export default DogCard