import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import devs from "./data/devs";


function App() {
    return (
        <div>
            <Header />
            <CardList devs={devs} />
            <Footer />
        </div>
    );
}

export default App;