import { useEffect } from 'react';
import { BiGlobe } from "react-icons/bi";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="py-8 xl:py-16 bg-[#254168] text-white">
      <div className="sm:w-[98%] md:w-[95%] xl:w-[85%] 2xl:w-[70%] m-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

          {/* TSCH Perú Info */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="font-bold text-[clamp(1.125rem,3vw,1.5rem)]">TSCH Perú</h3>
            <p className="text-gray-300 text-[clamp(0.9rem,2vw,1rem)]">
              Somos una empresa dedicada al soporte técnico y comercial de equipo portuario, minería y construcción.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <CiInstagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <CiYoutube className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <IoLogoTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-[clamp(0.9rem,2vw,1rem)]">
              <li><a href="/" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Servicios</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white">Productos</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Contacto</h3>
            <ul className="space-y-3 text-[clamp(0.9rem,2vw,1rem)]">
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-gray-300 shrink-0 mt-1" />
                <span className="text-gray-300">Lima, Lima, Perú</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-gray-300" />
                <a href="#" className="text-gray-300 hover:text-white">+51 951 758 040</a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-gray-300" />
                <a href="mailto:tschperu@tschperu.com" className="text-gray-300 hover:text-white">tschperu@tschperu.com</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Legal</h3>
            <ul className="space-y-2 text-[clamp(0.9rem,2vw,1rem)]">
              <li><a href="/terms" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Política de Privacidad</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
            </ul>
          </div>

        </div>

        {/* Línea inferior */}
        <div
          className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-sm text-gray-300 text-center md:text-left">© 2025 TSCH Perú. Todos los derechos reservados.</div>

          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <BiGlobe className="h-4 w-4" />
            <select className="bg-transparent border-none focus:outline-none focus:ring-0">
              <option value="es" className="bg-[#254168] text-white">Español</option>
              <option value="en" className="bg-[#254168] text-white">English</option>
              <option value="fr" className="bg-[#254168] text-white">Français</option>
              <option value="de" className="bg-[#254168] text-white">Deutsch</option>
            </select>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
