import Title from "./Title";
import Card from "./Card";

function CardList({ devs }) {

    return (

        <section className="container">

            <Title texto="Nuestros desarrolladores" />

            <div className="row">
                {devs.map((dev) => (
                    <div className="col-md-4 mb-4" key={dev.id}>
                        <Card dev={dev} />
                    </div>
                ))}
            </div>



        </section>
    )
}

export default CardList