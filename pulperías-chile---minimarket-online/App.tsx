
import React, { useState, useMemo, useEffect } from 'react';
import { Product, CartItem, AppRoute } from './types';
import { PRODUCTS, CATEGORIES } from './data';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ChatAssistant from './components/ChatAssistant';
import CheckoutPortal from './components/CheckoutPortal';
import IntranetDashboard from './components/IntranetDashboard';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80',
    title: 'La Esencia de nuestra Tierra',
    subtitle: 'Una selección curada de los frutos más nobles del campo chileno.'
  },
  {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80',
    title: 'El Lujo de lo Auténtico',
    subtitle: 'Productos con historia, tradición y el sello de la pulpería boutique.'
  }
];

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('pulperia_cart_v2');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    localStorage.setItem('pulperia_cart_v2', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length), 10000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showHeader = currentRoute !== AppRoute.CHECKOUT && currentRoute !== AppRoute.INTRANET;

  if (currentRoute === AppRoute.INTRANET) return <IntranetDashboard onExit={() => setCurrentRoute(AppRoute.HOME)} />;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8]">
      {showHeader && (
        <Header 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
          onSearch={setSearchQuery}
          currentRoute={currentRoute}
          onNavigate={setCurrentRoute}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      <main className="flex-grow">
        {currentRoute === AppRoute.HOME && (
          <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
              {HERO_SLIDES.map((slide, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-[2s] ease-in-out ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                  <img src={slide.image} className="w-full h-full object-cover image-pan" alt="" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.6em] mb-6 reveal">Edición Limitada 2024</span>
                    <h1 className="text-white text-6xl md:text-9xl font-serif mb-8 leading-none max-w-5xl reveal [animation-delay:0.2s] tracking-tighter">
                      {slide.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed reveal [animation-delay:0.4s]">
                      {slide.subtitle}
                    </p>
                    <button 
                      onClick={() => setCurrentRoute(AppRoute.SHOP)}
                      className="group relative px-12 py-5 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden reveal [animation-delay:0.6s]"
                    >
                      <span className="relative z-10">Explorar Despensa</span>
                      <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">Explorar Despensa</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
              </div>
            </section>

            {/* Featured Section */}
            <section className="py-32 container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                <div className="reveal">
                  <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Lo más selecto</span>
                  <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter">Favoritos de la Pulpería</h2>
                </div>
                <p className="max-w-xs text-slate-500 text-sm leading-relaxed reveal [animation-delay:0.2s]">
                  Productos cosechados a mano y seleccionados bajo el estándar más exigente del país.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {PRODUCTS.filter(p => p.isTraditional).slice(0, 4).map(p => (
                  <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
                ))}
              </div>
            </section>

            {/* Banner Estacional */}
            <section className="py-20 bg-slate-900 text-white">
              <div className="container mx-auto px-6 text-center">
                <h3 className="font-serif text-4xl mb-6">¿Busca algo especial para su mesa?</h3>
                <p className="text-white/60 text-sm mb-10 tracking-widest uppercase">Nuestro Concierge Gastronómico le asiste en tiempo real.</p>
                <div className="flex justify-center gap-1">
                  {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentRoute === AppRoute.SHOP && (
          <div className="container mx-auto px-6 pt-48 pb-40">
            <div className="mb-24 flex flex-col items-center text-center">
              <span className="text-[10px] text-amber-700 font-bold uppercase tracking-[0.5em] mb-6">Catálogo Boutique</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 tracking-tighter capitalize">
                {activeCategory === 'all' ? 'La Colección' : CATEGORIES.find(c => c.id === activeCategory)?.name}
              </h2>
              <div className="w-16 h-px bg-slate-200"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-20">
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
            </div>
          </div>
        )}

        {currentRoute === AppRoute.CHECKOUT && (
          <CheckoutPortal 
            cart={cart} 
            total={cartTotal} 
            onSuccess={() => { setCart([]); setCurrentRoute(AppRoute.HOME); }}
            onCancel={() => setCurrentRoute(AppRoute.HOME)}
          />
        )}
      </main>

      {showHeader && (
        <footer className="bg-white border-t border-slate-100 py-32 mt-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 md:col-span-2">
                <h2 className="font-serif text-3xl mb-6 tracking-tighter">PULPERÍAS Chile</h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  Dedicados a rescatar los sabores más puros de nuestra geografía, llevando la experiencia de una pulpería boutique directo a su hogar.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6">Navegación</h4>
                <ul className="space-y-4 text-xs text-slate-400">
                  <li><button onClick={() => setCurrentRoute(AppRoute.SHOP)} className="hover:text-slate-900 transition-colors">La Despensa</button></li>
                  <li><button className="hover:text-slate-900 transition-colors">Nuestra Historia</button></li>
                  <li><button className="hover:text-slate-900 transition-colors">Términos Boutique</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6">Contacto</h4>
                <p className="text-xs text-slate-400 mb-4">ventas@pulperiaschile.cl</p>
                <button onClick={() => setCurrentRoute(AppRoute.INTRANET)} className="text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors">Staff Access</button>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">© 2024 Pulperías Chile • Todos los Derechos Reservados</p>
              <div className="flex gap-6 grayscale opacity-30">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
              </div>
            </div>
          </div>
        </footer>
      )}
      
      {/* Cart Drawer Mejorado */}
      {isCartOpen && currentRoute !== AppRoute.CHECKOUT && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm transition-opacity duration-700" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-700 ease-out">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-serif text-slate-900 tracking-tighter">Su Canasto</h2>
                <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mt-2">Selección Boutique</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-10 space-y-10 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                   <p className="text-slate-400 font-serif italic text-lg mb-6">Su canasto espera ser llenado...</p>
                   <button onClick={() => {setIsCartOpen(false); setCurrentRoute(AppRoute.SHOP);}} className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-900 border-b border-slate-900 pb-2">Explorar Productos</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-8 items-center reveal">
                    <div className="w-24 h-24 flex-shrink-0 bg-slate-50 rounded-sm overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif text-slate-900 mb-1">{item.name}</h4>
                      <p className="text-sm font-light text-slate-400 mb-4">${item.price.toLocaleString('es-CL')}</p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 border border-slate-100 rounded-full px-4 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-400 hover:text-slate-900 transition-colors text-lg">-</button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-400 hover:text-slate-900 transition-colors text-lg">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-red-500 transition-colors">Eliminar</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-10 bg-slate-50 border-t border-slate-100 space-y-8">
                <div className="flex justify-between items-end">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">Inversión Total</span>
                  <span className="text-4xl font-serif text-slate-900">${cartTotal.toLocaleString('es-CL')}</span>
                </div>
                <button 
                  onClick={() => { setIsCartOpen(false); setCurrentRoute(AppRoute.CHECKOUT); }}
                  className="w-full bg-slate-900 text-white py-6 rounded-none font-bold text-[10px] uppercase tracking-[0.5em] shadow-2xl hover:bg-black transition-all active:scale-[0.98]"
                >
                  Finalizar Selección
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {currentRoute !== AppRoute.CHECKOUT && currentRoute !== AppRoute.INTRANET && <ChatAssistant />}
    </div>
  );
};

export default App;
