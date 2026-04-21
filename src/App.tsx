/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  ChevronRight,
  ChevronLeft,
  CheckCircle2, 
  Calculator, 
  Scale, 
  FileCheck2, 
  UserPlus2, 
  Users, 
  Instagram, 
  MessageCircle,
  Menu,
  X,
  Play,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import React from "react";

// WhatsApp Link - Real link should be updated by the user
const WHATSAPP_LINK = "https://wa.me/5500000000000";
// YouTube Video ID - Replace with your real client testimonial video ID
const YOUTUBE_VIDEO_ID = "e6-Guqyxi9Y"; // Perito Contador Video

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "CEO da TechSolutions PJ",
    content: "A JLS não é apenas um escritório, é um braço estratégico. Reduziram nossa carga tributária em 28% no primeiro trimestre com uma reestruturação societária impecável. Eficiência que gera lucro real.",
    videoId: "e6-Guqyxi9Y"
  },
  {
    id: 2,
    name: "Dra. Carolina Silva",
    role: "Médica Especialista",
    content: "Como médica PJ, a tranquilidade de saber que minha conformidade fiscal está em mãos especialistas não tem preço. Profissionalismo e agilidade muito acima do que eu encontrava no mercado.",
    videoId: "mD7a1lDiyC4"
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    role: "Desenvolvedor PJ",
    content: "O suporte consultivo da JLS foi o divisor de águas para minha carreira como PJ. Planejamento inteligente e execução rápida. Recomendo para quem busca segurança e o próximo nível de gestão.",
    videoId: "u9O9aV7p0P0"
  }
];

