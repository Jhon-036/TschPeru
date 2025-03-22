import Contactos from "../components/Contactos"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Servicios from "../components/Servicios"
import ShopMain from "../components/ShopMain"
import SliderMain from "../components/SliderMain"

const Home = () => {
  return (
    <div>
        <SliderMain />
        <ShopMain />
        <Servicios />
        <Contactos />
    </div>
  )
}
export default Home