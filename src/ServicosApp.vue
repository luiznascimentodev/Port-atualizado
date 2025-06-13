<template>
  <!-- Loading Spinner -->
  <LoadingSpinner
    :loading="isLoading"
    :messages="loadingMessages"
    @loading-complete="onLoadingComplete"
  />

  <div id="servicos-app" class="min-h-screen bg-gray-900 relative">
    <!-- Animated Background with Programming Particles -->
    <AnimatedBackground v-if="!isLoading" />

    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- Hero Section -->
    <ServicosHero class="relative z-20" />

    <!-- Services Section -->
    <ServicesSection :services="services" class="relative z-20" />

    <!-- Process Section -->
    <ProcessSection :process="processSteps" class="relative z-20" />


    <!-- Technologies Section -->
    <TechnologiesSection :technologies="technologies" class="relative z-20" />

    <!-- Footer -->
    <GlobalFooter class="relative z-20" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import Navigation from './components/shared/Navigation.vue'
import ServicosHero from './components/servicos/ServicosHero.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'

// Utilidades para métricas de carregamento
import { reportLoadingMetrics } from './utils/loadingMetrics'

// Componentes pesados carregados de forma assíncrona
const ServicesSection = defineAsyncComponent({
  loader: () => import('./components/servicos/ServicesSection.vue'),
  delay: 200
})
const ProcessSection = defineAsyncComponent({
  loader: () => import('./components/servicos/ProcessSection.vue'),
  delay: 200
})
const TechnologiesSection = defineAsyncComponent({
  loader: () => import('./components/servicos/TechnologiesSection.vue'),
  delay: 200
})
const AnimatedBackground = defineAsyncComponent({
  loader: () => import('./components/ui/AnimatedBackground.vue'),
  delay: 0
})

