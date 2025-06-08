import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  if (!product || !product.available) return null;

  return (
    <div className="bg-[#BDBDBC] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-[#007C74] text-white rounded-lg hover:bg-[#00665e] transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;