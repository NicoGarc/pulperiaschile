
import React, { useState, useEffect } from 'react';
import { AppRoute } from '../types';
import { CATEGORIES } from '../data';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartClick, 
  onSearch, 
  onNavigate,
  activeCategory,
  setActiveCategory
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-[60] transition-all duration-700 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate(AppRoute.HOME)} 
            className="flex flex-col items-start group"
          >
            <span className={`font-serif font-bold text-2xl tracking-tighter transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              PULPERÍAS <span className="italic font-light opacity-80">Chile</span>
            </span>
            <span className={`text-[8px] font-bold uppercase tracking-[0.4em] transition-colors ${
              scrolled ? 'text-slate-400' : 'text-white/60'
            }`}>
              Almacén de Origen
            </span>
          </button>

          {/* Buscador Central */}
          <div className="hidden lg:block flex-1 max-w-md mx-12">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Buscar en la despensa..." 
                onChange={(e) => onSearch(e.target.value)}
                className={`w-full bg-transparent border-b transition-all duration-500 py-2 px-8 text-xs outline-none ${
                  scrolled 
                    ? 'border-slate-200 focus:border-slate-900 text-slate-900' 
                    : 'border-white/20 focus:border-white text-white placeholder:text-white/40'
                }`}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 absolute left-0 top-1/2 -translate-y-1/2 ${scrolled ? 'text-slate-400' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate(AppRoute.SHOP)}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors hidden md:block ${
                scrolled ? 'text-slate-900 hover:text-amber-700' : 'text-white hover:text-white/70'
              }`}
            >
              Colección
            </button>
            
            <button 
              onClick={onCartClick}
              className={`relative flex items-center gap-2 group p-2 rounded-full transition-all ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Categorías (Sub-nav) */}
        <div className={`mt-6 overflow-x-auto no-scrollbar transition-all duration-500 ${
          scrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'
        }`}>
          <div className="flex justify-center gap-8 py-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  onNavigate(AppRoute.SHOP);
                }}
                className={`text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all pb-1 border-b-2 ${
                  activeCategory === cat.id 
                    ? 'text-white border-white' 
                    : 'text-white/40 border-transparent hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
