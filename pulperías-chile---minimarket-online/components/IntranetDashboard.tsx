
import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Order, Product } from '../types';

const INITIAL_ORDERS: Order[] = [
  { id: 'ORD-7721', customer: 'Camila Valdés', date: 'Hoy, 14:20', total: 45600, items: 4, status: 'Preparando' },
  { id: 'ORD-7720', customer: 'Andrés Bello', date: 'Hoy, 12:05', total: 12900, items: 1, status: 'Pendiente' },
  { id: 'ORD-7719', customer: 'Sofía Henríquez', date: 'Ayer, 18:45', total: 89000, items: 12, status: 'Enviado' },
];

interface IntranetDashboardProps {
  onExit: () => void;
}

const IntranetDashboard: React.FC<IntranetDashboardProps> = ({ onExit }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'ventas' | 'inventario'>('ventas');
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [inventory, setInventory] = useState<Product[]>(PRODUCTS);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pulperia2024') {
      setIsAuthenticated(true);
    } else {
      alert('Credencial inválida.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-sm p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-900 mb-2 tracking-tighter">PULPERÍAS Chile</h2>
            <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-amber-700">Terminal de Staff</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Contraseña de Enlace</label>
              <input 
                type="password" 
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-none p-5 text-sm outline-none focus:ring-1 focus:ring-slate-200"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-slate-900 text-white py-5 rounded-none font-bold text-[10px] uppercase tracking-[0.5em] hover:bg-black transition-all">
              Acceder al Sistema
            </button>
            <button type="button" onClick={onExit} className="w-full text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors pt-4">
              ← Salir al Exterior
            </button>
          </form>
        </div>
      </div>
    );
  }

  const updateStatus = (id: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="min-h-screen bg-white flex animate-in fade-in duration-1000">
      {/* Sidebar Ejecutivo */}
      <aside className="w-80 bg-slate-900 text-white p-12 flex flex-col">
        <div className="mb-20">
          <h2 className="font-serif text-2xl tracking-tighter">PULPERÍAS <span className="text-amber-600">Staff</span></h2>
          <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/30 mt-2">v.2.4 Control Panel</p>
        </div>

        <nav className="space-y-2 flex-grow">
          {(['ventas', 'inventario'] as const).map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center justify-between px-6 py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all border-l-2 ${
                activeTab === tab 
                  ? 'border-amber-600 bg-white/5 text-white' 
                  : 'border-transparent text-white/40 hover:text-white'
              }`}
            >
              <span>{tab}</span>
              <span className="text-xs opacity-40">{tab === 'ventas' ? '📈' : '📦'}</span>
            </button>
          ))}
        </nav>

        <div className="pt-10 border-t border-white/5 space-y-8">
          <div className="flex items-center gap-4 px-2">
            <div className="w-10 h-10 bg-amber-600 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs">A</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">Admin Principal</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[8px] text-white/30 uppercase tracking-widest">En Línea</p>
              </div>
            </div>
          </div>
          <button onClick={onExit} className="w-full text-[9px] font-bold uppercase tracking-[0.4em] text-red-400 hover:text-red-300 transition-colors text-left px-2">Desconexión</button>
        </div>
      </aside>

      {/* Main Terminal Area */}
      <main className="flex-1 p-20 overflow-y-auto">
        <header className="flex justify-between items-end mb-24">
          <div className="reveal">
            <h1 className="text-6xl font-serif text-slate-900 tracking-tighter capitalize">{activeTab}</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-4">Pulperías Chile • Sistema Operativo Central</p>
          </div>
          <div className="reveal [animation-delay:0.2s]">
            <div className="bg-[#FDFCF8] border border-slate-100 px-10 py-6 text-right">
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.6em] mb-2">Ingresos del Día</p>
              <p className="text-4xl font-serif text-slate-900">$585.200</p>
            </div>
          </div>
        </header>

        {activeTab === 'ventas' ? (
          <div className="bg-white border border-slate-100 reveal [animation-delay:0.4s]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-10 py-8 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">Referencia</th>
                  <th className="px-10 py-8 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">Cliente</th>
                  <th className="px-10 py-8 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">Total</th>
                  <th className="px-10 py-8 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">Estado de Orden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {orders.map(o => (
                  <tr key={o.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-8 font-mono text-[10px] text-slate-400 group-hover:text-slate-900">{o.id}</td>
                    <td className="px-10 py-8">
                      <p className="text-sm font-bold text-slate-900 tracking-tight">{o.customer}</p>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">{o.date}</p>
                    </td>
                    <td className="px-10 py-8 text-sm font-light text-slate-900">${o.total.toLocaleString('es-CL')}</td>
                    <td className="px-10 py-8">
                      <select 
                        value={o.status} 
                        onChange={(e) => updateStatus(o.id, e.target.value as Order['status'])}
                        className={`text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-none border outline-none transition-all ${
                          o.status === 'Pendiente' ? 'border-orange-200 text-orange-500' :
                          o.status === 'Preparando' ? 'border-blue-200 text-blue-500' :
                          o.status === 'Enviado' ? 'border-purple-200 text-purple-500' :
                          'border-green-200 text-green-500'
                        }`}
                      >
                        <option>Pendiente</option>
                        <option>Preparando</option>
                        <option>Enviado</option>
                        <option>Entregado</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 reveal [animation-delay:0.4s]">
            {inventory.map(p => (
              <div key={p.id} className="bg-white border border-slate-100 p-8 group hover:border-slate-900 transition-all">
                <div className="flex gap-6 items-center mb-8">
                  <div className="w-16 h-16 bg-slate-50 rounded-sm overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={p.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 leading-tight">{p.name}</h4>
                    <p className="text-[8px] text-slate-400 uppercase tracking-[0.3em] mt-1">{p.category}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-slate-400">
                    <span>Nivel de Stock</span>
                    <span className={p.stock < 15 ? 'text-red-500 animate-pulse' : ''}>{p.stock} UDS</span>
                  </div>
                  <div className="h-[2px] bg-slate-100 w-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-[1.5s] ${p.stock < 15 ? 'bg-red-500' : 'bg-slate-900'}`} 
                      style={{ width: `${Math.min(100, (p.stock / 50) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default IntranetDashboard;
