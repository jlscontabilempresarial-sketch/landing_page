import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Calculator, TrendingDown, Layers, Lightbulb } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function PlanejamentoTributario() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Planejamento Tributário</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pague <span className="text-accent-gold-light">Menos Impostos</span> <br />
              Legalmente
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Analisamos sua estrutura organizacional para identificar a forma mais inteligente de reduzir sua carga tributária com total segurança jurídica.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Reduzir Meus Impostos
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Estratégia que gera lucro real</h2>
              <div className="space-y-6">
                {[
                  { title: "Elisão Fiscal", desc: "Uso de métodos legais para diminuir o pagamento de tributos." },
                  { title: "Análise de Cenários", desc: "Simulamos diferentes regimes tributários para encontrar o ideal." },
                  { title: "Redução de Custos", desc: "Identificamos gargalos financeiros causados por impostos mal geridos." },
                  { title: "Segurança Jurídica", desc: "Todo planejamento é fundamentado na legislação atual tributária." }
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
                <Calculator className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Simulação</h4>
                <p className="text-xs text-white/50">Cálculos precisos comparando Simples, Presumido e Real.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <TrendingDown className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Redução</h4>
                <p className="text-xs text-white/50">Foco direto na diminuição da carga tributária.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Layers className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Estrutura</h4>
                <p className="text-xs text-white/50">Reorganização societária para otimização fiscal.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Lightbulb className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Inovação</h4>
                <p className="text-xs text-white/50">Busca constante por incentivos e benefícios fiscais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sua empresa está deixando dinheiro na mesa?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            A maioria dos empresários paga mais imposto do que deveria por falta de planejamento. Não seja um deles.
          </p>
          <GoldButton className="px-12 py-6">
            Solicitar Estudo Tributário
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
