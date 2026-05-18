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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Levantamento de CNPJ Sem Custo</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenquadramento MEI <br />
              <span className="text-accent-gold-light">Para ME com Segurança</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Estourou o limite do MEI ou decidiu crescer? Seja por faturamento ou planejamento estratégico, nossa mudança de MEI para ME rápida garante um desenquadramento seguro e sem multas. Solicite sua análise fiscal gratuita agora.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Solicitar Diagnóstico Grátis
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Sua Transição para ME sem Burocracia</h2>
              <div className="space-y-6">
                {[
                  { title: "Análise Fiscal Total Gratuita", desc: "Diagnosticamos o momento ideal para o seu desenquadramento MEI sem custo inicial." },
                  { title: "Desenquadramento Ágil", desc: "Comunicação oficial do seu desenquadramento MEI para ME junto à Receita com rapidez." },
                  { title: "Mudança de MEI para ME Rápida", desc: "Cuidamos de toda a documentação e registro na Junta Comercial sem burocracia." },
                  { title: "Contabilidade de Crescimento", desc: "Orientação para sua nova empresa faturar mais pagando o mínimo de impostos." }
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
                <p className="text-xs text-white/50">Evite multas retroativas com um desenquadramento do MEI para ME feito no prazo legal.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Users className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Crescimento</h4>
                <p className="text-xs text-white/50">Fature acima do teto do MEI e contrate funcionários para expandir seu negócio.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <FileText className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Liberdade</h4>
                <p className="text-xs text-white/50">Liberdade total para novas atividades (CNAEs) e permissão para vender sem limites.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <TrendingUp className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Especialista</h4>
                <p className="text-xs text-white/50">Conte com um contador especialista para planejar sua transição e garantir economia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Foque no seu lucro, nós cuidamos de tudo</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Sua empresa não pode parar de crescer por causa da burocracia. Transformamos seu MEI em ME com agilidade para você focar no que realmente importa: seu lucro.
          </p>
          <GoldButton className="px-12 py-6">
            <MessageCircle className="w-5 h-5" />
            Falar com Contador Especialista
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
