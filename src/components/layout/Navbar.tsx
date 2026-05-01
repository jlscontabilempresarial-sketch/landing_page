import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { GoldButton } from "../ui/GoldButton";
import { getWhatsAppLink } from "../../lib/whatsapp";

const NavItem = ({ href, label, active, onClick, mobile }: { href: string; label: string; active?: boolean; onClick?: (e: React.MouseEvent<any>) => void; mobile?: boolean }) => {
  const isHash = href.startsWith("#");
  const location = useLocation();
  const isHome = location.pathname === "/";

  const content = (
    <span className="relative pb-2 inline-block">
      {label}
      {active && (
        <motion.div 
          layoutId={mobile ? "navUnderlineMobile" : "navUnderline"}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold-light"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </span>
  );

  const className = `${mobile ? 'text-sm py-2 w-full text-center block' : 'text-[13px]'} uppercase tracking-widest font-medium transition-all duration-500 relative group ${active ? 'text-accent-gold-light' : 'text-white/80 hover:text-white'}`;

  // If we're on home and it's a hash, use normal <a> for smooth scroll intercept
  if (isHash && isHome) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {content}
      </a>
    );
  }

  // If we're on a subpage or it's not a hash, use Link
  return (
    <Link to={isHash ? `/${href}` : href} onClick={onClick} className={className}>
      {content}
    </Link>
  );
};

