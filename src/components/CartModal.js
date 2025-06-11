
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const CartModal = ({ show, cart, onClose, onRemove, updateQuantity, clearCart }) => {
  const [showForm, setShowForm] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Tu carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">El carrito está vacío.</p>
        ) : showForm ? (
          <CheckoutForm cart={cart} onBack={() => setShowForm(false)} />
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateQuantity(index, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
                    <button onClick={() => onRemove(index)} className="text-red-500">🗑</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <button onClick={clearCart} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar pedido</button>
              <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Finalizar compra</button>
            </div>
          </>
        )}

        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">Cerrar</button>
      </div>
    </div>
  );
};

export default CartModal;
