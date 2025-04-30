import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTopp.jsx'
import Service1 from './pages/Service1.jsx'
import Service2 from './pages/Service2.jsx'
import Service3 from './pages/Service3.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Shop />}/>
        <Route path='/nosotros' element={<About />}/>
        <Route path='/Servicio-Mantenimiento-integral-de-maquinarias' element={<Service1 />}/>
        <Route path='/Servicio-Venta-de-repuestos-OEM' element={<Service2 />}/>
        <Route path='/Servicio-Innovacion-y-tegnologia' element={<Service3 />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
