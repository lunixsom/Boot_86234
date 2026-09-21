function Card({ developer }) {
    const { nombre, rol, stack, skills, disponible, github, avatar } = developer;

    return (
        <div className="card p-3">
            <img src={avatar} alt={nombre} className="dev-image" width={80} />
            <h3>{nombre}</h3>
            <p>{rol}</p>

            <span className={`badge ${stack === 'Frontend' ? 'bg-primary' : stack === 'Backend' ? 'bg-success' : 'bg-warning'}`}>{stack}</span>

            {skills.length > 0 && (
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            )}

            <p>
                {disponible ? '🟢 Disponible' : '🔴 No disponible'}
            </p>

            {github && (
                <a href={github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            )}
        </div>
    );
}

export default Card;