import BarraAmarillo from "./BarraAmarillo"

const ServiceMant = () => {
  return (
    <div className="mt-16">
      <div className="relative bg-[url(/somos--tsch.avif)] h-[30rem] bg-center bg-no-repeat bg-cover">
        <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
          <h2 className="text-white font-bold text-[clamp(1.8rem,5vw,3rem)]">Mantenimiento integral de Maquinarias</h2>
        </div>
      </div>
      <article className="w-[85%] h-[50rem] max-w-7xl mx-auto py-24 mt-8 m-auto flex flex-col gap-8 justify-center">
        <h1 className="text-3xl text-[#254168] font-bold mb-10 flex gap-3"><BarraAmarillo/>Mantenimiento integral de Maquinarias</h1>
        <p className="text-lg md:text-xl font-light text-gray-700">T.S.C.H. EIRL (Technological Solutions and Container Handling) es su aliado estratégico en el mantenimiento, reparación y optimización de maquinaria pesada para los sectores portuario, minero y construcción. Nos especializamos en soluciones técnicas avanzadas que maximizan la productividad, reducen tiempos de inactividad y prolongan la vida útil de sus equipos, respaldados por repuestos OEM de marcas líderes como CAT, Terex, Kalmar, Cummins y más.</p>
        <ul className="text-lg md:text-xl font-light text-gray-700 pl-12">
          <li className="list-disc">Mantenimiento Predictivo y Preventivo</li>
          <li className="list-disc">Reparación de componentes eléctricos, hidráulicos y mecánicos</li>
          <li className="list-disc">Fabricación de arneses eléctricos y adaptación de dispositivos electrónicos (módulos de control sensores, joysticks)</li>
        </ul>
      </article>
    </div>
  )
}
export default ServiceMant