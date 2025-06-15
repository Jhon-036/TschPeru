import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaArrowLeft, FaTimes } from "react-icons/fa";

export default function ModalCotizacion({
  open,
  onClose,
  producto,
  showEmailForm,
  setShowEmailForm,
  formData,
  setFormData,
  handleFormSubmit,
  handleWhatsAppClick
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-[85%]">
        <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-accordion-down m-auto">
          {/* Cerrar */}
          <button
            className="absolute top-6 right-6 text-[#254168] text-xl cursor-pointer"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <FaTimes />
          </button>
          {!showEmailForm ? (
            <>
              <h2 className="text-[18px] font-extrabold text-[#254168] mb-3 uppercase">Solicitar Cotización</h2>
              <p className="mb-6 text-gray-600 text-[15px] font-semibold">{producto && `Deseo cotizar "${producto}" por:`}</p>
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
            <div>
              <button className="text-[#254168] pb-8" onClick={() => setShowEmailForm(false)}>
                <FaArrowLeft className="cursor-pointer" />
              </button>
              <h2 className="text-xl font-bold text-[#254168] mb-4">Formulario de Cotización</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4 animate-accordion-down">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nombre"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Correo Electrónico"
                  className="w-full p-2 border rounded"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Teléfono"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="ruc"
                    value={formData.ruc}
                    onChange={e => setFormData({ ...formData, ruc: e.target.value })}
                    placeholder="Numero Ruc"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={`Mensaje sobre ${producto}`}
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className="bg-[#f9cb21] text-[#254168] font-bold p-2 w-full flex items-center justify-center rounded transition-transform hover:scale-105">
                  <FaPaperPlane className="mr-2" /> Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
