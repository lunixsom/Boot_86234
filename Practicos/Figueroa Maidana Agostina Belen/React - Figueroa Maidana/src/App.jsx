import './App.css';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import CardList from '../components/card/CardList.jsx';
import devs from "./data/devs.js";

export default function App() {

  return (
    <>

    <Header />

    <main>

     <CardList devs={devs} />
    
    </main>

    <Footer />

    </>
  )
}
