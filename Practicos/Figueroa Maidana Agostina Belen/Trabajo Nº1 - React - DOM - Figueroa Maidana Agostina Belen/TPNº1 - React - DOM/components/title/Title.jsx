import './Title.css'

function Title( {principal, secundario} ) {

    return (

        <div className="tituloClase">

            {
                principal && <h1 className="tituloPrincipal">{principal}</h1>
            }

            {
                secundario && <h2 className="tituloSecundario">{secundario}</h2>
            }

        </div>

    )
    
}

export default Title;