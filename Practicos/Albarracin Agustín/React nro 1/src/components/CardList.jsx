import Card from "./Card";
import Title from "./Title";

function CardList(props) {
    return (
        <div>
            <Title
                texto="Nuestros desarrolladores"
                subtitulo="Conocé los perfiles disponibles"
            />

            <div className="row g-3">
                {props.devs.map((dev) => {
                    return (
                        <div className="col-md-4" key={dev.id}>
                            <Card dev={dev} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CardList;