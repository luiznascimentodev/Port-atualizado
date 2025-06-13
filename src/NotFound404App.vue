<template>
  <div id="not-found-app" class="min-h-screen bg-gray-900 relative">
    <!-- Animated Background -->
    <AnimatedBackground />

    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- 404 Content -->
    <NotFoundPage />

    <!-- Footer -->
    <GlobalFooter />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Navigation from './components/shared/Navigation.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import AnimatedBackground from './components/ui/AnimatedBackground.vue'

export default {
  name: 'NotFound404App',
  components: {
    Navigation,
    NotFoundPage,
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
      { name: 'Contato', href: '/contato.html', current: false },
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

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      mobileMenuOpen,
      showBackToTop,
      navigation,
      toggleMobileMenu,
      scrollToTop
    }
  }
}
</script>
