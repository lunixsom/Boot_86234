import "./Card.css";

export default function Card({ devs }) {

    return (

      <div className="card-container">

        <div className="card">

          <div className="card-header">

            <img src={devs.avatar} alt={devs.nombre} className="card-avatar" />

            <h2>{devs.nombre}</h2>
            <p>{devs.rol}</p>

          </div>  

          <div className="card-body">
            <span className={ devs.stack === "Frontend" ? "badge-frontend"
                            : devs.stack === "Backend" ? "badge-backend"
                            : "badge-fullstack"}>
            {devs.stack}
            </span>
            
            {devs.skills.length > 0 && (
                <>
                    <p>Skills:</p>
                    <ul>
                        {devs.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </>
            )}
            
            <p className={devs.disponible ? "disponible" : "no-disponible"}>{devs.disponible ? "Disponible" : "No disponible"}</p>

            </div>

            <div className="card-footer">
            
            {
            
            devs.github && ( <a href={devs.github} target="_blank"  rel="noopener noreferrer">GitHub <i class="fa-brands fa-github"></i></a>)

            }

            </div>

        </div>

      </div>
    );
}