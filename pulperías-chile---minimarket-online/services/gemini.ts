
import { GoogleGenAI } from "@google/genai";

export const getChileanAssistantResponse = async (userMessage: string, chatHistory: any[]) => {
  // Verificamos la API KEY
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Estimado cliente, mi central de inteligencia no ha sido conectada aún. Por favor, asegúrese de configurar la clave API en los ajustes de Vercel.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...chatHistory,
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Eres "El Concierge" de Pulperías Chile (pulperiaschile.cl). 
        Tu misión es brindar una experiencia de compra boutique y sofisticada.
        
        Tono: Profesional, culto, orgulloso de lo nacional, cálido pero siempre respetuoso.
        
        Directrices:
        1. Eres experto en productos premium chilenos (Paltas de La Cruz, Sal de Cáhuil, Merkén de origen, etc.).
        2. Usa un español chileno elegante (ej: "un gusto atenderle", "es de una calidad superior", "por supuesto").
        3. Si preguntan por envíos, Pulperías Chile despacha a todo Chile con embalaje de lujo.
        4. Recomienda maridajes: si compran vino, sugiere quesos o frutos secos de nuestra selección.
        5. No uses lenguaje callejero. Mantén el nivel de una tienda gourmet de clase mundial.`,
        temperature: 0.7,
        tools: [{ googleSearch: {} }]
      },
    });

    return response.text || "Mil disculpas, tuve un pequeño inconveniente en la comunicación. ¿Podría repetirme su consulta?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estimado, estamos atendiendo a muchos clientes en este momento. ¿Le importaría intentar nuevamente en unos segundos?";
  }
};
