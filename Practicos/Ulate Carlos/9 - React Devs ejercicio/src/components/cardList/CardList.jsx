 
import Card from "../card/Card";
import Title from "../title/Title";

export default function CardList({dev}) {
  return (

    <div className="card-container">
      <Title titulo="Nuestros Desarrolladores" />
      {
        dev.map((desarrolladores) => {
          return <Card dev={desarrolladores} key={desarrolladores.id}  />

        })

      }
    </div>
  )
}
