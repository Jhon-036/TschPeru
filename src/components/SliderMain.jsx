import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { VscCircleFilled } from 'react-icons/vsc';

const SliderMain = () => {

  return (
    <div>
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
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main1.webp)] h-[35rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
            <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-2'>
                <h2 className='text-white uppercase text-2xl'>Una amplia gama de repuestos a su disposición.</h2>
                <p className='text-gray-200'>Estamos comprometidos con la comercialización de productos de la más alta calidad.</p>
                <button className="uppercase p-1.5 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300">Ver mas</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main2.webp)] h-[35rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
          <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-2'>
                <h2 className='text-white uppercase text-2xl'>Repuestos y accesorios esenciales para el óptimo desempeño.</h2>
                <p className='text-gray-100'>Calidad y confiabilidad garantizadas.</p>
                <button className="uppercase p-1.5 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300">Ver mas</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[url(/tschperu--img--main3.webp)] h-[35rem] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
          <div className='bg-black/25 h-full w-full flex justify-center items-center'>
              <div className='w-[90%] m-auto text-center flex flex-col items-center gap-2'>
                <h2 className='text-white uppercase text-2xl'>Asesoramiento personalizado en mantenimiento, instalación y repuestos.</h2>
                <p className='text-gray-100'>Confianza y desempeño garantizados en cada solución.</p>
                <button className="uppercase p-1.5 mt-2 bg-[#f9cb21] w-24 text-white font-bold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300">Ver mas</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

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
export default SliderMain