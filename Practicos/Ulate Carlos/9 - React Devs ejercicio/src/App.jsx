 
import './App.css'
import CardList from './components/cardList/CardList'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import devs from './devs/devs'


function App() {
  
return (

  <div>

  <Header />

  <CardList  dev={devs}/>

<Footer />
  </div>
) 
}

export default App
