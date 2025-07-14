import { FaEnvelope, FaWhatsapp, FaArrowLeft, FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { MdOutlineNearMe } from "react-icons/md";

export default function ModalCotizacion({
   open,
   onClose,
   producto,
   showEmailForm,
   setShowEmailForm,
   handleWhatsAppClick
}) {
   if (!open) return null;

   const form = useRef();

   // Función para manejar el envío del formulario usando emailjs
   const btnForm = (e) => {
      e.preventDefault();
      // Validar si los campos están vacíos
      const name = form.current.user_name.value;
      const email = form.current.user_email.value;
      const tel = form.current.user_tel.value;
      const ruc = form.current.user_ruc.value;
      const message = form.current.user_message.value;
      const product = form.current.user_prod.value;

      // Si algún campo está vacío, mostrar un mensaje de error
      if (!name || !email || !tel || !message || !product) {
         alert("Por favor, completa todos los campos del formulario.");
         return; // Detener la ejecución si hay campos vacíos
      }

      // Si todos los campos están completos, proceder a enviar el correo
      emailjs.sendForm('service_2q3oqzd', 'template_6jijnyq', form.current, '5TK6BL82z4t3V0ALk')
         .then((result) => {
            alert("Mensaje enviado correctamente, nos pondremos en contacto con usted a la brevedad.");
            form.current.reset(); // Limpiar el formulario después de enviar
            onClose();
         }, (error) => {
            alert("Error al enviar el mensaje, por favor intenta nuevamente más tarde.");
         });
   };

   return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
         <div className="w-[85%]">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-accordion-down m-auto">
               {/* Cerrar Modal */}
               <button
                  className="absolute top-6 right-6 text-[#254168] text-xl cursor-pointer"
                  onClick={onClose}
                  aria-label="Cerrar"
               >
                  <FaTimes />
               </button>
               {!showEmailForm ? (
                  <>
                     <h2 className="text-[18px] font-extrabold text-[#254168] mb-3 uppercase">Solicitar Cotización</h2>
                     <p className="mb-6 text-gray-600 text-[15px] font-semibold">{producto && `Deseo cotizar "${producto}" por:`}</p>
                     <div className="flex gap-4">
                        <button
                           className="flex-1 cursor-pointer bg-[#254168] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                           onClick={() => setShowEmailForm(true)}
                        >
                           <FaEnvelope className="mr-2" /> Correo
                        </button>
                        <button
                           className="flex-1 cursor-pointer bg-[#25D366] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                           onClick={handleWhatsAppClick}
                        >
                           <FaWhatsapp className="mr-2" /> WhatsApp
                        </button>
                     </div>
                  </>
               ) : (
                  <div>
                     <button className="text-[#254168] pb-8" onClick={() => setShowEmailForm(false)}>
                        <FaArrowLeft className="cursor-pointer" />
                     </button>
                     <h2 className="text-xl font-bold text-[#254168] mb-4">Formulario de Cotización</h2>
                     <form ref={form} onSubmit={btnForm} className="space-y-4 animate-accordion-down">
                        <input type="text" className="hidden" defaultValue={producto} name="user_prod" />
                        <div className="flex flex-col gap-2">
                           <label htmlFor="" className="text-[#254168] sm:text-[16px]">Nombre :</label>
                           <input
                              required
                              type="text"
                              placeholder="Tu nombre"
                              name="user_name"
                              className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label htmlFor="" className="text-[#254168] sm:text-[16px]">Correo electrónico :</label>
                           <input
                              required
                              type="email"
                              placeholder="tu@ejemplo.com"
                              name="user_email"
                              className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row">
                           <div className="flex flex-col w-full">
                              <label htmlFor="" className="text-[#254168] sm:text-[16px]">Teléfono :</label>
                              <input
                                 required
                                 type="number"
                                 placeholder="Tu numero"
                                 name="user_tel"
                                 className="border-[1px] w-full text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                           </div>
                           <div className="flex flex-col w-full">
                              <label htmlFor="" className="text-[#254168] sm:text-[16px]">Ruc :</label>
                              <input
                                 type="number"
                                 placeholder="Numero de ruc"
                                 name="user_ruc"
                                 className="border-[1px] w-full text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                           </div>
                        </div>
                        <div className="flex flex-col gap-2">
                           <label htmlFor="" className="text-[#254168] sm:text-[16px]">Mensaje :</label>
                           <textarea
                              required
                              name="user_message"
                              rows="4"
                              placeholder="Detalle la información que desea cotizar ..."
                              className="border-[1px] text-[16px] px-2 py-1 rounded-sm border-[#254168]/25 text-gray-600" />
                        </div>
                        <button onClick={btnForm} className="cursor-pointer flex justify-center items-center gap-2 text-[#254168] bg-[#f9cb21] hover:bg-[#f9b521] transition self-center w-full h-10 rounded-sm mt-2">
                           <MdOutlineNearMe />
                           <p>Enviar mensaje</p>
                        </button>
                     </form>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
