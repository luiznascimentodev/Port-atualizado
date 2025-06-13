<template>
  <section id="about" class="about-section py-20 transition-colors duration-300 relative overflow-hidden" style="background: rgba(31, 41, 55, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Sobre mim
        </h2>
        <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça um pouco mais sobre minha trajetória, habilidades e paixão por desenvolvimento web.
        </p>
      </div>

      <!-- About Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(content, index) in aboutContent"
          :key="index"
          class="group bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200 relative overflow-hidden">
            <!-- Animated background effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- User Icon - Modern Professional Developer -->
            <svg v-if="content.icon === 'user'" class="w-8 h-8 text-white relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              <!-- Code brackets around user to represent developer -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l-1.5 4.5 1.5 4.5m10.5-9l1.5 4.5-1.5 4.5" stroke-width="1" opacity="0.6" />
            </svg>

            <!-- Rocket Icon - Modern Space Launch with Trajectory -->
            <svg v-else-if="content.icon === 'rocket'" class="w-8 h-8 text-white relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
              <!-- Flame trail -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a2 2 0 01-2-2v-1a2 2 0 012-2 2 2 0 012 2v1a2 2 0 01-2 2z" fill="currentColor" opacity="0.4" />
              <!-- Stars -->
              <circle cx="4" cy="6" r="0.5" fill="currentColor" opacity="0.6" />
              <circle cx="6" cy="4" r="0.5" fill="currentColor" opacity="0.6" />
              <circle cx="19" cy="8" r="0.5" fill="currentColor" opacity="0.6" />
            </svg>

            <!-- Lightbulb Icon - Modern Innovation with Brain Pattern -->
            <svg v-else-if="content.icon === 'lightbulb'" class="w-8 h-8 text-white relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              <!-- Brain pattern inside bulb -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 10.5c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1-1-.5-1-1zm3 0c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1-1-.5-1-1z" stroke-width="1" opacity="0.6" />
              <!-- Innovation sparks -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l1-1m-1 5l1 1m-8-5l-1-1m1 5l-1 1" stroke-width="1" opacity="0.5" />
            </svg>

            <!-- Fallback Icon -->
            <component v-else :is="getIcon(content.icon)" class="w-8 h-8 text-white relative z-10" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-4">
            {{ content.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ content.description }}
          </p>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            Minhas Especialidades
          </h3>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            Combinando criatividade e tecnologia para entregar soluções excepcionais
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="group relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <!-- Background gradient overlay -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 :class="skill.bgColor"></div>

            <!-- Floating elements -->
            <div class="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                 :class="skill.bgColor.replace('/30', '/50')"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                 :class="skill.bgColor.replace('/30', '/50')"></div>

            <div class="relative z-10">
              <!-- Skill Icon with enhanced styling -->
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative overflow-hidden"
                   :class="skill.bgColor">
                <!-- Animated background gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Pulse effect -->
                <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                     :class="skill.bgColor.replace('/30', '/20')"
                     style="animation: pulse-glow 2s infinite;"></div>                <div class="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm relative z-10 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <!-- Frontend Icon - Modern Code with HTML/CSS/JS Elements -->
                  <svg v-if="skill.icon === 'code'" class="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg" :class="skill.textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <!-- Main code brackets -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
                    <!-- Center slash -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.25 3.75-4.5 16.5" />
                    <!-- HTML/CSS symbols -->
                    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.6" />
                    <rect x="10.5" y="14" width="3" height="1.5" rx="0.2" fill="currentColor" opacity="0.5" />
                    <!-- Framework indicators -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 6v2m8-2v2" stroke-width="1" opacity="0.4" />
                  </svg>

                  <!-- Backend Icon - Modern Server Stack with Database Layers -->
                  <svg v-else-if="skill.icon === 'server'" class="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg" :class="skill.textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <!-- Server layers -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    <!-- API endpoints indicators -->
                    <circle cx="7" cy="6" r="0.5" fill="currentColor" opacity="0.7" />
                    <circle cx="17" cy="6" r="0.5" fill="currentColor" opacity="0.7" />
                    <circle cx="7" cy="10" r="0.5" fill="currentColor" opacity="0.7" />
                    <circle cx="17" cy="10" r="0.5" fill="currentColor" opacity="0.7" />
                    <!-- Connection lines -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2" stroke-width="1" opacity="0.4" />
                  </svg>

                  <!-- Design Icon - Creative Tools with Palette and Brush -->
                  <svg v-else-if="skill.icon === 'palette'" class="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg" :class="skill.textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <!-- Main palette -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    <!-- Color dots on palette -->
                    <circle cx="12" cy="8" r="0.8" fill="currentColor" opacity="0.8" />
                    <circle cx="9" cy="10" r="0.6" fill="currentColor" opacity="0.6" />
                    <circle cx="15" cy="10" r="0.6" fill="currentColor" opacity="0.6" />
                    <circle cx="12" cy="12" r="0.6" fill="currentColor" opacity="0.6" />
                    <!-- Design elements -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 4l-1 1m-1 3l2-2" stroke-width="1" opacity="0.5" />
                  </svg>

                  <!-- Performance Icon - Lightning with Speed Lines and Optimization -->
                  <svg v-else-if="skill.icon === 'zap'" class="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg" :class="skill.textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <!-- Main lightning bolt -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    <!-- Speed lines for performance -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 8h4m-4 4h3m-3 4h5" stroke-width="1" opacity="0.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 4h4m-3 8h3m-4 4h4" stroke-width="1" opacity="0.5" />
                    <!-- Optimization indicators -->
                    <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.6" />
                    <circle cx="18" cy="18" r="0.5" fill="currentColor" opacity="0.6" />
                    <!-- Energy waves -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c0 2-1 3-1 5s1 3 1 5-1 3-1 5" stroke-width="1" opacity="0.3" />
                  </svg>

                  <!-- Fallback Icon -->
                  <component v-else :is="getIcon(skill.icon)" class="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg" :class="skill.textColor" />
                </div>
              </div>

              <!-- Skill Info with enhanced typography -->
              <div class="text-center">
                <h4 class="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {{ skill.name }}
                </h4>
                <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {{ skill.description }}
                </p>
              </div>

              <!-- Hover indicator -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                   :class="skill.textColor.replace('text-', 'bg-')"></div>
            </div>

            <!-- Shine effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          </div>
        </div>

        <!-- Skills metrics/stats -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center group">
            <div class="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <div class="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div class="text-sm text-gray-400">Projetos Entregues</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
              <div class="text-3xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div class="text-sm text-gray-400">Anos de Experiência</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
              <div class="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div class="text-sm text-gray-400">Clientes Satisfeitos</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <div class="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">24h</div>
              <div class="text-sm text-gray-400">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-white">
        <h3 class="text-2xl sm:text-3xl font-bold mb-4">
          Vamos trabalhar juntos?
        </h3>
        <p class="text-lg mb-8 opacity-90">
          Estou sempre em busca de novos desafios e projetos interessantes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" />
              <circle cx="12" cy="13" r="4" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 3h.01" />
            </svg>
            Entrar em contato
          </a>
          <a
            href="/curriculo.html"
            class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6" opacity="0.6" />
            </svg>
            Ver Currículo Completo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserIcon from '../icons/UserIcon.vue'
