import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ShieldCheck, Search, Scale, FileWarning } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function RegularizacaoFiscal() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Regularização Fiscal</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Regularize sua empresa <br />
              <span className="text-accent-gold-light">Evite Multas</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Resolvemos pendências, multas e juros, garantindo que seu negócio esteja 100% em dia com a Receita Federal, Estado e Prefeitura.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Regularizar Agora
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Tranquilidade para o seu negócio</h2>
              <div className="space-y-6">
                {[
                  { title: "Diagnóstico Completo", desc: "Varredura em todos os órgãos para identificar qualquer tipo de pendência." },
                  { title: "Parcelamentos Inteligentes", desc: "Análise das melhores formas de quitar dívidas com redução de multas." },
                  { title: "Certidões Negativas", desc: "Processo focado em manter suas CNDs sempre ativas e válidas." },
                  { title: "Defesas Administrativas", desc: "Suporte especializado para contestar cobranças indevidas do fisco." }
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
                <Search className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Auditoria</h4>
                <p className="text-xs text-white/50">Análise profunda do histórico fiscal da sua empresa.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <ShieldCheck className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Conformidade</h4>
                <p className="text-xs text-white/50">Ajuste total às normas vigentes para evitar problemas futuros.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Scale className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Jurídico</h4>
                <p className="text-xs text-white/50">Base sólida para regularização de situações complexas.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <FileWarning className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Alertas</h4>
                <p className="text-xs text-white/50">Monitoramento constante para agir antes que vire uma multa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Saia da informalidade e sinta a paz de um negócio regular</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Muitas vezes o prejuízo de estar irregular é maior do que o custo de se regularizar. Deixe nossos especialistas cuidarem disso para você.
          </p>
          <GoldButton className="px-12 py-6">
            Fazer Diagnóstico Fiscal
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