const NavItem = ({ href, label, active, onClick, mobile }: { href: string; label: string; active?: boolean; onClick?: () => void; mobile?: boolean }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`text-[13px] uppercase tracking-widest font-medium transition-all duration-500 relative pb-2 group ${active ? 'text-accent-gold-light' : 'text-white/80 hover:text-white'}`}
  >
    {label}
    {active && (
      <motion.div 
        layoutId={mobile ? "navUnderlineMobile" : "navUnderline"}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-gold-light"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </a>
);

const GoldButton = ({ children, className = "", fullWidth = false }: { children: React.ReactNode; className?: string; fullWidth?: boolean }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-gold-light to-accent-gold-dark text-primary-deep font-bold py-4 px-8 rounded-[4px] shadow-[0_4px_15px_rgba(230,201,121,0.3)] transition-all duration-300 ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {children}
  </motion.a>
);

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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAboutTab, setActiveAboutTab] = useState(0);

  const aboutTabs = [
    {
      title: "Nossa Missão",
      content: "Na JLS Contabilidade, não somos apenas processadores de documentos. Somos parceiros estratégicos do seu crescimento. Nossa missão é desburocratizar a vida do empresário brasileiro, entregando transparência e segurança jurídica em cada etapa da jornada empreendedora."
    },
    {
      title: "Diferencial",
      content: "Especializados no atendimento a prestadores de serviço e profissionais liberais (PJ), entregamos soluções personalizadas que vão além do básico. Focamos na eficiência tributária real, garantindo que você pague o mínimo de imposto de forma legal e segura."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["sobre", "servicos", "feedback", "contatos"];
      const scrollPosition = window.scrollY + 100; // Aligned closer to the header top

      let currentSection = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentSection = id;
          }
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 80) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-primary-deep text-white selection:bg-accent-gold-dark selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-primary-deep/95 backdrop-blur-md py-1.5 shadow-2xl border-b border-accent-gold-dark/30" : "bg-transparent py-3"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src="/logo.png" 
              alt="JLS Logo" 
              className="h-7 sm:h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg sm:text-2xl font-extrabold tracking-widest text-accent-gold-light">
              JLS <span className="text-white font-light hidden min-[450px]:inline">CONTABILIDADE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <NavItem href="#sobre" label="Quem Somos" active={activeSection === "sobre"} />
            <NavItem href="#servicos" label="Serviços" active={activeSection === "servicos"} />
            <NavItem href="#feedback" label="Feedback" active={activeSection === "feedback"} />
            <NavItem href="#contatos" label="Contatos" active={activeSection === "contatos"} />
            <GoldButton className="py-2.5 px-6 text-sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </GoldButton>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white overflow-hidden" onClick={toggleMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden bg-primary-deep border-b border-white/5 overflow-hidden"
        >
          <div className="flex flex-col gap-6 p-8 items-center text-center">
            <NavItem href="#sobre" label="Quem Somos" active={activeSection === "sobre"} onClick={toggleMenu} mobile />
            <NavItem href="#servicos" label="Serviços" active={activeSection === "servicos"} onClick={toggleMenu} mobile />
            <NavItem href="#feedback" label="Feedback" active={activeSection === "feedback"} onClick={toggleMenu} mobile />
            <NavItem href="#contatos" label="Contatos" active={activeSection === "contatos"} onClick={toggleMenu} mobile />
            <GoldButton className="w-full">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </GoldButton>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Background Elements */}
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
                Abra sua empresa ou pague <span className="text-accent-gold-light">menos impostos.</span>
              </h1>
              <p className="text-sm md:text-xl text-text-dim max-w-2xl mb-10 leading-relaxed text-pretty">
                Consultoria contábil inteligente para empresários, prestadores de serviço e profissionais PJ que buscam segurança estratégica.
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
      <section id="sobre" className="min-h-screen flex items-center py-12 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
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
                <p className="text-primary-deep font-serif text-2xl md:text-3xl font-bold mb-0.5">10+</p>
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
      <section id="servicos" className="min-h-screen flex items-center py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <SectionTitle subtitle="Nossas Soluções" title="Dedicados ao Sucesso" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={<UserPlus2 size={32} />}
              title="Abertura de Empresa"
              description="Legalize sua ideia com rapidez e segurança, escolhendo a melhor estrutura jurídica para o seu negócio."
            />
            <ServiceCard 
              icon={<Scale size={32} />}
              title="Regularização Fiscal"
              description="Coloque sua empresa em dia com o fisco, evitando multas e garantindo a saúde do seu CNPJ."
            />
            <ServiceCard 
              icon={<Calculator size={32} />}
              title="Planejamento Tributário"
              description="Reduza sua carga tributária legalmente através de um estudo detalhado da sua operação."
            />
            <ServiceCard 
              icon={<FileCheck2 size={32} />}
              title="Enquadramento Tributário"
              description="Análise contínua para garantir que sua empresa esteja sempre no regime tributário mais vantajoso."
            />
            <ServiceCard 
              icon={<Users size={32} />}
              title="Alterações Societárias"
              description="Suporte completo para mudanças de sócios, endereço ou atividade econômica da sua empresa."
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

      {/* Feedback Section */}
      <section id="feedback" className="min-h-screen lg:h-screen flex items-center bg-primary-deep relative overflow-hidden py-16 lg:py-0">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionTitle subtitle="Feedback" title="A Voz de Nossos Parceiros" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column: Testimonial Text */}
              <div className="w-full order-2 lg:order-1">
                <div className="relative min-h-[320px] sm:min-h-[300px] flex flex-col justify-center bg-white/[0.01] border border-white/5 p-6 md:p-10 rounded-sm shadow-inner group">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-gold-dark/5 -scale-x-100 transition-opacity group-hover:opacity-10" />
                  
                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Quote className="w-8 h-8 text-accent-gold-light mb-4 opacity-60" />
                        <h3 className="text-base md:text-lg lg:text-xl text-white font-serif leading-relaxed mb-6 tracking-tight italic">
                          "{TESTIMONIALS[activeTestimonial].content}"
                        </h3>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-[1px] bg-accent-gold-dark/40" />
                          <div>
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
                  <div className="absolute bottom-5 right-5 flex gap-3 z-20">
                    <button 
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent-gold-dark hover:border-accent-gold-dark hover:text-primary-deep transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent-gold-dark hover:border-accent-gold-dark hover:text-primary-deep transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-8 flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-[1px] transition-all duration-700 ${activeTestimonial === i ? 'w-6 bg-accent-gold-light' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                      />
                    ))}
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
                    Assista à nossa <span className="text-accent-gold-light font-bold">Apresentação Estratégica</span>
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
      <section id="contatos" className="min-h-[70vh] flex items-center py-16 md:py-24 relative overflow-hidden">
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

      {/* SEO Keywords - Discrete Section */}
      <section className="pb-10 pt-4 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl opacity-20 hover:opacity-100 transition-opacity duration-500">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-gold-light mb-2">Termos de Referência / SEO</p>
            <p className="text-[10px] text-white/50 leading-loose">
              Contabilidade para empresas • Abrir empresa rápida • Planejamento tributário PJ • Contador para prestadores de serviço • Redução de impostos legal • Gestão contábil estratégica • Consultoria fiscal especializada • Escritório de contabilidade • Contador online para PJ • BPO Financeiro • Regularização de CNPJ • Alteração contratual • Desenquadramento MEI • Lucro Presumido e Simples Nacional • Assessoria contábil para profissionais liberais.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/5 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="col-span-full lg:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-4 md:mb-6">
                <img 
                  src="/logo.png" 
                  alt="JLS Logo" 
                  className="h-7 sm:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tighter">
                  JLS <span className="text-accent-gold-light font-normal italic">CONTABILIDADE</span>
                </span>
              </a>
              <p className="text-white/50 max-w-md leading-relaxed">
                Consultoria contábil de alto padrão focada no sucesso empresarial. Transformando burocracia em estratégia para o seu crescimento.
              </p>
            </div>
            
            <div>
              <h4 className="text-accent-gold-light uppercase tracking-widest text-xs font-bold mb-6">Acompanhe no Instagram</h4>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold-dark hover:text-primary-deep transition-all">
                  <Instagram size={20} />
                </div>
                <span>@jlscontabilidade</span>
              </a>
            </div>

            <div>
              <h4 className="text-accent-gold-light uppercase tracking-widest text-xs font-bold mb-6">Fale Conosco</h4>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
                  <MessageCircle size={20} />
                </div>
                <span>WhatsApp Empresarial</span>
              </a>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 text-center md:text-left">
            <p className="text-white/30 text-[11px] md:text-sm order-3 md:order-1 tracking-wide">
              © 2026 JLS Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-8 md:gap-10 order-2 w-full sm:w-auto">
              <div className="flex flex-col text-[12px] text-white">
                <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">E-mail</span>
                <a href="mailto:contato@jlscontabilidade.com.br" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all break-all sm:break-normal">contato@jlscontabilidade.com.br</a>
              </div>
              <div className="flex flex-col text-[12px] text-white">
                <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">Instagram</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all">@jlscontabilidade</a>
              </div>
              <div className="flex flex-col text-[12px] text-white">
                <span className="text-accent-gold-light font-bold uppercase tracking-widest text-[9px] mb-1.5 opacity-60">WhatsApp</span>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent-gold-light transition-all">(11) 99999-0000</a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-geometric-accent z-0 pointer-events-none" />
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white/[0.02] border-l-[3px] border-accent-gold-dark p-6 md:p-8 rounded-[4px] group transition-all h-full"
    >
      <div className="text-accent-gold-light mb-4 md:mb-6">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 tracking-tight">{title}</h3>
      <p className="text-text-secondary text-xs md:text-[13px] leading-relaxed line-clamp-4">{description}</p>
    </motion.div>
  );
}

function TargetItem({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="bg-white/5 p-8 rounded-sm border-l-2 border-accent-gold-dark">
      <h3 className="text-accent-gold-light font-bold mb-6 uppercase tracking-widest text-sm">{title}</h3>
      <ul className="space-y-3">
        {list.map((item) => (
          <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
            <div className="w-1 h-1 bg-accent-gold-light rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


