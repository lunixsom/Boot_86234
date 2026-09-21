function Title({ texto, subtitulo }) {
  return (
    <div className="text-center my-3">
      <h1>{texto}</h1>
      {subtitulo && <p className="text-muted">{subtitulo}</p>}
    </div>
  );
}

export default Title;