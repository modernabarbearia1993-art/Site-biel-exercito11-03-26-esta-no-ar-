import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SobrePage = lazy(() => import('../pages/sobre/page'));
const SegurancaPatrimonialPage = lazy(() => import('../pages/servicos/seguranca-patrimonial/page'));
const LimpezaConservacaoPage = lazy(() => import('../pages/servicos/limpeza-conservacao/page'));
const SolucoesHibridasPage = lazy(() => import('../pages/servicos/solucoes-hibridas/page'));
const FacilitiesPage = lazy(() => import('../pages/servicos/facilities/page'));
const TotemAguiaPage = lazy(() => import('../pages/servicos/totem-aguia/page'));
const RastreadorVeicularPage = lazy(() => import('../pages/servicos/rastreador-veicular/page'));
const CondominiosResidenciaisPage = lazy(() => import('../pages/servicos/condominios-residenciais/page'));
const EmpresasCorporacoesPage = lazy(() => import('../pages/servicos/empresas-corporacoes/page'));
const InstituicoesEnsinoPage = lazy(() => import('../pages/servicos/instituicoes-ensino/page'));
const HospitaisClinicasPage = lazy(() => import('../pages/servicos/hospitais-clinicas/page'));
const ShoppingCentersPage = lazy(() => import('../pages/servicos/shopping-centers/page'));
const PoliticasPrivacidadePage = lazy(() => import('../pages/politicas-privacidade/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/sobre',
    element: <SobrePage />
  },
  {
    path: '/servicos/seguranca-patrimonial',
    element: <SegurancaPatrimonialPage />
  },
  {
    path: '/servicos/limpeza-conservacao',
    element: <LimpezaConservacaoPage />
  },
  {
    path: '/servicos/solucoes-hibridas',
    element: <SolucoesHibridasPage />
  },
  {
    path: '/servicos/facilities',
    element: <FacilitiesPage />
  },
  {
    path: '/servicos/totem-aguia',
    element: <TotemAguiaPage />
  },
  {
    path: '/servicos/rastreador-veicular',
    element: <RastreadorVeicularPage />
  },
  {
    path: '/servicos/condominios-residenciais',
    element: <CondominiosResidenciaisPage />
  },
  {
    path: '/servicos/empresas-corporacoes',
    element: <EmpresasCorporacoesPage />
  },
  {
    path: '/servicos/instituicoes-ensino',
    element: <InstituicoesEnsinoPage />
  },
  {
    path: '/servicos/hospitais-clinicas',
    element: <HospitaisClinicasPage />
  },
  {
    path: '/servicos/shopping-centers',
    element: <ShoppingCentersPage />
  },
  {
    path: '/politicas-privacidade',
    element: <PoliticasPrivacidadePage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
