function Title({ texto, subtitulo }) {
    return (
        <div className="titulo">
            <h2>{texto}</h2>

            {subtitulo && (
                <p>{subtitulo}</p>
            )}
        </div>
    );
}

export default Title;