import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Users, MapPin, Briefcase, FileSignature } from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

export default function AlteracoesSocietarias() {
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
            <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Alterações Societárias</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sua Empresa <br />
              <span className="text-accent-gold-light">Sempre Atualizada</span>
            </h1>
            <p className="text-xl text-text-dim mb-10 leading-relaxed">
              Gestão completa de alterações societárias e contrato social, garantindo conformidade, segurança e eficiência em cada mudança da sua empresa.
            </p>
            <GoldButton>
              <MessageCircle className="w-5 h-5" />
              Solicitar Alteração
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Evolução sem complicações</h2>
              <div className="space-y-6">
                {[
                  { title: "Entrada e Saída de Sócios", desc: "Documentação completa para alteração do quadro societário." },
                  { title: "Mudança de Endereço", desc: "Atualização em todos os órgãos (Junta, Receita, Prefeitura) com rapidez." },
                  { title: "Adição de Atividades", desc: "Inclusão de novos ramos de atuação para sua empresa expandir." },
                  { title: "Aumento de Capital", desc: "Ajuste do capital social para maior robustez financeira perante terceiros." }
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
                <Users className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Sociedade</h4>
                <p className="text-xs text-white/50">Gestão de acordos e alterações de participação.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <MapPin className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Endereço</h4>
                <p className="text-xs text-white/50">Transferência entre cidades ou estados sem dor de cabeça.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <Briefcase className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">CNAE</h4>
                <p className="text-xs text-white/50">Revisão estratégica de atividades para fins tributários.</p>
              </div>
              <div className="bg-primary-deep p-8 rounded-sm border border-white/5 space-y-4">
                <FileSignature className="text-accent-gold-light w-10 h-10" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Assessoria</h4>
                <p className="text-xs text-white/50">Consultoria preventiva para cada mudança no contrato social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sua empresa precisa mudar para continuar crescendo?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Acompanhamos a evolução do seu negócio em todas as fases, cuidando da burocracia para você focar no que importa.
          </p>
          <GoldButton className="px-12 py-6">
            Falar com Especialista Societário
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
