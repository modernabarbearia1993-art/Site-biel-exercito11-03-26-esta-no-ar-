import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function SegurancaPatrimonial() {
  const whatsappNumber = '551141182762';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="topo" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-5xl text-amber-500"></i>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Segurança Patrimonial
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proteção completa com monitoramento 24 horas, tecnologia avançada e equipe altamente qualificada
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Proteção Total para seu Patrimônio
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa <strong>segurança patrimonial</strong> oferece proteção completa com vigilância armada, monitoramento 24 horas e sistemas integrados de controle de acesso. Contamos com profissionais treinados e certificados para garantir a segurança do seu patrimônio.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizamos tecnologia de ponta combinada com a experiência de nossa equipe para prevenir incidentes e responder rapidamente a qualquer situação de risco.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20security%20guard%20in%20uniform%20monitoring%20surveillance%20screens%20in%20modern%20control%20room%20with%20multiple%20displays%20showing%20building%20security%20cameras%20high%20tech%20security%20operations%20center%20with%20blue%20ambient%20lighting&width=800&height=600&seq=segpat001&orientation=landscape"
                alt="Segurança Patrimonial"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
                Nossos Serviços
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight uppercase">
                Soluções Completas em Segurança
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-shield-user-line',
                  title: 'Vigilância Armada',
                  description: 'Profissionais treinados e armados para proteção ostensiva do seu patrimônio'
                },
                {
                  icon: 'ri-eye-line',
                  title: 'Monitoramento 24h',
                  description: 'Central de monitoramento com câmeras e alarmes funcionando ininterruptamente'
                },
                {
                  icon: 'ri-door-lock-line',
                  title: 'Controle de Acesso',
                  description: 'Sistemas integrados de controle de entrada e saída com tecnologia biométrica'
                },
                {
                  icon: 'ri-alarm-warning-line',
                  title: 'Resposta Rápida',
                  description: 'Equipe preparada para responder imediatamente a qualquer incidente'
                },
                {
                  icon: 'ri-user-search-line',
                  title: 'Segurança Pessoal',
                  description: 'Proteção individual para executivos e pessoas que necessitam segurança especial'
                },
                {
                  icon: 'ri-building-line',
                  title: 'Vigia e Recepção',
                  description: 'Profissionais para portaria, recepção e controle de visitantes'
                }
              ].map((service, index) => (
                <div key={index} className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-3xl text-amber-500`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
                Diferenciais
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight uppercase">
                Por Que Escolher a Atlas
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'ri-medal-line', text: 'Equipe Certificada' },
                { icon: 'ri-time-line', text: 'Disponibilidade 24/7' },
                { icon: 'ri-shield-check-line', text: 'Tecnologia Avançada' },
                { icon: 'ri-customer-service-2-line', text: 'Suporte Dedicado' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-3xl text-white`}></i>
                  </div>
                  <p className="text-white font-semibold text-lg">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Proteja seu Patrimônio Agora
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Entre em contato conosco e solicite um orçamento personalizado para segurança patrimonial
            </p>
            <div className="flex justify-center px-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#20BA5A] transition-all whitespace-nowrap cursor-pointer text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl max-w-full"
              >
                <i className="ri-whatsapp-fill text-xl sm:text-2xl flex-shrink-0"></i>
                <span className="truncate">Solicitar Orçamento via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
