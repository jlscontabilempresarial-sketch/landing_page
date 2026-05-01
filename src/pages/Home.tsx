import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Calculator, 
  Scale, 
  FileCheck2, 
  UserPlus2, 
  Users, 
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Quote
} from "lucide-react";
import { GoldButton } from "../components/ui/GoldButton";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Souza",
    role: "Psicólogo",
    content: "Empresa com atendimento personalizado, competente e trabalho honesto, atende micro empresário da mesma forma que o grande empresário, indico de olhos fechados.",
    videoId: "e6-Guqyxi9Y"
  },
  {
    id: 2,
    name: "Raquel Toledo",
    role: "Cirurgiã-Dentista",
    content: "Muito obrigada pelo excelente trabalho. Seu profissionalismo e a agilidade no atendimento fizeram a diferença. Os próximos trabalhos farei com você. Muito obrigada!",
    videoId: "mD7a1lDiyC4"
  },
  {
    id: 3,
    name: "Lucas Andre",
    role: "Analista de Sistemas",
    content: "Boa tarde! Obrigado pelos serviços prestados durante esses anos. E vamos para mais um ano de parceria, obrigada pela dedicação de sempre.",
    videoId: "u9O9aV7p0P0"
  }
];

const YOUTUBE_VIDEO_ID = "e6-Guqyxi9Y";

