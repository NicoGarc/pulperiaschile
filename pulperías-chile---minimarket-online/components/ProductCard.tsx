
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group reveal">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6 rounded-none transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-transparent group-hover:border-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        
        {/* Etiqueta Tradicional */}
        {product.isTraditional && (
          <div className="absolute top-6 left-6">
            <span className="bg-white/95 backdrop-blur text-slate-900 text-[8px] font-bold px-4 py-1.5 uppercase tracking-[0.3em] border border-slate-100">
              Herencia
            </span>
          </div>
        )}

        {/* Alerta Stock Bajo */}
        {product.stock < 10 && (
          <div className="absolute top-6 right-6">
            <span className="bg-amber-700 text-white text-[7px] font-bold px-3 py-1 uppercase tracking-widest animate-pulse">
              Escaso
            </span>
          </div>
        )}

        {/* Quick Add Overlay Boutique */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-white text-slate-900 py-4 text-[9px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-slate-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-700"
          >
            Añadir a Selección
          </button>
        </div>
      </div>
      
      <div className="space-y-2 px-1 text-center">
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.4em] mb-1">{product.category}</p>
        <h3 className="font-serif text-xl text-slate-900 leading-tight group-hover:text-amber-800 transition-colors cursor-pointer tracking-tighter">
          {product.name}
        </h3>
        <p className="text-sm font-light text-slate-900 tracking-widest">
          ${product.price.toLocaleString('es-CL')}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
