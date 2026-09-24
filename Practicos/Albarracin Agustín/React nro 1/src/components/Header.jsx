import Title from "./Title";

function Header() {
  return (
    <header className="bg-dark text-white p-3 mb-4">
      <Title
        texto="Developers"
        subtitulo="Conocé a nuestro equipo de desarrollo"
      />
    </header>
  );
}

export default Header;