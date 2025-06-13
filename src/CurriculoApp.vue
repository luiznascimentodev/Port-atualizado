<template>
  <div id="curriculo-app" class="min-h-screen bg-gray-900 relative">
    <!-- Animated Background with Programming Particles -->




    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- Hero Section -->
    <CurriculoHero class="relative z-20" />

    <!-- Professional Summary -->
    <ProfessionalSummary class="relative z-20" />

    <!-- Experience Section -->
    <ExperienceSection :experiences="experiences" class="relative z-20" />

    <!-- Education Section -->
    <EducationSection :educations="educations" class="relative z-20" />

    <!-- Skills Section -->
    <SkillsSection
      :technicalSkills="technicalSkills"
      :softSkills="softSkills"
      class="relative z-20"
    />

    <!-- Contact CTA -->
    <ContactCTA class="relative z-20" />

    <!-- Footer -->
    <GlobalFooter class="relative z-20" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import Navigation from './components/shared/Navigation.vue'
import CurriculoHero from './components/curriculo/CurriculoHero.vue'
import ProfessionalSummary from './components/curriculo/ProfessionalSummary.vue'
import ExperienceSection from './components/curriculo/ExperienceSection.vue'
import EducationSection from './components/curriculo/EducationSection.vue'
import SkillsSection from './components/curriculo/SkillsSection.vue'
import ContactCTA from './components/curriculo/ContactCTA.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'

