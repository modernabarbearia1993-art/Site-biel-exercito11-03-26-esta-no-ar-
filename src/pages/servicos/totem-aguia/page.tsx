import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function TotemAguiaPage() {
  const whatsappNumber = '5511983793536';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para o Totem Águia.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="topo" className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background with Neutral Color */}
        <div className="absolute inset-0 z-0 bg-[#c4954f]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a365d]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#1a365d]/30">
            <i className="ri-shield-check-line text-[#1a365d] text-xl"></i>
            <span className="text-[#1a365d] font-medium">Tecnologia de Ponta</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            TOTEM ÁGUIA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sistema inteligente de monitoramento e controle de acesso com tecnologia de reconhecimento facial
          </p>

          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a365d] hover:bg-[#2d4a73] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-[#1a365d]/50 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-fill text-xl"></i>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* O que é o Totem Águia */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              O Que é o Totem Águia?
            </h2>
            <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed">
              O <strong className="text-[#c4954e]">Totem Águia</strong> é uma solução inovadora de segurança que combina câmeras de alta resolução, sensores inteligentes e tecnologia de análise de vídeo em um único equipamento. Projetado para oferecer vigilância completa e eficiente, o sistema proporciona monitoramento em tempo real com detecção automática de ameaças e alertas instantâneos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/8fb4254c657906e20dcd978b8be436fa.jpeg" 
                alt="Sistema Totem Águia" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-[#c4954e]/20"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-camera-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Câmeras de Alta Resolução</h3>
                    <p className="text-white leading-relaxed">Imagens nítidas com alta resolução, visão noturna avançada e zoom óptico para identificação precisa</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-radar-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Sensores Inteligentes</h3>
                    <p className="text-white leading-relaxed">Detecção de movimento, reconhecimento facial e análise comportamental em tempo real. Nossas câmeras possuem <strong>sistema LPR (Reconhecimento de Placas)</strong> para identificar veículos roubados automaticamente</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-notification-3-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Alertas Automáticos</h3>
                    <p className="text-white leading-relaxed">Notificações instantâneas para a central de monitoramento e dispositivos móveis</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-government-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Integração Governamental</h3>
                    <p className="text-white leading-relaxed"><strong>Sistema integrado com programas de segurança do governo</strong> para compartilhamento de informações e resposta coordenada a incidentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos e Tecnologias */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Recursos e Tecnologias
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-eye-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Visão 360°</h3>
              <p className="text-white leading-relaxed">Cobertura completa sem pontos cegos com múltiplas câmeras estrategicamente posicionadas</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-user-search-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Reconhecimento Facial</h3>
              <p className="text-white leading-relaxed">Identificação automática de pessoas com banco de dados integrado e alertas personalizados</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-line-chart-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Análise Comportamental</h3>
              <p className="text-white leading-relaxed">Detecção de comportamentos suspeitos e padrões anormais com inteligência artificial</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-cloud-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Armazenamento em Nuvem</h3>
              <p className="text-white leading-relaxed">Gravações seguras com acesso remoto e backup automático de todas as imagens</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-smartphone-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Acesso Mobile</h3>
              <p className="text-white leading-relaxed">Monitoramento em tempo real através de aplicativo para smartphones e tablets</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-flashlight-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Visão Noturna</h3>
              <p className="text-white leading-relaxed">Tecnologia infravermelha para monitoramento eficiente em condições de baixa luminosidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Onde Utilizar o Totem Águia
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c4954e]/20">
                <i className="ri-building-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#c4954e] mb-2">Condomínios</h3>
              <p className="text-sm text-white">Proteção de áreas comuns e perímetro</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c4954e]/20">
                <i className="ri-store-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#c4954e] mb-2">Shopping Centers</h3>
              <p className="text-sm text-white">Monitoramento de estacionamentos e acessos</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c4954e]/20">
                <i className="ri-briefcase-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#c4954e] mb-2">Empresas</h3>
              <p className="text-sm text-white">Segurança corporativa e controle de acesso</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c4954e]/20">
                <i className="ri-government-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#c4954e] mb-2">Órgãos Públicos</h3>
              <p className="text-sm text-white">Vigilância de instalações governamentais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Benefícios do Totem Águia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-shield-check-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Segurança Reforçada</h3>
                <p className="text-white leading-relaxed">Proteção 24/7 com monitoramento inteligente e resposta rápida a incidentes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-money-dollar-circle-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Redução de Custos</h3>
                <p className="text-white leading-relaxed">Menor necessidade de vigilância humana com automação inteligente</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-time-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Resposta Imediata</h3>
                <p className="text-white leading-relaxed">Alertas instantâneos permitem ação rápida em situações de emergência</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-file-list-3-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Evidências Confiáveis</h3>
                <p className="text-white leading-relaxed">Gravações em alta qualidade para investigações e processos legais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
            Proteja Seu Patrimônio com Tecnologia de Ponta
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 sm:mb-10 leading-relaxed">
            Entre em contato e descubra como o <strong className="text-[#c4954e]">Totem Águia</strong> pode revolucionar a segurança do seu negócio
          </p>
          <div className="flex justify-center">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c4954e] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8894a] transition-all whitespace-nowrap cursor-pointer shadow-lg max-w-full flex-shrink-0"
            >
              <i className="ri-whatsapp-fill text-2xl flex-shrink-0"></i>
              <span>Solicite um Orçamento</span>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
