import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowRightLeft, ShieldAlert, Sparkles, Zap } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function TrocarContador() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Migração Facilitada</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Troque de contador <br />
              <span className="text-accent-gold-light">Sem dor de cabeça</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Assuma o controle da sua empresa com uma contabilidade que realmente entende o seu negócio. Nós cuidamos de toda a transição para você.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Quero Trocar de Contador
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Por que migrar para a JLS?</h2>
              <div className="space-y-6">
                {[
                  { title: "Transição 100% por nossa conta", desc: "Nós entramos em contato com seu antigo contador e solicitamos toda a documentação." },
                  { title: "Diagnóstico de Entrada", desc: "Revisamos o último ano da sua empresa para garantir que não existam erros ocultos." },
                  { title: "Atendimento Humanizado", desc: "Chega de tickets sem resposta. Aqui você tem acesso direto aos especialistas." },
                  { title: "Tecnologia e Transparência", desc: "Tecnologia aplicada para dar visibilidade total do seu negócio, com processos transparentes e informações acessíveis sempre que você precisar." }
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
                <ArrowRightLeft className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Migração Rápida</h4>
                <p className="text-xs text-white/50">Processo concluído em poucos dias úteis.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <ShieldAlert className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Risco Zero</h4>
                <p className="text-xs text-white/50">Garantimos a continuidade das suas obrigações fiscais.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Sparkles className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Modernidade</h4>
                <p className="text-xs text-white/50">Sua contabilidade na palma da mão.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Zap className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Agilidade</h4>
                <p className="text-xs text-white/50">Respostas rápidas para suas dúvidas do dia a dia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sua empresa merece um parceiro à altura</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Não se contente com o básico. Junte-se a centenas de empresários que escolheram a JLS para impulsionar seu crescimento com segurança.
          </p>
          <GoldButton className="px-12 py-6">
            Solicitar Migração Agora
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