// Deleted local GoldButton definition
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const currentWhatsAppLink = getWhatsAppLink(location.pathname);

  useEffect(() => {
    // Scroll to section from another page
    if (location.hash && location.pathname === "/") {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const sections = ["sobre", "servicos", "migracao", "feedback", "contatos"];
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        // Encontra a seção que está mais "no meio" da tela
        const viewportHeight = window.innerHeight;
        const scrollCenter = window.scrollY + (viewportHeight / 3);
        const scrollBottom = window.scrollY + viewportHeight;
        const pageHeight = document.documentElement.scrollHeight;

        let currentSection = "";
        
        // Verifica se está no topo (Hero)
        if (window.scrollY < 200) {
          currentSection = "";
        } else if (scrollBottom >= pageHeight - 120) {
          currentSection = "contatos";
        } else {
          // Check from end to start for better "last section" priority if overlapping
          for (let i = sections.length - 1; i >= 0; i--) {
            const id = sections[i];
            const el = document.getElementById(id);
            if (el) {
              const offsetTop = el.offsetTop;
              const height = el.offsetHeight;
              
              // Se entrarmos na seção contatos, ela fica ativa até ser "ultrapassada" para cima
              if (id === "contatos" && window.scrollY + viewportHeight * 0.8 >= offsetTop) {
                currentSection = "contatos";
                break;
              }

              if (scrollCenter >= offsetTop && scrollCenter <= offsetTop + height) {
                currentSection = id === "migracao" ? "servicos" : id;
                break;
              }
            }
          }
        }

        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount/location change
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileServicesOpen(false);
  };

  const services = [
    { label: "Abertura de Empresa", href: "/abertura-empresa" },
    { label: "Regularização Fiscal", href: "/regularizacao-fiscal" },
    { label: "Planejamento Tributário", href: "/planejamento-tributario" },
    { label: "Enquadramento Tributário", href: "/enquadramento-tributario" },
    { label: "Alterações Societárias", href: "/alteracoes-societarias" },
    { label: "Trocar de Contador", href: "/trocar-contador" },
  ];

  const handleNavClick = (e: React.MouseEvent<any>, href: string) => {
    const isHash = href.startsWith("#");
    
    if (isHash && location.pathname === "/") {
      e.preventDefault();
      const id = href.substring(1);
      
      // Close menu first to provide immediate feedback and avoid layout interference
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);

      // Small delay to allow menu closing to start and position calculation to be more accurate
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; 
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY + yOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 10);
    } else {
      // If not on home or not a hash, just close menu and let Link handle it
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
    }
  };

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-primary-deep/95 backdrop-blur-md py-1.5 shadow-2xl border-b border-accent-gold-dark/30" : "bg-transparent py-3"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 sm:gap-3 group">
          <img 
            src="/logo.png" 
            alt="JLS Logo" 
            className="h-7 sm:h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg sm:text-2xl font-extrabold tracking-widest text-accent-gold-light">
            JLS <span className="text-white font-light hidden min-[450px]:inline">CONTABILIDADE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {!isHome && (
            <NavItem href="/" label="Página Inicial" active={location.pathname === "/"} />
          )}

          <NavItem href="#sobre" label="Quem Somos" active={activeSection === "sobre"} onClick={(e) => handleNavClick(e, "#sobre")} />
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className={`flex items-center gap-1 text-[13px] uppercase tracking-widest font-medium transition-all duration-500 relative pb-2 ${activeSection === "servicos" || services.some(s => location.pathname === s.href) ? 'text-accent-gold-light' : 'text-white/80 hover:text-white'}`}>
              {isHome ? (
                <button 
                  onClick={(e) => handleNavClick(e, "#servicos")}
                  className="cursor-pointer"
                >
                  SERVIÇOS
                </button>
              ) : (
                <Link to="/#servicos">SERVIÇOS</Link>
              )}
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              {(activeSection === "servicos" || services.some(s => location.pathname === s.href)) && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold-light"
                />
              )}
            </div>
            
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-primary-deep border border-accent-gold-dark/30 shadow-2xl rounded-sm overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-6 py-3 text-[12px] uppercase tracking-wider text-white/70 hover:text-accent-gold-light hover:bg-white/5 transition-all"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="#feedback" label="Feedback" active={activeSection === "feedback"} onClick={(e) => handleNavClick(e, "#feedback")} />
          <NavItem href="#contatos" label="Contatos" active={activeSection === "contatos"} onClick={(e) => handleNavClick(e, "#contatos")} />

          <GoldButton className="py-2.5 px-6 text-sm" href={currentWhatsAppLink}>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-primary-deep border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8 items-center text-center">
              {!isHome && (
                <NavItem href="/" label="Página Inicial" active={location.pathname === "/"} onClick={toggleMenu} mobile />
              )}

              <NavItem href="#sobre" label="Quem Somos" active={activeSection === "sobre"} onClick={(e) => handleNavClick(e, "#sobre")} mobile />

              <div className="w-full flex flex-col items-center">
                <div className="relative">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-center gap-2 text-[13px] uppercase tracking-widest font-medium pb-2 transition-all duration-500 ${activeSection === "servicos" || services.some(s => location.pathname === s.href) ? 'text-accent-gold-light' : 'text-white/80'}`}
                  >
                    SERVIÇOS
                    <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {(activeSection === "servicos" || services.some(s => location.pathname === s.href)) && (
                    <motion.div 
                      layoutId="navUnderlineMobile"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold-light"
                    />
                  )}
                </div>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4 mt-6 bg-white/5 py-6 rounded-sm w-full"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className={`text-[12px] uppercase tracking-[2px] transition-all px-4 ${location.pathname === service.href ? 'text-accent-gold-light font-bold' : 'text-white/60 hover:text-white'}`}
                          onClick={toggleMenu}
                        >
                          {service.label}
                        </Link>
                      ))}
                      <Link 
                        to="/#servicos" 
                        onClick={toggleMenu}
                        className="text-[11px] uppercase tracking-widest text-accent-gold-dark mt-2"
                      >
                        Ver todos no site
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem href="#feedback" label="Feedback" active={activeSection === "feedback"} onClick={(e) => handleNavClick(e, "#feedback")} mobile />
              <NavItem href="#contatos" label="Contatos" active={activeSection === "contatos"} onClick={(e) => handleNavClick(e, "#contatos")} mobile />
              
              <GoldButton className="w-full" href={currentWhatsAppLink}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </GoldButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
