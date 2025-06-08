import React, { useState, useEffect } from 'react';
import { products, categories } from './mock/products';
import GorgonaHeader from './components/GorgonaHeader';
import CategorySidebar from './components/CategorySidebar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import PromoCarousel from './components/PromoCarousel';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Función mejorada para agregar al carrito
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
      }
      return [...prevCart, {...product, quantity: 1}];
    });
  };

  // Función para remover item del carrito
  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  // Función para actualizar cantidad
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map((item, i) => 
        i === index ? {...item, quantity: newQuantity} : item
      )
    );
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Filtrar productos disponibles
  const availableProducts = products.filter(p => p.available);
  const filteredProducts = activeCategory === 'Todos' 
    ? availableProducts
    : availableProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <GorgonaHeader 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setShowCart(true)} 
      />
      
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto">
        <PromoCarousel />
        
        <div className="flex flex-col md:flex-row">
          <CategorySidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <main className="flex-1 p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </div>
          </main>
        </div>
        
        <Testimonials />
        <ContactSection />
      </div>

      {/* Botón flotante del carrito */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="p-4 bg-[#007C74] text-white rounded-full shadow-xl hover:bg-[#00665e] transition-all flex items-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-2 w-6 h-6 bg-white text-[#007C74] rounded-full flex items-center justify-center text-sm font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>
        </div>
      )}

      {/* Modal del carrito */}
      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onSubmit={(formData) => {
            const phoneNumber = '+5356939303';
            const itemsText = cart.map(item => 
              `- ${item.name} (${item.quantity}): $${item.price * item.quantity}`
            ).join('%0A');
            
            const message = `Hola, soy ${formData.name}%0A%0AMi pedido:%0A${itemsText}%0A%0ATotal: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}%0A%0AFecha deseada: ${formData.serviceDate}%0ATeléfono: ${formData.phone}`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            clearCart();
          }}
          onRemove={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default App;

// DONE