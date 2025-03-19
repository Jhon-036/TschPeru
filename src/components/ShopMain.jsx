import { FaArrowRight } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"

const ShopMain = () => {

    const featuredCategories = [
        {
            name: 'Filtros',
            image: '/categories--filter.webp'
        },
        {
            name: 'Eléctrico',
            image: '/categories--electronic.webp'
        },
        {
            name: 'Frenos',
            image: '/categories--brake.webp'
        },
        {
            name: 'Suspensión',
            image: '/categories--suspension.webp'
        }
    ]

    const featuredParts = [
        {
            name: "Filtro de Aceite Premium",
            category: "Filtros",
            quality: "Premium",
            popularity: "Más Vendido",
            price: 140.99,
            image: "/filter--AceitePremiumx500.png"
        },
        {
            name: "Batería de Alto Rendimiento",
            category: "Eléctrico",
            quality: "Reforzado",
            popularity: "Recomendado",
            price: 89.99,
            image: "/elect--bateriaCatx500.png"
        },
        {
            name: "Juego de Frenos Cerámicos",
            category: "Frenos",
            quality: "Profesional",
            popularity: "Más Vendido",
            price: 149.99,
            image: "/fren--juegoFrenoCeramicox500.png"
        },
        {
            name: "Kit de Embrague Completo",
            category: "Transmisión",
            quality: "Genuino",
            popularity: "Más Vendido",
            price: 249.99,
            image: "/trans--kitEmbriague.png"
        },
    ]

    return (
        <div className="max-w-[1840px] py-[2rem] px-[1rem]">
            <div>
                <h2 className="text-2xl font-bold text-center text-[#254168]">Componentes de Calidad para el Mundo Automotriz</h2>
                <p className="text-center mt-4 text-[#254168cc]">
                    Ofrecemos una amplia selección de partes y accesorios de las mejores marcas para mantener tu vehículo en óptimas condiciones.
                </p>
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4 gap-5">
                        <h3 className="text-xl font-semibold text-[#254168]">Categorías Populares</h3>
                        <p className="text-sm flex items-center gap-1 text-[#f9cb21]">
                            Ver Todas <FaArrowRight />
                        </p>
                    </div>
                    <div className="flex overflow-x-auto scrollbar-hide gap-4">
                        {featuredCategories.map((category, index) => (
                            <div
                                key={index}
                                className="relative flex-none w-60 h-60 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
                                style={{ backgroundImage: `url(${category.image})` }}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#f9cb21] bg-opacity-50 text-white text-center">
                                    <h2 className="font-semibold">{category.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4 gap-5">
                        <h3 className="text-xl font-semibold text-[#254168]">Productos Destacados</h3>
                        <p className="text-sm flex items-center gap-1 text-[#f9cb21]">
                            Ver Todas <FaArrowRight />
                        </p>
                    </div>
                    <div className="flex overflow-x-auto scrollbar-hide gap-4">
                        {featuredParts.map((part, index) => (
                            <div className="flex-none bg-white/60">
                                <div className="w-60 h-64 flex justify-center items-center">
                                    <img key={index} src={`${part.image}`} className="object-contain p-6" alt="" />
                                </div>
                                <div className="bg-white p-4 text-[#254168] grid gap-2.5">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-[12px] px-3 border border-[#f9cb21] rounded-xl">
                                            {`${part.category}`}
                                        </span>
                                        <p className="font-bold text-[18px]">
                                            {`${part.name}`}
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[12px] px-3 border border-[#254168] bg-[#254168] text-white rounded-xl">{`${part.quality}`}</span>
                                        <span className="text-[12px] px-3 border border-[#f9cb21] text-[#254168] bg-[#f9cb21] rounded-xl">{`${part.popularity}`}</span>
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <p className="font-semibold">
                                            {`s/ ${part.price}`}
                                        </p>
                                        <button className="flex items-center gap-2 bg-[#f9cb21] py-1 px-3 rounded-sm text-[14px]"><MdOutlineShoppingCart className="text-[#254168]"/>Cotizar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="relative">
                        <video src="/montacargasContenedores.mp4" autoPlay muted loop playsinline ></video>
                        <div className="absolute flex flex-col justify-center text-center top-0 text-white bg-black/25 w-full h-full">
                            <div className="flex flex-col gap-1 items-center">
                                <h3 className="text-xl">Promociones Exclusivas</h3>
                                <p className="font-light leading-5">Aprovecha nuestras rebajas en productos seleccionados.</p>
                                {/* <p className="text-[13px]">¡Oferta por tiempo limitado!</p> */}
                                <button className="uppercase p-1 mt-2 bg-[#f9cb21] w-24 text-white font-semibold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300">Ver mas</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShopMain