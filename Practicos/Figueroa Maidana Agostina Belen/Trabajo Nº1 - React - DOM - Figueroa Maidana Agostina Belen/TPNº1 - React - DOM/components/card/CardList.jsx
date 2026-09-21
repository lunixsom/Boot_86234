import Card from "./Card.jsx";
import Title from "../title/Title.jsx";
import "./CardList.css";

export default function CardList({ devs }) {

    return (
        <>
            <div className="title-container">
                <Title
                    principal="Desarrolladores"
                    secundario="Nuestro equipo"
                />
            </div>

            <div>

                {devs.map((desarrollador) => (
                    <Card
                        devs={desarrollador}
                        key={desarrollador.id}
                    />
                ))}

            </div>
        </>
    );
}