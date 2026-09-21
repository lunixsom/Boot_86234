import Title from "./Title"
import Card from "./Card"

export default function CardList({ devs }) {
  return (
    <div>
      <Title texto="Nuestro equipo" subtitulo="Desarrolladores disponibles para trabajar" />

      <div className="d-flex flex-wrap justify-content-center">
        {devs.map((dev) => <Card dev={dev} key={dev.id} />)}
      </div>
    </div>
  )
}
