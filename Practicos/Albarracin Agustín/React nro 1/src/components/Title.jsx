function Title(props) {
  return (
    <div>
      <h2 className="text-center mb-4">
        {props.texto}
      </h2>

      {props.subtitulo && (
        <p className="text-center">
          {props.subtitulo}
        </p>
      )}
    </div>
  );
}

export default Title;