const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-10 relative">
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-accent-gold-light text-[14px] uppercase tracking-[3px] font-semibold block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5 text-balance"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1 }}
      className="h-[3px] bg-accent-gold-light rounded-full"
    />
  </div>
);

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link to={href}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-white/[0.02] border-l-[3px] border-accent-gold-dark p-6 md:p-8 rounded-[4px] group transition-all h-full hover:bg-white/[0.05]"
      >
        <div className="text-accent-gold-light mb-4 md:mb-6">
          {React.cloneElement(icon as React.ReactElement, { size: 28 })}
        </div>
        <div className="flex items-center justify-between gap-2 mb-2 md:mb-3">
          <h3 className="text-base md:text-lg font-bold tracking-tight">{title}</h3>
          <ChevronRight size={16} className="text-accent-gold-dark opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
        </div>
        <p className="text-text-secondary text-xs md:text-[13px] leading-relaxed line-clamp-4">{description}</p>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAboutTab, setActiveAboutTab] = useState(0);

  const aboutTabs = [
    {
      title: "QUEM SOMOS",
      content: "A JLS Contabilidade é uma empresa dedicada a transformar o cenário contábil das empresas, com foco em atendimento personalizado e soluções de alto padrão para quem busca excelência e segurança jurídica."
    },
    {
      title: "Nossa Missão",
      content: "Ajudar empresas a crescer com segurança e pagar menos impostos, oferecendo uma contabilidade estratégica com atendimento próximo, comunicação clara e soluções acessíveis e justas."
    },
    {
      title: "Diferencial",
      content: "Especializados no atendimento a prestadores de serviço, profissionais liberais (PJ) e comércios pertencentes ao Simples Nacional e Lucro Presumido, entregamos soluções personalizadas que vão além do básico. Focamos na eficiência tributária real, garantindo que você pague o mínimo de imposto de forma legal e segura, oferecendo atendimento próximo, comunicação clara e resposta ágil."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-accent-gold-dark/10 to-transparent opacity-50 skew-x-12 transform translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-gold-light/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto md:ml-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="text-accent-gold-light text-xs sm:text-sm font-semibold uppercase tracking-[3px] mb-4">Especialistas em Gestão Tributária</div>
              <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
                Abra sua empresa e pague <span className="text-accent-gold-light">menos impostos.</span>
              </h1>
              <p className="text-sm md:text-xl text-text-dim max-w-2xl mb-8 leading-relaxed text-pretty">
                Gestão contábil com foco em planejamento tributário para empresas que buscam segurança jurídica e estratégia com um contador especializado.
              </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                <GoldButton className="text-lg px-8 sm:px-10 w-full sm:w-auto shadow-2xl">
                  Falar no WhatsApp
                </GoldButton>
                <div className="text-[13px] text-accent-gold-dark font-medium">Resposta em menos de 5 min</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="min-h-screen flex items-center py-12 lg:py-20 bg-white/[0.02] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-2xl mx-auto lg:ml-0 order-2 lg:order-1"
            >
              <div className="aspect-[4/3] bg-white/5 rounded-sm overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/accounting-office/800/1000" 
                  alt="Escritório JLS" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent-gold-dark p-4 md:p-6 rounded-sm shadow-2xl hidden sm:block">
                <p className="text-primary-deep font-serif text-2xl md:text-3xl font-bold mb-0.5">8+</p>
                <p className="text-primary-deep uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Anos de Experiência</p>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <SectionTitle subtitle="Excelência e Confiança" title="Consultoria Contábil Estratégica" />
              
              {/* Tab Navigation */}
              <div className="flex gap-4 md:gap-8 border-b border-white/10 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
                {aboutTabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveAboutTab(i)}
                    className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative flex-shrink-0 ${activeAboutTab === i ? 'text-accent-gold-light' : 'text-white/40 hover:text-white/60'}`}
                  >
                    {tab.title}
                    {activeAboutTab === i && (
                      <motion.div layoutId="aboutTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold-light" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAboutTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/70 text-sm md:text-base leading-relaxed mb-8"
                  >
                    <p>{aboutTabs[activeAboutTab].content}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Suporte Especializado",
                  "Planejamento Tributário",
                  "Transparência Total",
                  "Equipe Qualificada"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs md:text-sm font-medium">
                    <CheckCircle2 className="text-accent-gold-light w-4 h-4 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <GoldButton className="py-3 px-6 text-sm">
                Saiba mais no WhatsApp
              </GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Prestados */}
      <section id="servicos" className="min-h-screen flex items-center py-12 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center md:text-left mb-10 lg:mb-8">
            <SectionTitle subtitle="Nossas Soluções" title="Dedicados ao Sucesso" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
            <ServiceCard 
              icon={<UserPlus2 size={32} />}
              title="Abertura de Empresa"
              description="Legalize sua ideia com rapidez e segurança, escolhendo a melhor estrutura jurídica para o seu negócio."
              href="/abertura-empresa"
            />
            <ServiceCard 
              icon={<Scale size={32} />}
              title="Regularização Fiscal"
              description="Coloque sua empresa em dia com o fisco, evitando multas e garantindo a saúde do seu CNPJ."
              href="/regularizacao-fiscal"
            />
            <ServiceCard 
              icon={<Calculator size={32} />}
              title="Planejamento Tributário"
              description="Reduza sua carga tributária legalmente através de um estudo detalhado da sua operação."
              href="/planejamento-tributario"
            />
            <ServiceCard 
              icon={<FileCheck2 size={32} />}
              title="Enquadramento Tributário"
              description="Análise contínua para garantir que sua empresa esteja sempre no regime tributário mais vantajoso, inclusive em momentos de transição, crescimento ou desenquadramento."
              href="/enquadramento-tributario"
            />
            <ServiceCard 
              icon={<Users size={32} />}
              title="Alterações Societárias"
              description="Suporte completo para mudanças de sócios, endereço, atividade econômica e contrato social da sua empresa."
              href="/alteracoes-societarias"
            />
            <div className="bg-gradient-to-br from-accent-gold-dark/20 to-transparent p-6 flex flex-col justify-between border border-accent-gold-dark/30 rounded-sm">
               <div>
                 <h3 className="text-xl font-serif font-bold mb-2">Outra solução?</h3>
                 <p className="text-white/60 text-xs mb-6">Nossa equipe está pronta para entender o seu caso específico e propor o melhor caminho.</p>
               </div>
               <GoldButton fullWidth className="py-2.5 text-sm">
                 Consultar Especialistas
               </GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trocar de Contador Promo */}
      <section id="migracao" className="py-20 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold-dark/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-sm flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-accent-gold-light text-sm font-semibold uppercase tracking-[3px] block mb-4">Migração Segura</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Insatisfeito com a sua <span className="text-accent-gold-light">contabilidade atual?</span>
              </h2>
              <p className="text-text-dim text-lg mb-8 max-w-xl">
                Nós cuidamos de toda a burocracia da migração. Troque para uma contabilidade consultiva, digital e que realmente valoriza o seu crescimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GoldButton to="/trocar-contador" className="px-10">
                  Saber Como Trocar
                </GoldButton>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-[4px] border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-accent-gold-light animate-pulse" />
                   <p className="text-xs font-bold uppercase tracking-widest">Processo 100% Gratuito</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid flex-shrink-0 grid-cols-2 gap-4 w-full lg:w-auto">
              {[
                { label: "Sem Multas", icon: <CheckCircle2 className="text-accent-gold-light" size={20} /> },
                { label: "Zero Burocracia", icon: <CheckCircle2 className="text-accent-gold-light" size={20} /> },
                { label: "Transição Rápida", icon: <CheckCircle2 className="text-accent-gold-light" size={20} /> },
                { label: "Suporte 24/7", icon: <CheckCircle2 className="text-accent-gold-light" size={20} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-primary-deep border border-white/5 rounded-sm">
                  {item.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="min-h-screen flex items-center bg-primary-deep relative overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionTitle subtitle="Feedback" title="A Voz de Nossos Parceiros" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column: Testimonial Text */}
              <div className="w-full order-2 lg:order-1">
                <div className="relative min-h-[420px] sm:min-h-[320px] lg:min-h-[300px] flex flex-col justify-center bg-white/[0.01] border border-white/5 p-6 md:p-10 pb-20 md:pb-10 rounded-sm shadow-inner group">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-gold-dark/5 -scale-x-100 transition-opacity group-hover:opacity-10" />
                  
                  <div className="relative z-10 mb-8 md:mb-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Quote className="w-8 h-8 text-accent-gold-light mb-4 opacity-60" />
                        <h3 className="text-[1.1rem] sm:text-lg lg:text-xl text-white font-serif leading-relaxed mb-6 tracking-tight italic">
                           "{TESTIMONIALS[activeTestimonial].content}"
                        </h3>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-[1px] bg-accent-gold-dark/40" />
                          <div className="max-w-[200px] sm:max-w-none">
                            <p className="text-white font-bold text-sm tracking-wide uppercase font-sans">
                              {TESTIMONIALS[activeTestimonial].name}
                            </p>
                            <p className="text-accent-gold-light text-[9px] font-bold uppercase tracking-[0.2em] mt-0.5">
                              {TESTIMONIALS[activeTestimonial].role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between md:justify-end md:gap-3 z-20">
                    <div className="flex gap-2">
                      {TESTIMONIALS.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setActiveTestimonial(i)}
                          className={`h-1.5 transition-all duration-500 rounded-full ${activeTestimonial === i ? 'w-8 bg-accent-gold-light' : 'w-2 bg-white/10'}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/5 md:bg-primary-deep/50 backdrop-blur-sm hover:bg-accent-gold-dark hover:border-accent-gold-dark hover:text-primary-deep transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button 
                        onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/5 md:bg-primary-deep/50 backdrop-blur-sm hover:bg-accent-gold-dark hover:border-accent-gold-dark hover:text-primary-deep transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Static Video */}
              <div className="w-full order-1 lg:order-2">
                <div 
                  className="rounded-sm overflow-hidden bg-black border border-white/5 relative shadow-2xl aspect-video group mb-6 lg:mb-0"
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&controls=1`}
                    title="Video Testimonial Institucional"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="mt-4 flex items-center gap-3 px-4 py-2.5 bg-white/5 border-l-2 border-accent-gold-light/50 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold-light animate-pulse" />
                  <p className="text-[10px] text-white/70 uppercase tracking-[0.1em] font-medium italic">
                    Assista a <span className="text-accent-gold-light font-bold">opinião dos nossos clientes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <GoldButton className="px-10 text-sm py-3 shadow-xl">
              Fale com um Especialista
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Contatos */}
      <section id="contatos" className="min-h-[70vh] lg:min-h-screen flex items-center py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-gold-dark/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle subtitle="Pronto para o Próximo Nível?" title="Leve Sua Gestão Contábil Para o Padrão de Excelência" />
            <p className="text-sm md:text-base text-white/70 mb-10 max-w-xl mx-auto text-pretty">
              Clique no botão abaixo e fale agora mesmo com um de nossos consultores especialistas.
            </p>
            <GoldButton className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto shadow-2xl">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Falar com Consultor Agora
            </GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
