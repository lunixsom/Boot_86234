import Card from "./Card";
import Title from "./Title";

function CardList({ devs }) {
  return (
    <section>
      <Title
        texto="Nuestros desarrolladores"
        subtitulo="Conoce a los profesionales de nuestro equipo"
      />

      <div>
        {devs.map((dev) => (
          <Card key={dev.id} dev={dev} />
        ))}
      </div>
    </section>
  );
}

export default CardList;