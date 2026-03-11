import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappNumber = '5511983793536';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#c4954e] rounded-xl flex items-center justify-center">
                <i className="ri-shield-star-fill text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold">Atlas</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Segurança e excelência em serviços há mais de 15 anos, protegendo o que é mais importante para você.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c4954e] transition-all cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c4954e] transition-all cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c4954e] transition-all cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/limpeza-conservacao#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Limpeza e Conservação
                </Link>
              </li>
              <li>
                <Link to="/servicos/seguranca-patrimonial#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Segurança Patrimonial
                </Link>
              </li>
              <li>
                <Link to="/servicos/solucoes-hibridas#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Soluções Híbridas
                </Link>
              </li>
              <li>
                <Link to="/servicos/facilities#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/servicos/totem-aguia#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Totem Águia
                </Link>
              </li>
              <li>
                <Link to="/servicos/rastreador-veicular#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Rastreador Veicular
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/condominios-residenciais#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Condomínios Residenciais
                </Link>
              </li>
              <li>
                <Link to="/servicos/empresas-corporacoes#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Empresas e Corporações
                </Link>
              </li>
              <li>
                <Link to="/servicos/instituicoes-ensino#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Instituições de Ensino
                </Link>
              </li>
              <li>
                <Link to="/servicos/hospitais-clinicas#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Hospitais e Clínicas
                </Link>
              </li>
              <li>
                <Link to="/servicos/shopping-centers#topo" className="text-gray-300 hover:text-[#c4954e] transition-colors cursor-pointer">
                  Shopping Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[#c4954e]">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="ri-phone-fill text-[#c4954e] flex-shrink-0"></i>
                <div className="flex flex-col">
                  <a href="tel:+551141182762" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">+55 11 4118-2762</a>
                  <a href="tel:+5511912178900" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">+55 11 91217-8900</a>
                  <a href="tel:+551156640599" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">+55 11 5664-0599</a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="ri-mail-fill text-[#c4954e] flex-shrink-0"></i>
                <div className="flex flex-col">
                  <a href="mailto:contato@atlasseg.com" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">contato@atlasseg.com</a>
                  <a href="mailto:adm@atlasseg.com" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">adm@atlasseg.com</a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="ri-whatsapp-fill text-[#c4954e] flex-shrink-0"></i>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-white hover:text-[#c4954e] transition-colors cursor-pointer">+55 11 98379-3536</a>
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a href="https://www.instagram.com/atlas_seg?igsh=MTBlNG1kdHdqdTdpdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#c4954e]/20 hover:bg-[#c4954e] rounded-full flex items-center justify-center transition-all cursor-pointer border border-[#c4954e]/20">
                <i className="ri-instagram-fill text-base sm:text-lg text-white"></i>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#c4954e]/20 hover:bg-[#c4954e] rounded-full flex items-center justify-center transition-all cursor-pointer border border-[#c4954e]/20">
                <i className="ri-whatsapp-fill text-base sm:text-lg text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left">
              © 2026 Atlas Segurança e Facilities. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/politicas-privacidade"
                className="text-white/70 hover:text-[#c4954e] text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Políticas de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
