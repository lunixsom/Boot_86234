function Card(props) {
    return (
        <div className="card h-100">
            <img
                src={props.dev.avatar}
                alt={props.dev.nombre}
                className="card-img-top"
            />

            <div className="card-body">
                <h5 className="card-title">{props.dev.nombre}</h5>

                <p className="card-subtitle mb-2 text-body-secondary">
                    {props.dev.rol}
                </p>

                <div
                    className={
                        props.dev.stack === "Frontend"
                            ? "badge text-bg-primary me-3"
                            : props.dev.stack === "Backend"
                                ? "badge text-bg-warning me-3"
                                : "badge text-bg-info me-3"
                    }
                >
                    {props.dev.stack}
                </div>

                <div className={
                    props.dev.disponible
                        ? "badge text-bg-success mb-3"
                        : "badge text-bg-danger mb-3"
                }>
                    {props.dev.disponible ? "Disponible" : "No disponible"}
                </div>

                {props.dev.skills.length > 0 && (
                    <div className="mb-3">
                        {props.dev.skills.map((skill) => {
                            return (
                                <span key={skill} className="badge text-bg-primary me-1">
                                    {skill}
                                </span>
                            );
                        })}
                    </div>
                )}

                {props.dev.github && (
                    <a
                        href={props.dev.github}
                        className="btn btn-dark mt-2"
                    >
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;