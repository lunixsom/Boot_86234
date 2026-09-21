export default function Card({ dev }) {

  const badgeColor = 
  dev.stack === "Frontend" ? "bg-primary":
  dev.stack === "Backend" ? "bg-success" : "bg-warning"

  return (
    <div className="card">
      <div className="card-header">
        <img src={dev.avatar} alt={dev.nombre} />
        <h3>{dev.nombre}</h3>
        <p>{dev.rol}</p>
        {dev.skills.length > 0 && (
          <ul>
            {dev.skills.map((skill, index) => (

              <li key={index} > {skill} </li>
            )
            )
            }
          </ul>
        )
        }
        
        <span className={`badge ${badgeColor}`}>{dev.stack} </span>
        <p className={dev.disponible  ? "text-success" : "text-danger"}>
          {dev.disponible ? "Disponible" : "No disponible"}
        </p>

        {dev.github && (
          <a href={dev.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
          </a>
        )}


      </div>

    </div>
  )

}