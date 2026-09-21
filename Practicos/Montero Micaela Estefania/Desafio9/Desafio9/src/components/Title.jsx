export default function Title({ texto, subtitulo }) {
  return (
    <div className="mb-3">
      <h1>{texto}</h1>
      {subtitulo && <p className="text-muted">{subtitulo}</p>}
    </div>
  )
}
