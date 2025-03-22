import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicios = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-[85%] max-w-7xl mx-auto py-8  mt-8 m-auto">
      <h2 
        className="text-2xl text-[#254168] font-bold text-center sm:text-3xl" 
        data-aos="fade-up"
      >
        Nuestros Servicios
      </h2>

      <div className="mt-8 xl:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8">
        {[
          { image: '/service--consulting.jpg', title: 'Asesoramiento Personal' },
          { image: '/service--mantenim.jpg', title: 'Mantenimiento Correctivo' },
          { image: '/service--installation.jpg', title: 'Instalaciones' },
          { image: '/service--warranty.jpg', title: 'Garantía de Servicio' }
        ].map((service, index) => (
          <div
            key={index}
            className="relative w-full aspect-square bg-cover bg-center bg-no-repeat rounded-md shadow-md transition-transform duration-300 hover:scale-105 origin-center cursor-pointer"
            style={{ backgroundImage: `url(${service.image})` }}
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
          >
            <div className="w-full h-full bg-black/40 flex justify-center items-center text-center rounded-md">
              <p className="p-2 text-xl sm:text-2xl text-white font-bold">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
