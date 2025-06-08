import React from 'react';

const CartModal = ({ show, cart, onClose, onSubmit, onRemove, updateQuantity, clearCart }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Tu carrito</h2>
        
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name} ({item.quantity}) - ${item.price * item.quantity}</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => updateQuantity(index, item.quantity - 1)} 
                    className="px-2 py-1 bg-gray-300 rounded"
                  >-</button>
                  <button 
                    onClick={() => updateQuantity(index, item.quantity + 1)} 
                    className="px-2 py-1 bg-gray-300 rounded"
                  >+</button>
                  <button 
                    onClick={() => onRemove(index)} 
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >X</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between mt-4">
          <button onClick={clearCart} className="px-4 py-2 bg-gray-500 text-white rounded">Vaciar carrito</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cerrar</button>
          <button onClick={onSubmit} className="px-4 py-2 bg-green-500 text-white rounded">Finalizar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
