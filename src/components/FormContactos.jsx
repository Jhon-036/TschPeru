import { MdOutlineNearMe } from "react-icons/md"

const FormContactos = () => {
    const form = document.getElementsByTagName('form')
  return (
    <div className="my-8 bg-white p-4 rounded-sm border-[#254168]/25 border-[1px] md:p-12">
        <h2 className="text-2xl sm:text-3xl text-[#254168] font-bold text-center pb-4">Contáctanos</h2>
        <p className="text-gray-600 text-center sm:text-[18px]">Completa el formulario y te responderemos a la brevedad.</p>
        <form action="" className="pt-6 flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#254168] sm:text-[18px]">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#254168] sm:text-[18px]">Correo electrónico</label>
                <input type="email" placeholder="tu@ejemplo.com" className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#254168] sm:text-[18px]">Mensaje</label>
                <textarea 
                    name="" 
                    id="" 
                    rows="4"
                    placeholder="¿En qué podemos ayudarte?" 
                    className="border-[1px] text-[16px] px-2 py-1 rounded-sm border-[#254168]/25 text-gray-600"/>
            </div>
            <button className="flex justify-center items-center gap-2 text-[#254168] bg-[#f9cb21] self-center w-full h-10 rounded-sm mt-2"> 
                <MdOutlineNearMe />
                <p>Enviar mensaje</p>
            </button>
        </form>
    </div>
  )
}
export default FormContactos