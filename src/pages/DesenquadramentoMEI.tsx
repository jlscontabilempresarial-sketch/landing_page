import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, ArrowRightLeft, TrendingUp, Users, ShieldCheck, FileText } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function DesenquadramentoMEI() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Migração Estratégica</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empresa Cresceu ou <br />
              <span className="text-accent-gold-light">Foi Desenquadrada?</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Realizamos todo o processo de desenquadramento do MEI e migração para Microempresa (ME). Seja por faturamento ou por exigência legal, tenha suporte especializado para regularizar seu negócio.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Regularizar meu MEI agora
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Passo a passo para sua migração</h2>
              <div className="space-y-6">
                {[
                  { title: "Análise de Viabilidade", desc: "Avaliamos seu faturamento e atividades para definir o melhor momento da migração." },
                  { title: "Protocolo de Desenquadramento", desc: "Realizamos o comunicado oficial junto à Receita Federal e órgãos estaduais/municipais." },
                  { title: "Alteração Contratual", desc: "Atualizamos o registro da sua empresa na Junta Comercial para a nova natureza jurídica." },
                  { title: "Consultoria Educativa", desc: "Ensinamos você a lidar com as novas obrigações da Microempresa para evitar erros e multas." }
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
                <ShieldCheck className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Risco Zero</h4>
                <p className="text-xs text-white/50">Evite multas retroativas por atraso no desenquadramento.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Users className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Expansão</h4>
                <p className="text-xs text-white/50">Possibilidade de contratar mais de um colaborador imediatamente.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <FileText className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Liberdade</h4>
                <p className="text-xs text-white/50">Permissão para exercer qualquer atividade empresarial legal.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <TrendingUp className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Crescimento</h4>
                <p className="text-xs text-white/50">Fature acima dos limites do MEI com segurança jurídica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sua empresa cresceu, sua contabilidade precisa acompanhar</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Não deixe que a burocracia ou o medo do desenquadramento freiem o seu sucesso. Conte com a JLS para uma migração estratégica e sem sobressaltos.
          </p>
          <GoldButton className="px-12 py-6">
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista em MEI
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
