function Card({ desarrollador }) {
    const colorStack =
        desarrollador.stack === "Frontend"
            ? "stack-frontend"
            : desarrollador.stack === "Backend"
                ? "stack-backend"
                : "stack-fullstack";

    return (
        <article className="tarjeta-desarrollador">
            <img
                className="foto-perfil"
                src={desarrollador.avatar}
                alt={`Foto de ${desarrollador.nombre}`}
            />

            <h3 className="nombre-desarrollador">
                {desarrollador.nombre}
            </h3>

            <p className="rol-desarrollador">
                {desarrollador.rol}
            </p>

            <span className={`stack ${colorStack}`}>
                {desarrollador.stack}
            </span>

            {desarrollador.skills.length > 0 && (
                <ul className="lista-habilidades">
                    {desarrollador.skills.map((habilidad) => (
                        <li
                            className="habilidad"
                            key={habilidad}
                        >
                            {habilidad}
                        </li>
                    ))}
                </ul>
            )}

            <p
                className={
                    desarrollador.disponible
                        ? "estado disponible"
                        : "estado no-disponible"
                }
            >
                <span className="circulo-estado"></span>

                {desarrollador.disponible
                    ? "Disponible para proyectos"
                    : "No disponible"}
            </p>

            {desarrollador.github && (
                <a
                    className="enlace-github"
                    href={desarrollador.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub de ${desarrollador.nombre}`}
                >
                    <img
                        className="icono-github"
                        src="https://github.githubassets.com/favicons/favicon.svg"
                        alt="GitHub"
                    />

                    <span>Ver GitHub</span>
                </a>
            )}
        </article>
    );
}

export default Card;