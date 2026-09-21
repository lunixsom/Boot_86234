import Title from "./Title";
import Card from "./Card";

function CardList({ desarrolladores }) {
    return (
        <section className="seccion-desarrolladores">
            <div className="titulo-lista">
                <Title
                    texto="Nuestro equipo"
                    subtitulo={`${desarrolladores.length} desarrolladores para conocer`}
                />
            </div>

            <div className="lista-desarrolladores">
                {desarrolladores.map((desarrollador) => (
                    <Card
                        key={desarrollador.id}
                        desarrollador={desarrollador}
                    />
                ))}
            </div>
        </section>
    );
}

export default CardList;