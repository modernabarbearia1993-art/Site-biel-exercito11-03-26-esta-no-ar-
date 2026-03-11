import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const navigate = useNavigate();
  const [currentSegment, setCurrentSegment] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    // Força scroll imediato para o topo
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const segments = [
    {
      title: 'Segurança Patrimonial',
      image: 'https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/dbf0fd4fdd6144cd5c6029081ff6e8ca.png',
      description: 'Monitoramento 24 horas com tecnologia avançada, vigilância armada, controle de acesso e resposta rápida a incidentes para proteção integral do seu patrimônio.',
      path: '/servicos/seguranca-patrimonial'
    },
    {
      title: 'Limpeza e Conservação',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20team%20in%20modern%20office%20building%2C%20maintenance%20workers%20with%20eco-friendly%20cleaning%20equipment%20and%20supplies%2C%20spotless%20corporate%20environment%20with%20Atlas%20logo%20small%20overlay%2C%20sustainable%20conservation%20services%2C%20clean%20contemporary%20workspace&width=800&height=600&seq=cleaning-services-1&orientation=landscape',
      description: 'Limpeza profissional com conservação sustentável, serviços personalizados e equipe qualificada para manter seu ambiente sempre impecável e confortável.',
      path: '/servicos/limpeza-conservacao'
    },
    {
      title: 'Soluções Híbridas',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20hybrid%20security%20technology%20with%20remote%20monitoring%20systems%2C%20facial%20recognition%20cameras%2C%20intelligent%20access%20control%20panels%2C%20video%20analytics%20screens%2C%20modern%20integrated%20security%20solutions%20with%20Atlas%20logo%20small%20overlay%20in%20corner%2C%20futuristic%20tech%20equipment&width=800&height=600&seq=hybrid-solutions-1&orientation=landscape',
      description: 'Portaria remota, reconhecimento facial, vídeo analítico e monitoramento com drones. Integração tecnológica com eficiência operacional e flexibilidade adaptativa.',
      path: '/servicos/solucoes-hibridas'
    },
    {
      title: 'Gestão de Facilities',
      image: 'https://readdy.ai/api/search-image?query=Comprehensive%20facilities%20management%20services%2C%20professional%20team%20coordinating%20building%20operations%2C%20maintenance%20and%20support%20services%2C%20modern%20corporate%20environment%20with%20multiple%20service%20areas%2C%20Atlas%20logo%20small%20overlay%2C%20efficient%20facility%20operations&width=800&height=600&seq=facilities-management-1&orientation=landscape',
      description: 'Gestão completa de estacionamento, apoio operacional, serviços de eventos e mais de 20 serviços especializados para um ambiente corporativo eficiente e confortável.',
      path: '/servicos/facilities'
    },
    {
      title: 'Totem Águia',
      image: 'https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/4f864713ea6ba89219d5344724cacbcf.jpeg',
      description: 'Torre de vigilância inteligente com integração aos programas de segurança do governo, sem multa contratual, preço abaixo da média do mercado e acesso via app às imagens da rua e portaria.',
      path: '/servicos/totem-aguia'
    },
    {
      title: 'Condomínios Residenciais',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20residential%20condominium%20building%20entrance%20with%20modern%20architecture%2C%20elegant%20lobby%20area%2C%20security%20access%20control%20systems%2C%20professional%20residential%20complex%20with%20Atlas%20security%20logo%20small%20overlay%2C%20upscale%20living%20environment%2C%20clean%20contemporary%20design&width=800&height=600&seq=residential-condo-1&orientation=landscape',
      description: 'Atenção e proteção para resguardar bens e pessoas em todos os espaços residenciais com monitoramento contínuo e atendimento dedicado.',
      path: '/servicos/condominios-residenciais'
    },
    {
      title: 'Empresas e Corporações',
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20facade%20and%20professional%20entrance%2C%20business%20district%20architecture%2C%20advanced%20security%20systems%2C%20Atlas%20security%20company%20small%20logo%20overlay%20in%20corner%2C%20contemporary%20commercial%20property%2C%20clean%20professional%20environment&width=800&height=600&seq=corporate-building-1&orientation=landscape',
      description: 'Atenção e proteção para resguardar bens e pessoas em todos os ambientes corporativos com soluções integradas e resposta rápida.',
      path: '/servicos/empresas-corporacoes'
    },
    {
      title: 'Instituições de Ensino',
      image: 'https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20building%20with%20students%20entrance%2C%20school%20campus%20architecture%2C%20safe%20learning%20environment%2C%20professional%20security%20presence%20with%20Atlas%20logo%20small%20overlay%20in%20corner%2C%20academic%20facility%20with%20security%20systems%2C%20bright%20welcoming%20atmosphere&width=800&height=600&seq=education-facility-1&orientation=landscape',
      description: 'Atenção e proteção para resguardar bens e pessoas em todos os ambientes educacionais com foco na segurança de alunos e colaboradores.',
      path: '/servicos/instituicoes-ensino'
    },
    {
      title: 'Hospitais e Clínicas',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20healthcare%20facility%20architecture%2C%20medical%20center%20entrance%20with%20professional%20security%2C%20clean%20clinical%20environment%20with%20Atlas%20security%20logo%20small%20overlay%2C%20healthcare%20institution%20protection%2C%20contemporary%20medical%20building&width=800&height=600&seq=healthcare-facility-1&orientation=landscape',
      description: 'Atenção e proteção para resguardar bens e pessoas em todos os ambientes de saúde com protocolos especializados e atendimento sensível.',
      path: '/servicos/hospitais-clinicas'
    },
    {
      title: 'Shopping Centers',
      image: 'https://readdy.ai/api/search-image?query=Modern%20shopping%20mall%20interior%20with%20wide%20corridors%2C%20retail%20center%20architecture%2C%20shoppers%20walking%20in%20contemporary%20commercial%20space%2C%20professional%20security%20monitoring%20with%20Atlas%20logo%20small%20overlay%2C%20bright%20inviting%20retail%20environment%2C%20clean%20modern%20design&width=800&height=600&seq=shopping-mall-1&orientation=landscape',
      description: 'Atenção e proteção para resguardar bens e pessoas em todos os espaços comerciais com cobertura completa e gestão de multidões.',
      path: '/servicos/shopping-centers'
    }
  ];

  const nextSegment = () => {
    setCurrentSegment((prev) => (prev + 1) % segments.length);
    setSelectedSegment(null);
  };

  const prevSegment = () => {
    setCurrentSegment((prev) => (prev - 1 + segments.length) % segments.length);
    setSelectedSegment(null);
  };

  const goToSegment = (index: number) => {
    setCurrentSegment(index);
    setSelectedSegment(null);
  };

  const handleSegmentClick = (index: number) => {
    setSelectedSegment(index === selectedSegment ? null : index);
  };

  const differentials = [
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20surveillance%20equipment%20and%20technology%20devices%20on%20clean%20white%20background%20with%20natural%20shadows%2C%20high-end%20CCTV%20cameras%2C%20access%20control%20systems%2C%20alarm%20panels%2C%20professional%20product%20photography%2C%20minimalist%20composition%2C%20certified%20security%20hardware&width=600&height=400&seq=tech-equipment&orientation=landscape',
      title: 'Tecnologia Avançada',
      description: 'Sistemas de controle de acesso, vigilância integrada, reconhecimento facial e vídeo analítico. Tecnologia de ponta para máxima eficiência e segurança.'
    },
    {
      image: 'https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/e7cb5027d10ab55b0569d491b9d6f9db.jpeg',
      title: 'Equipe Altamente Qualificada',
      description: 'Profissionais treinados com experiência militar garantem estratégias precisas e eficazes na proteção do seu patrimônio com o mais alto nível de profissionalismo.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20monitoring%20control%20center%20with%20operators%20working%20at%20computers%2C%20multiple%20screens%20displaying%20surveillance%20feeds%2C%20professional%2024-hour%20support%20center%2C%20clean%20organized%20workspace%2C%20technology%20and%20communication%20equipment%2C%20business%20environment&width=600&height=400&seq=support-center&orientation=landscape',
      title: 'Monitoramento 24 Horas',
      description: 'Central de operações disponível todos os dias, o ano todo, com resposta rápida a incidentes e tecnologia integrada para proteção contínua.'
    }
  ];

  const benefits = [
    {
      icon: 'ri-shield-star-line',
      title: 'Satisfação Garantida',
      description: 'Nossa equipe altamente qualificada garante a prestação de serviços com o mais alto nível de profissionalismo e eficácia.'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Inovação Contínua',
      description: 'Estamos sempre inovando para oferecer soluções flexíveis que atendam às necessidades em constante mudança do mercado.'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Foco no Cliente',
      description: 'Com a terceirização de serviços de facilities, os clientes podem focar em suas atividades principais enquanto cuidamos da segurança.'
    }
  ];

  return (
    <>
      {/* Segments Carousel Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Segmentos de Atuação
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight uppercase">
              Onde Atuamos
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
              Soluções especializadas para diferentes segmentos com <strong>excelência e dedicação</strong>
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-3xl bg-[#1a365d] shadow-2xl border border-[#c4954e]/20">
              <div className="relative">
                {segments.map((segment, index) => (
                  <div
                    key={index}
                    className={`${
                      index === currentSegment ? 'block' : 'hidden'
                    } transition-all duration-500`}
                  >
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => handleSegmentClick(index)}
                    >
                      {segment.image ? (
                        <>
                          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                            <img
                              src={segment.image}
                              alt={segment.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                          
                          {/* Title */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                              {segment.title}
                            </h3>
                            <p className="text-sm sm:text-base text-white/80 flex items-center gap-2">
                              <i className="ri-cursor-line"></i>
                              Clique para ver mais informações
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-[#1a365d] flex items-center justify-center p-6 sm:p-8 lg:p-12">
                          <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c4954e] mb-4">
                              {segment.title}
                            </h3>
                            <p className="text-sm sm:text-base text-white/80 flex items-center justify-center gap-2">
                              <i className="ri-cursor-line"></i>
                              Clique para ver mais informações
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description Panel */}
                    {selectedSegment === index && (
                      <div className="bg-[#c4954e] p-6 sm:p-8 lg:p-10 animate-fadeIn">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="ri-information-line text-2xl text-white"></i>
                          </div>
                          <div>
                            <p className="text-base sm:text-lg text-white leading-relaxed">
                              {segment.description}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(segment.path);
                          }}
                          className="w-full sm:w-auto bg-white text-[#c4954e] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer"
                        >
                          Ver Serviço Completo
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSegment}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10 cursor-pointer"
              >
                <i className="ri-arrow-left-line text-2xl text-[#1a365d]"></i>
              </button>
              <button
                onClick={nextSegment}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10 cursor-pointer"
              >
                <i className="ri-arrow-right-line text-2xl text-[#1a365d]"></i>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {segments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSegment(index)}
                  className={`transition-all cursor-pointer ${
                    index === currentSegment
                      ? 'w-12 h-3 bg-[#c4954e] rounded-full'
                      : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Nossa História
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight uppercase">
              Excelência em Segurança e Facilities
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a365d] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#c4954e]/20">
              <p className="text-base sm:text-lg lg:text-xl text-white mb-6 leading-relaxed">
                A <strong className="text-[#c4954e]">Atlas Segurança e Facilities</strong> nasceu da visão de transformar a proteção patrimonial em um serviço de excelência. Nossa <strong className="text-[#c4954e]">expertise baseada na sólida experiência militar de nossa liderança</strong> garante estratégias precisas e eficazes na proteção do seu patrimônio.
              </p>
              <p className="text-base sm:text-lg text-white mb-6 leading-relaxed">
                Combinamos <strong className="text-[#c4954e]">tecnologia de ponta, profissionais altamente qualificados</strong> e um compromisso inabalável com a excelência. Nossa missão é criar ambientes seguros, eficientes e inspiradores, baseados em <strong className="text-[#c4954e]">disciplina, integridade, tecnologia e excelência operacional</strong>.
              </p>
              <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
                Com uma <strong className="text-[#c4954e]">central de operações disponível 24/7</strong>, oferecemos resposta rápida a qualquer ocorrência, garantindo tranquilidade total para nossos clientes. Nosso diferencial está na combinação única de <strong className="text-[#c4954e]">experiência militar, inovação tecnológica e atendimento humanizado</strong>.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#c4954e]/10 rounded-2xl border border-[#c4954e]/20">
                  <i className="ri-shield-check-line text-4xl text-[#c4954e] mb-3"></i>
                  <h3 className="text-lg font-bold text-[#c4954e] mb-2">Segurança Total</h3>
                  <p className="text-sm text-white">Proteção integral do seu patrimônio</p>
                </div>
                <div className="text-center p-6 bg-[#c4954e]/10 rounded-2xl border border-[#c4954e]/20">
                  <i className="ri-team-line text-4xl text-[#c4954e] mb-3"></i>
                  <h3 className="text-lg font-bold text-[#c4954e] mb-2">Equipe Especializada</h3>
                  <p className="text-sm text-white">Profissionais com formação militar</p>
                </div>
                <div className="text-center p-6 bg-[#c4954e]/10 rounded-2xl border border-[#c4954e]/20">
                  <i className="ri-customer-service-2-line text-4xl text-[#c4954e] mb-3"></i>
                  <h3 className="text-lg font-bold text-[#c4954e] mb-2">Suporte 24/7</h3>
                  <p className="text-sm text-white">Atendimento contínuo e eficiente</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full sm:w-auto bg-[#c4954e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#b8894a] transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Conheça Nossas Soluções
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Presence Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c4954e]/10 to-[#1a365d]/10 rounded-3xl blur-2xl"></div>
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-[#c4954e]/20">
                <img
                  src="https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/4376cfe07e02fa8d2f5c8093da6cac19.jpeg"
                  alt="Profissional Atlas Segurança em Ação"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
                Presença Profissional
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight uppercase">
                Excelência em Cada Detalhe da Operação
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white mb-4 sm:mb-6 leading-relaxed">
                Nossa <strong className="text-[#c4954e]">presença profissional</strong> vai além da segurança tradicional. Cada membro da equipe Atlas representa nosso compromisso com a <strong className="text-[#c4954e]">excelência operacional, disciplina militar e atendimento de alto padrão</strong>.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6 leading-relaxed">
                Equipados com <strong className="text-[#c4954e]">tecnologia de ponta</strong> e treinamento rigoroso, nossos profissionais garantem proteção integral do seu patrimônio. Da portaria ao monitoramento avançado, cada detalhe é planejado para oferecer <strong className="text-[#c4954e]">segurança, confiança e tranquilidade</strong>.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-shield-check-line text-xl sm:text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#c4954e] mb-1 sm:mb-2">Uniformes e Equipamentos Profissionais</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">Apresentação impecável com equipamentos de última geração para máxima eficiência operacional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-user-star-line text-xl sm:text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#c4954e] mb-1 sm:mb-2">Treinamento Contínuo</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">Capacitação constante baseada em protocolos militares e melhores práticas do setor.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-eye-line text-xl sm:text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#c4954e] mb-1 sm:mb-2">Presença Estratégica</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">Posicionamento tático em pontos estratégicos para cobertura completa e resposta imediata.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full sm:w-auto bg-[#c4954e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#b8894a] transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Conheça Nossas Soluções
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-4">
              BENEFÍCIOS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 px-4 uppercase">
              POR QUE CONTRATAR NOSSOS SERVIÇOS
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto px-4">
              <strong className="text-[#c4954e]">Confiabilidade, Inovação e Flexibilidade</strong> em cada solução que oferecemos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1a365d] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-[#c4954e]/20"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-[#c4954e]/20">
                  <i className={`${benefit.icon} text-2xl sm:text-3xl text-[#c4954e]`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#c4954e] mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=High-tech%20security%20monitoring%20control%20room%20with%20multiple%20large%20screens%20displaying%20surveillance%20camera%20feeds%2C%20modern%20command%20center%20with%20blue%20ambient%20lighting%2C%20professional%20operators%20at%20workstations%2C%20advanced%20technology%20equipment%2C%20futuristic%20security%20operations%20center%2C%20clean%20organized%20environment&width=1920&height=800&seq=monitoring-center&orientation=landscape"
            alt="Central de Monitoramento"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/80 via-[#1a365d]/70 to-[#1a365d]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 sm:mb-12 leading-tight uppercase">
              monitoramento inteligente 24/7
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end justify-between gap-6 sm:gap-8">
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full sm:w-auto bg-[#c4954e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#b8894a] transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-3"
              >
                Agendar Visita Técnica
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-line text-[#1a365d]"></i>
                </div>
              </button>
              <div className="text-white">
                <p className="text-base sm:text-lg font-light leading-relaxed">
                  Central de operações com tecnologia de ponta<br />
                  <strong className="text-[#c4954e]">Resposta rápida</strong> a qualquer ocorrência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Differentials */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-4">
              NOSSOS DIFERENCIAIS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 px-4 uppercase">
              Por Que Escolher a Atlas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto px-4">
              Combinamos <strong className="text-[#c4954e]">experiência militar, tecnologia avançada</strong> e dedicação para oferecer as melhores soluções em segurança patrimonial e facilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a365d] rounded-2xl border border-[#c4954e]/20 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#c4954e] mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleNavigate('/servicos/seguranca-patrimonial')}
                    className="mt-6 w-full bg-[#c4954e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b8894a] transition-all whitespace-nowrap cursor-pointer text-center"
                  >
                    Ver Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}