import Contactos from "../components/Contactos"
import Servicios from "../components/Servicios"
import ShopMain from "../components/ShopMain"
import SliderMain from "../components/SliderMain"
import WhatsApp from "../components/WhatsApp"

const Home = () => {
  return (
    <div>
        <SliderMain />
        <ShopMain />
        <Servicios />
        <WhatsApp className="right-8 bottom-8 fixed cursor-pointer" phone="51951758040" text="Hola TSCH, requiero información sobre sus productos."/>
        <Contactos />
    </div>
  )
}
export default Home