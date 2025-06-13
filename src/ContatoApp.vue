<template>
  <div id="app" class="min-h-screen bg-gray-900 relative">
    <!-- Animated Background with Programming Particles -->
    <AnimatedBackground />

    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- Hero Section -->
    <ContatoHero class="relative z-10" />

    <!-- Contact Form Section -->
    <ContactFormSection
      @send-message="handleSendMessage"
      class="relative z-10"
    />

    <!-- FAQ Section -->
    <FAQSection :faqs="faqs" class="relative z-10" />

    <!-- Footer -->
    <GlobalFooter class="relative z-10" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Navigation from './components/shared/Navigation.vue'
import ContatoHero from './components/contato/ContatoHero.vue'
import ContactFormSection from './components/contato/ContactFormSection.vue'
import FAQSection from './components/contato/FAQSection.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import AnimatedBackground from './components/ui/AnimatedBackground.vue'

export default {
  name: 'ContatoApp',
  components: {
    Navigation,
    ContatoHero,
    ContactFormSection,
    FAQSection,
    GlobalFooter,
    BackToTopButton,
    AnimatedBackground
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: true },
    ])

    const contactInfo = reactive({
      email: 'luiznascimento.dev@gmail.com',
      phone: '+55 (41) 98482-1206',
      location: 'Curitiba, PR - Brasil',
      availability: 'Disponível para novos projetos',
      responseTime: 'Respondo em até 24 horas'
    })

    const socialLinks = reactive([
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/luiz-felippe-nascimento',
        icon: 'linkedin',
        description: 'Conecte-se comigo no LinkedIn'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/luiznascimentodev',
        icon: 'github',
        description: 'Veja meus projetos no GitHub'
      },
      {
        name: 'WhatsApp',
        href: 'https://wa.me/+5541984821206',
        icon: 'whatsapp',
        description: 'Envie uma mensagem no WhatsApp'
      },
      {
        name: 'Email',
        href: 'mailto:luiznascimento.dev@gmail.com',
        icon: 'email',
        description: 'Envie um email diretamente'
      }
    ])

    const faqs = reactive([
      {
        id: 1,
        question: 'Qual é o prazo médio para desenvolvimento de um projeto?',
        answer: 'O prazo varia conforme a complexidade do projeto. Sites simples podem levar de 1-2 semanas, enquanto sistemas mais complexos podem levar de 1-3 meses. Sempre discuto prazos realistas durante o primeiro contato.'
      },
      {
        id: 2,
        question: 'Como funciona o processo de desenvolvimento?',
        answer: 'Meu processo inclui: 1) Reunião inicial para entender suas necessidades, 2) Proposta detalhada com cronograma, 3) Design e prototipagem, 4) Desenvolvimento, 5) Testes e ajustes, 6) Entrega e treinamento.'
      },
      {
        id: 3,
        question: 'Quais tecnologias você utiliza?',
        answer: 'Trabalho principalmente com Vue.js, React, Node.js, PHP e MySQL. Para design, uso Tailwind CSS e Figma. Sempre escolho as melhores tecnologias para cada projeto específico.'
      },
      {
        id: 4,
        question: 'Você oferece suporte após a entrega?',
        answer: 'Sim! Ofereço 30 dias de suporte gratuito após a entrega. Também disponibilizo planos de manutenção mensal para atualizações, backups e melhorias contínuas.'
      },
      {
        id: 5,
        question: 'Como é definido o valor do projeto?',
        answer: 'O valor é calculado com base na complexidade, funcionalidades necessárias, prazo e tecnologias utilizadas. Sempre forneço um orçamento detalhado e transparente antes do início do projeto.'
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

    const handleSendMessage = (formData) => {
      // Aqui você pode implementar a lógica de envio do formulário
      console.log('Enviando mensagem:', formData)

      // Exemplo de integração com EmailJS ou outro serviço
      // emailjs.send('service_id', 'template_id', formData)
      //   .then(() => {
      //     // Sucesso
      //   })
      //   .catch(() => {
      //     // Erro
      //   })
    }

    onMounted(() => {
      // Add scroll listener
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      mobileMenuOpen,
      showBackToTop,
      navigation,
      contactInfo,
      socialLinks,
      faqs,
      toggleMobileMenu,
      scrollToTop,
      handleSendMessage
    }
  }
}
</script>
