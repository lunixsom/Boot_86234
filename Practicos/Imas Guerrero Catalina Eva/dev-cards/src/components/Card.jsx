function Card({ dev }) {
  const colorBadge =
    dev.stack === "Frontend"
      ? "bg-primary"
      : dev.stack === "Backend"
      ? "bg-success"
      : "bg-warning text-dark";

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={dev.avatar} className="card-img-top" alt={dev.nombre} />
      <div className="card-body">
        <h5 className="card-title">{dev.nombre}</h5>
        <p className="card-text">{dev.rol}</p>

        <span className={`badge ${colorBadge} mb-2`}>{dev.stack}</span>

        {dev.skills.length > 0 && (
          <ul className="list-unstyled">
            {dev.skills.map((skill, index) => (
              <li key={index}>
                <i className="fa-solid fa-check text-success me-1"></i>
                {skill}
              </li>
            ))}
          </ul>
        )}

        <p>
          {dev.disponible ? (
            <span className="text-success">🟢 Disponible</span>
          ) : (
            <span className="text-danger">🔴 No disponible</span>
          )}
        </p>

        {dev.github && (
          <a href={dev.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fs-4"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;