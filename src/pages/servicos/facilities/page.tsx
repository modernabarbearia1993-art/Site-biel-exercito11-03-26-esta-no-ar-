import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function Facilities() {
  const whatsappNumber = '551141182762';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="topo" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-service-line text-5xl text-amber-500"></i>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Gestão de Facilities
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais de 20 serviços integrados para gestão completa do seu ambiente corporativo
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
                src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20facilities%20management%20team%20coordinating%20multiple%20services%20including%20maintenance%20parking%20management%20and%20event%20support%20professional%20business%20environment%20with%20organized%20workspace&width=800&height=600&seq=facil001&orientation=landscape"
                alt="Facilities"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Gestão Completa de Facilities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oferecemos <strong>mais de 20 serviços integrados</strong> para gestão completa do seu ambiente corporativo. Da gestão de estacionamento ao apoio operacional, cada solução contribui para um ambiente eficiente, seguro e confortável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa equipe especializada cuida de todos os aspectos operacionais, permitindo que você foque no core business da sua empresa.
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
                Mais de 20 Serviços Especializados
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-parking-box-line',
                  title: 'Gestão de Estacionamento',
                  description: 'Controle completo de vagas, manobristas e sistemas automatizados'
                },
                {
                  icon: 'ri-tools-fill',
                  title: 'Manutenção Predial',
                  description: 'Manutenção preventiva e corretiva de instalações e equipamentos'
                },
                {
                  icon: 'ri-calendar-event-line',
                  title: 'Serviços de Eventos',
                  description: 'Apoio completo para realização de eventos corporativos'
                },
                {
                  icon: 'ri-user-settings-line',
                  title: 'Apoio Operacional',
                  description: 'Equipe de apoio para diversas demandas operacionais do dia a dia'
                },
                {
                  icon: 'ri-plant-line',
                  title: 'Jardinagem e Paisagismo',
                  description: 'Manutenção de áreas verdes e projetos de paisagismo'
                },
                {
                  icon: 'ri-restaurant-line',
                  title: 'Gestão de Refeitórios',
                  description: 'Administração completa de refeitórios e copas corporativas'
                },
                {
                  icon: 'ri-mail-line',
                  title: 'Serviços de Malote',
                  description: 'Transporte seguro de documentos e correspondências'
                },
                {
                  icon: 'ri-file-copy-line',
                  title: 'Reprografia',
                  description: 'Serviços de cópias, impressões e digitalização de documentos'
                },
                {
                  icon: 'ri-recycle-line',
                  title: 'Gestão de Resíduos',
                  description: 'Coleta seletiva e descarte sustentável de resíduos'
                },
                {
                  icon: 'ri-water-flash-line',
                  title: 'Gestão de Utilidades',
                  description: 'Controle e otimização de água, energia e recursos'
                },
                {
                  icon: 'ri-phone-line',
                  title: 'Recepção e Telefonia',
                  description: 'Atendimento profissional e gestão de chamadas'
                },
                {
                  icon: 'ri-shopping-cart-line',
                  title: 'Compras e Suprimentos',
                  description: 'Gestão de compras e controle de estoque de materiais'
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
                { icon: 'ri-focus-line', text: 'Foco no Core Business' },
                { icon: 'ri-money-dollar-circle-line', text: 'Redução de Custos' },
                { icon: 'ri-team-line', text: 'Equipe Especializada' },
                { icon: 'ri-bar-chart-box-line', text: 'Gestão Eficiente' }
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
              Simplifique a Gestão do seu Negócio
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Conheça nossas soluções completas de facilities e otimize sua operação
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
