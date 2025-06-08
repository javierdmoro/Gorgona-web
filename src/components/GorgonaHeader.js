import React from 'react';

const GorgonaHeader = ({ cartCount, onCartClick }) => {
  return (
    <header className="w-full py-4 px-6 sticky top-0 z-10" style={{ backgroundColor: '#007C74' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="w-40 h-10 bg-white/20 rounded-lg">
          {/* Espacio para logo SVG */}
          <img src="/logo.svg" alt="Gorgona Beauty" className="h-full w-full object-contain" />
        </div>
        
        <button 
          onClick={onCartClick}
          className="relative px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Carrito
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default GorgonaHeader;