import BarraAmarillo from "./BarraAmarillo"

const ServiceTec = () => {
  return (
    <div className="mt-16">
        <div className="relative bg-[url(/servicio-innovacion.jpeg)] h-[35rem] bg-center bg-no-repeat bg-cover">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
                <h2 className="text-white font-bold text-[clamp(1.8rem,5vw,3rem)] text-center uppercase">Innovación y tecnología</h2>
            </div>
        </div>
        <article className="w-[85%] max-w-7xl mx-auto py-44 mt-8 m-auto flex flex-col gap-8 justify-center">
            <h1 className="text-3xl text-[#254168] font-bold mb-10 flex gap-3"><BarraAmarillo/>Innovación y tegnología</h1>
            <p className="text-xl font-light text-gray-700">En T.S.C.H. EIRL, transformamos su maquinaria con soluciones tecnológicas avanzadas que mejoran la seguridad, eficiencia y productividad de sus operaciones. Integramos sistemas inteligentes y automatizados para modernizar equipos en los sectores minero, industrial y portuario, garantizando un rendimiento óptimo y reduciendo riesgos operativos.</p>
            <ul className="text-lg md:text-xl font-light text-gray-700 pl-6">
              <li className="list-disc">Cámaras 360° y sensores anticolisión con inteligencia artificial para operaciones más segura</li>
              <li className="list-disc">Sistemas de pre-arranque automatizados</li>
              <li className="list-disc">Sistemas de bloqueo de funciones críticas</li>
              <li className="list-disc">Sistemas de alarma y mejora continua</li>
            </ul>
        </article>  
    </div>
  )
}
export default ServiceTec