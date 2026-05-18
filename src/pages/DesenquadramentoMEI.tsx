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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Análise Fiscal Gratuita</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Estourou o Limite do MEI? <br />
              <span className="text-accent-gold-light">Mude para ME sem Riscos</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              O processo de desenquadramento microempreendedor individual para ME exige atenção técnica. Realizamos o desenquadramento mei para me de forma estratégica, garantindo que você evite multas por atraso e irregularidades. Solicite seu levantamento de CNPJ sem custo e tire suas dúvidas sobre o desenquadramento do mei para me.
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
              <h2 className="text-3xl font-bold mb-8">Passo a passo para sua migração</h2>
              <div className="space-y-6">
                {[
                  { title: "Análise de Viabilidade", desc: "Avaliamos gratuitamente seu faturamento e atividades para garantir o desenquadramento do MEI no tempo correto e com total segurança fiscal." },
                  { title: "Protocolo de Desenquadramento", desc: "Realizamos o comunicado oficial junto à Receita Federal e órgãos estaduais/municipais de forma ágil." },
                  { title: "Alteração Contratual", desc: "Atualizamos o registro da sua empresa na Junta Comercial para a nova natureza jurídica sem burocracia." },
                  { title: "Consultoria Educativa", desc: "Ensinamos você a lidar com as novas obrigações da Microempresa para que sua transição seja focada no lucro." }
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
                <p className="text-xs text-white/50">Evite multas retroativas e problemas com a Receita Federal fazendo o desenquadramento no prazo.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Mude de Microempreendedor Individual para ME com Segurança</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            O desenquadramento estratégico do MEI para ME é o combustível para o crescimento do seu negócio. Realizamos toda a migração sem burocracia para você focar apenas em faturar mais.
          </p>
          <GoldButton className="px-12 py-6">
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp Agora
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
