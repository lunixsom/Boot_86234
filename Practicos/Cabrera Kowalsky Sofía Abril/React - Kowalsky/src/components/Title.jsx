function Title({ texto, subtitulo }) {
    return (
        <div>
            <h1>{texto}</h1>

            {subtitulo && <h3>{subtitulo}</h3>}
        </div>
    );
}

export default Title;