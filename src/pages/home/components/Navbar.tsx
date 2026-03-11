import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se chegou na seção de serviços (segmentos de atuação)
      const servicosSection = document.getElementById('servicos');
      if (servicosSection) {
        const rect = servicosSection.getBoundingClientRect();
        // Ativa o fundo quando a seção de serviços chegar no topo da tela
        setIsScrolled(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // Se não estiver na página inicial, navega para ela primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda a navegação e então faz o scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na página inicial, apenas faz o scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    // Força scroll imediato para o topo
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a365d] shadow-lg' : 'bg-[#1a365d]/90 backdrop-blur-md'
      }`}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('/')}>
            <img
              src="https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/f65f35900b1c2ad3b3084b36bc2f221e.png"
              alt="Atlas Segurança e Facilities"
              className="h-12 sm:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer text-white hover:text-[#c4954e]"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer text-white hover:text-[#c4954e]"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer text-white hover:text-[#c4954e]"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer text-white hover:text-[#c4954e]"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#c4954e] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8894a] transition-all whitespace-nowrap cursor-pointer"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-white"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a365d] border-t border-white/10 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-white hover:text-[#c4954e] font-semibold py-2 cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-white hover:text-[#c4954e] font-semibold py-2 cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-white hover:text-[#c4954e] font-semibold py-2 cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-white hover:text-[#c4954e] font-semibold py-2 cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full bg-[#c4954e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b8894a] transition-all text-center cursor-pointer"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
