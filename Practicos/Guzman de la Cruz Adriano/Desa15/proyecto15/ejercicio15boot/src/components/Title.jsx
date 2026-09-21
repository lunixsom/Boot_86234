function Title({ texto, subtitulo }) {
  return (
    <div>
      <h1>{texto}</h1>

      {subtitulo && <p>{subtitulo}</p>}
    </div>
  );
}

export default Title;