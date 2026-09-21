import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import devs from "./data/devs";

function App() {
  return (
    <div className="aplicacion">
      <Header />

      <main className="contenido">
        <CardList desarrolladores={devs} />
      </main>

      <Footer />
    </div>
  );
}

export default App;