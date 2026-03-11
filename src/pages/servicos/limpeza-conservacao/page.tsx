import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function LimpezaConservacao() {
  const whatsappNumber = '551141182762';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="topo" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-building-4-line text-5xl text-amber-500"></i>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Limpeza e Conservação
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ambientes impecáveis com práticas sustentáveis e equipe altamente qualificada
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/280b61784bbb9e17f59cb6a660edb20e.png"
                alt="Limpeza e Conservação"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Excelência em Limpeza Profissional
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oferecemos serviços completos de <strong>limpeza e conservação</strong> com foco em qualidade, sustentabilidade e personalização. Nossa equipe é treinada para manter seu ambiente sempre impecável, seguro e confortável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizamos produtos ecológicos e técnicas modernas de limpeza que garantem resultados superiores enquanto preservam o meio ambiente e a saúde de todos.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
                Nossos Serviços
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight uppercase">
                Soluções Completas em Limpeza
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-building-2-line',
                  title: 'Limpeza Corporativa',
                  description: 'Manutenção diária de escritórios, salas e áreas comuns com padrão corporativo'
                },
                {
                  icon: 'ri-leaf-line',
                  title: 'Conservação Sustentável',
                  description: 'Práticas ecológicas com produtos biodegradáveis e processos sustentáveis'
                },
                {
                  icon: 'ri-tools-line',
                  title: 'Limpeza Especializada',
                  description: 'Serviços técnicos para vidros, fachadas, carpetes e áreas específicas'
                },
                {
                  icon: 'ri-calendar-check-line',
                  title: 'Manutenção Programada',
                  description: 'Cronograma personalizado de limpeza e conservação preventiva'
                },
                {
                  icon: 'ri-team-line',
                  title: 'Equipe Qualificada',
                  description: 'Profissionais treinados e uniformizados com supervisão constante'
                },
                {
                  icon: 'ri-settings-3-line',
                  title: 'Serviços Personalizados',
                  description: 'Soluções adaptadas às necessidades específicas de cada cliente'
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
                { icon: 'ri-recycle-line', text: 'Produtos Ecológicos' },
                { icon: 'ri-shield-check-line', text: 'Qualidade Garantida' },
                { icon: 'ri-user-star-line', text: 'Equipe Treinada' },
                { icon: 'ri-customer-service-line', text: 'Atendimento Personalizado' }
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
              Mantenha seu Ambiente Impecável
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Solicite um orçamento personalizado para limpeza e conservação do seu espaço
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
