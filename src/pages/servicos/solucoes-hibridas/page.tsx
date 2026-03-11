import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function SolucoesHibridas() {
  return (
    <div id="topo" className="min-h-screen bg-white">
      <Navbar scrolled={false} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-cpu-line text-5xl text-amber-500"></i>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
              Soluções Híbridas
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia avançada integrada com serviços humanos para máxima eficiência operacional
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
                O Futuro da Segurança e Gestão
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossas <strong>soluções híbridas</strong> combinam o melhor da tecnologia com a expertise humana. Oferecemos portaria remota, controle de acesso inteligente, reconhecimento facial, vídeo analítico e monitoramento com drones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Essa integração proporciona eficiência operacional, redução de custos e flexibilidade adaptativa para atender às demandas do seu negócio.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20hybrid%20security%20technology%20system%20with%20artificial%20intelligence%20facial%20recognition%20biometric%20access%20control%20smart%20surveillance%20cameras%20integrated%20monitoring%20dashboard%20modern%20corporate%20building%20security%20operations%20center%20with%20professional%20technology%20equipment%20and%20blue%20lighting&width=800&height=600&seq=hybrid-tech-v2&orientation=landscape"
                alt="Soluções Híbridas"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Tecnologias e Serviços Integrados
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-remote-control-line',
                  title: 'Portaria Remota',
                  description: 'Gestão de acesso à distância com atendimento virtual e controle em tempo real'
                },
                {
                  icon: 'ri-fingerprint-line',
                  title: 'Controle de Acesso Inteligente',
                  description: 'Sistemas biométricos e cartões inteligentes para controle preciso de entrada'
                },
                {
                  icon: 'ri-user-smile-line',
                  title: 'Reconhecimento Facial',
                  description: 'Tecnologia de IA para identificação automática e segura de pessoas'
                },
                {
                  icon: 'ri-video-line',
                  title: 'Vídeo Analítico',
                  description: 'Análise inteligente de imagens para detecção de comportamentos suspeitos'
                },
                {
                  icon: 'ri-flight-takeoff-line',
                  title: 'Monitoramento com Drones',
                  description: 'Vigilância aérea para grandes áreas e inspeções de difícil acesso'
                },
                {
                  icon: 'ri-dashboard-line',
                  title: 'Central Integrada',
                  description: 'Plataforma única para gerenciar todos os sistemas de segurança'
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
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Vantagens das Soluções Híbridas
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'ri-line-chart-line', text: 'Eficiência Operacional' },
                { icon: 'ri-money-dollar-circle-line', text: 'Redução de Custos' },
                { icon: 'ri-settings-4-line', text: 'Flexibilidade Total' },
                { icon: 'ri-shield-star-line', text: 'Segurança Avançada' }
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
          <div className="text-center bg-[#FAF8F5] rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modernize sua Segurança Agora
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4">
              Descubra como nossas soluções híbridas podem transformar a gestão do seu negócio
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const whatsappNumber = '5511983793536';
                  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
                  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20BA5A] transition-all whitespace-nowrap cursor-pointer text-base shadow-lg hover:shadow-xl"
              >
                <i className="ri-whatsapp-fill text-xl"></i>
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
