import Title from "./Title";
import Card from "./Card";

function CardList({ devs }) {
  return (
    <section className="container">
      <Title texto="Nuestro equipo" />
      <div className="d-flex flex-wrap justify-content-center">
        {devs.map((dev) => (
          <Card key={dev.id} dev={dev} />
        ))}
      </div>
    </section>
  );
}

export default CardList;