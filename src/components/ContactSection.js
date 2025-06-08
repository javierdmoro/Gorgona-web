import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-12 bg-[#BDBDBC] my-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <p className="mb-2"><strong>Teléfono:</strong> +53 56939303</p>
            <p className="mb-2"><strong>Email:</strong> info@gorgonabeauty.com</p>
            <p className="mb-2"><strong>Horario:</strong> Lunes a Sábado 9:00 - 18:00</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full px-4 py-2 rounded-lg border" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border" />
              <textarea placeholder="Mensaje" rows="4" className="w-full px-4 py-2 rounded-lg border"></textarea>
              <button type="submit" className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// DONE