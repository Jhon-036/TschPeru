import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
  const [isShowNav, setIsShowNav] = useState(false)

  const handleIsShowNav = () => {
    setIsShowNav(!isShowNav)
  }
  const handleNotShowNav = () => {
    setIsShowNav(false)
  }

  return (
    <header className="w-full shadow-md absolute top-0 z-10 bg-white/15">
      <nav className="p-2">
        <div className="flex justify-between items-center p-2 gap-1">
          <div>
            <img src="/tsch--logo.webp" className="h-8 cursor-pointer object-contain" alt="Tesch Peru Logo" />
          </div>
          <div className="flex items-center gap-1.5">
            <button className="object-contain uppercase p-1.5 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300">
              <a href="#">Contactos</a>
            </button>
            <div className="hover:bg-gray-100 rounded-xl cursor-pointer" onClick={handleIsShowNav}>
              <FaBars className="text-[18px] text-[#254168]" />
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isShowNav ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={handleNotShowNav}
        >
          <div
            className={`absolute top-0 left-0 w-64 bg-white h-full shadow-lg transition-all duration-300 ${isShowNav ? "translate-x-0" : "-translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <IoCloseSharp
                className="text-[24px] text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-300"
                onClick={handleNotShowNav}
              />
            </div>
            <ul className="flex flex-col gap-2 p-4">
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-[16px] transition-colors duration-300">
                Inicio
              </li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-[16px] transition-colors duration-300">
                Nosotros
              </li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-[16px] transition-colors duration-300">
                Productos
              </li>
              <li className="p-3 text-[#254168] hover:bg-gray-100 cursor-pointer rounded-lg text-[16px] transition-colors duration-300">
                Servicios
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header