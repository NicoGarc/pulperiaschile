
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutPortalProps {
  cart: CartItem[];
  total: number;
  onSuccess: () => void;
  onCancel: () => void;
}

const CheckoutPortal: React.FC<CheckoutPortalProps> = ({ cart, total, onSuccess, onCancel }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Progress Bar Editorial */}
        <div className="flex justify-between mb-24 relative max-w-xs mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-700 ${
                step >= s ? 'bg-slate-900 text-white scale-110 shadow-xl' : 'bg-white text-slate-300 border border-slate-100'
              }`}>
                {s === 3 && step === 3 ? '✓' : s}
              </div>
              <span className={`text-[8px] font-bold uppercase tracking-[0.2em] mt-3 transition-colors ${step >= s ? 'text-slate-900' : 'text-slate-300'}`}>
                {s === 1 ? 'Despacho' : s === 2 ? 'Pago' : 'Orden'}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            {step === 1 && (
              <div className="reveal space-y-10">
                <div className="border-b border-slate-100 pb-6">
                  <h2 className="text-4xl font-serif text-slate-900 tracking-tighter">Destino del Envío</h2>
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] mt-2">Embalaje de Lujo Incluido</p>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  <div className="col-span-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-2 group-focus-within:text-slate-900 transition-colors">Nombre del Destinatario</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 transition-all placeholder:text-slate-200" placeholder="Ej. Sr. Carlos Ibañez" />
                  </div>
                  <div className="group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Región</label>
                    <select className="w-full bg-transparent border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 appearance-none">
                      <option>Metropolitana</option>
                      <option>Valparaíso</option>
                      <option>Biobío</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Comuna</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900" placeholder="Ej. Zapallar" />
                  </div>
                  <div className="col-span-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Dirección Completa</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900" placeholder="Calle, N°, Depto / Casa" />
                  </div>
                </div>

                <div className="pt-10">
                  <button 
                    onClick={() => setStep(2)} 
                    className="group relative w-full bg-slate-900 text-white py-6 rounded-none font-bold text-[10px] uppercase tracking-[0.5em] overflow-hidden shadow-2xl transition-all active:scale-[0.98]"
                  >
                    <span className="relative z-10">Continuar al Pago</span>
                    <div className="absolute inset-0 bg-amber-800 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="reveal space-y-10">
                <div className="border-b border-slate-100 pb-6">
                  <h2 className="text-4xl font-serif text-slate-900 tracking-tighter">Pasarela Segura</h2>
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] mt-2">Transacción Encriptada Boutique</p>
                </div>

                <div className="space-y-8">
                  {/* Tarjeta Visual */}
                  <div className="aspect-[1.6/1] w-full max-w-sm mx-auto bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <div className="w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    </div>
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-[9px] font-bold tracking-[0.4em] opacity-40">PULPERÍAS PLATINUM</span>
                      <div className="w-12 h-8 bg-amber-400/20 rounded-md backdrop-blur border border-white/10"></div>
                    </div>
                    <div className="relative z-10">
                      <p className="text-2xl tracking-[0.2em] font-light mb-6">•••• •••• •••• 9928</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[7px] uppercase tracking-widest opacity-40 mb-1">Titular</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest">Invitado Distinguido</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 brightness-0 invert opacity-40" alt="Visa" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 border border-slate-900 rounded-none flex items-center justify-between cursor-pointer group">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Tarjeta Débito/Crédito</span>
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <div className="p-5 border border-slate-100 rounded-none flex items-center justify-between opacity-30 cursor-not-allowed">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Transferencia</span>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <button 
                    onClick={handlePayment} 
                    disabled={loading}
                    className="group relative w-full bg-slate-900 text-white py-6 rounded-none font-bold text-[10px] uppercase tracking-[0.5em] overflow-hidden shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span className="relative z-10">Confirmar Inversión Gourmet</span>
                        <div className="absolute inset-0 bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="reveal text-center py-20 space-y-8 bg-white border border-slate-50 shadow-sm p-12">
                <div className="w-24 h-24 bg-slate-900 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-5xl font-serif text-slate-900 tracking-tighter">Todo en Orden</h2>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Su selección boutique está siendo procesada por nuestro maestro de bodega. Recibirá noticias en su correo a la brevedad.
                </p>
                <div className="pt-12">
                  <button 
                    onClick={onSuccess} 
                    className="px-12 py-5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black transition-all"
                  >
                    Volver a la Galería
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary Editorial */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 p-10 shadow-sm sticky top-40">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-800 mb-10 pb-4 border-b border-slate-50">Resumen de Selección</h3>
              <div className="space-y-8 mb-12 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-sm overflow-hidden flex-shrink-0">
                        <img src={item.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-900 uppercase tracking-tighter leading-tight">{item.name}</p>
                        <p className="text-[9px] text-slate-400 mt-1">{item.quantity} Unidad(es)</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-light text-slate-900">${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-8 border-t border-slate-50">
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span className="uppercase tracking-widest">Subtotal</span>
                  <span>${total.toLocaleString('es-CL')}</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span className="uppercase tracking-widest">Logística Premium</span>
                  <span className="text-amber-700">Sin Costo</span>
                </div>
                <div className="flex justify-between items-end pt-8">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-900">Total Final</span>
                  <span className="text-4xl font-serif text-slate-900 tracking-tighter">${total.toLocaleString('es-CL')}</span>
                </div>
              </div>
            </div>
            
            {step < 3 && (
              <button 
                onClick={onCancel} 
                className="w-full text-center mt-10 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 hover:text-slate-900 transition-colors"
              >
                ← Cancelar y Volver
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPortal;
