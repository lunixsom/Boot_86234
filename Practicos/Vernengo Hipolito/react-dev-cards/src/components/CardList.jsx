import Title from "./Title";
import devs from "../data/devs";
import Card from "./Card";
import "./CardList.css";

function CardList(){
    return (
        <>
            <Title title = "CardList"/>
            <div className="container-cards">
                {devs.map((desarrollador) =>{
                    return <Card dev={desarrollador} key={desarrollador.id}/>
                })}
            </div>
        </>
    )
}

export default CardList;