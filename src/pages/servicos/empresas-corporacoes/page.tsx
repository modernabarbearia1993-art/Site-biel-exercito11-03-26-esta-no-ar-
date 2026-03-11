import { useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function EmpresasCorporacoes() {
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
      icon: 'ri-building-line',
      title: 'Segurança Corporativa',
      description: 'Proteção integral de instalações corporativas com vigilância armada e controle de acesso inteligente.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Gestão de Riscos',
      description: 'Análise e mitigação de riscos com planos de segurança personalizados para cada ambiente corporativo.'
    },
    {
      icon: 'ri-user-search-line',
      title: 'Controle de Acesso',
      description: 'Sistemas biométricos e credenciais inteligentes para controle rigoroso de entrada de colaboradores e visitantes.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Monitoramento Integrado',
      description: 'Central de monitoramento 24/7 com câmeras de alta resolução e vídeo analítico inteligente.'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Segurança Executiva',
      description: 'Proteção especializada para executivos e diretores com escolta e segurança pessoal.'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Proteção de Dados',
      description: 'Segurança física de data centers e áreas críticas com controle de acesso restrito.'
    }
  ];

  const solutions = [
    {
      title: 'Escritórios Corporativos',
      description: 'Segurança completa para ambientes corporativos com portaria, controle de acesso e monitoramento integrado.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20facade%2C%20professional%20business%20district%20architecture%2C%20contemporary%20commercial%20property%20entrance%20with%20security%20systems%2C%20clean%20professional%20environment&width=800&height=600&seq=corporate-office-1&orientation=landscape'
    },
    {
      title: 'Indústrias e Fábricas',
      description: 'Proteção de plantas industriais com vigilância de perímetro, controle de acesso e gestão de visitantes.',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20factory%20building%20exterior%2C%20manufacturing%20plant%20with%20security%20fence%20and%20access%20control%2C%20modern%20industrial%20facility%20with%20surveillance%20systems%2C%20professional%20industrial%20architecture&width=800&height=600&seq=industrial-plant-1&orientation=landscape'
    },
    {
      title: 'Centros de Distribuição',
      description: 'Segurança logística com controle de carga e descarga, monitoramento de estoque e vigilância 24 horas.',
      image: 'https://readdy.ai/api/search-image?query=Large%20distribution%20center%20warehouse%20with%20loading%20docks%2C%20logistics%20facility%20with%20security%20systems%2C%20modern%20storage%20and%20distribution%20building%20with%20surveillance%20cameras&width=800&height=600&seq=distribution-center-1&orientation=landscape'
    },
    {
      title: 'Data Centers',
      description: 'Proteção máxima para ambientes críticos com controle biométrico, monitoramento contínuo e protocolos rigorosos.',
      image: 'https://readdy.ai/api/search-image?query=Secure%20data%20center%20facility%20with%20server%20racks%2C%20high-tech%20IT%20infrastructure%20with%20advanced%20security%20systems%2C%20professional%20technology%20center%20with%20biometric%20access%20control&width=800&height=600&seq=data-center-1&orientation=landscape'
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
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20facade%20and%20professional%20entrance%2C%20business%20district%20architecture%2C%20advanced%20security%20systems%2C%20contemporary%20commercial%20property%2C%20clean%20professional%20environment&width=1920&height=800&seq=corporate-hero-1&orientation=landscape"
            alt="Segurança para Empresas e Corporações"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Segurança Corporativa
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Empresas e Corporações
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Soluções integradas de segurança para ambientes corporativos com <strong>tecnologia avançada, gestão de riscos</strong> e equipe especializada
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
              Soluções completas para garantir a <strong>segurança total</strong> de sua operação corporativa
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
              Segurança Corporativa Integrada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção completa para todos os tipos de ambientes corporativos
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
            Proteja Sua Empresa
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato e conheça nossas soluções corporativas
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
