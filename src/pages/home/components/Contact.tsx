
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('service', formData.service);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d5hsuvhia7n1eqcquq20', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '5511983793536';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-1 gap-12 sm:gap-16">
          {/* Left Content */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-4 text-center">
              ENTRE EM CONTATO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4954e] mb-4 sm:mb-6 leading-tight text-center px-4 uppercase">
              Solicite um Orçamento Personalizado
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-8 sm:mb-12 leading-relaxed text-center px-4">
              Nossa equipe está pronta para avaliar suas necessidades e criar a <strong className="text-[#c4954e]">solução de segurança e facilities ideal</strong> para você. Atendimento <strong className="text-[#c4954e]">24 horas</strong> com resposta rápida.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                  <i className="ri-phone-fill text-xl sm:text-2xl text-[#c4954e]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#c4954e] mb-1 text-sm sm:text-base">Telefone</h4>
                  <a href="tel:+551141182762" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer block">+55 11 4118-2762</a>
                  <a href="tel:+5511912178900" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer block">+55 11 91217-8900</a>
                  <a href="tel:+551156640599" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer block">+55 11 5664-0599</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                  <i className="ri-whatsapp-fill text-xl sm:text-2xl text-[#c4954e]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#c4954e] mb-1 text-sm sm:text-base">WhatsApp</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">+55 11 98379-3536</a>
                  <p className="text-white/70 text-xs sm:text-sm">Atendimento 24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                  <i className="ri-mail-fill text-xl sm:text-2xl text-[#c4954e]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#c4954e] mb-1 text-sm sm:text-base">E-mail</h4>
                  <a href="mailto:contato@atlasseg.com" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer block">contato@atlasseg.com</a>
                  <a href="mailto:adm@atlasseg.com" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer block">adm@atlasseg.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                  <i className="ri-map-pin-fill text-xl sm:text-2xl text-[#c4954e]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#c4954e] mb-1 text-sm sm:text-base">Endereço</h4>
                  <p className="text-sm sm:text-base text-white">Av. Ibirapuera, 2033 – 8° andar, Conj. 81</p>
                  <p className="text-sm sm:text-base text-white">Moema – Edifício Edel Trade Center</p>
                  <p className="text-sm sm:text-base text-white">CEP: 04029-901 – São Paulo/SP</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4954e]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#c4954e]/20">
                  <i className="ri-time-fill text-xl sm:text-2xl text-[#c4954e]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#c4954e] mb-1 text-sm sm:text-base">Horário de Atendimento</h4>
                  <p className="text-sm sm:text-base text-white">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm sm:text-base text-white"><strong className="text-[#c4954e]">Emergências: 24 horas por dia</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
