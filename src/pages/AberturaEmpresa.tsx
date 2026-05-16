import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Building2, Terminal, FileText, Smartphone } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function AberturaEmpresa() {
  return (
    <div className="pt-24 min-h-screen bg-primary-deep text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-gold-dark/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Abertura de Empresa</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Legalize seu negócio <br />
              <span className="text-accent-gold-light">Sem Burocracia</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Tiramos sua ideia do papel e legalizamos seu negócio com a estrutura tributária mais vantajosa desde o primeiro dia.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Abrir meu CNPJ Agora
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Por que abrir sua empresa com a JLS?</h2>
              <div className="space-y-6">
                {[
                  { title: "Rapidez e Agilidade", desc: "Processo otimizado para que seu CNPJ saia no menor tempo possível." },
                  { title: "Escolha do Regime Certo", desc: "Analisamos se você deve ser Simples Nacional, Lucro Presumido ou Real." },
                  { title: "Economia de Impostos", desc: "Planejamento tributário inicial para garantir o menor pagamento legal." },
                  { title: "Suporte Completo", desc: "Do registro na junta comercial ao alvará de funcionamento." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-accent-gold-light w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary-deep p-6 sm:p-8 rounded-sm border border-white/5 space-y-4">
                <Building2 className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Sede Virtual</h4>
                <p className="text-xs text-white/50">Oferecemos orientação quanto ao uso de endereço fiscal virtual.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <FileText className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Documentação</h4>
                <p className="text-xs text-white/50">Cuidamos de todo o contrato social e registros necessários.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Terminal className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Tecnologia</h4>
                <p className="text-xs text-white/50">Processos 100% digitais, sem necessidade de deslocamento.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Smartphone className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">WhatsApp</h4>
                <p className="text-xs text-white/50">Atendimento direto e prático com nossos especialistas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">O primeiro passo para o seu sucesso começa aqui</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Fale com um consultor agora e receba um diagnóstico gratuito de qual o melhor caminho para abrir sua empresa hoje.
          </p>
          <GoldButton className="px-12 py-6">
            Quero uma Consultoria Gratuita
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
