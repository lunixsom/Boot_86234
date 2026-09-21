import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

import devs from "./data/devs";

function App() {
  return (
    <>
      <Header />

      <main>
        <CardList devs={devs} />
      </main>

      <Footer />
    </>
  );
}

export default App;