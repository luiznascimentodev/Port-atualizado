    <template>
  <section id="inicio" class="hero-section relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 0;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 0;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 0;" />

    <!-- Modern Background Elements -->
    <div class="absolute inset-0 overflow-hidden" style="z-index: 2;">
      <!-- Programming Particles for Hero Section -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Code Symbols specific to Hero -->
        <div class="absolute top-20 left-10 opacity-20 animate-float" style="animation-delay: 0s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(59, 130, 246, 0.6)">
            <path d="M7 4L3 8l4 4M17 4l4 4-4 4M14 2l-4 20"/>
          </svg>
        </div>

        <div class="absolute top-40 right-20 opacity-25 animate-float" style="animation-delay: 2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(16, 185, 129, 0.6)">
            <path d="M4 12h12M13 7l5 5-5 5"/>
          </svg>
        </div>

        <div class="absolute bottom-32 left-16 opacity-20 animate-float" style="animation-delay: 4s;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(139, 92, 246, 0.6)">
            <circle cx="6" cy="6" r="2.5"/>
            <circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="6" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="18" cy="18" r="2.5"/>
          </svg>
        </div>

        <div class="absolute bottom-20 right-32 opacity-30 animate-float" style="animation-delay: 1s;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(245, 158, 11, 0.6)">
            <circle cx="12" cy="8" r="2"/>
            <path d="M12 14c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8L10 20h4l-1.2-2.2c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2z"/>
          </svg>
        </div>

        <!-- Floating code lines -->
        <div class="absolute top-60 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded opacity-15 animate-float" style="animation-delay: 3s;"></div>
        <div class="absolute bottom-40 right-1/4 w-16 h-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded opacity-15 animate-float" style="animation-delay: 5s;"></div>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-float opacity-60"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-float opacity-50" style="animation-delay: 2s;"></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>

      <!-- Floating Particles -->
      <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" style="animation-delay: 0s;"></div>
      <div class="absolute top-32 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-float opacity-40" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float opacity-50" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-float opacity-30" style="animation-delay: 3s;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left space-y-8 animate-fade-in-up">
          <!-- Status Badges -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium text-gray-300 shadow-sm">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Desenvolvedor Web Fullstack
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/20 border border-emerald-800 rounded-full text-sm font-medium text-emerald-300">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Disponível para projetos
            </div>
          </div>

          <!-- Main Title -->
          <div class="space-y-4">
            <p class="text-lg text-gray-400 font-medium">Olá, eu sou</p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Luiz
              </span>
              <br>
              <span class="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Nascimento
              </span>
            </h1>
            <div class="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light min-h-[3rem] flex items-center justify-center lg:justify-start">
              <TypingEffect />
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Transformo ideias em <span class="text-blue-400 font-semibold">soluções digitais modernas</span>,
            criando experiências web únicas com foco em performance, usabilidade e design responsivo.
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
            <div v-for="stat in stats" :key="stat.label"
                 class="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div class="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-400 font-medium">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/servicos.html"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Ver Serviços
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="/src/assets/luiz-nascimento-desenvolvedor-fullstack.pdf"
               target="_blank"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Baixar Currículo
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="#projetos"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 border-2 border-gray-700 hover:border-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Ver Projetos
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center lg:justify-start space-x-4">
            <a v-for="social in socialLinks"
               :key="social.name"
               :href="social.href"
               target="_blank"
               class="group w-14 h-14 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
               :class="getSocialHoverClass(social.icon)"
               :title="social.name">
              <component :is="getSocialIcon(social.icon)" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Main Avatar Container -->
            <div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              <!-- Gradient Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-800 to-emerald-900/20 rounded-full"></div>

              <!-- Avatar Image -->
              <div class="absolute inset-4 rounded-full overflow-hidden bg-gray-800 shadow-2xl group">
                <img src="/src/assets/avatar-img.webp"
                     alt="Foto de perfil de Luiz Nascimento"
                     loading="lazy"
                     decoding="async"
                     width="400"
                     height="400"
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform">

                <!-- Overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Floating Tech Icons -->
              <TechIcons />

              <!-- Decorative Elements -->
              <div class="absolute -inset-8 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TypingEffect from '../ui/TypingEffect.vue'
import TechIcons from '../ui/TechIcons.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import WhatsappIcon from '../icons/WhatsappIcon.vue'
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'HeroSection',
  components: {
    TypingEffect,
    TechIcons,
    LinkedinIcon,
    GithubIcon,
    WhatsappIcon,
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    stats: Array,
    socialLinks: Array
  },
  methods: {
    getSocialIcon(iconName) {
      const icons = {
        linkedin: 'LinkedinIcon',
        github: 'GithubIcon',
        whatsapp: 'WhatsappIcon'
      }
      return icons[iconName] || 'div'
    },
    getSocialHoverClass(iconName) {
      const hoverClasses = {
        linkedin: 'hover:bg-blue-600',
        github: 'hover:bg-gray-700',
        whatsapp: 'hover:bg-green-500'
      }
      return hoverClasses[iconName] || ''
    }
  }
}
</script>
