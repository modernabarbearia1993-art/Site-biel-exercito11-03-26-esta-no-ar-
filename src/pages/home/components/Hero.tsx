import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [stats, setStats] = useState({
    services: 0,
    monitoring: 0,
    satisfaction: 0,
    clients: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = '5511983793536';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        services: Math.floor(20 * progress),
        monitoring: Math.floor(24 * progress),
        satisfaction: Math.floor(100 * progress),
        clients: Math.floor(500 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats({
          services: 20,
          monitoring: 24,
          satisfaction: 100,
          clients: 500
        });
      }
    }, interval);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20security%20team%20monitoring%20surveillance%20cameras%20in%20modern%20control%20room%20with%20multiple%20screens%20showing%20different%20locations%20high%20tech%20security%20operations%20center%20with%20blue%20ambient%20lighting%20and%20professional%20atmosphere%20wide%20angle%20view&width=1920&height=1080&seq=hero-bg-security-001&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center w-full">
        {/* Logo Grande Destacada */}
        <div className="mb-8 sm:mb-12 flex justify-center animate-fadeIn">
          <img 
            src="https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/1791114485f4d64180e2986f5b04c8e0.png" 
            alt="Atlas Segurança e Facilities" 
            className="h-32 sm:h-48 md:h-64 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg px-4 animate-fadeIn uppercase">
          Soluções Completas em <br />
          <span className="text-amber-500">Segurança e Serviços</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4 animate-fadeIn">
          <strong>Especialistas em segurança patrimonial e gestão de facilities.</strong> Combinamos experiência militar, tecnologia de ponta e profissionais altamente qualificados para garantir ambientes seguros, organizados e funcionais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 animate-fadeIn">
          <button 
            onClick={() => scrollToSection('contato')}
            className="w-full sm:w-auto bg-amber-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-amber-600 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Solicitar Orçamento
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all border-2 border-white/30 whitespace-nowrap cursor-pointer"
          >
            Conheça Nossos Serviços
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 flex justify-center items-center text-white px-4 animate-fadeIn">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-all hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-whatsapp-fill text-xl sm:text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm text-white/70">WhatsApp</p>
              <p className="text-lg sm:text-xl font-bold">Atendimento 24h</p>
            </div>
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-2">
              {stats.services}+
            </div>
            <div className="text-sm sm:text-base text-white/80 font-medium">Serviços Oferecidos</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-2">
              {stats.monitoring}/7
            </div>
            <div className="text-sm sm:text-base text-white/80 font-medium">Monitoramento Ativo</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-2">
              {stats.satisfaction}%
            </div>
            <div className="text-sm sm:text-base text-white/80 font-medium">Satisfação Garantida</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-2">
              {stats.clients}+
            </div>
            <div className="text-sm sm:text-base text-white/80 font-medium">Clientes Protegidos</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}