import RocketIcon from '../icons/RocketIcon.vue'
import LightbulbIcon from '../icons/LightbulbIcon.vue'
import CodeIcon from '../icons/CodeIcon.vue'
import ServerIcon from '../icons/ServerIcon.vue'
import PaletteIcon from '../icons/PaletteIcon.vue'
import ZapIcon from '../icons/ZapIcon.vue'
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'AboutSection',
  components: {
    UserIcon,
    RocketIcon,
    LightbulbIcon,
    CodeIcon,
    ServerIcon,
    PaletteIcon,
    ZapIcon,
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    aboutContent: {
      type: Array,
      default: () => []
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getIcon(iconName) {
      const iconComponents = {
        user: 'UserIcon',
        rocket: 'RocketIcon',
        lightbulb: 'LightbulbIcon',
        code: 'CodeIcon',
        server: 'ServerIcon',
        palette: 'PaletteIcon',
        zap: 'ZapIcon'
      }
      return iconComponents[iconName] || 'div'
    }
  }
}
</script>

<style scoped>
/* Pulse glow animation for skill icons */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

/* Icon hover effects */
.group:hover svg {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* Enhanced floating elements animation */
@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
}

/* Apply gentle float to icon containers */
.group:hover .w-16,
.group:hover .w-20 {
  animation: float-gentle 3s ease-in-out infinite;
}

/* Shine effect for cards */
@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

/* Background pulse for metrics */
.group:hover .bg-gradient-to-br {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>
