import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: 'https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/842bb50907f1b96bb628f508575ec8da.png',
      quote: 'A Atlas transformou completamente a segurança da nossa escola. O monitoramento 24 horas e a equipe altamente qualificada nos dão total tranquilidade. A experiência militar da liderança se reflete na precisão e eficácia de cada estratégia implementada.',
      name: 'Maria Silva',
      position: 'Diretora - Colégio Santa Maria'
    },
    {
      image: 'https://static.readdy.ai/image/714bcb865f05da04e419faf9042748d8/a48d062971e4d8d45d25aabf7cc16819.jpeg',
      quote: 'As soluções híbridas com tecnologia integrada superaram todas as expectativas. A combinação de pessoas e tecnologia, com resposta rápida a incidentes, nos trouxe paz de espírito para focar no crescimento do negócio. Recomendo fortemente!',
      name: 'Carlos Mendes',
      position: 'CEO - TechCorp Solutions'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=professional-elegant-brazilian-woman-business-owner-smiling-confidently-wearing-sophisticated-business-attire-modern-corporate-office-background-natural-lighting-warm-professional-atmosphere-high-quality-portrait-photography-clean-simple-background&width=800&height=1000&seq=testimonial-ana-paula-v2&orientation=portrait',
      quote: 'Contratei os serviços de facilities e segurança patrimonial e estou extremamente satisfeita. A personalização dos serviços e a inovação contínua fazem toda a diferença. Minha família se sente protegida com a tecnologia avançada e o atendimento impecável.',
      name: 'Ana Paula Costa',
      position: 'Proprietária Residencial'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#c4954e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight uppercase">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1a365d] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#c4954e]/20">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative">
                <div className="w-full h-64 sm:h-80 md:h-full md:min-h-[500px] overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6 sm:mb-8">
                  <i className="ri-double-quotes-l text-4xl sm:text-5xl lg:text-6xl text-[#c4954e] opacity-50"></i>
                </div>
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-[#c4954e] text-xl sm:text-2xl font-bold mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/20 hover:bg-[#c4954e]/30 rounded-full flex items-center justify-center transition-all cursor-pointer border border-[#c4954e]/20"
                  >
                    <i className="ri-arrow-left-line text-[#c4954e] text-lg sm:text-xl"></i>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/20 hover:bg-[#c4954e]/30 rounded-full flex items-center justify-center transition-all cursor-pointer border border-[#c4954e]/20"
                  >
                    <i className="ri-arrow-right-line text-[#c4954e] text-lg sm:text-xl"></i>
                  </button>
                  <div className="flex gap-2 ml-2 sm:ml-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          index === currentIndex ? 'bg-[#c4954e] w-6 sm:w-8' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
