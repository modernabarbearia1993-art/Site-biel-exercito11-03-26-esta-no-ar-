import { useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function CondominiosResidenciais() {
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
      icon: 'ri-home-smile-line',
      title: 'Portaria 24 Horas',
      description: 'Profissionais treinados para atendimento cordial e controle rigoroso de acesso de moradores e visitantes.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Vigilância Eletrônica',
      description: 'Sistema completo de câmeras com monitoramento em tempo real de todas as áreas comuns do condomínio.'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Rondas Preventivas',
      description: 'Rondas periódicas em todas as áreas do condomínio para garantir a segurança e tranquilidade dos moradores.'
    },
    {
      icon: 'ri-car-line',
      title: 'Controle de Veículos',
      description: 'Gestão de entrada e saída de veículos com registro e identificação para máxima segurança.'
    },
    {
      icon: 'ri-notification-line',
      title: 'Central de Alarmes',
      description: 'Monitoramento de alarmes residenciais com resposta imediata a qualquer acionamento.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Atendimento Personalizado',
      description: 'Equipe treinada para atendimento diferenciado e resolução de demandas dos moradores.'
    }
  ];

  const solutions = [
    {
      title: 'Condomínios Verticais',
      description: 'Segurança completa para edifícios residenciais com portaria, monitoramento e controle de acesso integrado.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20apartment%20building%20exterior%2C%20tall%20condominium%20tower%20with%20glass%20facade%2C%20elegant%20entrance%20lobby%20with%20security%20desk%2C%20professional%20residential%20complex%20architecture%2C%20upscale%20urban%20living&width=800&height=600&seq=vertical-condo-1&orientation=landscape'
    },
    {
      title: 'Condomínios Horizontais',
      description: 'Proteção de condomínios fechados com rondas, controle de acesso e monitoramento de perímetro.',
      image: 'https://readdy.ai/api/search-image?query=Gated%20residential%20community%20with%20modern%20houses%2C%20horizontal%20condominium%20with%20security%20gate%20entrance%2C%20suburban%20residential%20complex%20with%20green%20areas%2C%20safe%20neighborhood%20with%20controlled%20access&width=800&height=600&seq=horizontal-condo-1&orientation=landscape'
    },
    {
      title: 'Áreas de Lazer',
      description: 'Monitoramento de piscinas, salões de festas, academias e demais áreas comuns para segurança dos moradores.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20condominium%20leisure%20area%20with%20swimming%20pool%2C%20modern%20party%20hall%20and%20gym%20facilities%2C%20residential%20amenities%20with%20security%20cameras%2C%20upscale%20common%20areas%20in%20residential%20complex&width=800&height=600&seq=leisure-areas-1&orientation=landscape'
    },
    {
      title: 'Estacionamentos',
      description: 'Controle e vigilância de garagens e estacionamentos com tecnologia de reconhecimento de placas.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20parking%20garage%20with%20security%20cameras%2C%20underground%20condominium%20parking%20area%20with%20license%20plate%20recognition%20system%2C%20well-lit%20secure%20parking%20facility%20with%20surveillance&width=800&height=600&seq=parking-security-1&orientation=landscape'
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
            src="https://readdy.ai/api/search-image?query=Luxury%20residential%20condominium%20building%20entrance%20with%20modern%20architecture%2C%20elegant%20lobby%20area%2C%20security%20access%20control%20systems%2C%20professional%20residential%20complex%2C%20upscale%20living%20environment%2C%20clean%20contemporary%20design&width=1920&height=800&seq=residential-hero-1&orientation=landscape"
            alt="Segurança para Condomínios Residenciais"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Segurança Residencial
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Condomínios Residenciais
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Proteção completa para condomínios com <strong>portaria 24 horas, monitoramento inteligente</strong> e equipe qualificada para garantir tranquilidade aos moradores
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
              Soluções completas para garantir a <strong>segurança e conforto</strong> de todos os moradores
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
              Segurança e Conforto para Moradores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção completa para todos os tipos de condomínios residenciais
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
            Proteja Seu Condomínio
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
