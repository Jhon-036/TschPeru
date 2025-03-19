import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const [isShowNav, setIsShowNav] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  const handleIsShowNav = () => {
    setIsShowNav(!isShowNav)
  }
  const handleNotShowNav = () => {
    setIsShowNav(false)
  }

  return (
    <header className="w-full shadow-md fixed top-0 z-50 bg-white backdrop-blur-md">
      <nav className="p-2 w-full">
        <div className="flex w-full justify-between items-center p-2 gap-4 sm:w-[98%] md:w-[95%] xl:w-[85%] 2xl:w-[70%] mx-auto">

          {/* Logo */}
          <div data-aos="fade-down">
            <img src="/tsch--logo.webp" className="h-8 sm:h-12 cursor-pointer object-contain" alt="Tesch Peru Logo" />
          </div>

          {/* Desktop + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6" data-aos="fade-down" data-aos-delay="200">
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-sm sm:text-base transition-colors duration-300">Inicio</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-sm sm:text-base transition-colors duration-300">Nosotros</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-sm sm:text-base transition-colors duration-300">Productos</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-sm sm:text-base transition-colors duration-300">Servicios</li>
            </ul>

            {/* Contact Button */}
            <button className="uppercase p-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300" data-aos="fade-down" data-aos-delay="300">
              <a href="#">Contactos</a>
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
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">Inicio</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">Nosotros</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">Productos</li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-xl transition-colors duration-300">Servicios</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
