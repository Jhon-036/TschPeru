import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ScrollToTop from './components/ScrollToTop.JSX'
import About from './pages/About'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Shop />}/>
        <Route path='/nosotros' element={<About />}/>Rou
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
