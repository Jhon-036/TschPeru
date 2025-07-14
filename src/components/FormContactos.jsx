import { MdOutlineNearMe } from "react-icons/md"
import emailjs from '@emailjs/browser'
import { useRef } from "react"

const FormContactos = () => {

   const form = useRef()

   const btnForm = (e) => {
      e.preventDefault(); // Evitar el envío del formulario antes de validarlo

      // Validar si los campos están vacíos
      const name = form.current.user_name.value;
      const email = form.current.user_email.value;
      const tel = form.current.user_tel.value;
      const ruc = form.current.user_ruc.value;
      const message = form.current.user_message.value;

      // Si algún campo está vacío, mostrar un mensaje de error
      if (!name || !email || !tel || !message) {
         alert("Por favor, completa todos los campos del formulario.");
         return; // Detener la ejecución si hay campos vacíos
      }

      // Si todos los campos están completos, proceder a enviar el correo
      if (form.current !== null) {
         emailjs.sendForm('service_2q3oqzd', 'template_u61ysdo', form.current, '5TK6BL82z4t3V0ALk')
            .then((result) => {
               alert("Mensaje enviado correctamente, nos pondremos en contacto con usted a la brevedad.");
               form.current.reset(); // Limpiar el formulario después de enviar
            }, (error) => {
               alert("Error al enviar el mensaje, por favor intenta nuevamente más tarde.");
            });
      } else {
         alert("Error al cargar el formulario, por favor recarga la página.");
      }
   }

   return (
      <div className="my-8 bg-white p-4 rounded-sm border-[#254168]/25 border-[1px] md:p-12">
         <h2 className="text-2xl sm:text-3xl text-[#254168] font-bold text-center pb-4">Contáctanos</h2>
         <p className="text-gray-600 text-center sm:text-[18px]">Completa el formulario y te responderemos a la brevedad.</p>
         <form ref={form} className="pt-6 flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-2">
               <label htmlFor="" className="text-[#254168] sm:text-[18px]">Nombre :</label>
               <input
                  required
                  type="text"
                  placeholder="Tu nombre"
                  name="user_name"
                  className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="" className="text-[#254168] sm:text-[18px]">Correo electrónico :</label>
               <input
                  required
                  type="email"
                  placeholder="tu@ejemplo.com"
                  name="user_email"
                  className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
               <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[#254168] sm:text-[18px]">Teléfono :</label>
                  <input
                     required
                     min={0}
                     step={1}
                     max={999999999}
                     type="text"
                     maxLength={9}
                     pattern="\d{9}"
                     placeholder="Tu numero"
                     name="user_tel"
                     onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
                     className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
               </div>
               <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[#254168] sm:text-[18px]">RUC o DNI :</label>
                  <input
                     min={0}
                     max={99999999999}
                     type="text"
                     maxLength={11}
                     pattern="\d{11}"
                     placeholder="Numero de ruc o dni"
                     name="user_ruc"
                     onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
                     className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="" className="text-[#254168] sm:text-[18px]">Mensaje :</label>
               <textarea
                  required
                  name="user_message"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                  className="border-[1px] text-[16px] px-2 py-1 rounded-sm border-[#254168]/25 text-gray-600" />
            </div>
            <button onClick={btnForm} className="cursor-pointer flex justify-center items-center gap-2 text-[#254168] bg-[#f9cb21] hover:bg-[#f9b521] transition self-center w-full h-10 rounded-sm mt-2">
               <MdOutlineNearMe />
               <p>Enviar mensaje</p>
            </button>
         </form>
      </div>
   )
}
export default FormContactos