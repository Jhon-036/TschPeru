import { useEffect } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import FormContactos from "./FormContactos";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactos = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-white">
            <div className="sm:w-[98%] md:w-[95%] xl:w-[85%] 2xl:w-[70%] py-8 px-4 mt-8 m-auto">
                <div className="flex flex-col xl:flex-row justify-between gap-8 items-center xl:items-start">
                    {/* Info Contacto */}
                    <div 
                        className="w-full xl:w-1/2 flex flex-col gap-6 p-4"
                        data-aos="fade-right"
                    >
                        <h2 className="text-[#254168] font-bold text-center xl:text-left text-[clamp(1.5rem,4vw,2.5rem)] pb-4">
                            Estamos aquí para ayudarte
                        </h2>
                        <p className="text-gray-600 text-center xl:text-left text-[clamp(1rem,2.5vw,1.125rem)] max-w-lg">
                            ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti. Completa el formulario y nuestro equipo te responderá lo antes posible.
                        </p>
                        <div className="mt-8 flex flex-col gap-6">
                            {/* Teléfono */}
                            <div className="flex items-center gap-4" 
                            data-aos="fade-up" data-aos-delay="200"
                            >
                                <div className="bg-[#f9cb21] p-3 rounded-full flex justify-center items-center">
                                    <FiPhone className="text-[#254168] font-bold text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <p className="text-[#254168] text-[clamp(1rem,2vw,1.125rem)]">Teléfono</p>
                                    <span className="text-gray-600">+51 951 758 040</span>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-4" 
                            data-aos="fade-up" 
                            data-aos-delay="300"
                            >
                                <div className="bg-[#f9cb21] p-3 rounded-full flex justify-center items-center">
                                    <MdOutlineMail className="text-[#254168] font-bold text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <p className="text-[#254168] text-[clamp(1rem,2vw,1.125rem)]">Correo electrónico</p>
                                    <span className="text-gray-600">tschperuv@tschperuv.com</span>
                                </div>
                            </div>
                            {/* Dirección */}
                            <div className="flex items-center gap-4" 
                            data-aos="fade-up" data-aos-delay="400"
                            >
                                <div className="bg-[#f9cb21] p-3 rounded-full flex justify-center items-center">
                                    <FiMapPin className="text-[#254168] font-bold text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <p className="text-[#254168] text-[clamp(1rem,2vw,1.125rem)]">Dirección</p>
                                    <span className="text-gray-600">Lima, Lima, Perú</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div 
                        className="w-full xl:w-1/2"
                        data-aos="fade-down"
                    >
                        <FormContactos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactos;
