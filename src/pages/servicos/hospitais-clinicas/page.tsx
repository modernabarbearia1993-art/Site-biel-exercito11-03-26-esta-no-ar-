import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function HospitaisClinicas() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      icon: 'ri-hospital-line',
      title: 'Segurança Hospitalar',
      description: 'Proteção especializada para ambientes de saúde com protocolos sensíveis e atendimento humanizado.'
    },
    {
      icon: 'ri-shield-cross-line',
      title: 'Controle de Acesso',
      description: 'Gestão rigorosa de entrada e saída de pacientes, visitantes e profissionais de saúde.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Monitoramento Sensível',
      description: 'Vigilância eletrônica respeitando a privacidade dos pacientes e normas de saúde.'
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Resposta a Emergências',
      description: 'Equipe treinada para situações críticas com comunicação direta com equipes médicas.'
    },
    {
      icon: 'ri-medicine-bottle-line',
      title: 'Proteção de Medicamentos',
      description: 'Segurança de farmácias e almoxarifados com controle de acesso a medicamentos controlados.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Atendimento Humanizado',
      description: 'Equipe sensibilizada para lidar com pacientes, familiares e situações delicadas.'
    }
  ];

  const solutions = [
    {
      title: 'Hospitais Gerais',
      description: 'Segurança completa para hospitais com controle de acesso, vigilância e gestão de emergências médicas.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20emergency%20entrance%2C%20healthcare%20facility%20architecture%2C%20medical%20center%20with%20professional%20security%2C%20clean%20clinical%20environment%2C%20contemporary%20hospital%20design&width=800&height=600&seq=general-hospital-1&orientation=landscape'
    },
    {
      title: 'Clínicas e Consultórios',
      description: 'Proteção de clínicas médicas com portaria, controle de acesso e monitoramento discreto.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20building%20exterior%2C%20healthcare%20center%20with%20professional%20entrance%2C%20contemporary%20medical%20office%20facility%20with%20security%20systems%2C%20clean%20clinical%20architecture&width=800&height=600&seq=medical-clinic-1&orientation=landscape'
    },
    {
      title: 'Pronto-Socorro e UTI',
      description: 'Segurança especializada para áreas críticas com controle rigoroso e resposta imediata.',
      image: 'https://readdy.ai/api/search-image?query=Hospital%20emergency%20room%20entrance%20with%20ambulance%20bay%2C%20intensive%20care%20unit%20facility%2C%20critical%20care%20area%20with%20security%20systems%2C%20professional%20medical%20emergency%20department&width=800&height=600&seq=emergency-room-1&orientation=landscape'
    },
    {
      title: 'Laboratórios Médicos',
      description: 'Proteção de laboratórios com controle de acesso a áreas restritas e equipamentos sensíveis.',
      image: 'https://readdy.ai/api/search-image?query=Medical%20laboratory%20facility%20with%20modern%20equipment%2C%20clinical%20lab%20with%20security%20systems%2C%20professional%20healthcare%20testing%20center%2C%20contemporary%20medical%20research%20facility&width=800&height=600&seq=medical-lab-1&orientation=landscape'
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
            src="https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20healthcare%20facility%20architecture%2C%20medical%20center%20entrance%20with%20professional%20security%2C%20clean%20clinical%20environment%2C%20healthcare%20institution%20protection%2C%20contemporary%20medical%20building&width=1920&height=800&seq=healthcare-hero-1&orientation=landscape"
            alt="Segurança para Hospitais e Clínicas"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Segurança em Saúde
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Hospitais e Clínicas
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Proteção especializada para ambientes de saúde com <strong>protocolos sensíveis, atendimento humanizado</strong> e equipe treinada para situações críticas
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
              Soluções completas para garantir um <strong>ambiente de saúde seguro</strong> e acolhedor
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
              Segurança para Ambientes de Saúde
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção completa para todos os tipos de estabelecimentos de saúde
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
            Proteja Sua Instituição de Saúde
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
