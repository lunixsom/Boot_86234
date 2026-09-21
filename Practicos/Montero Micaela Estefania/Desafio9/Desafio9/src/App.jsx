import devs from "./data/devs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CardList from "./components/CardList"

function App() {

  return (
    <>
      <Header />
      <CardList devs={devs} />
      <Footer />
    </>
  )
}


export default App
