<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background dinâmico premium -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <!-- Padrão de grade animado -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      <!-- Efeitos de luz flutuantes -->
      <div class="absolute inset-0 opacity-50">
        <!-- Luz principal central -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/15 via-blue-500/10 to-emerald-500/15 rounded-full blur-3xl animate-float"></div>

        <!-- Luzes secundárias -->
        <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-glow"></div>
        <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-violet-500/20 rounded-full blur-3xl animate-glow" style="animation-delay: 3s"></div>

        <!-- Partículas flutuantes -->
        <div class="absolute top-40 right-40 w-4 h-4 bg-purple-400/60 rounded-full animate-float" style="animation-delay: 1s; animation-duration: 4s"></div>
        <div class="absolute bottom-40 left-40 w-3 h-3 bg-blue-400/60 rounded-full animate-float" style="animation-delay: 2s; animation-duration: 6s"></div>
        <div class="absolute top-60 left-60 w-2 h-2 bg-emerald-400/60 rounded-full animate-float" style="animation-delay: 4s; animation-duration: 5s"></div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header modernizado -->
      <div class="text-center mb-20">
        <!-- Badge superior animado -->
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-emerald-900/40 border border-purple-500/30 backdrop-blur-sm text-purple-300 text-sm font-semibold mb-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-500 group">
          <div class="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
          <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span>Stack Tecnológico Premium</span>
        </div>

        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Tecnologias de
          <br>
          <span class="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Última Geração
          </span>
        </h2>

        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          Utilizamos as tecnologias mais avançadas e confiáveis do mercado para criar
          soluções robustas, escaláveis e que se mantêm relevantes ao longo do tempo.
        </p>

        <!-- Estatísticas rápidas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div class="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300">
            <div class="text-3xl font-bold text-purple-400 mb-2">{{ technologies.length }}+</div>
            <div class="text-sm text-gray-400">Tecnologias</div>
          </div>
          <div class="bg-gradient-to-br from-blue-900/20 to-emerald-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300">
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ categories.length }}</div>
            <div class="text-sm text-gray-400">Categorias</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300">
            <div class="text-3xl font-bold text-emerald-400 mb-2">5+</div>
            <div class="text-sm text-gray-400">Anos Exp.</div>
          </div>
          <div class="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300">
            <div class="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div class="text-sm text-gray-400">Projetos</div>
          </div>
        </div>
      </div>

      <!-- Filtros de categoria modernos -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 backdrop-blur-sm overflow-hidden"
          :class="selectedCategory === category
            ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white shadow-lg shadow-purple-500/25 scale-105'
            : 'bg-gray-800/40 border border-gray-700/30 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-gray-600/50 hover:scale-105'"
        >
          <!-- Efeito shine no hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <span class="relative z-10">
            {{ getCategoryDisplayName(category) }}
          </span>

          <!-- Contador de tecnologias -->
          <span class="ml-2 text-xs opacity-70">({{ getTechCountByCategory(category) }})</span>
        </button>
      </div>

      <!-- Grid de tecnologias com animações -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
        <div
          v-for="(tech, index) in filteredTechnologies"
          :key="tech.name"
          class="group relative bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          :class="getTechHoverEffect(tech.category)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Efeito de brilho dinâmico no hover -->
          <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="getTechGlowEffect(tech.category)"
          ></div>

          <!-- Background pattern -->
          <div class="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
            :style="{ backgroundImage: `url('data:image/svg+xml,${getTechPattern()}')` }"
          ></div>

          <!-- Ícone da tecnologia com animações -->
          <div class="flex items-center justify-center mb-6 relative z-10">
            <div class="relative p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              :class="getTechIconBg(tech.category)"
            >
              <!-- Efeito de brilho no ícone -->
              <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                :class="getTechIconGlow(tech.category)"
              ></div>

              <!-- Ícone emoji ou inicial -->
              <div class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300" v-if="tech.icon">
                {{ tech.icon }}
              </div>
              <div v-else class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg relative z-10 group-hover:scale-110 transition-transform duration-300"
                :class="getTechIconColor(tech.category)"
              >
                {{ tech.name.charAt(0) }}
              </div>
            </div>
          </div>

          <!-- Conteúdo modernizado -->
          <div class="text-center relative z-10">
            <h4 class="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
              :class="getTechTextGradient(tech.category)"
            >
              {{ tech.name }}
            </h4>
            <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
              {{ tech.description }}
            </p>

            <!-- Badge da categoria aprimorado -->
            <div class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm"
              :class="getCategoryBadge(tech.category)"
            >
              <div class="w-1.5 h-1.5 rounded-full animate-pulse"
                :class="getCategoryDot(tech.category)"
              ></div>
              <span>{{ tech.category }}</span>
            </div>
          </div>

          <!-- Indicadores de status -->
          <div class="absolute top-3 right-3 flex gap-1">
            <!-- Indicador de experiência -->
            <div class="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
              :class="getTechIndicator(tech.category)"
            ></div>
            <!-- Indicador de popularidade -->
            <div v-if="isPopularTech(tech.name)" class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          <!-- Partículas flutuantes no hover -->
          <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-float" style="animation-delay: 0.5s"></div>
            <div class="absolute top-6 right-6 w-1 h-1 bg-white/40 rounded-full animate-float" style="animation-delay: 1s"></div>
            <div class="absolute bottom-4 left-6 w-1 h-1 bg-white/40 rounded-full animate-float" style="animation-delay: 1.5s"></div>
          </div>
        </div>
      </div>

      <!-- CTA final premium -->
      <div class="relative">
        <!-- Background com efeitos -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>

        <div class="relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-12 hover:border-gray-600/50 transition-all duration-500">
          <!-- Shine effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shine rounded-3xl"></div>

          <div class="text-center relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>Tecnologia de Ponta</span>
            </div>

            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Sempre Atualizados com as
              <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
                Últimas Tendências
              </span>
            </h3>

            <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Nosso time está sempre estudando e implementando as tecnologias mais recentes
              para oferecer soluções modernas, seguras e escaláveis para seu negócio.
            </p>

            <!-- Botões de ação -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/5511999999999" target="_blank"
                 class="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-purple-500/25 overflow-hidden">
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Consultar Tecnologia
                </span>
              </a>

              <a href="/projetos.html"
                 class="group relative border border-purple-500/50 text-purple-400 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 text-lg backdrop-blur-sm overflow-hidden">
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="19 11H5m14 0l-4 4m4-4l-4-4"/>
                  </svg>
                  Ver Projetos
                </span>
              </a>
            </div>

            <!-- Garantias/benefícios -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span class="text-sm">Sempre Atualizado</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-sm">Performance Otimizada</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span class="text-sm">Suporte Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologiesSection',
  props: {
    technologies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedCategory: 'Todos'
    }
  },
  computed: {
    categories() {
      const uniqueCategories = [...new Set(this.technologies.map(tech => tech.category))]
      return ['Todos', ...uniqueCategories]
    },
    filteredTechnologies() {
      if (this.selectedCategory === 'Todos') {
        return this.technologies
      }
      return this.technologies.filter(tech => tech.category === this.selectedCategory)
    }
  },
  methods: {
    getCategoryDisplayName(category) {
      const displayNames = {
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Database': 'Banco de Dados',
        'CMS': 'CMS',
        'Payments': 'Pagamentos',
        'Deploy': 'Deploy & Hosting',
        'Todos': 'Todas'
      }
      return displayNames[category] || category
    },

    getTechCountByCategory(category) {
      if (category === 'Todos') {
        return this.technologies.length
      }
      return this.technologies.filter(tech => tech.category === category).length
    },

    getTechHoverEffect(category) {
      const effects = {
        'Frontend': 'hover:shadow-purple-500/25',
        'Backend': 'hover:shadow-green-500/25',
        'Database': 'hover:shadow-blue-500/25',
        'CMS': 'hover:shadow-orange-500/25',
        'Payments': 'hover:shadow-yellow-500/25',
        'Deploy': 'hover:shadow-cyan-500/25'
      }
      return effects[category] || 'hover:shadow-gray-500/25'
    },

    getTechGlowEffect(category) {
      const glows = {
        'Frontend': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
        'Backend': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
        'Database': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
        'CMS': 'bg-gradient-to-r from-orange-500/20 to-red-500/20',
        'Payments': 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20',
        'Deploy': 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20'
      }
      return glows[category] || 'bg-gradient-to-r from-gray-500/20 to-gray-600/20'
    },

    getTechIconBg(category) {
      const backgrounds = {
        'Frontend': 'bg-gradient-to-br from-purple-900/40 to-pink-900/40',
        'Backend': 'bg-gradient-to-br from-green-900/40 to-emerald-900/40',
        'Database': 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40',
        'CMS': 'bg-gradient-to-br from-orange-900/40 to-red-900/40',
        'Payments': 'bg-gradient-to-br from-yellow-900/40 to-amber-900/40',
        'Deploy': 'bg-gradient-to-br from-cyan-900/40 to-teal-900/40'
      }
      return backgrounds[category] || 'bg-gradient-to-br from-gray-900/40 to-gray-800/40'
    },

    getTechIconGlow(category) {
      const glows = {
        'Frontend': 'bg-gradient-to-br from-purple-500/60 to-pink-500/60',
        'Backend': 'bg-gradient-to-br from-green-500/60 to-emerald-500/60',
        'Database': 'bg-gradient-to-br from-blue-500/60 to-cyan-500/60',
        'CMS': 'bg-gradient-to-br from-orange-500/60 to-red-500/60',
        'Payments': 'bg-gradient-to-br from-yellow-500/60 to-amber-500/60',
        'Deploy': 'bg-gradient-to-br from-cyan-500/60 to-teal-500/60'
      }
      return glows[category] || 'bg-gradient-to-br from-gray-500/60 to-gray-600/60'
    },

    getTechIconColor(category) {
      const colors = {
        'Frontend': 'bg-purple-600',
        'Backend': 'bg-green-600',
        'Database': 'bg-blue-600',
        'CMS': 'bg-orange-600',
        'Payments': 'bg-yellow-600',
        'Deploy': 'bg-cyan-600'
      }
      return colors[category] || 'bg-gray-600'
    },

    getTechTextGradient(category) {
      const gradients = {
        'Frontend': 'group-hover:from-purple-400 group-hover:to-pink-400',
        'Backend': 'group-hover:from-green-400 group-hover:to-emerald-400',
        'Database': 'group-hover:from-blue-400 group-hover:to-cyan-400',
        'CMS': 'group-hover:from-orange-400 group-hover:to-red-400',
        'Payments': 'group-hover:from-yellow-400 group-hover:to-amber-400',
        'Deploy': 'group-hover:from-cyan-400 group-hover:to-teal-400'
      }
      return gradients[category] || 'group-hover:from-gray-400 group-hover:to-gray-500'
    },

    getCategoryBadge(category) {
      const badges = {
        'Frontend': 'bg-purple-900/30 border-purple-500/30 text-purple-300',
        'Backend': 'bg-green-900/30 border-green-500/30 text-green-300',
        'Database': 'bg-blue-900/30 border-blue-500/30 text-blue-300',
        'CMS': 'bg-orange-900/30 border-orange-500/30 text-orange-300',
        'Payments': 'bg-yellow-900/30 border-yellow-500/30 text-yellow-300',
        'Deploy': 'bg-cyan-900/30 border-cyan-500/30 text-cyan-300'
      }
      return badges[category] || 'bg-gray-900/30 border-gray-500/30 text-gray-300'
    },

    getCategoryDot(category) {
      const dots = {
        'Frontend': 'bg-purple-400',
        'Backend': 'bg-green-400',
        'Database': 'bg-blue-400',
        'CMS': 'bg-orange-400',
        'Payments': 'bg-yellow-400',
        'Deploy': 'bg-cyan-400'
      }
      return dots[category] || 'bg-gray-400'
    },

    getTechIndicator(category) {
      const indicators = {
        'Frontend': 'bg-purple-400',
        'Backend': 'bg-green-400',
        'Database': 'bg-blue-400',
        'CMS': 'bg-orange-400',
        'Payments': 'bg-yellow-400',
        'Deploy': 'bg-cyan-400'
      }
      return indicators[category] || 'bg-gray-400'
    },

    isPopularTech(techName) {
      const popularTechs = ['Vue.js', 'React', 'Node.js', 'Tailwind CSS', 'Firebase']
      return popularTechs.includes(techName)
    },

    getTechPattern() {
      return encodeURIComponent(`
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g fill="#9333ea" fill-opacity="0.1">
              <circle cx="30" cy="30" r="1.5"/>
              <circle cx="15" cy="15" r="1"/>
              <circle cx="45" cy="45" r="1"/>
            </g>
          </g>
        </svg>
      `)
    }
  }
}
</script>

<style scoped>
/* Animações personalizadas premium */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}

.animate-shine {
  animation: shine 3s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

/* Efeitos de hover refinados */
.group:hover .transform {
  transform: scale(1.1) rotate(3deg);
}

/* Transições suaves */
* {
  transition: all 0.3s ease-in-out;
}

/* Melhoramento de performance */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Efeitos de scrolling suave */
.group {
  scroll-behavior: smooth;
}

/* Responsividade aprimorada */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }

  .text-5xl {
    font-size: 3rem;
  }

  .text-6xl {
    font-size: 3.5rem;
  }
}

/* Animação de entrada escalonada */
.grid > div {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Otimização de performance para animações */
.group,
.group * {
  will-change: transform, opacity;
}

/* Estilo para modo escuro melhorado */
.dark {
  color-scheme: dark;
}

/* Efeito de partículas suaves */
.group:hover .absolute.pointer-events-none > div {
  animation-play-state: running;
}

/* Loading states */
.loading {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Efeitos hover avançados */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.transform {
  transition: transform 0.3s ease-in-out;
}

/* Efeito de hover nos cards */
.group:hover .w-16 {
  transform: scale(1.1);
}
</style>
