import { FaAward, FaBalanceScale, FaBullseye, FaHandshake, FaLeaf, FaLightbulb, FaRegLightbulb, FaUsers } from "react-icons/fa"
import AccordionItem from "./AccordionItem"

const Nosotros = () => {

    return (
        <div className="mt-16">

            <div className="relative bg-[url(/somos--tsch.avif)] h-[30rem] bg-center bg-no-repeat bg-cover">
                <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
                    <h2 className="text-white font-bold text-[clamp(1.8rem,5vw,3rem)]">SOMOS T.S.C.H</h2>
                </div>
            </div>

            <div className="w-[85%] max-w-7xl mx-auto py-8 mt-8 m-auto">
                <div className="container mx-auto px-4  flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-[#254168cc] text-[18px]">
                            <p>
                                En <span className="font-semibold">TECHNOLOGICAL SOLUTIONS AND CONTAINER HANDLING E.I.R.L.</span>, nos apasiona mantener en movimiento la maquinaria que impulsa los sectores portuario, minero y de construcción. Somos mucho más que un proveedor de servicios; somos su aliado estratégico, comprometido con la excelencia técnica y la satisfacción de nuestros clientes.
                                Nuestra experiencia nos ha permitido desarrollar un profundo conocimiento en el soporte técnico y comercial de equipos especializados. Entendemos que cada minuto de inactividad representa un costo para su operación, por eso ofrecemos soluciones rápidas, eficientes y con los más altos estándares de calidad.
                            </p>
                            <p>
                                <span className="font-semibold">Nuestro trabajo</span> se centra en brindar un servicio integral que abarca desde el mantenimiento preventivo, diseñado para anticipar y prevenir fallas, hasta intervenciones correctivas inmediatas cuando los equipos lo requieran. Utilizamos tecnología de vanguardia en mantenimiento predictivo para monitorear el estado de sus máquinas y actuar antes de que se presenten problemas mayores.
                            </p>
                        </div>
                        <div className="bg-[url(/somos-img-info.avif)] h-[28rem] bg-center bg-cover ">
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border-2 border-[#254168] w-full h-auto rounded-xl p-6 text-center flex justify-center items-center flex-col gap-6">
                                <FaBullseye className="text-[#f9cb21] text-8xl" />
                                <h2 className="text-xl text-[#254168] font-bold">MISIÓN</h2>
                                <div>
                                    <p className="text-[#254168cc] text-[18px]">
                                        Consolidarnos como una empresa líder en el sector portuario, construcción y minería brindando productos y servicios tecnológicos de alta calidad y garantía logrando así la confianza de nuestros clientes nacionales e internacionales.
                                    </p>
                                </div>
                            </div>
                            <div className="border-2 border-[#254168] w-full h-auto rounded-xl p-6 text-center flex justify-center items-center flex-col gap-6">
                                <FaRegLightbulb className="text-[#f9cb21] text-8xl" />
                                <h2 className="text-xl text-[#254168] font-bold">VISIÓN</h2>
                                <div>
                                    <p className="text-[#254168cc] text-[18px]">
                                        Ser la empresa más innovadora del mercado brindando servicios confiables y de alta calidad, siendo así la mejor opción para nuestros clientes nacionales e internacionales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="text-2xl text-[#254168] font-bold sm:text-3xl">
                            <h2>Nuestros Valores</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
                            <div className="relative p-4 bg-[url(/honestidad--nosotros.jpg)] bg-center bg-cover flex justify-center items-center h-[14rem] shadow-[rgba(2 2 2 2.5)] uppercase">
                                {/* <FaHandshake className="text-[#f9ca2154] text-8xl" /> */}
                                <div className="p-4 h-full w-full flex flex-col items-center justify-center gap-2 absolute bg-[#25416854] text-center">
                                    <p className="text-2xl text-white font-bold">Honestidad</p>
                                    {/* <span className="text-[#254168cc] font-semibold">Actuamos con transparencia y ética en todo momento.</span> */}
                                </div>
                            </div>
                            <div className="relative p-4 bg-[url(/calidad--nosotros.jpg)] bg-center bg-cover flex justify-center items-center h-[14rem] shadow-[rgba(2 2 2 2.5)] uppercase">
                                {/* <FaHandshake className="text-[#f9ca2154] text-8xl" /> */}
                                <div className="p-4 h-full w-full flex flex-col items-center justify-center gap-2 absolute bg-[#25416854] text-center">
                                    <p className="text-2xl text-white font-bold">Calidad</p>
                                    {/* <span className="text-[#254168cc] font-semibold">Ofrecemos productos y servicios que superan expectativas.</span> */}
                                </div>
                            </div>
                            <div className="relative p-4 bg-[url(/eficiencia--nosotros.jpg)] bg-center bg-cover flex justify-center items-center h-[14rem] shadow-[rgba(2 2 2 2.5)] uppercase">
                                {/* <FaLightbulb className="text-[#f9ca2154] text-8xl" /> */}
                                <div className="p-4 h-full w-full flex flex-col items-center justify-center gap-2 absolute bg-[#25416854] text-center">
                                    <p className="text-2xl text-white font-bold">Eficiencia</p>
                                    {/* <span className="text-[#254168cc] font-semibold">Optimizamos nuestros procesos para brindar soluciones rápidas y efectivas.</span> */}
                                </div>
                            </div>
                            <div className="relative p-4 bg-[url(/trato--nosotros.jpg)] bg-center bg-cover flex justify-center items-center h-[14rem] shadow-[rgba(2 2 2 2.5)] uppercase">
                                {/* <FaAward className="text-[#f9ca2154] text-8xl" /> */}
                                <div className="p-4 h-full w-full flex flex-col items-center justify-center gap-2 absolute bg-[#25416854] text-center">
                                    <p className="text-2xl text-white font-bold">Trato Personalizado</p>
                                    {/* <span className="text-[#254168cc] font-semibold">Brindamos atención única y soluciones adaptadas a cada cliente.</span> */}
                                </div>
                            </div>
                            <div className="relative p-4 bg-[url(/mejora--nosotros.jpg)] bg-center bg-cover flex justify-center items-center h-[14rem] shadow-[rgba(2 2 2 2.5)] uppercase">
                                {/* <FaLeaf className="text-[#f9ca2154] text-8xl" /> */}
                                <div className="p-4 h-full w-full flex flex-col items-center justify-center gap-2 absolute bg-[#25416854] text-center">
                                    <p className="text-2xl text-white font-bold">Mejora Continua</p>
                                    {/* <span className="text-[#254168cc] font-semibold">Siempre buscamos aprender, crecer y mejorar nuestros servicios.</span> */}
                                </div>
                            </div>
                            {/* <div className="relative p-4 bg-[#ececec] flex justify-center items-center h-[14rem] border-2 border-[#254168]">
                                <FaUsers className="text-[#f9ca2154] text-8xl" />
                                <div className="p-4 absolute text-center">
                                    <p className="text-2xl text-[#254168] font-bold">Colaboración</p>
                                    <span className="text-[#254168cc] font-semibold">Creemos en el poder del trabajo en equipo, fomentando un ambiente donde cada talento suma y las metas se alcanzan juntos.</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl text-[#254168] font-bold text-center sm:text-3xl">
                                ¿Por qué elegirnos?
                            </h2>
                            <div className="my-8">
                                <div className="w-full mx-auto rounded-md shadow-md border border-gray-200">
                                    <AccordionItem title="¿Por qué confiar en nuestra empresa para tus repuestos de maquinaria?">
                                        Porque ofrecemos repuestos de alta calidad, diseñados para maximizar el rendimiento y la vida útil de tu equipo. Trabajamos con tecnología de vanguardia y proveedores certificados para garantizar soluciones confiables.
                                    </AccordionItem>
                                    <AccordionItem title="¿Qué nos hace diferentes de otras empresas del sector?">
                                        No solo vendemos repuestos, ofrecemos soluciones. Nuestro equipo de expertos te asesora para encontrar el producto exacto que necesitas, evitando pérdidas de tiempo y dinero. Además, trabajamos con entregas rápidas y un servicio transparente.
                                    </AccordionItem>
                                    <AccordionItem title="¿Por qué nuestro servicio integral marca la diferencia?">
                                        No solo vendemos repuestos, brindamos un servicio completo: asesoría experta, seguimiento continuo y soluciones a medida para maximizar la vida útil y eficiencia de tu maquinaria.
                                    </AccordionItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Nosotros