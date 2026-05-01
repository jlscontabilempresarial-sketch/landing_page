import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AberturaEmpresa from "./pages/AberturaEmpresa";
import RegularizacaoFiscal from "./pages/RegularizacaoFiscal";
import PlanejamentoTributario from "./pages/PlanejamentoTributario";
import EnquadramentoTributario from "./pages/EnquadramentoTributario";
import AlteracoesSocietarias from "./pages/AlteracoesSocietarias";
import TrocarContador from "./pages/TrocarContador";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-deep text-white selection:bg-accent-gold-dark selection:text-white flex flex-col font-sans antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abertura-empresa" element={<AberturaEmpresa />} />
            <Route path="/regularizacao-fiscal" element={<RegularizacaoFiscal />} />
            <Route path="/planejamento-tributario" element={<PlanejamentoTributario />} />
            <Route path="/enquadramento-tributario" element={<EnquadramentoTributario />} />
            <Route path="/alteracoes-societarias" element={<AlteracoesSocietarias />} />
            <Route path="/trocar-contador" element={<TrocarContador />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
