export default function Card({ dev }) {

  const colorBadge = dev.stack === "Frontend" ? "bg-primary"
                    : dev.stack === "Backend" ? "bg-success"
                    : "bg-warning"

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={dev.avatar} className="card-img-top" alt={dev.nombre} />

      <div className="card-body">
        <h5 className="card-title">{dev.nombre}</h5>
        <p className="card-text">{dev.rol}</p>

        <span className={`badge ${colorBadge}`}>{dev.stack}</span>

        {dev.skills.length > 0 && (
          <ul className="mt-2">
            {dev.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        )}

        <p className={dev.disponible ? "text-success" : "text-danger"}>
          {dev.disponible ? "Disponible" : "No disponible"}
        </p>

        {dev.github && (
          <a href={dev.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        )}
      </div>
    </div>
  )
}
