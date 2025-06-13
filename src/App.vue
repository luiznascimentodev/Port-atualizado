<template>
  <!-- Loading Spinner -->
  <LoadingSpinner
    :loading="isLoading"
    :messages="loadingMessages"
    @loading-complete="onLoadingComplete"
  />

  <div id="app" class="min-h-screen bg-gray-900 relative">
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
    <HeroSection
      :stats="stats"
      :socialLinks="socialLinks"
      class="relative z-20"
    />

    <!-- Testimonials Section -->
    <TestimonialsSection :testimonials="testimonials" class="relative z-20" />

    <!-- Projects Section -->
    <ProjectsSection :projects="projects" class="relative z-20" />

    <!-- About Section -->
    <AboutSection
      :aboutContent="aboutContent"
      :skills="skills"
      class="relative z-20"
        />

    <!-- Footer -->
    <GlobalFooter class="relative z-20" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
// Componentes críticos carregados imediatamente para o caminho crítico
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import HeroSection from './components/home/HeroSection.vue'

// Utilidades para métricas de carregamento
import { reportLoadingMetrics, trackComponentLoading } from './utils/loadingMetrics'

// Componentes pesados carregados de forma assíncrona
// Configuração com opções de carregamento para melhor UX
const TestimonialsSection = defineAsyncComponent({
  loader: () => import('./components/home/TestimonialsSection.vue'),
  delay: 200, // Pequeno delay para evitar flash do spinner
  timeout: 10000 // Timeout para componentes muito grandes
})
const ProjectsSection = defineAsyncComponent({
  loader: () => import('./components/pages/ProjectsSection.vue'),
  delay: 200
})
const AboutSection = defineAsyncComponent({
  loader: () => import('./components/home/AboutSection.vue'),
  delay: 200
})
const AnimatedBackground = defineAsyncComponent({
  loader: () => import('./components/ui/AnimatedBackground.vue'),
  delay: 0 // Carrega imediatamente, mas ainda assíncrono
})

