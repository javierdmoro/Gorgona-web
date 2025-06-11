
import React, { useState } from 'react';

const CheckoutForm = ({ cart, onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [delivery, setDelivery] = useState(false);
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    const cartDetails = cart.map(item =>
      `• ${item.name} x${item.quantity} - $${item.price * item.quantity}`).join('%0A');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryText = delivery ? `Sí, Dirección: ${address}` : 'No';

    const message = `*Nuevo pedido*%0A%0A` +
      `*Nombre:* ${name}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Fecha del pedido:* ${date}%0A` +
      `*¿Requiere domicilio?:* ${deliveryText}%0A%0A` +
      `*Productos:*%0A${cartDetails}%0A%0A` +
      `*Total:* $${total}`;

    const whatsappUrl = `https://wa.me/5356939303?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Finaliza tu pedido</h3>
      <input
        type="text"
        placeholder="Nombre y apellidos"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="tel"
        placeholder="Número de teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={delivery}
          onChange={(e) => setDelivery(e.target.checked)}
        />
        <span>¿Necesita domicilio? (con costo adicional)</span>
      </label>
      {delivery && (
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      )}
      <div className="flex justify-between">
        <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Atrás</button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Enviar pedido</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
