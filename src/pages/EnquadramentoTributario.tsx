import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, FileCheck2, BarChart4, ClipboardCheck, History } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function EnquadramentoTributario() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Enquadramento Tributário</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O Regime Certo <br />
              <span className="text-accent-gold-light">Para Seu Crescimento</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Análise técnica para garantir que sua empresa esteja enquadrada no regime mais vantajoso, evitando pagamentos desnecessários e garantindo a conformidade.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Analisar Meu Enquadramento
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Decisões baseadas em dados</h2>
              <div className="space-y-6">
                {[
                  { title: "Monitoramento Constante", desc: "Analisamos mensalmente se o seu regime ainda faz sentido para o seu faturamento." },
                  { title: "Transição Segura", desc: "Realizamos a mudança de regime (ex: MEI para ME) sem interrupções operacionais." },
                  { title: "Fator R", desc: "Aplicação inteligente do Fator R para redução drástica de impostos no Simples Nacional." },
                  { title: "Previsibilidade", desc: "Relatórios claros de quanto você pagará em cada cenário de faturamento." }
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
                <FileCheck2 className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Simples Nacional</h4>
                <p className="text-xs text-white/50">Gestão completa da guia única e enquadramento de atividades.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <BarChart4 className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Lucro Presumido</h4>
                <p className="text-xs text-white/50">Estratégia para empresas com alta margem de lucro e faturamento.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <ClipboardCheck className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">CNAE</h4>
                <p className="text-xs text-white/50">Revisão e ajuste dos códigos de atividade para a menor alíquota.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <History className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Retroativo</h4>
                <p className="text-xs text-white/50">Análise de impostos pagos e possibilidade de recuperação fiscal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sua empresa mudou e seu imposto continuou o mesmo?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Muitas empresas perdem dinheiro por estarem enquadradas de forma errada após crescerem. Deixe-nos fazer essa revisão para você.
          </p>
          <GoldButton className="px-12 py-6">
            Falar com Consultor Tributário
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