export default {
  name: 'App',
  components: {
    Navigation,
    HeroSection,
    TestimonialsSection,
    ProjectsSection,
    AboutSection,
    GlobalFooter,
    BackToTopButton,
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
      'Carregando componentes...',
      'Otimizando interface...',
      'Preparando experiência...',
      'Quase lá...'
    ]

    // Estado normal da aplicação
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: true },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    const stats = reactive([
      { value: '3+', label: 'Anos de Experiência' },
      { value: '15+', label: 'Projetos Concluídos' },
      { value: '100%', label: 'Satisfação' },
    ])

    const socialLinks = reactive([
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/luiz-felippe-nascimento',
        icon: 'linkedin'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/luiznascimentodev',
        icon: 'github'
      },
      {
        name: 'WhatsApp',
        href: 'https://wa.me/+5541984821206',
        icon: 'whatsapp'
      },
    ])

    const aboutContent = reactive([
      {
        title: 'Quem sou eu',
        description: 'Sou Luiz Nascimento, um desenvolvedor web fullstack apaixonado por criar experiências digitais inovadoras. Com mais de 3 anos de experiência, transformo ideias em soluções web modernas e eficientes.',
        icon: 'user'
      },
      {
        title: 'Minha Missão',
        description: 'Desenvolver soluções web que não apenas atendam às necessidades dos clientes, mas que superem suas expectativas. Cada projeto é uma oportunidade de criar algo único e impactante.',
        icon: 'rocket'
      },
      {
        title: 'Filosofia de Trabalho',
        description: 'Acredito que a combinação de design intuitivo, código limpo e performance otimizada é essencial para criar produtos digitais excepcionais que realmente fazem a diferença.',
        icon: 'lightbulb'
      }
    ])

    const skills = reactive([
      {
        name: 'Frontend',
        description: 'React, Vue.js, HTML5/CSS3',
        icon: 'code',
        bgColor: 'bg-blue-900/30',
        textColor: 'text-blue-400'
      },
      {
        name: 'Backend',
        description: 'Node.js, PHP, MySQL',
        icon: 'server',
        bgColor: 'bg-green-900/30',
        textColor: 'text-green-400'
      },
      {
        name: 'Design',
        description: 'UI/UX, Responsivo',
        icon: 'palette',
        bgColor: 'bg-yellow-900/30',
        textColor: 'text-yellow-400'
      },
      {
        name: 'Performance',
        description: 'SEO, Otimização',
        icon: 'zap',
        bgColor: 'bg-purple-900/30',
        textColor: 'text-purple-400'
      }
    ])

    const educationList = reactive([
      {
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Positivo',
        period: '2024-2026',
        bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
      },
      {
        title: 'Desenvolvimento Web Fullstack',
        institution: 'DevClub',
        period: '2024-2025',
        bgColor: 'bg-gradient-to-r from-green-500 to-green-600'
      }
    ])

    const testimonials = reactive([
      {
        id: 1,
        text: 'Luiz entregou um site excepcional para minha empresa. O design é moderno, responsivo e a performance é incrível. A navegação intuitiva e a estética moderna se destacaram e tivemos feedback positivo imediato dos nossos clientes.',
        name: 'Maria Silva',
        role: 'CEO',
        company: 'TechStart',
        avatar: '/src/assets/avatars/maria-silva.webp',
        project: 'Website Institucional',
        rating: 5,
        results: 'Aumento de 35% no tempo de permanência dos visitantes e 28% mais conversões de leads'
      },
      {
        id: 2,
        text: 'Trabalhar com o Luiz foi uma experiência fantástica. Ele desenvolveu nossa plataforma de e-commerce com maestria, integrando sistemas de pagamento e logística de forma perfeita. O acompanhamento contínuo e a capacidade de resolver problemas rapidamente fizeram toda diferença.',
        name: 'João Santos',
        role: 'Diretor de Marketing',
        company: 'MegaStore',
        avatar: '/src/assets/avatars/joao-santos.webp',
        project: 'E-commerce',
        rating: 5,
        results: 'Redução de 60% no tempo de checkout e aumento de 45% na taxa de conversão'
      },
      {
        id: 3,
        text: 'O sistema que o Luiz desenvolveu para nossa empresa transformou completamente nossos processos internos. O dashboard intuitivo e a automação de tarefas repetitivas permitiram que nossa equipe focasse em atividades estratégicas. Além disso, a implementação de análises em tempo real melhorou nossa tomada de decisões.',
        name: 'Ana Costa',
        role: 'Gestora de Projetos',
        company: 'Innova Solutions',
        avatar: '/src/assets/avatars/ana-costa.webp',
        project: 'Sistema de Gerenciamento',
        rating: 5,
        results: 'Aumento de 40% na produtividade da equipe e redução de 25% nos custos operacionais'
      },
      {
        id: 4,
        text: 'A reformulação do nosso aplicativo móvel superou todas as expectativas. Luiz implementou um novo design que melhorou significativamente a experiência do usuário, além de otimizar o desempenho. Nossos usuários notaram a diferença imediatamente, com navegação mais fluida e processos mais rápidos.',
        name: 'Roberto Mendes',
        role: 'CTO',
        company: 'AppTech Brasil',
        avatar: '/src/assets/avatars/roberto-mendes.webp',
        project: 'Aplicativo Móvel',
        rating: 5,
        results: 'Redução de 70% nas taxas de abandono e aumento de 50% no engajamento de usuários'
      },
      {
        id: 5,
        text: 'Contratamos o Luiz para implementar uma solução de BI para análise de dados dos nossos clientes. O resultado foi surpreendente! A visualização de dados e os painéis personalizados permitem que nossa equipe tome decisões com base em dados concretos, tornando nosso processo muito mais eficiente.',
        name: 'Carla Oliveira',
        role: 'Analista de Dados',
        company: 'DataInsights',
        avatar: '/src/assets/avatars/carla-oliveira.webp',
        project: 'Business Intelligence',
        rating: 5,
        results: '32% de aumento na precisão das previsões de vendas e redução de 40% no tempo de análise'
      },
      {
        id: 6,
        text: 'O sistema de automação que Luiz desenvolveu revolucionou nossos processos de atendimento ao cliente. Com chatbots inteligentes e integração completa com nosso CRM, conseguimos reduzir drasticamente o tempo de resposta e melhorar a satisfação dos clientes.',
        name: 'Pedro Fernandes',
        role: 'Gerente de Atendimento',
        company: 'CustomerFirst',
        avatar: '/src/assets/avatars/pedro-fernandes.webp',
        project: 'Automação de Atendimento',
        rating: 5,
        results: 'Redução de 65% no tempo de resposta e aumento de 38% na satisfação dos clientes'
      },
      {
        id: 7,
        text: 'A plataforma de vendas online desenvolvida pelo Luiz transformou completamente nosso modelo de negócio. Com recursos avançados de análise de comportamento do usuário e recomendações personalizadas, nossos resultados superaram todas as expectativas.',
        name: 'Fernanda Lima',
        role: 'Diretora Comercial',
        company: 'SalesBoost',
        avatar: '/src/assets/avatars/fernanda-lima.webp',
        project: 'Plataforma de Vendas',
        rating: 5,
        results: 'Aumento de 85% nas vendas online e 42% na receita total'
      },
      {
        id: 8,
        text: 'Luiz criou um portal educacional completo para nossa instituição de ensino. A plataforma possui recursos de videoaulas, gamificação e acompanhamento de progresso que revolucionaram nossa forma de ensinar. Os alunos estão mais engajados e os resultados de aprendizagem melhoraram significativamente.',
        name: 'Prof. Carlos Eduardo',
        role: 'Coordenador Acadêmico',
        company: 'EduTech Academy',
        avatar: '/src/assets/avatars/carlos-eduardo.webp',
        project: 'Portal Educacional',
        rating: 5,
        results: 'Aumento de 55% no engajamento dos alunos e melhoria de 30% nas notas'
      }
    ])

    const projects = reactive([
      {
        id: 1,
        title: 'Sistema de Gerenciamento',
        description: 'Plataforma completa para gestão empresarial com dashboard interativo, relatórios em tempo real e sistema de usuários.',
        image: '/src/assets/preview-gerenciador.png',
        technologies: ['Vue.js', 'Node.js', 'MySQL'],
        demo: 'https://demo-gerenciador.vercel.app',
        github: 'https://github.com/luiznascimentodev/gerenciador',
        status: 'Concluído'
      },
      {
        id: 2,
        title: 'Site Obelico',
        description: 'Website moderno e responsivo para empresa de tecnologia, com design clean e performance otimizada.',
        image: '/src/assets/preview-obelico.webp',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        demo: 'https://obelico.com.br',
        github: null,
        status: 'Concluído'
      },
      {
        id: 3,
        title: 'E-commerce Moderno',
        description: 'Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo.',
        image: '/src/assets/portfolio.png',
        technologies: ['React', 'Stripe', 'Firebase'],
        demo: null,
        github: 'https://github.com/luiznascimentodev/ecommerce',
        status: 'Em Desenvolvimento'
      }
    ])

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
        page: 'home'
      })
    }

    // Simular o carregamento completo de componentes assíncronos
    const checkAllComponentsLoaded = () => {
      componentsReady.value++
      // console.log(`Componente carregado: ${componentsReady.value}/${totalComponents}`)
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

      // Detectar quando o DOM está totalmente carregado (recursos críticos)
      // Certificar-se de que temos ao menos uma chamada garantida
      checkAllComponentsLoaded() // Primeira chamada garantida

      // Se o documento ainda não estiver completamente carregado, adicionar um listener
      if (document.readyState !== 'complete') {
        window.addEventListener('load', () => {
          checkAllComponentsLoaded()
        })
      }

      // Adicionar o listener de scroll
      window.addEventListener('scroll', handleScroll)

      // Simular carregamento dos outros componentes assíncronos
      // Garantir que chamamos vezes suficientes para alcançar totalComponents
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
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', checkAllComponentsLoaded)
    })

    return {
      isLoading,
      loadingMessages,
      onLoadingComplete,
      mobileMenuOpen,
      showBackToTop,
      navigation,
      stats,
      socialLinks,
      aboutContent,
      skills,
      testimonials,
      projects,
      toggleMobileMenu,
      scrollToTop
    }
  }
}
</script>
