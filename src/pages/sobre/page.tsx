import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

export default function Sobre() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: 'ri-shield-star-line',
      title: 'Disciplina',
      description: 'Baseada na experiência militar de nossa liderança, aplicamos rigor e organização em cada operação.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Integridade',
      description: 'Transparência e ética são pilares fundamentais em todas as nossas relações e serviços prestados.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Tecnologia',
      description: 'Investimos constantemente em inovação para oferecer as soluções mais avançadas do mercado.'
    },
    {
      icon: 'ri-star-line',
      title: 'Excelência',
      description: 'Buscamos a perfeição em cada detalhe, superando expectativas e garantindo resultados superiores.'
    }
  ];

  const certifications = [
    {
      icon: 'ri-shield-check-line',
      title: 'ISO 9001',
      description: 'Certificação de Gestão da Qualidade'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Alvará DPF',
      description: 'Autorização da Polícia Federal'
    },
    {
      icon: 'ri-award-line',
      title: 'ABNT NBR',
      description: 'Normas Técnicas de Segurança'
    },
    {
      icon: 'ri-medal-line',
      title: 'SESVESP',
      description: 'Sindicato das Empresas de Segurança'
    }
  ];

  const achievements = [
    {
      icon: 'ri-building-line',
      title: 'Presença Nacional',
      description: 'Atuamos em diversos estados brasileiros com soluções integradas de segurança e facilities'
    },
    {
      icon: 'ri-team-line',
      title: 'Clientes Satisfeitos',
      description: 'Centenas de empresas, condomínios e instituições confiam em nossos serviços diariamente'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Experiência Consolidada',
      description: 'Anos de atuação no mercado de segurança patrimonial e gestão de facilities'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Atendimento 24/7',
      description: 'Central de operações sempre ativa para resposta imediata em qualquer situação'
    }
  ];

  const differentials = [
    {
      icon: 'ri-eye-line',
      title: 'Visão Estratégica',
      description: 'Nossa liderança com background militar traz uma perspectiva única de planejamento e execução, garantindo operações impecáveis e resultados consistentes.'
    },
    {
      icon: 'ri-global-line',
      title: 'Alcance Nacional',
      description: 'Presença consolidada em múltiplas regiões do país, permitindo atender clientes de grande porte com a mesma excelência em todos os locais.'
    },
    {
      icon: 'ri-cpu-line',
      title: 'Inovação Constante',
      description: 'Investimento contínuo em tecnologia de ponta: reconhecimento facial, vídeo analítico, controle de acesso inteligente e sistemas integrados de monitoramento.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Atendimento Humanizado',
      description: 'Combinamos eficiência operacional com atendimento personalizado, construindo parcerias de longo prazo baseadas em confiança e resultados.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20exterior%20with%20professional%20architecture%20glass%20facade%20reflecting%20sky%20contemporary%20business%20headquarters%20clean%20professional%20environment%20urban%20corporate%20setting%20bright%20daylight%20photography%20with%20blue%20sky%20and%20modern%20design&width=1920&height=800&seq=about-hero-v2&orientation=landscape"
            alt="Atlas Segurança e Facilities"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wide">
            Sobre Nós
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            Atlas Segurança e Facilities
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Transformando a <strong>proteção patrimonial</strong> em um serviço de <strong>excelência</strong> com tecnologia, disciplina e dedicação
          </p>
          <button
            onClick={() => scrollToSection('visao')}
            className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-3"
          >
            Conheça Nossa Visão
            <i className="ri-arrow-down-line text-xl"></i>
          </button>
        </div>
      </section>

      {/* História e Visão Section */}
      <section id="visao" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
                Nossa Visão
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Excelência Construída com Experiência e Inovação
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-100">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                A <strong>Atlas Segurança e Facilities</strong> é referência nacional em proteção patrimonial e gestão integrada de facilities. Nossa trajetória é marcada pela <strong>experiência consolidada no mercado de segurança</strong>, atendendo centenas de clientes em todo o território brasileiro.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Com <strong>sólida experiência militar em nossa liderança</strong>, implementamos estratégias precisas e eficazes que garantem a máxima proteção do seu patrimônio. Combinamos <strong>disciplina operacional, tecnologia de ponta e profissionais altamente qualificados</strong> para entregar resultados superiores.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Nossa <strong>central de operações funciona 24 horas por dia, todos os dias</strong>, oferecendo resposta rápida a qualquer ocorrência. Atendemos desde grandes corporações e instituições financeiras até condomínios residenciais e shopping centers, sempre com o mesmo compromisso de excelência.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                O diferencial da Atlas está na combinação única de <strong>experiência comprovada, inovação tecnológica contínua e atendimento humanizado</strong>. Investimos constantemente em sistemas avançados como reconhecimento facial, vídeo analítico e controle de acesso inteligente, mantendo-nos sempre na vanguarda do setor.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-flag-line text-2xl text-amber-500"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nossa Missão</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Proporcionar ambientes seguros, eficientes e inspiradores através de soluções integradas de segurança e facilities, superando expectativas e construindo parcerias de longo prazo.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-eye-line text-2xl text-amber-500"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nossa Visão</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Ser reconhecida como a empresa mais confiável e inovadora em segurança patrimonial e facilities do Brasil, referência em qualidade, tecnologia e atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Nossas Conquistas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Experiência que Faz a Diferença
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nosso <strong>compromisso com a excelência</strong> e <strong>confiança conquistada</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <i className={`${achievement.icon} text-2xl sm:text-3xl text-amber-500`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {achievement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Nossos Valores
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Princípios que Nos Guiam
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Valores fundamentais que definem nossa <strong>cultura organizacional</strong> e <strong>compromisso com a excelência</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <i className={`${value.icon} text-2xl sm:text-3xl text-amber-500`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Nossos Diferenciais
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              O Que Nos Torna Únicos
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Características que nos consolidam como <strong>referência nacional</strong> em segurança e facilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-2xl sm:text-3xl text-amber-500`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Certificações
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Qualidade Certificada
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Reconhecimento oficial da nossa <strong>excelência operacional</strong> e <strong>compromisso com a qualidade</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-500/5 to-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 border border-amber-500/20"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${cert.icon} text-3xl sm:text-4xl text-amber-500`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {cert.description}
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
            src="https://readdy.ai/api/search-image?query=Professional%20security%20team%20in%20modern%20corporate%20environment%20diverse%20group%20of%20security%20professionals%20in%20uniform%20teamwork%20and%20collaboration%20contemporary%20office%20setting%20professional%20business%20atmosphere%20with%20security%20personnel%20working%20together&width=1920&height=800&seq=team-cta-v2&orientation=landscape"
            alt="Equipe Atlas"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            Pronto para Conhecer Nossas Soluções?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Entre em contato e descubra como podemos <strong>proteger seu patrimônio</strong> com excelência e tecnologia
          </p>
          <a
            href="https://w.app/atlasseguranca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-fill text-2xl"></i>
            Falar com Especialista
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
