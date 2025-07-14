import { useState, useEffect } from "react"
import { FaBars, FaYoutube } from "react-icons/fa"
import { IoCloseSharp, IoLogoTiktok } from "react-icons/io5"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from "react-router-dom"
import { FiPhone } from "react-icons/fi"
import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"

const Header = () => {
   const [isShowNav, setIsShowNav] = useState(false)
   const [isShowNavMovile, setIsShowNavMovile] = useState(false)

   const navigate = useNavigate()

   const handleContactClick = () => {
      if (window.location.pathname !== "/") {
         // Si NO estamos en la página de inicio, navegamos primero
         navigate("/");
         // Usamos un pequeño retraso para asegurar que la página cargue
         setTimeout(() => {
            scrollToContact();
         }, 100); // Ajusta este tiempo si es necesario
      } else {
         // Si YA estamos en la página de inicio, hacemos scroll directamente
         scrollToContact();
      }
   };

   useEffect(() => {
      // Cierra el menú cuando la ruta cambie
      setIsShowNav(false);
   }, [window.location.pathname]); // Dependencia: cuando cambia la ruta, el menú se cierra


   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, [])

   const handleIsShowNav = () => {
      setIsShowNav(!isShowNav)
   }

   const handleIsShowNavMobile = () => {
      setIsShowNavMovile(!isShowNavMovile)
   }

   const handleNotShowNav = () => {
      setIsShowNav(false)
   }

   const scrollToContact = () => {
      const contactoSection = document.getElementById('contactos-home');
      if (contactoSection) {
         contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
         setTimeout(() => {
            window.scrollBy(0, -35); // Ajusta el desplazamiento si es necesario
         }, 570); // Espera un poco para que el scroll se complete
      }
   }
   return (
      <header className="w-full  shadow-md fixed top-0 z-50 bg-white backdrop-blur-md">
         <div className="bg-[#f9cb21] p-[4px] flex justify-evenly items-center">
            <div className="">
               <a href='tel:951758040' className="flex items-center space-x-3 cursor-pointer">
                  <FiPhone className="h-5 w-5 text-[#254168]" />
                  <span className="text-[#254168] text-md font-bold">+51 951 758 040</span>
               </a>
            </div>
            <div>
               <div className="flex gap-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#254168] text-[#eee] rounded-[50%] p-1 md:p-1.5 hover:bg-[#1e3a56] list-none">
                     <BiLogoInstagramAlt className="text-sm md:text-[18px] cursor-pointer" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#254168] text-[#eee] rounded-[50%] p-1 md:p-1.5 hover:bg-[#1e3a56] list-none">
                     <BiLogoFacebook className="text-sm md:text-[18px] cursor-pointer" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-[#254168] text-[#eee] rounded-[50%] p-1 md:p-1.5 hover:bg-[#1e3a56] list-none">
                     <FaYoutube className="text-sm md:text-[18px] cursor-pointer" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-[#254168] text-[#eee] rounded-[50%] p-1 md:p-1.5 hover:bg-[#1e3a56] list-none">
                     <IoLogoTiktok className="text-sm md:text-[18px] cursor-pointer" />
                  </a>
               </div>
            </div>
         </div>
         <div className="flex items-center">
            <nav className="w-[85%] max-w-7xl mx-auto">
               <div className="flex w-full justify-between items-center py-4  gap-4">

                  {/* Logo */}
                  <Link to={'/'}>
                     <div data-aos="fade-down">
                        <img src="/tsch--logo.webp" className="h-8 sm:h-[60px] cursor-pointer object-contain" alt="Tesch Peru Logo" />
                     </div>
                  </Link>

                  {/* Desktop + Mobile Menu */}
                  <div className="flex items-center gap-4">
                     {/* Desktop Nav */}
                     <ul className="hidden md:flex gap-6" data-aos="fade-down" data-aos-delay="200">
                        <li className=" text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-2xl sm:text-base transition-colors duration-300 grid items-center">
                           <Link to="/" className="p-3">Inicio</Link>
                        </li>
                        <li className=" text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-2xl sm:text-base transition-colors duration-300 grid items-center">
                           <Link to="/nosotros" className="p-3">Nosotros</Link>
                        </li>
                        <li className=" text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-2xl sm:text-base transition-colors duration-300 grid items-center">
                           <Link to="/productos" className="p-3">Productos</Link>
                        </li>
                        <li className=" p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-2xl sm:text-base transition-colors duration-300 flex gap-1 items-center relative" onClick={handleIsShowNav}>Servicios<IoIosArrowDown />
                           <ul className={`bg-white absolute top-12 p-4 w-[250px] grid gap-2.5 cursor-auto transition-opacity ${isShowNav ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                              <li className="cursor-pointer hover:bg-gray-100 rounded-lg grid items-center">
                                 <Link to="/Servicio-mantenimiento-integral-de-maquinarias" className="px-2 py-1" onClick={handleNotShowNav}>Mantenimineto integral de Maquinarias</Link>
                              </li>
                              <li className="cursor-pointer  hover:bg-gray-100 rounded-lg grid items-center">
                                 <Link to="Servicio-venta-de-repuestos-OEM" className="px-2 py-1" onClick={handleNotShowNav}>Venta de Repuestos OEM</Link>
                              </li>
                              <li className="cursor-pointer  hover:bg-gray-100 rounded-lg grid items-center">
                                 <Link to="Servicio-innovacion-y-tegnologia" className="px-2 py-1" onClick={handleNotShowNav}>Innovación y tecnología</Link>
                              </li>
                           </ul>
                        </li>
                     </ul>

                     {/* Contact Button */}
                     <button onClick={handleContactClick} className="uppercase p-2 lg:px-5 lg:py-3 bg-[#f9cb21] text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300" data-aos="fade-down" data-aos-delay="300">
                        <span>Contáctenos</span>
                     </button>

                     {/* Mobile Menu Icon */}
                     <div className="md:hidden hover:bg-gray-100 p-2 rounded-xl cursor-pointer" onClick={handleIsShowNav} data-aos="fade-down" data-aos-delay="400">
                        <FaBars className="text-xl text-[#254168]" />
                     </div>
                  </div>
               </div>

               {/* Mobile Nav Overlay */}
               <div
                  className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isShowNav ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  onClick={handleNotShowNav}
               >
                  <div
                     className={`absolute top-0 left-0 w-[80%] max-w-xs bg-white h-screen shadow-lg transition-transform duration-300 ${isShowNav ? "translate-x-0" : "-translate-x-full"}`}
                     onClick={(e) => e.stopPropagation()}
                  >

                     <div className="flex justify-end p-5">
                        <IoCloseSharp
                           className="text-2xl text-[#254168] cursor-pointer hover:text-gray-900 transition-colors duration-300"
                           onClick={handleNotShowNav}
                        />
                     </div>
                     <ul className="flex flex-col gap-4 p-4">
                        <li onClick={handleNotShowNav} className="grid items-center text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">
                           <Link to={"/"} className="p-3">Inicio</Link>
                        </li>
                        <li onClick={handleNotShowNav} className="grid items-center text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">
                           <Link to={"/nosotros"} className="p-3">Nosotros</Link>
                        </li>
                        <li onClick={handleNotShowNav} className="grid items-center text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">
                           <Link to={"/productos"} className="p-3">Productos</Link>
                        </li>

                        <li className="p-3 text-[#254168] relative hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300 flex items-center gap-2" onClick={handleIsShowNavMobile}>
                           Servicios<IoIosArrowDown />
                           <ul className={`bg-white absolute top-12 p-4 w-[250px] grid gap-2.5 cursor-auto ${isShowNavMovile ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                              <li onClick={handleNotShowNav} className="cursor-pointer grid items-center hover:bg-gray-100 rounded-lg">
                                 <Link to="/Servicio-mantenimiento-integral-de-maquinarias" className=" px-2 py-1">Mantenimineto integral de Maquinarias</Link>
                              </li>
                              <li onClick={handleNotShowNav} className="cursor-pointer grid items-center hover:bg-gray-100 rounded-lg">
                                 <Link to="/Servicio-venta-de-repuestos-OEM" className=" px-2 py-1">Venta de Repuestos OEM</Link>
                              </li>
                              <li onClick={handleNotShowNav} className="cursor-pointer grid items-center hover:bg-gray-100 rounded-lg">
                                 <Link to="/Servicio-innovacion-y-tegnologia" className=" px-2 py-1">Innovación y tecnología</Link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header
