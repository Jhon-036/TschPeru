const Servicios = () => {
    return (
        <div className="sm:w-[98%] md:w-[95%] xl:w-[85%] 2xl:w-[70%] py-8 px-4 mt-8 m-auto">
        <h2 className="text-2xl text-[#254168] font-bold text-center text-[clamp(1.5rem,5vw,2.5rem)]">Nuestros Servicios</h2>
      
        <div className="mt-8 xl:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8">
          {[
            { image: '/service--consulting.jpg', title: 'Asesoramiento Personal' },
            { image: '/service--installation.jpg', title: 'Mantenimiento Correctivo' },
            { image: '/service--installation.jpg', title: 'Instalaciones' },
            { image: '/service--warranty.jpg', title: 'Garantía de Servicio' }
          ].map((service, index) => (
            <div
              key={index}
              className="relative w-full aspect-square bg-cover bg-center bg-no-repeat rounded-md shadow-md transition-transform duration-300  hover:scale-105 origin-center cursor-pointer"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="w-full h-full bg-black/40 hover:bg-black/70 duration-300 flex justify-center items-center text-center rounded-md">
                <p className="p-2 text-xl sm:text-2xl text-white font-bold">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
  };
  export default Servicios;
  