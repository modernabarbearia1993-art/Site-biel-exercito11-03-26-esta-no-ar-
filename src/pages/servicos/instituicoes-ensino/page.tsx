import { useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function InstituicoesEnsino() {
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
      icon: 'ri-shield-user-line',
      title: 'Proteção de Alunos',
      description: 'Segurança especializada focada na proteção de crianças, adolescentes e jovens em ambiente escolar.'
    },
    {
      icon: 'ri-door-lock-line',
      title: 'Controle de Acesso',
      description: 'Sistema de identificação e controle de entrada e saída de alunos, responsáveis e visitantes.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Monitoramento Escolar',
      description: 'Vigilância eletrônica de áreas comuns, pátios, corredores e entradas com respeito à privacidade.'
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Resposta a Emergências',
      description: 'Protocolos especializados para situações de emergência com treinamento específico para ambiente escolar.'
    },
    {
      icon: 'ri-parent-line',
      title: 'Comunicação com Pais',
      description: 'Sistema de notificação para responsáveis sobre entrada e saída de alunos da instituição.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Prevenção de Bullying',
      description: 'Monitoramento preventivo e intervenção em situações de conflito para ambiente escolar seguro.'
    }
  ];

  const solutions = [
    {
      title: 'Escolas de Educação Infantil',
      description: 'Segurança especializada para crianças com controle rigoroso de acesso e monitoramento sensível.',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20kindergarten%20school%20building%20exterior%20with%20playground%2C%20early%20childhood%20education%20facility%20with%20security%20systems%2C%20safe%20children%20learning%20environment%2C%20bright%20welcoming%20atmosphere&width=800&height=600&seq=kindergarten-1&orientation=landscape'
    },
    {
      title: 'Ensino Fundamental e Médio',
      description: 'Proteção completa para escolas com portaria, rondas e controle de acesso de alunos e visitantes.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20elementary%20and%20high%20school%20building%20with%20students%20entrance%2C%20educational%20facility%20with%20security%20presence%2C%20safe%20learning%20campus%20with%20controlled%20access%2C%20contemporary%20school%20architecture&width=800&height=600&seq=school-building-1&orientation=landscape'
    },
    {
      title: 'Universidades e Faculdades',
      description: 'Segurança para campus universitários com controle de acesso, vigilância e gestão de eventos.',
      image: 'https://readdy.ai/api/search-image?query=University%20campus%20with%20modern%20academic%20buildings%2C%20college%20facility%20with%20students%20walking%2C%20higher%20education%20institution%20with%20security%20systems%2C%20contemporary%20campus%20architecture&width=800&height=600&seq=university-campus-1&orientation=landscape'
    },
    {
      title: 'Cursos e Escolas Técnicas',
      description: 'Proteção de instituições de ensino profissionalizante com controle de laboratórios e equipamentos.',
      image: 'https://readdy.ai/api/search-image?query=Technical%20school%20building%20with%20professional%20training%20facilities%2C%20vocational%20education%20center%20with%20modern%20equipment%2C%20technical%20institute%20with%20security%20systems%2C%20contemporary%20educational%20facility&width=800&height=600&seq=technical-school-1&orientation=landscape'
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
            src="https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20building%20with%20students%20entrance%2C%20school%20campus%20architecture%2C%20safe%20learning%20environment%2C%20professional%20security%20presence%2C%20academic%20facility%20with%20security%20systems%2C%20bright%20welcoming%20atmosphere&width=1920&height=800&seq=education-hero-1&orientation=landscape"
            alt="Segurança para Instituições de Ensino"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Segurança Educacional
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Instituições de Ensino
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Proteção especializada para escolas e universidades com <strong>foco na segurança de alunos e colaboradores</strong>, ambiente acolhedor e protocolos sensíveis
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
              Soluções completas para garantir um <strong>ambiente educacional seguro</strong> e acolhedor
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
              Segurança para Ambientes Educacionais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção completa para todos os níveis de ensino
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
            Proteja Sua Instituição de Ensino
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
