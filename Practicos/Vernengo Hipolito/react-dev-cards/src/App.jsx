import Footer from './components/Footer'
import Header from './components/Header'
import CardList from './components/CardList'

function App() {

  return(
    <div className='main-container'>
      <Header title="Mi primer proyecto React"/>
      <CardList />
      <Footer title="Footer"/>
    </div>
  )
}

export default App
