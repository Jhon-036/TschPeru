import './App.css'
import Contactos from './components/Contactos'
import Footer from './components/Footer'
import Header from './components/Header'
import Servicios from './components/Servicios'
import ShopMain from './components/ShopMain'
import SliderMain from './components/SliderMain'

function App() {
  return (
    <div>
      <Header />
      <SliderMain />
      <ShopMain />
      <Servicios />
      <Contactos />
      <Footer />
    </div>
  )
}

export default App