export default {
  name: 'ServicosApp',
  components: {
    BackToTopButton,
    Navigation,
    ServicosHero,
    ServicesSection,
    ProcessSection,
    TechnologiesSection,
    GlobalFooter,
    AnimatedBackground,
    LoadingSpinner
  },
  setup() {
    // Estado do carregamento
    const isLoading = ref(true)
    const initialLoadComplete = ref(false)
    const componentsReady = ref(0)
    const totalComponents = 4 // Total de componentes assíncronos a serem carregados

    // Mensagens customizadas para o spinner de carregamento
    const loadingMessages = [
      'Carregando serviços...',
      'Preparando processo de desenvolvimento...',
      'Configurando tecnologias...',
      'Quase lá...'
    ]

    // Estado normal da aplicação
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: true },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    const services = reactive([
      {
        id: 1,
        title: 'Sites Responsivos',
        subtitle: 'Landing Pages & Websites',
        description: 'Sites modernos, responsivos e otimizados para conversão. Perfeitos para apresentar sua empresa ou produto de forma profissional.',
        icon: 'layout',
        features: [
          'Design responsivo para todos os dispositivos',
          'Otimização SEO completa',
          'Performance superior (95+ no Lighthouse)',
          'Integração com redes sociais',
          'Formulários de contato funcionais',
          'Analytics e métricas integradas'
        ],
        technologies: ['Vue.js', 'React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
        timeframe: '7-14 dias',
        starting_price: 'A partir de R$ 1.500',
        popular: false,
        color: 'blue'
      },
      {
        id: 2,
        title: 'E-commerce Completo',
        subtitle: 'Lojas Virtuais Profissionais',
        description: 'Lojas virtuais completas com carrinho, pagamentos, gestão de produtos e painel administrativo. Pronto para vender online.',
        icon: 'shopping',
        features: [
          'Carrinho de compras avançado',
          'Múltiplas formas de pagamento',
          'Painel administrativo completo',
          'Gestão de estoque e produtos',
          'Sistema de cupons e promoções',
          'Relatórios de vendas detalhados'
        ],
        technologies: ['React', 'Node.js', 'Stripe', 'PayPal', 'MongoDB', 'Redux'],
        timeframe: '21-30 dias',
        starting_price: 'A partir de R$ 4.500',
        popular: true,
        color: 'emerald'
      },
      {
        id: 3,
        title: 'Sistemas Web',
        subtitle: 'Soluções Personalizadas',
        description: 'Sistemas web personalizados para sua empresa. Desde CRMs até plataformas específicas do seu negócio.',
        icon: 'code',
        features: [
          'Desenvolvimento sob medida',
          'Painel administrativo completo',
          'Integração com APIs externas',
          'Sistema de usuários e permissões',
          'Relatórios e dashboards',
          'Backup automático dos dados'
        ],
        technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Chart.js'],
        timeframe: '30-45 dias',
        starting_price: 'A partir de R$ 6.000',
        popular: false,
        color: 'purple'
      },
      {
        id: 4,
        title: 'WordPress Profissional',
        subtitle: 'Sites com CMS Flexível',
        description: 'Sites WordPress personalizados com temas únicos e funcionalidades específicas para seu negócio.',
        icon: 'wordpress',
        features: [
          'Tema personalizado exclusivo',
          'Plugins específicos desenvolvidos',
          'Painel administrativo intuitivo',
          'Otimização de performance',
          'Backup automático',
          'Suporte e manutenção inclusos'
        ],
        technologies: ['WordPress', 'PHP', 'MySQL', 'jQuery', 'ACF', 'Elementor'],
        timeframe: '10-18 dias',
        starting_price: 'A partir de R$ 2.200',
        popular: false,
        color: 'indigo'
      },
      {
        id: 5,
        title: 'Consultoria SEO',
        subtitle: 'Ranqueamento no Google',
        description: 'Otimização completa para mecanismos de busca. Aumente sua visibilidade online e atraia mais clientes.',
        icon: 'search',
        features: [
          'Auditoria SEO completa',
          'Otimização on-page e técnica',
          'Pesquisa de palavras-chave',
          'Criação de conteúdo otimizado',
          'Link building estratégico',
          'Relatórios mensais de progresso'
        ],
        technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Schema.org'],
        timeframe: 'Contínuo',
        starting_price: 'A partir de R$ 800/mês',
        popular: false,
        color: 'yellow'
      },
      {
        id: 6,
        title: 'Manutenção & Suporte',
        subtitle: 'Cuidado Contínuo',
        description: 'Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente com nosso suporte especializado.',
        icon: 'support',
        features: [
          'Atualizações de segurança',
          'Backup automático diário',
          'Monitoramento 24/7',
          'Suporte técnico prioritário',
          'Otimizações de performance',
          'Relatórios mensais detalhados'
        ],
        technologies: ['Monitoramento', 'Backup', 'Security', 'Performance', 'Updates'],
        timeframe: 'Mensal',
        starting_price: 'A partir de R$ 300/mês',
        popular: false,
        color: 'green'
      }
    ])

    const processSteps = reactive([
      {
        id: 1,
        title: 'Descoberta & Planejamento',
        description: 'Entendemos suas necessidades, objetivos e público-alvo para criar a estratégia perfeita.',
        icon: 'discovery',
        duration: '1-2 dias'
      },
      {
        id: 2,
        title: 'Design & Prototipagem',
        description: 'Criamos wireframes e protótipos para validar a experiência do usuário antes do desenvolvimento.',
        icon: 'design',
        duration: '3-5 dias'
      },
      {
        id: 3,
        title: 'Desenvolvimento',
        description: 'Codificamos sua solução usando as melhores práticas e tecnologias mais modernas.',
        icon: 'development',
        duration: '7-30 dias'
      },
      {
        id: 4,
        title: 'Testes & Otimização',
        description: 'Testamos tudo minuciosamente e otimizamos performance antes da entrega.',
        icon: 'testing',
        duration: '2-3 dias'
      },
      {
        id: 5,
        title: 'Entrega & Suporte',
        description: 'Entregamos seu projeto e oferecemos suporte para garantir que tudo funcione perfeitamente.',
        icon: 'delivery',
        duration: 'Contínuo'
      }
    ])

    const technologies = reactive([
      { name: 'Vue.js', icon: '💚', description: 'Framework progressivo', category: 'Frontend' },
      { name: 'React', icon: '⚛️', description: 'Biblioteca para UI', category: 'Frontend' },
      { name: 'Node.js', icon: '🟢', description: 'Runtime JavaScript', category: 'Backend' },
      { name: 'WordPress', icon: '🌐', description: 'CMS mais popular', category: 'CMS' },
      { name: 'Tailwind CSS', icon: '🎨', description: 'Framework CSS', category: 'Frontend' },
      { name: 'MongoDB', icon: '🍃', description: 'Banco NoSQL', category: 'Database' },
      { name: 'PostgreSQL', icon: '🐘', description: 'Banco relacional', category: 'Database' },
      { name: 'Stripe', icon: '💳', description: 'Pagamentos online', category: 'Payments' },
      { name: 'Firebase', icon: '🔥', description: 'Backend as a Service', category: 'Backend' },
      { name: 'Vercel', icon: '⚡', description: 'Deploy e hosting', category: 'Deploy' }
    ])

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    // Handler para o final do carregamento
    const onLoadingComplete = () => {
      initialLoadComplete.value = true
      document.body.classList.remove('loading')
      document.body.classList.add('loaded')

      // Reportar métricas de carregamento
      reportLoadingMetrics({
        appLoadTime: Date.now() - window.performance.timeOrigin,
        componentsLoaded: componentsReady.value,
        initialRender: initialLoadComplete.value,
        page: 'servicos'
      })
    }

    // Simular o carregamento completo de componentes assíncronos
    const checkAllComponentsLoaded = () => {
      componentsReady.value++
      if (componentsReady.value >= totalComponents) {
        // Adicione um pequeno delay para permitir que os componentes sejam renderizados
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }

    onMounted(() => {
      // Adicionar classe de carregamento para lidar com estilos iniciais
      document.body.classList.add('loading')

      // Detectar quando o DOM está totalmente carregado
      if (document.readyState === 'complete') {
        checkAllComponentsLoaded()
      } else {
        window.addEventListener('load', () => {
          checkAllComponentsLoaded()
        })
      }

      // Adicionar o listener de scroll
      window.addEventListener('scroll', handleScroll)

      // Simular carregamento dos outros componentes assíncronos
      setTimeout(() => checkAllComponentsLoaded(), 400)
      setTimeout(() => checkAllComponentsLoaded(), 600)
      setTimeout(() => checkAllComponentsLoaded(), 800)

      // Garantia extra - se após 2 segundos ainda estiver carregando, forçar o término
      setTimeout(() => {
        if (isLoading.value) {
          console.log('Forçando término do carregamento após timeout')
          isLoading.value = false
        }
      }, 2000)
    })

    onUnmounted(() => {
      window.removeEventListener('load', checkAllComponentsLoaded)

      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isLoading,
      loadingMessages,
      onLoadingComplete,
      mobileMenuOpen,
      navigation,
      showBackToTop,
      services,
      processSteps,
      technologies,
      toggleMobileMenu,
      scrollToTop
    }
  }
}
</script>