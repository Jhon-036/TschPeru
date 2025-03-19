import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SliderMain = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        speed={500}
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main1.webp)] h-[35rem] lg:h-[50rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
            <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-4 sm:pt-12' data-aos="fade-up">
                <h2 className='text-white uppercase text-[clamp(1.2rem,5vw,3rem)] font-bold' data-aos="fade-down" data-aos-delay="100">
                  Una amplia gama de repuestos a su disposición.
                </h2>
                <p className='text-gray-200 text-[clamp(0.9rem,2.5vw,1.5rem)] max-w-2xl' data-aos="fade-up" data-aos-delay="200">
                  Estamos comprometidos con la comercialización de productos de la más alta calidad.
                </p>
                <button className="uppercase p-2 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300" data-aos="zoom-in" data-aos-delay="300">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main2.webp)] h-[35rem] lg:h-[50rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
            <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-4 sm:pt-12' data-aos="fade-up">
                <h2 className='text-white uppercase text-[clamp(1.2rem,5vw,3rem)] font-bold' data-aos="fade-down" data-aos-delay="100">
                  Repuestos y accesorios esenciales para el óptimo desempeño.
                </h2>
                <p className='text-gray-100 text-[clamp(0.9rem,2.5vw,1.5rem)] max-w-2xl' data-aos="fade-up" data-aos-delay="200">
                  Calidad y confiabilidad garantizadas.
                </p>
                <button className="uppercase p-2 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300" data-aos="zoom-in" data-aos-delay="300">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main3.webp)] h-[35rem] lg:h-[50rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
            <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-4 sm:pt-12' data-aos="fade-up">
                <h2 className='text-white uppercase text-[clamp(1.2rem,5vw,3rem)] font-bold' data-aos="fade-down" data-aos-delay="100">
                  Asesoramiento personalizado en mantenimiento, instalación y repuestos.
                </h2>
                <p className='text-gray-100 text-[clamp(0.9rem,2.5vw,1.5rem)] max-w-2xl' data-aos="fade-up" data-aos-delay="200">
                  Confianza y desempeño garantizados en cada solución.
                </p>
                <button className="uppercase p-2 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300" data-aos="zoom-in" data-aos-delay="300">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div
          className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/20 p-1 rounded-full cursor-pointer hover:bg-white/30 transition-colors duration-300"
          aria-label="Slide anterior"
        >
          <IoIosArrowBack className="text-[#254168] hover:text-[#007aff] w-6 h-6" />
        </div>
        <div
          className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/20 p-1 rounded-full cursor-pointer hover:bg-white/30 transition-colors duration-300"
          aria-label="Siguiente slide"
        >
          <IoIosArrowForward className="text-[#254168] hover:text-[#007aff] w-6 h-6" />
        </div>
      </Swiper>
    </div>
  )
}

export default SliderMain;
