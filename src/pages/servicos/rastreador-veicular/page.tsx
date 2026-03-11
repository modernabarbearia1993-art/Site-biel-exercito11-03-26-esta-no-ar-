import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

export default function RastreadorVeicularPage() {
  return (
    <div id="topo" className="min-h-screen bg-[#1a365d]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=modern%20vehicle%20GPS%20tracking%20system%20with%20satellite%20technology%20and%20digital%20map%20interface%20showing%20real%20time%20location%20monitoring%20clean%20simple%20background%20professional%20technology%20blue%20and%20gold%20tones%20corporate%20fleet%20management&width=1920&height=800&seq=rastreador-hero-001&orientation=landscape" 
            alt="Rastreador Veicular" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
            Rastreamento Inteligente
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight uppercase">
            Rastreador Veicular
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Tecnologia avançada de <strong className="text-[#c4954e]">rastreamento GPS</strong> para proteção total da sua frota e veículos pessoais
          </p>
        </div>
      </section>

      {/* O que é o Rastreador Veicular */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Rastreamento em Tempo Real
            </h2>
            <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed">
              Nosso <strong className="text-[#c4954e]">sistema de rastreamento veicular</strong> utiliza tecnologia GPS de última geração combinada com plataforma de monitoramento inteligente. Oferecemos proteção completa contra roubo, gestão eficiente de frotas e tranquilidade para você e sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=GPS%20tracking%20device%20installed%20in%20vehicle%20with%20digital%20interface%20showing%20location%20data%20and%20route%20mapping%20modern%20technology%20clean%20simple%20background%20professional%20blue%20and%20gold%20color%20scheme%20fleet%20management%20system&width=800&height=600&seq=rastreador-what-001&orientation=landscape" 
                alt="Sistema de Rastreamento" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-[#c4954e]/20"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-map-pin-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Localização Precisa</h3>
                    <p className="text-white leading-relaxed">Rastreamento GPS em tempo real com precisão de metros e histórico completo de rotas</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-alarm-warning-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Alertas Inteligentes</h3>
                    <p className="text-white leading-relaxed">Notificações automáticas de desvio de rota, excesso de velocidade e áreas restritas</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                    <i className="ri-shield-keyhole-line text-2xl text-[#c4954e]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#c4954e] mb-2">Bloqueio Remoto</h3>
                    <p className="text-white leading-relaxed">Capacidade de bloqueio do veículo à distância em caso de roubo ou emergência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos e Funcionalidades */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Recursos Avançados
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-route-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Histórico de Rotas</h3>
              <p className="text-white leading-relaxed">Acesso completo ao histórico de trajetos com data, hora e velocidade média</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-map-2-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Cerca Virtual</h3>
              <p className="text-white leading-relaxed">Criação de perímetros virtuais com alertas quando o veículo entra ou sai da área</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-dashboard-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Monitoramento de Velocidade</h3>
              <p className="text-white leading-relaxed">Controle de velocidade com alertas automáticos em caso de excesso</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-gas-station-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Controle de Combustível</h3>
              <p className="text-white leading-relaxed">Monitoramento do consumo de combustível e detecção de desvios</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-smartphone-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">App Mobile</h3>
              <p className="text-white leading-relaxed">Aplicativo para iOS e Android com todas as funcionalidades na palma da mão</p>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#c4954e]/20">
                <i className="ri-customer-service-2-line text-3xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#c4954e] mb-3">Suporte 24/7</h3>
              <p className="text-white leading-relaxed">Central de atendimento disponível 24 horas para emergências e suporte técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções para Diferentes Necessidades */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Soluções Personalizadas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#c4954e]/20">
                <i className="ri-car-line text-4xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#c4954e] mb-4">Veículos Pessoais</h3>
              <p className="text-white leading-relaxed mb-6">
                Proteção completa para seu carro, moto ou caminhonete com rastreamento em tempo real e recuperação rápida em caso de roubo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Instalação discreta e profissional</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Bateria de backup integrada</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Alertas de movimentação não autorizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Desconto em seguro automotivo</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#c4954e]/20">
                <i className="ri-truck-line text-4xl text-[#c4954e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#c4954e] mb-4">Gestão de Frotas</h3>
              <p className="text-white leading-relaxed mb-6">
                Solução completa para empresas com múltiplos veículos, otimizando rotas, reduzindo custos e aumentando a produtividade.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Painel de gestão centralizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Relatórios detalhados de desempenho</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Otimização de rotas e combustível</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                  <span className="text-white">Controle de jornada de motoristas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
              Por Que Escolher Nosso Rastreador
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-shield-check-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Alta Taxa de Recuperação</h3>
                <p className="text-white leading-relaxed">Mais de 95% de sucesso na recuperação de veículos roubados</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-money-dollar-circle-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Economia Garantida</h3>
                <p className="text-white leading-relaxed">Redução de até 40% nos custos operacionais de frotas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-time-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Instalação Rápida</h3>
                <p className="text-white leading-relaxed">Instalação profissional em menos de 2 horas sem danificar o veículo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#1a365d] border border-[#c4954e]/20 rounded-2xl p-6">
              <i className="ri-award-line text-3xl text-[#c4954e] flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-bold text-[#c4954e] mb-2">Tecnologia Certificada</h3>
                <p className="text-white leading-relaxed">Equipamentos homologados pela Anatel e certificados internacionalmente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1a365d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 uppercase">
            Proteja Seu Veículo Agora
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 sm:mb-10 leading-relaxed">
            Entre em contato e conheça nossos <strong className="text-[#c4954e]">planos de rastreamento veicular</strong> com a melhor tecnologia do mercado
          </p>
          <div className="flex justify-center">
            <a 
              href="https://w.app/atlasseguranca" 
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
