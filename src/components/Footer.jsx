import { BiGlobe, BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
   const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Verificar si ya está cargado para no duplicar
    if (!window.googleTranslateElementInit) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      window.googleTranslateElementInit = () => {
        setGoogleTranslateLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    }
  }, []);

  useEffect(() => {
    if (googleTranslateLoaded) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'es,en',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
      }, 'google_translate_element');
      
      // Ocultar elementos no deseados después de la carga
      setTimeout(() => {
        const banner = document.querySelector('.goog-te-banner-frame');
        if (banner) banner.style.display = 'none';
        
        const googleLogo = document.querySelector('.goog-logo-link');
        if (googleLogo) googleLogo.style.display = 'none';
      }, 500);
    }
  }, [googleTranslateLoaded]);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    const timer = setInterval(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement && window.google && window.google.translate) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event('change'));
        clearInterval(timer);
      }
    }, 100);
  };

   return (
      <footer className="py-8 xl:py-16 bg-[#D9D9D9] text-[#254168] border-t-[.8rem] border-[#254168]">
         <div className="w-[85%] max-w-7xl mx-auto m-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
               {/* TSCH Perú Info */}
               <div className="space-y-4" data-aos="fade-up">
                  <img src="/tsch--logo.png" alt="" />
               </div>

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
                     <a href="mailto:operaciones@tschperu.com" className="flex items-center space-x-3">
                        <FiMail className="h-5 w-5 text-[#254168]" />
                        <span className="text-[#254168]">operaciones@tschperu.com</span>
                     </a>
                  </ul>
               </div>

               {/* Legal */}
               <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="font-bold text-[clamp(1rem,2.5vw,1.25rem)]">Legal</h3>
                  <ul className="space-y-2 text-[clamp(0.9rem,2vw,1rem)]">
                     <li><Link className="text-[#254168] hover:text-[#254168]">Términos y Condiciones</Link></li>
                     <li><Link className="text-[#254168] hover:text-[#254168]">Política de Privacidad</Link></li>
                     <li><Link className="text-[#254168] hover:text-[#254168]">Preguntas Frecuentes</Link></li>
                  </ul>
               </div>

            </div>

            {/* Línea inferior */}
            <div
               className="mt-12 pt-8 border-t border-[#254168] flex flex-col md:flex-row justify-between items-center gap-4"
               data-aos="fade-down"
               data-aos-delay="400"
            >
               <div className="text-sm text-center md:text-left">© 2025 TSCH Perú. Todos los derechos reservados.</div>
               <div className="flex space-x-4">
                  <a href="https://www.instagram.com/tschperu?igsh=MWlkenRsYXd6a2ZpMQ==" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                     <BiLogoInstagramAlt className="h-6 w-6 cursor-pointer" />
                  </a>
                  <a href="https://www.facebook.com/share/191qaCP9P8/" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                     <BiLogoFacebook className="h-6 w-6 cursor-pointer" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                     <FaYoutube className="h-6 w-6 cursor-pointer" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#254168] hover:text-[#254168] list-none">
                     <IoLogoTiktok className="h-6 w-6 cursor-pointer" />
                  </a>
               </div>
               <div className="flex items-center space-x-3 text-[#254168] text-sm">
                  <BiGlobe className="h-4 w-4" />
                  <select
                     className="bg-[transparent] border-none focus:outline-none focus:ring-0"
                     onChange={handleLanguageChange}
                  >
                     <option value="es" className="bg-[#254168] text-white">Español</option>
                     <option value="en" className="bg-[#254168] text-white">English</option>
                  </select>
               </div>
            </div>

            {/* Contenedor del widget de Google Translate */}
            <div id="google_translate_element" className="hidden"></div>

         </div>
      </footer>
   )
}

export default Footer;
