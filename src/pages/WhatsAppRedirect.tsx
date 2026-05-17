import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../lib/whatsapp";

export default function WhatsAppRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Captura o parâmetro 'from' da URL para saber qual mensagem enviar
  const queryParams = new URLSearchParams(location.search);
  const fromPath = queryParams.get("from") || "/";
  
  useEffect(() => {
    // Pegamos o link real do WhatsApp baseado na origem
    // Passamos 'true' para o getWhatsAppLink retornar o link REAL (externo)
    const realLink = getWhatsAppLink(fromPath, true);
    
    // Pequeno delay para garantir que o GTM dispare as tags de evento
    const timer = setTimeout(() => {
      // Tenta abrir em nova aba
      window.open(realLink, "_blank");
      // Redireciona a aba principal de volta para a origem
      window.location.href = fromPath;
    }, 2000);

    return () => clearTimeout(timer);
  }, [fromPath]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-deep text-white p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-20 h-20 bg-accent-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <MessageCircle className="text-accent-gold-light w-10 h-10 animate-pulse" />
          <div className="absolute inset-0 border-2 border-accent-gold-light rounded-full animate-ping opacity-20" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-accent-gold-light">
          Abrindo WhatsApp em nova aba...
        </h1>
        
        <p className="text-white/60 max-w-md mx-auto leading-relaxed mb-8">
          Estamos preparando sua conexão. Caso o WhatsApp não abra automaticamente em uma nova aba, clique no botão abaixo.
        </p>

        <a 
          href={getWhatsAppLink(fromPath, true)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-gold-light hover:bg-accent-gold-dark text-primary-deep px-8 py-4 rounded-sm font-bold transition-all transform hover:scale-105 mb-12"
        >
          <MessageCircle className="w-5 h-5" />
          ABRIR WHATSAPP AGORA
        </a>
        
        <div className="flex justify-center gap-1 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent-gold-light rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1, 
                delay: i * 0.2 
              }}
            />
          ))}
        </div>

        <button 
          onClick={() => window.location.href = fromPath}
          className="text-white/40 hover:text-accent-gold-light text-xs transition-colors uppercase tracking-widest underline underline-offset-8"
        >
          Sair desta página e voltar ao site
        </button>
      </motion.div>
    </div>
  );
}
