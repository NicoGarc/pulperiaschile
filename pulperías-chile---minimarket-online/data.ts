
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todo', icon: '🛒' },
  { id: 'feria', name: 'Feria Fresca', icon: '🥬' },
  { id: 'frutos-secos', name: 'Tostaduría', icon: '🥜' },
  { id: 'frutos-pais', name: 'Frutos del País', icon: '🍒' },
  { id: 'tradicional', name: 'Rincón Huaso', icon: '🇨🇱' },
  { id: 'despensa', name: 'Despensa', icon: '🌾' },
  { id: 'bebidas', name: 'Cava', icon: '🍷' }
];

export const PRODUCTS: Product[] = [
  // --- FERIA FRESCA (12 items) ---
  { id: 'f1', name: 'Palta Hass Selección (Kg)', description: 'Directo de La Cruz. Calidad extra.', price: 8900, category: 'feria', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 50 },
  { id: 'f2', name: 'Tomate Limachino (Kg)', description: 'Aroma y sabor intenso de campo.', price: 3200, category: 'feria', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 30 },
  { id: 'f3', name: 'Limón de Pica', description: 'Cítrico intenso del norte.', price: 4500, category: 'feria', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 40 },
  { id: 'f4', name: 'Cebolla Morada Premium', description: 'Bulbos firmes y dulces.', price: 1800, category: 'feria', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 100 },
  { id: 'f5', name: 'Zapallo Camote (Trozo)', description: 'Color naranja vibrante, ideal para cremas.', price: 2500, category: 'feria', image: 'https://images.unsplash.com/photo-1506477331477-33d6d8b3dc66?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 25 },
  { id: 'f6', name: 'Pimentón Tricolor', description: 'Pack de 3 unidades frescas.', price: 3990, category: 'feria', image: 'https://images.unsplash.com/photo-1563565312879-8a7b0277a2ed?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 60 },
  { id: 'f7', name: 'Manzana Fuji Extra', description: 'Dulce y crocante de exportación.', price: 2200, category: 'feria', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 80 },
  { id: 'f8', name: 'Plátano Nanica', description: 'Madurez equilibrada.', price: 1900, category: 'feria', image: 'https://images.unsplash.com/photo-1571771894821-ad9b5886479c?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 120 },
  { id: 'f9', name: 'Zanahoria Selección', description: 'Limpia y de calibre uniforme.', price: 1400, category: 'feria', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 150 },
  { id: 'f10', name: 'Ajo Chilote', description: 'Dientes gigantes, sabor suave.', price: 3500, category: 'feria', image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 20 },
  { id: 'f11', name: 'Lechuga Hidropónica', description: 'Recién cosechada, raíz viva.', price: 1600, category: 'feria', image: 'https://images.unsplash.com/photo-1622206141540-5845e44ca0fa?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 45 },
  { id: 'f12', name: 'Naranja de Panquehue', description: 'Alto contenido de jugo y dulzor.', price: 2100, category: 'feria', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 90 },

  // --- TOSTADURÍA (8 items) ---
  { id: 's1', name: 'Nueces Mariposa 500g', description: 'Valle del Maipo.', price: 7500, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1525203135335-74d292fb8d5c?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 25 },
  { id: 's2', name: 'Almendras Tostadas 500g', description: 'Tostado sin sal artesanal.', price: 8200, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d96?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 20 },
  { id: 's3', name: 'Mix Salado Premium', description: 'Maní, almendras y semillas.', price: 4500, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 35 },
  { id: 's4', name: 'Pistachos con Cáscara', description: 'Calidad de exportación.', price: 9500, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 15 },
  { id: 's5', name: 'Castañas de Cajú', description: 'Tostado suave.', price: 8900, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1536591040356-74944fdad2c5?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 18 },
  { id: 's6', name: 'Higos Secos Chilenos', description: 'Dulzura natural sin aditivos.', price: 5600, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1563821056345-d49934273f03?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 22 },
  { id: 's7', name: 'Ciruelas Secas sin Carozo', description: 'Fibra natural del Maule.', price: 4200, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 30 },
  { id: 's8', name: 'Maní con Miel 250g', description: 'Crujiente y dulce.', price: 2900, category: 'frutos-secos', image: 'https://images.unsplash.com/photo-1534149043227-14639f2215ad?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 50 },

  // --- FRUTOS DEL PAÍS (6 items) ---
  { id: 'fp1', name: 'Maqui Orgánico Polvo', description: 'Antioxidante de la Patagonia.', price: 12900, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1563749309-32269a302830?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 15 },
  { id: 'fp2', name: 'Murta al Almíbar', description: 'Selección del bosque nativo.', price: 6800, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1449339854873-750e6913301b?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 12 },
  { id: 'fp3', name: 'Mermelada de Calafate', description: 'Fruto sagrado de la Patagonia.', price: 7200, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 10 },
  { id: 'fp4', name: 'Nativo de Rosa Mosqueta', description: 'Aceite prensado en frío.', price: 9900, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1602928295245-c47d7f776823?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 8 },
  { id: 'fp5', name: 'Chañar en Jarabe', description: 'Dulzura ancestral del norte.', price: 5900, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1589733901241-5e39127aee54?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 14 },
  { id: 'fp6', name: 'Boldo Selección 50g', description: 'Hojas seleccionadas a mano.', price: 2500, category: 'frutos-pais', image: 'https://images.unsplash.com/photo-1515555233972-7cd73fe8af0a?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 40 },

  // --- TRADICIONAL & DESPENSA (10 items) ---
  { id: 't1', name: 'Mote con Huesillo', description: 'Pack para preparar en casa.', price: 7990, category: 'tradicional', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 15 },
  { id: 't2', name: 'Mermelada Alcayota/Nuez', description: 'Cocción lenta tradicional.', price: 4800, category: 'tradicional', image: 'https://images.unsplash.com/photo-1589135398302-388cd65e1f63?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 12 },
  { id: 't3', name: 'Manjar Blanco Casero', description: 'Receta de campo.', price: 5400, category: 'tradicional', image: 'https://images.unsplash.com/photo-1600177307091-6e19d9d0c730?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 20 },
  { id: 'd1', name: 'Aceite Oliva Huasco', description: 'Virgen Extra Premium.', price: 11500, category: 'despensa', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 30 },
  { id: 'd2', name: 'Harina de Piñón 500g', description: 'Base ancestral Pehuenche.', price: 8900, category: 'despensa', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 12 },
  { id: 'd3', name: 'Sal de Cáhuil Fina', description: 'Recolección artesanal.', price: 2900, category: 'despensa', image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 50 },
  { id: 'd4', name: 'Merkén Ahumado 100g', description: 'Tradición Mapuche.', price: 4200, category: 'despensa', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 40 },
  { id: 'b1', name: 'Pisco Reservado 40°', description: 'Valle del Elqui.', price: 15900, category: 'bebidas', image: 'https://images.unsplash.com/photo-1516539864426-f6174cca609d?auto=format&fit=crop&w=400&q=80', isTraditional: true, stock: 12 },
  { id: 'b2', name: 'Vino Carmenere Gran Reserva', description: 'Valle de Colchagua.', price: 12500, category: 'bebidas', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 24 },
  { id: 'b3', name: 'Cerveza Artesanal Porter', description: 'Microcervecería de Valdivia.', price: 3500, category: 'bebidas', image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=400&q=80', isTraditional: false, stock: 48 }
];
