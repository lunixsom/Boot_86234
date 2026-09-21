import "./Card.css"

function Card({dev}){

    return (
        <div className="card-container">
            <div className="card-header">
                <p className= {`badge ${dev.stack}`}>
                    {dev.stack}
                </p>
                <img className="avatar" src={dev.avatar} alt="Imagen del desarrollador" />
                <h2 className="name">{dev.nombre}</h2>
            </div>
            <div className="card-body">
                <p className="rol">{dev.rol}</p>
                <div className="skills-container">
                {dev.skills && dev.skills.map((skill) =>{
                    return <p className="skill" key={skill}>{skill}</p> 
                })}
                </div>
            </div>
            <div className="card-footer">
                <p className="disponibilidad">{dev.disponible? "Disponible" : "No disponible"}</p>
                {dev.github && <p className="icon"><i className="fa-brands fa-github"></i></p>}
            </div>
        </div>
    )
}

export default Card;