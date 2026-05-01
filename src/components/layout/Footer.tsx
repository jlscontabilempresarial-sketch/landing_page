import React from "react";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5527997979219?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estive%20no%20site%20de%20voc%C3%AAs%20e%20achei%20a%20proposta%20interessante.%20Gostaria%20de%20entender%20melhor%20como%20funcionam%20os%20servi%C3%A7os%20e%20como%20voc%C3%AAs%20podem%20me%20ajudar";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-8 pb-4 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="col-span-full lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 md:mb-6">
              <img 
                src="/logo.png" 
                alt="JLS Logo" 
                className="h-7 sm:h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tighter text-white">
                JLS <span className="text-accent-gold-light font-normal italic">CONTABILIDADE</span>
              </span>
            </a>
            <p className="text-white/50 max-w-md leading-relaxed">
              Consultoria contábil de alto padrão, focada em performance empresarial. Contabilidade estratégica para crescimento seguro.
            </p>
          </div>
          
          <div>
            <h4 className="text-accent-gold-light uppercase tracking-widest text-xs font-bold mb-6">Acompanhe no Instagram</h4>
            <a 
              href="https://www.instagram.com/jls_contabil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold-dark hover:text-primary-deep transition-all">
                <Instagram size={20} />
              </div>
              <span>@jls_contabil</span>
            </a>
          </div>

          <div>
            <h4 className="text-accent-gold-light uppercase tracking-widest text-xs font-bold mb-6">Fale Conosco</h4>
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
                <MessageCircle size={20} />
              </div>
              <span>WhatsApp Empresarial</span>
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 text-center md:text-left">
          <p className="text-white/30 text-[11px] md:text-sm order-3 md:order-1 tracking-wide">
            © 2026 JLS Contabilidade. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-8 md:gap-10 order-2 w-full sm:w-auto">
            <div className="flex flex-col text-[12px] text-white">
              <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">E-mail</span>
              <a href="mailto:jlscontabilempresarial@gmail.com" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all break-all sm:break-normal">jlscontabilempresarial@gmail.com</a>
            </div>
            <div className="flex flex-col text-[12px] text-white">
              <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">Instagram</span>
              <a href="https://www.instagram.com/jls_contabil" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all">@jls_contabil</a>
            </div>
            <div className="flex flex-col text-[12px] text-white">
              <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">WhatsApp</span>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all">(27) 99797-9219</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-geometric-accent z-0 pointer-events-none opacity-50" />
    </footer>
  );
}
