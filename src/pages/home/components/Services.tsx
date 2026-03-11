
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    // Força scroll imediato para o topo
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const services = [
    {
      icon: 'ri-shield-check-line',
      title: 'Segurança Patrimonial',
      description: 'Monitoramento 24 horas com tecnologia avançada e resposta rápida a incidentes. Vigilância armada, segurança pessoal, vigia, operador de monitoramento, recepção profissional e sistemas de controle de acesso integrados.',
      features: ['Vigilância Armada', 'Monitoramento 24h', 'Controle de Acesso', 'Resposta Rápida'],
      path: '/servicos/seguranca-patrimonial'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Limpeza e Conservação',
      description: 'Limpeza profissional com conservação sustentável e personalização de serviços. Oferecemos soluções completas para manter seu ambiente sempre impecável, seguro e confortável.',
      features: ['Limpeza Profissional', 'Conservação Sustentável', 'Serviços Personalizados', 'Equipe Qualificada'],
      path: '/servicos/limpeza-conservacao'
    },
    {
      icon: 'ri-cpu-line',
      title: 'Soluções Híbridas',
      description: 'Eficiência operacional com integração tecnológica e flexibilidade adaptativa. Portaria remota, controle de acesso inteligente, reconhecimento facial, vídeo analítico e monitoramento com drones.',
      features: ['Portaria Remota', 'Reconhecimento Facial', 'Vídeo Analítico', 'Monitoramento Drones'],
      path: '/servicos/solucoes-hibridas'
    },
    {
      icon: 'ri-service-line',
      title: 'Mais de 20 Serviços',
      description: 'Gestão de estacionamento, apoio operacional, serviços de eventos e muito mais. Cada solução contribui para um ambiente corporativo eficiente, seguro e confortável.',
      features: ['Gestão Estacionamento', 'Apoio Operacional', 'Serviços Eventos', 'Facilities Completo'],
      path: '/servicos/facilities'
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight uppercase">
            Soluções Integradas para Sua Segurança
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Comprometemo-nos a oferecer <strong className="text-[#c4954e]">soluções abrangentes e de alta qualidade</strong>. De segurança patrimonial a facilities, cada serviço é concebido para superar desafios e proporcionar resultados exemplares.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a365d] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-[#c4954e]/20 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#c4954e]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#c4954e]/20 transition-all border border-[#c4954e]/20">
                <i className={`${service.icon} text-2xl sm:text-3xl text-[#c4954e]`}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#c4954e] mb-3 sm:mb-4 group-hover:text-[#c4954e] transition-all">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>
              <div className="space-y-2 sm:space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-fill text-[#c4954e] flex-shrink-0"></i>
                    <span className="text-xs sm:text-sm font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNavigate(service.path)}
                className="w-full bg-[#c4954e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b8894a] transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
