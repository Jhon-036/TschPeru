import BarraAmarillo from "./BarraAmarillo"

const ServiceOEM = () => {
  return (
    <div className="mt-16">
        <div className="relative bg-[url(/servicio-repuestos.jpeg)] h-[35rem] bg-center bg-no-repeat bg-cover">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
                <h2 className="text-white font-bold text-[clamp(1.8rem,5vw,3rem)] text-center uppercase">Venta de Repuestos OEM</h2>
            </div>
        </div>
        <article className="w-[85%] justify-center max-w-7xl mx-auto py-44 mt-8 m-auto flex flex-col gap-8">
            <h1 className="text-3xl text-[#254168] font-bold mb-10 flex gap-3"><BarraAmarillo/>Venta de Repuestos OEM</h1>
            <div className="text-xl font-light text-gray-700">
              <p className="font-semibold">En T.S.C.H. EIRL entendemos lo crítico que es mantener tu maquinaria en movimiento.</p>
              <p className="pt-2">Por eso nos especializamos en proveer repuestos OEM y alternativos de alta calidad para equipos industriales, mineros y portuarios, asegurando que tus operaciones nunca se detengan.</p>
              <ul className="text-lg md:text-xl font-light text-gray-700 pl-12 pt-2">
                <li className="list-disc">Trabajamos con proveedores certificados que cumplen altos estándares</li>
                <li className="list-disc">Ofrecemos alternativas de calidad comprobada cuando el repuesto original no está disponible</li>
              </ul>
            </div>
            <h2 className="text-xl text-[#254168] font-bold">Brindamos :</h2>
            <div className="text-xl font-light text-gray-700 pl-3">
              <p className="font-semibold">Expertise Técnico:</p>
              <ul className="text-lg md:text-xl font-light text-gray-700 pl-6">
                <li className="list-disc">Asesoría personalizada para identificar exactamente lo que tu equipo necesita</li>
                <li className="list-disc">Conocimiento especializado en marcas como CAT, Kalmar,Hyster, Cummins, Dana y más</li>
              </ul>
              <p className="font-semibold pt-6">Compromiso con Tu Operación:</p>
              <ul className="text-lg md:text-xl font-light text-gray-700 pl-6">
                <li className="list-disc">Entrega rápida para minimizar tiempos de parada</li>
                <li className="list-disc">Precios competitivos sin sacrificar calidad</li>
              </ul>
              <p className="font-semibold pt-6">Repuestos dirigidos para sectores como:</p>
              <ul className="text-lg md:text-xl font-light text-gray-700 pl-6">
                <li className="list-disc font-semibold pt-6">Minería</li>
                <p className="pl-6">Excavadoras, perforadoras, volquetes</p>
                <li className="list-disc font-semibold pt-6">Puertos</li>
                <p className="pl-6">Grúas, reach stackers, manipuladores de contenedores</p>
                <li className="list-disc font-semibold pt-6">Construcción</li>
                <p className="pl-6">Motoniveladoras, gruas telescópica , cargador frontal, bulldozers</p>
              </ul>
            </div>
        </article>
    </div>
  )
}
export default ServiceOEM