import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

export default function PoliticasPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20legal%20document%20privacy%20policy%20concept%20with%20security%20shield%20icons%2C%20data%20protection%20symbols%2C%20modern%20minimalist%20corporate%20design%2C%20clean%20professional%20environment%2C%20soft%20lighting%2C%20business%20legal%20documentation%20theme&width=1920&height=800&seq=privacy-hero&orientation=landscape"
            alt="Políticas de Privacidade"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wide">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
            Políticas de Privacidade
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Última atualização: Janeiro de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Introdução */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              A <strong>Atlas Segurança e Facilities</strong> está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, visitantes do site e usuários de nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais de acordo com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Ao utilizar nossos serviços ou acessar nosso site, você concorda com os termos desta política.
            </p>
          </div>

          {/* Seção 1 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-xl text-amber-500"></i>
              </div>
              1. Informações que Coletamos
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.1. Informações Fornecidas Diretamente</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li>Nome completo, CPF/CNPJ, endereço, telefone e e-mail</li>
                <li>Informações de contato para solicitação de orçamentos</li>
                <li>Dados relacionados à contratação de serviços</li>
                <li>Comunicações com nossa equipe de atendimento</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.2. Informações Coletadas Automaticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li>Endereço IP, tipo de navegador e sistema operacional</li>
                <li>Páginas visitadas, tempo de navegação e origem do acesso</li>
                <li>Cookies e tecnologias similares de rastreamento</li>
                <li>Dados de geolocalização (quando autorizado)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.3. Informações de Serviços de Segurança</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li>Imagens de câmeras de segurança e controle de acesso</li>
                <li>Registros de entrada e saída de pessoas e veículos</li>
                <li>Dados biométricos (quando aplicável e autorizado)</li>
                <li>Relatórios de ocorrências e incidentes</li>
              </ul>
            </div>
          </div>

          {/* Seção 2 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-settings-3-line text-xl text-amber-500"></i>
              </div>
              2. Como Usamos Suas Informações
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Utilizamos as informações coletadas para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li><strong>Prestação de Serviços:</strong> Executar contratos, fornecer segurança patrimonial e facilities</li>
                <li><strong>Comunicação:</strong> Responder solicitações, enviar orçamentos e atualizações de serviços</li>
                <li><strong>Segurança:</strong> Proteger patrimônios, prevenir incidentes e investigar ocorrências</li>
                <li><strong>Melhorias:</strong> Aprimorar nossos serviços, tecnologias e atendimento ao cliente</li>
                <li><strong>Cumprimento Legal:</strong> Atender obrigações legais, regulatórias e fiscais</li>
                <li><strong>Marketing:</strong> Enviar informações sobre novos serviços (com seu consentimento)</li>
              </ul>
            </div>
          </div>

          {/* Seção 3 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-share-line text-xl text-amber-500"></i>
              </div>
              3. Compartilhamento de Informações
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Não vendemos seus dados pessoais. Compartilhamos informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li><strong>Prestadores de Serviço:</strong> Empresas que nos auxiliam em operações (tecnologia, logística)</li>
                <li><strong>Autoridades:</strong> Quando exigido por lei, ordem judicial ou requisição legal</li>
                <li><strong>Parceiros Comerciais:</strong> Com seu consentimento expresso para finalidades específicas</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger direitos, propriedade ou segurança da Atlas e terceiros</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Todos os terceiros são contratualmente obrigados a manter a confidencialidade e segurança dos dados.
              </p>
            </div>
          </div>

          {/* Seção 4 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-xl text-amber-500"></i>
              </div>
              4. Segurança dos Dados
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais de segurança, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso restrito a informações sensíveis</li>
                <li>Monitoramento contínuo de sistemas e redes</li>
                <li>Treinamento regular de colaboradores sobre proteção de dados</li>
                <li>Auditorias periódicas de segurança da informação</li>
                <li>Planos de resposta a incidentes de segurança</li>
              </ul>
            </div>
          </div>

          {/* Seção 5 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-xl text-amber-500"></i>
              </div>
              5. Retenção de Dados
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Mantemos seus dados pessoais pelo tempo necessário para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li>Cumprir as finalidades para as quais foram coletados</li>
                <li>Atender obrigações legais, contratuais e regulatórias</li>
                <li>Exercer direitos em processos judiciais ou administrativos</li>
                <li>Imagens de segurança: conforme legislação aplicável (geralmente 30 a 180 dias)</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Após esses períodos, os dados são eliminados ou anonimizados de forma segura.
              </p>
            </div>
          </div>

          {/* Seção 6 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-user-star-line text-xl text-amber-500"></i>
              </div>
              6. Seus Direitos (LGPD)
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização/Bloqueio:</strong> Solicitar anonimização ou bloqueio de dados desnecessários</li>
                <li><strong>Eliminação:</strong> Solicitar exclusão de dados tratados com seu consentimento</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e transferível</li>
                <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
                <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se a tratamentos realizados sem seu consentimento</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato: <strong>contato@atlasseg.com</strong> ou <strong>+55 11 4118-2762</strong>
              </p>
            </div>
          </div>

          {/* Seção 7 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-cookie-line text-xl text-amber-500"></i>
              </div>
              7. Cookies e Tecnologias Similares
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies para melhorar sua experiência em nosso site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                <li><strong>Essenciais:</strong> Necessários para funcionamento básico do site</li>
                <li><strong>Desempenho:</strong> Coletam informações sobre uso do site</li>
                <li><strong>Funcionais:</strong> Lembram suas preferências e escolhas</li>
                <li><strong>Marketing:</strong> Rastreiam visitas para fins publicitários (com consentimento)</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Você pode gerenciar cookies através das configurações do seu navegador.
              </p>
            </div>
          </div>

          {/* Seção 8 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-user-line text-xl text-amber-500"></i>
              </div>
              8. Menores de Idade
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes sem autorização dos responsáveis legais. Se identificarmos coleta inadvertida, os dados serão imediatamente eliminados.
              </p>
            </div>
          </div>

          {/* Seção 9 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-refresh-line text-xl text-amber-500"></i>
              </div>
              9. Alterações nesta Política
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed">
                Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível em nosso site com a data da última atualização. Alterações significativas serão comunicadas por e-mail ou aviso em destaque no site.
              </p>
            </div>
          </div>

          {/* Seção 10 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-mail-line text-xl text-amber-500"></i>
              </div>
              10. Entre em Contato
            </h2>
            <div className="pl-0 sm:pl-13">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Para dúvidas, solicitações ou exercício de direitos relacionados à privacidade:
              </p>
              <div className="bg-gradient-to-br from-amber-500/5 to-white rounded-2xl p-6 border border-amber-500/20">
                <p className="text-base text-gray-900 mb-2"><strong>Atlas Segurança e Facilities</strong></p>
                <p className="text-base text-gray-700 mb-1">
                  <i className="ri-mail-fill text-amber-500 mr-2"></i>
                  E-mail: contato@atlasseg.com
                </p>
                <p className="text-base text-gray-700 mb-1">
                  <i className="ri-phone-fill text-amber-500 mr-2"></i>
                  Telefone: +55 11 4118-2762
                </p>
                <p className="text-base text-gray-700">
                  <i className="ri-whatsapp-fill text-amber-500 mr-2"></i>
                  WhatsApp: +55 11 98379-3536
                </p>
              </div>
            </div>
          </div>

          {/* Nota Final */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 mt-12">
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              Esta Política de Privacidade está em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis à proteção de dados pessoais no Brasil.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
