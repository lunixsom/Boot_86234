export default function Title({titulo, subtitulo}) {
  return (
    <div className='main-title'>
      <h1> {titulo} </h1>
      {subtitulo && <h2> {subtitulo} </h2>}

    </div>
  )
}
