import { useEffect } from 'react';
import { BiGlobe, BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="py-8 xl:py-16 bg-[#cececeee] text-[#254168] border-t-[.8rem] border-[#254168]">
      <div className="w-[85%] max-w-7xl mx-auto m-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

          {/* TSCH Perú Info */}
          <div className="space-y-4" data-aos="fade-up">
            {/* <h3 className="font-bold text-[clamp(1.125rem,3vw,1.5rem)]">TSCH Perú</h3>
            <p className="text-gray-300 text-[clamp(0.9rem,2vw,1rem)]">
              Somos una empresa dedicada al soporte técnico y comercial de equipo portuario, minería y construcción.
            </p> */}
            <img src="/tsch--logo.webp" alt="" />
          </div>

          {/* Enlaces */}
          {/* <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-[clamp(0.9rem,2vw,1rem)]">
            <li><Link to="/" className="text-gray-300 hover:text-white">Inicio</Link></li>
            <li><Link to="/nosotros" className="text-gray-300 hover:text-white">Nosotros</Link></li>
            <li><Link to="/productos" className="text-gray-300 hover:text-white">productos</Link></li>
            <li><Link to="/servicios" className="text-gray-300 hover:text-white">Servicios</Link></li>
            </ul>
            </div> */}

          {/* Contacto */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Contacto</h3>
            <ul className="space-y-3 text-[clamp(0.9rem,2vw,1rem)]">
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-[#254168] shrink-0 mt-1" />
                <span className="text-[#254168]">Lima, Lima, Perú</span>
              </li>
              <a href='tel:951758040' className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-[#254168]" />
                <span className="text-[#254168]">+51 951 758 040</span>
              </a>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-[#254168]" />
                <span className="text-[#254168]">tschperu@tschperu.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Legal</h3>
            <ul className="space-y-2 text-[clamp(0.9rem,2vw,1rem)]">
              <li><Link to="/terminos-y-condiciones" className="text-[#254168] hover:text-[#254168]">Términos y Condiciones</Link></li>
              <li><Link to="/privacy" className="text-[#254168] hover:text-[#254168]">Política de Privacidad</Link></li>
              <li><Link to="/faq" className="text-[#254168] hover:text-[#254168]">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

        </div>

        {/* Línea inferior */}
        <div
          className="mt-12 pt-8 border-t border-[#254168] flex flex-col md:flex-row justify-between items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-sm text-center md:text-left">© 2025 TSCH Perú. Todos los derechos reservados.</div>

            <div className="flex space-x-4">
              <li href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                <BiLogoInstagramAlt className="h-6 w-6 cursor-pointer" />
              </li>
              <li href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                <BiLogoFacebook className="h-6 w-6 cursor-pointer" />
              </li>
              <li href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                <FaYoutube className="h-6 w-6 cursor-pointer" />
              </li>
              <li href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                <IoLogoTiktok className="h-6 w-6 cursor-pointer" />
              </li>
            </div>
          <div className="flex items-center space-x-3 text-[#254168] text-sm">
            <BiGlobe className="h-4 w-4"/>
            <select className="bg-[transparent] border-none focus:outline-none focus:ring-0">
              <option value="es" className="bg-[#254168] text-white">Español</option>
              <option value="en" className="bg-[#254168] text-white">English</option>
            </select>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
