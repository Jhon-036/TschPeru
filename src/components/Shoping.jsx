import { useState, useEffect, useRef } from "react";
import { FaCheck, FaArrowLeft, FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineNearMe } from "react-icons/md";
import emailjs from '@emailjs/browser'

export default function Shoping() {
   // const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
   const [searchParams, setSearchParams] = useSearchParams()
   const initialCategoria = searchParams.get('categoria') || null
   const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(initialCategoria)
   const [productos, setProductos] = useState([]);

   const [paginaActual, setPaginaActual] = useState(1);
   const productosPorPagina = 12;

   const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);
   const [showEmailForm, setShowEmailForm] = useState(false);

   const [showModalCategoria, setShowModalCategoria] = useState(false);

   const form = useRef()

   useEffect(() => {
      const fetchProductos = async () => {
         try {
            const res = await fetch("/services/productos_tienda.json");
            const data = await res.json();
            setProductos(data);

            const categoriaURL = searchParams.get("categoria");
            setCategoriaSeleccionada(categoriaURL || null);

         } catch (error) {
            console.log("Error al cargar la DB: ", error);
         }
      };
      fetchProductos();
   }, []);

   const productosFiltrados = categoriaSeleccionada
      ? productos.filter((producto) => producto.category === categoriaSeleccionada)
      : productos;

   const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
   const indiceInicial = (paginaActual - 1) * productosPorPagina;
   const indiceFinal = indiceInicial + productosPorPagina;
   const productosVisibles = productosFiltrados.slice(indiceInicial, indiceFinal);

   useEffect(() => {
      setPaginaActual(1);
   }, [categoriaSeleccionada]);

   const categorias = productos.length > 0 ? [...new Set(productos.map((producto) => producto.category))] : [];

   const handleQuoteClick = (productName) => {
      setSelectedProduct(productName);
      setQuoteDialogOpen(true);
      setShowEmailForm(false);
   };

   const btnForm = (e) => {
      e.preventDefault();
      // Validar si los campos están vacíos
      const name = form.current.user_name.value;
      const email = form.current.user_email.value;
      const tel = form.current.user_tel.value;
      const ruc = form.current.user_ruc.value;
      const message = form.current.user_message.value;
      const product = form.current.user_prod.value;

      // Si algún campo está vacío, mostrar un mensaje de error
      if (!name || !email || !tel || !message || !product) {
         alert("Por favor, completa todos los campos del formulario.");
         return; // Detener la ejecución si hay campos vacíos
      }

      // Si todos los campos están completos, proceder a enviar el correo
      if (form.current !== null) {
         emailjs.sendForm('service_2q3oqzd', 'template_6jijnyq', form.current, '5TK6BL82z4t3V0ALk')
            .then((result) => {
               alert("Mensaje enviado correctamente, nos pondremos en contacto con usted a la brevedad.");
               form.current.reset(); // Limpiar el formulario después de enviar

               // Cerrar el modal al enviar el mensaje
               setQuoteDialogOpen(false); // Cierra el modal
            }, (error) => {
               alert("Error al enviar el mensaje, por favor intenta nuevamente más tarde.");
            });
      } else {
         alert("Error al cargar el formulario, por favor recarga la página.");
      }
   };


   const handleWhatsAppClick = () => {
      console.log("Producto seleccionado:", selectedProduct);
      if (!selectedProduct) return;
      const telefono = "51951758040"
      const mensaje = `Hola TSCH, revisé su sitio web y estoy interesado en '${selectedProduct}'`;
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
   };

   const handleToggleModalCategoria = () => {
      setShowModalCategoria(!showModalCategoria);
   };

   return (
      <div className="mt-16">

         <div className="relative bg-[url(/about-company.jpg)] h-[18rem] sm:h-[30rem] bg-center bg-no-repeat bg-cover">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
               <h2 className="text-white text-[clamp(1.2rem,5vw,3rem)]">NUESTROS PRODUCTOS</h2>
            </div>
         </div>


         {/* MODAL CATEGORIA MOVIL */}
         <div className={`fixed z-50 bottom-0 left-0 right-0 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:hidden transition-all duration-300 ease-in-out transform ${showModalCategoria ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-4">
               <div className="flex flex-col gap-2">
                  <div className="flex justify-end items-center h-[2rem]">
                     <IoMdClose
                        className="text-xl p-[2px] cursor-pointer"
                        onClick={handleToggleModalCategoria}
                     />
                  </div>
                  <button
                     className={`w-full cursor-pointer justify-start p-1.5 text-[16px] rounded-lg border ${!categoriaSeleccionada ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                     onClick={() => {
                        setCategoriaSeleccionada(null);
                        setShowModalCategoria(false); // Cierra el modal al seleccionar
                     }}
                  >
                     Todos
                     {!categoriaSeleccionada && <FaCheck className="ml-2 inline" />}
                  </button>
                  {categorias.map((categoria) => (
                     <button
                        key={categoria}
                        className={`w-full cursor-pointer justify-start p-1.5 text-[16px] rounded-lg border ${categoriaSeleccionada === categoria ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                        onClick={() => {
                           setCategoriaSeleccionada(categoria);
                           setSearchParams({ categoria });
                           setShowModalCategoria(false); // Cierra el modal al seleccionar
                        }}
                     >
                        {categoria}
                        {categoriaSeleccionada === categoria && <FaCheck className="ml-2 inline" />}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6 my-11">
               {/* Categorías  */}
               <div className="block shrink-0">
                  <div className="sticky top-44">
                     <div className="max-md:visible md:hidden flex justify-center font-semibold">
                        <button
                           className="text-[#254168] border rounded p-2.5 bg-white w-full flex items-center gap-2"
                           onClick={handleToggleModalCategoria}
                        >
                           <CiFilter className="text-xl" />Filtrar Categorias</button>
                     </div>
                     <h2 className="text-xl font-semibold text-[#254168] max-md:hidden">Categorías</h2>
                     <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-8 md:flex md:flex-col max-md:hidden md:visible">
                        <button
                           className={`w-full cursor-pointer justify-start p-2 rounded-lg border ${!categoriaSeleccionada ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                           onClick={() => setCategoriaSeleccionada(null)}
                        >
                           Todos
                           {!categoriaSeleccionada && <FaCheck className="ml-2 inline" />}
                        </button>
                        {categorias.map((categoria) => (
                           <button
                              key={categoria}
                              className={`w-full cursor-pointer justify-start p-2 rounded-lg border ${categoriaSeleccionada === categoria ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                              onClick={() => {
                                 setCategoriaSeleccionada(categoria)
                                 setSearchParams({ categoria })
                              }}
                           >
                              {categoria}
                              {categoriaSeleccionada === categoria && <FaCheck className="ml-2 inline" />}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Productos */}
               <div className="flex-1">
                  {productos.length === 0 ? (
                     <div className="flex justify-center items-center h-64">
                        <div className="animate-pulse text-[#254168]">Cargando productos...</div>
                     </div>
                  ) : (
                     <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                           {productosVisibles.map((producto) => (
                              <div key={producto.id} className="rounded shadow-md transition-transform duration-300 hover:scale-105">
                                 <div className="w-full aspect-square relative ro">
                                    <img src={producto.image} alt={producto.name} className="object-cover w-full h-full block" />
                                 </div>
                                 <div className="p-4 flex gap-1  flex-col">
                                    <div>
                                       <h3 className="font-semibold text-[#254168]">{producto.nombre}</h3>
                                    </div>
                                    <div>
                                       <p className="text-[12px] text-[#254168]/40">{producto.category}</p>
                                    </div>
                                    <div>
                                       <p className="pt-1 text-[14px] text-[#254168]">{producto.descripcion}</p>
                                    </div>
                                    <div >
                                       <button
                                          className="w-full mt-2 bg-[#f9cb21] hover:bg-[#e0b71e] text-[#254168] font-bold p-2 rounded cursor-pointer"
                                          onClick={() => handleQuoteClick(producto.nombre)}
                                       >
                                          Cotizar
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Paginación */}
                        <div className="flex justify-center mt-8 gap-2 flex-wrap">
                           {[...Array(totalPaginas)].map((_, index) => (
                              <button
                                 key={index}
                                 onClick={() => setPaginaActual(index + 1)}
                                 className={`px-4 py-2 cursor-pointer rounded border ${paginaActual === index + 1 ? 'bg-[#254168] text-white' : 'bg-gray-100 text-[#254168]'}`}
                              >
                                 {index + 1}
                              </button>
                           ))}
                        </div>
                     </>
                  )}
               </div>
               {/* Modal con animación */}
               {quoteDialogOpen && (
                  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                     <div className="w-[85%]">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-accordion-down m-auto">
                           {/* Botón de cerrar */}
                           <button
                              className="absolute top-6 right-6 text-[#254168] text-xl cursor-pointer"
                              onClick={() => setQuoteDialogOpen(false)}
                              aria-label="Cerrar"
                           >
                              <FaTimes />
                           </button>
                           {!showEmailForm ? (
                              <>
                                 <h2 className="text-xl font-extrabold uppercase text-[#254168] mb-3">Solicitar Cotización</h2>
                                 <p className="mb-6 text-gray-600 text-[15px] font-semibold">{selectedProduct && `Deseo cotizar "${selectedProduct}" por:`}</p>
                                 <div className="flex gap-4">
                                    <button
                                       className="flex-1 cursor-pointer bg-[#254168] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                                       onClick={() => setShowEmailForm(true)}
                                    >
                                       <FaEnvelope className="mr-2" /> Correo
                                    </button>
                                    <button
                                       className="flex-1 cursor-pointer bg-[#25D366] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                                       onClick={handleWhatsAppClick}
                                    >
                                       <FaWhatsapp className="mr-2" /> WhatsApp
                                    </button>
                                 </div>
                              </>
                           ) : (
                              <div className="">
                                 <button className="text-[#254168] pb-8" onClick={() => setShowEmailForm(false)}>
                                    <FaArrowLeft className="cursor-pointer" />
                                 </button>
                                 <h2 className="text-xl font-bold text-[#254168] mb-4">Formulario de Cotización</h2>
                                 <form ref={form} className="pt-3 flex flex-col gap-3 sm:gap-5 animate-accordion-down">
                                    <input type="text" className="hidden" defaultValue={selectedProduct} name="user_prod" />
                                    <div className="flex flex-col gap-2">
                                       <label htmlFor="" className="text-[#254168] sm:text-[16px]">Nombre :</label>
                                       <input
                                          required
                                          type="text"
                                          placeholder="Tu nombre"
                                          name="user_name"
                                          className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                       <label htmlFor="" className="text-[#254168] sm:text-[16px]">Correo electrónico :</label>
                                       <input
                                          required
                                          type="email"
                                          placeholder="tu@ejemplo.com"
                                          name="user_email"
                                          className="border-[1px] text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                                    </div>
                                    <div className="flex flex-col gap-4 md:flex-row">
                                       <div className="flex flex-col w-full">
                                          <label htmlFor="" className="text-[#254168] sm:text-[16px]">Teléfono :</label>
                                          <input
                                             required
                                             type="number"
                                             placeholder="Tu numero"
                                             name="user_tel"
                                             className="border-[1px] w-full text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                                       </div>
                                       <div className="flex flex-col w-full">
                                          <label htmlFor="" className="text-[#254168] sm:text-[16px]">RUC o DNI :</label>
                                          <input
                                             required
                                             type="number"
                                             placeholder="Numero de ruc"
                                             name="user_ruc"
                                             className="border-[1px] w-full text-[16px] text-gray-600 px-2 py-1 rounded-sm border-[#254168]/25" />
                                       </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                       <label htmlFor="" className="text-[#254168] sm:text-[16px]">Mensaje :</label>
                                       <textarea
                                          required
                                          name="user_message"
                                          rows="4"
                                          placeholder="Detalle la información que desea cotizar ..."
                                          className="border-[1px] text-[16px] px-2 py-1 rounded-sm border-[#254168]/25 text-gray-600" />
                                    </div>
                                    <button onClick={btnForm} className="cursor-pointer flex justify-center items-center gap-2 text-[#254168] bg-[#f9cb21] hover:bg-[#f9b521] transition self-center w-full h-10 rounded-sm mt-2">
                                       <MdOutlineNearMe />
                                       <p>Enviar mensaje</p>
                                    </button>
                                 </form>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
