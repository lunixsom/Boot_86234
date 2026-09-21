function Card({ dev }) {
    return (
        <div className="card">
            <img src={dev.avatar} alt={dev.nombre} className= "card-image-top"/>

            <div className="card-body">
                <h2>{dev.nombre}</h2>

                <p>{dev.rol}</p>
                <span
                    className={
                        dev.stack === "Frontend" ? "badge bg-primary" : dev.stack === "Backend" ? "badge bg-success" : "badge bg-warning"
                    }
                >
                    {dev.stack}
                </span>
                {dev.skills.length > 0 && (
                    <ul>
                        {dev.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                )}
                <p>
                    {dev.disponible ? "Disponible" : "No disponible"}
                </p>
                {dev.github && (
                    <a href={dev.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;