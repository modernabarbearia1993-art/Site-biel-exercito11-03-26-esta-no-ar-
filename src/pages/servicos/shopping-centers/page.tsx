import { useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function ShoppingCenters() {
  const navigate = useNavigate();

  const whatsappNumber = '551141182762';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: 'ri-shopping-bag-line',
      title: 'Segurança de Varejo',
      description: 'Proteção especializada para ambientes comerciais com grande fluxo de pessoas e mercadorias.'
    },
    {
      icon: 'ri-team-line',
      title: 'Gestão de Multidões',
      description: 'Controle de fluxo de pessoas em eventos, promoções e períodos de alta movimentação.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Monitoramento Integrado',
      description: 'Sistema completo de câmeras cobrindo todas as áreas comuns, lojas e estacionamentos.'
    },
    {
      icon: 'ri-car-line',
      title: 'Segurança de Estacionamento',
      description: 'Vigilância e controle de estacionamentos com tecnologia de reconhecimento de placas.'
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Resposta Rápida',
      description: 'Equipe de resposta imediata a incidentes com comunicação integrada com lojistas.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Prevenção de Perdas',
      description: 'Estratégias de prevenção de furtos e roubos com apoio às operações de segurança das lojas.'
    }
  ];

  const solutions = [
    {
      icon: 'ri-shield-user-line',
      title: 'Segurança Patrimonial',
      description: 'Vigilância ostensiva e discreta em todas as áreas do shopping, com equipes especializadas em gestão de multidões e prevenção de perdas.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20security%20guard%20in%20modern%20shopping%20mall%20interior%20with%20bright%20lighting%20stores%20in%20background%20vigilant%20security%20officer%20monitoring%20retail%20environment%20contemporary%20commercial%20center%20with%20clean%20professional%20atmosphere%20wide%20corridor%20view%20with%20shoppers%20walking&width=800&height=600&seq=shopping-security-patrol-v2&orientation=landscape'
    },
    {
      icon: 'ri-camera-line',
      title: 'Monitoramento Inteligente',
      description: 'Central de monitoramento 24/7 com câmeras de alta resolução, análise de vídeo e resposta rápida a qualquer ocorrência.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20control%20room%20with%20multiple%20large%20monitors%20displaying%20shopping%20mall%20surveillance%20camera%20feeds%20professional%20monitoring%20center%20with%20operators%20at%20workstations%20advanced%20video%20analytics%20technology%20organized%20command%20center%20environment%20with%20security%20personnel&width=800&height=600&seq=shopping-monitoring-v2&orientation=landscape'
    },
    {
      icon: 'ri-car-line',
      title: 'Gestão de Estacionamento',
      description: 'Controle de acesso, monitoramento de vagas, segurança veicular e assistência aos clientes no estacionamento.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20shopping%20mall%20underground%20parking%20garage%20with%20bright%20LED%20lighting%20security%20cameras%20and%20clear%20signage%20organized%20parking%20spaces%20with%20painted%20lines%20clean%20well%20maintained%20parking%20facility%20contemporary%20commercial%20parking%20structure%20with%20cars%20parked&width=800&height=600&seq=shopping-parking-v2&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Atendimento ao Cliente',
      description: 'Equipe treinada para orientação de visitantes, informações sobre lojas e serviços, e suporte em situações especiais.',
      image: 'https://readdy.ai/api/search-image?query=Friendly%20customer%20service%20representative%20helping%20shoppers%20at%20modern%20shopping%20mall%20information%20desk%20professional%20staff%20member%20in%20uniform%20assisting%20visitors%20bright%20welcoming%20retail%20environment%20contemporary%20commercial%20center%20with%20clean%20professional%20atmosphere%20people%20interacting&width=800&height=600&seq=shopping-customer-v2&orientation=landscape'
    }
  ];

  return (
    <div id="topo" className="min-h-screen bg-white">
      <Navbar scrolled={true} />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20shopping%20mall%20interior%20with%20wide%20corridors%20retail%20center%20architecture%20shoppers%20walking%20in%20contemporary%20commercial%20space%20professional%20security%20monitoring%20bright%20inviting%20retail%20environment%20clean%20modern%20design%20with%20stores%20and%20natural%20lighting&width=1920&height=800&seq=shopping-hero-v2&orientation=landscape"
            alt="Segurança para Shopping Centers"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Segurança Comercial
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Shopping Centers
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Proteção completa para shopping centers com <strong>cobertura total, gestão de multidões</strong> e equipe especializada em ambientes de varejo
            </p>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Diferenciais
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight uppercase">
              Por Que Escolher a Atlas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para garantir a <strong>segurança total</strong> de seu shopping center
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-3xl text-amber-500`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Soluções Especializadas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight uppercase">
              Segurança para Grandes Espaços Comerciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção completa para todas as áreas do shopping center
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Proteja Seu Shopping Center
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato e conheça nossas soluções especializadas
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