export default {
  name: 'CurriculoApp',
  components: {
    BackToTopButton,
    Navigation,
    CurriculoHero,
    ProfessionalSummary,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    ContactCTA,
    GlobalFooter
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: true },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    const experiences = reactive([
      {
        id: 1,
        period: '2021 - Presente',
        title: 'Freelancer - Desenvolvedor Web Full Stack',
        company: 'Trabalho Autônomo',
        location: 'Curitiba, PR',
        featured: true,
        description: 'Desenvolvedor web freelancer especializado em soluções modernas e escaláveis. Foco em tecnologias como Vue.js, React, Node.js e PHP, criando desde sites institucionais até sistemas complexos de gestão empresarial.',
        achievements: [
          'Desenvolvimento de +15 projetos web para diversos segmentos',
          'Criação de sistemas de gestão empresarial com dashboards interativos',
          'Implementação de soluções e-commerce com integração de pagamentos',
          'Otimização de performance resultando em +40% de velocidade de carregamento',
          'Desenvolvimento de APIs RESTful e integração com serviços externos',
          'Aplicação de práticas modernas de SEO e acessibilidade',
          'Gestão completa de projetos: do levantamento de requisitos à entrega',
          'Manutenção e evolução contínua de aplicações em produção'
        ],
        technologies: ['Vue.js', 'React', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Laravel', 'Express.js', 'Git', 'Docker']
      },
      {
        id: 2,
        period: '2015 - 2018',
        title: 'Desenvolvedor WordPress & Fundador',
        company: 'Agência Própria',
        location: 'São Paulo, SP',
        featured: false,
        description: 'Fundei agência especializada em desenvolvimento WordPress para o setor da construção civil. Gerenciei projetos do briefing à entrega, desenvolvendo soluções personalizadas.',
        achievements: [
          'Desenvolvimento de +20 sites WordPress para construtoras',
          'Criação de temas customizados e plugins específicos',
          'Implementação de sistemas de gestão de leads',
          'Estratégias SEO com +150% de aumento no tráfego orgânico',
          'Gestão completa de projetos e relacionamento com clientes'
        ],
        technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'SEO', 'jQuery']
      },
      {
        id: 3,
        period: '2017 - 2020',
        title: 'Gerente Comercial',
        company: 'Asus do Brasil',
        location: 'São Paulo, SP',
        featured: false,
        description: 'Liderei equipes comerciais focando em resultados e desenvolvimento de relacionamentos estratégicos. Apliquei conhecimentos técnicos para oferecer soluções personalizadas aos clientes.',
        achievements: [
          'Liderança de equipe de 8 vendedores com foco em resultados',
          'Superação consistente de metas trimestrais em +20%',
          'Desenvolvimento de estratégias de vendas para produtos tech',
          'Treinamento técnico da equipe sobre produtos e soluções',
          'Relacionamento direto com grandes contas corporativas'
        ],
        technologies: ['Liderança', 'CRM', 'Gestão de Equipes', 'Vendas B2B', 'Análise de Dados']
      },
      {
        id: 4,
        period: '2024 - 2025',
        title: 'Consultor de Negócios',
        company: 'Vivo (Telefônica Brasil)',
        location: 'Curitiba, PR',
        featured: false,
        description: 'Atendimento consultivo em loja física, identificando necessidades dos clientes e oferecendo soluções personalizadas. Foco em resultados e experiência do cliente.',
        achievements: [
          'Atendimento consultivo personalizado para +50 clientes/semana',
          'Taxa de conversão superior a 85% em vendas de planos',
          'Desenvolvimento de relacionamentos duradouros com clientes',
          'Aplicação de técnicas de vendas consultivas',
          'Resolução eficiente de problemas técnicos e comerciais'
        ],
        technologies: ['Atendimento ao Cliente', 'Vendas Consultivas', 'Comunicação', 'Resolução de Problemas']
      }
    ])

    const educations = reactive([
      {
        id: 1,
        degree: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Positivo',
        period: '2024 - 2026',
        status: 'Em andamento',
        description: 'Formação técnica focada em desenvolvimento de software, banco de dados, arquitetura de sistemas e metodologias ágeis. Grade curricular alinhada com as demandas do mercado de tecnologia.',
        highlights: [
          'Programação em múltiplas linguagens (Java, Python, JavaScript)',
          'Banco de dados relacionais e não-relacionais',
          'Metodologias ágeis (Scrum, Kanban)',
          'Arquitetura de software e padrões de projeto',
          'Desenvolvimento web full stack',
          'Gestão de projetos em TI'
        ]
      },
      {
        id: 2,
        degree: 'Desenvolvimento Web Full Stack',
        institution: 'DevClub',
        period: '2024 - 2025',
        status: 'Em andamento',
        description: 'Bootcamp intensivo com +400 horas de conteúdo prático, focado em tecnologias modernas do mercado. Desenvolvimento de projetos reais e mentoria especializada.',
        highlights: [
          'React.js e Vue.js para desenvolvimento frontend',
          'Node.js e Express para backend',
          'Bancos de dados relacionais e não-relacionais',
          'APIs RESTful e GraphQL',
          'Deploy e DevOps básico',
          'Projetos em equipe simulando ambiente real'
        ]
      }
    ])

    const technicalSkills = reactive([
      { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
      { name: 'Vue.js', level: 95, category: 'Frontend' },
      { name: 'React', level: 85, category: 'Frontend' },
      { name: 'HTML5/CSS3', level: 95, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
      { name: 'PHP', level: 85, category: 'Backend' },
      { name: 'MySQL/PostgreSQL', level: 75, category: 'Database' },
      { name: 'WordPress', level: 95, category: 'CMS' },
      { name: 'Git/GitHub', level: 90, category: 'Tools' },
      { name: 'SEO', level: 85, category: 'Marketing' },
      { name: 'Figma/Design', level: 80, category: 'Design' }
    ])

    const softSkills = reactive([
      'Liderança de Equipes',
      'Comunicação Eficaz',
      'Resolução de Problemas',
      'Pensamento Crítico',
      'Adaptabilidade',
      'Gestão de Tempo',
      'Trabalho em Equipe',
      'Criatividade e Inovação',
      'Orientação a Resultados',
      'Aprendizado Contínuo'
    ])

    const printResume = () => {
      window.print()
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

    onMounted(() => {
      // Add scroll listener
      window.addEventListener('scroll', handleScroll)

      // Corrigir espaçamento entre seções para evitar sobreposições
      adjustSectionSpacing();

      // Adicionar evento de redimensionamento para reajustar espaçamentos quando a janela for redimensionada
      window.addEventListener('resize', adjustSectionSpacing);
    })

    // Função para ajustar o espaçamento entre as seções
    const adjustSectionSpacing = () => {
      // Pequena função helper para obter todos os elementos de seção no currículo
      const sections = document.querySelectorAll('#curriculo-app > section');

      sections.forEach((section, index) => {
        if (index > 0) {
          const prevSection = sections[index - 1];
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const prevSectionBottom = prevSection.getBoundingClientRect().bottom + window.scrollY;

          // Se houver sobreposição, adicionar margem para corrigi-la
          if (sectionTop < prevSectionBottom) {
            const overlap = prevSectionBottom - sectionTop + 32; // 32px de espaço extra
            section.style.marginTop = `${overlap}px`;
          }
        }
      });
    }

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', adjustSectionSpacing)
    })

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    return {
      mobileMenuOpen,
      navigation,
      showBackToTop,
      experiences,
      educations,
      technicalSkills,
      softSkills,
      toggleMobileMenu,
      printResume,
      scrollToTop
    }
  }
}
</script>
