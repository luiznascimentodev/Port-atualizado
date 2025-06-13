<template>
  <header class="py-20 relative overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 0;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 0;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 0;" />

    <!-- Modern Background Elements - Consistente com outras páginas -->
    <div class="absolute inset-0 overflow-hidden" style="z-index: 2;">
      <!-- Programming Particles específicos para projetos -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Símbolos de código relacionados a projetos -->
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

        <!-- Linhas de código flutuantes -->
        <div class="absolute top-60 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded opacity-15 animate-float" style="animation-delay: 3s;"></div>
        <div class="absolute bottom-40 right-1/4 w-16 h-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded opacity-15 animate-float" style="animation-delay: 5s;"></div>
      </div>

      <!-- Orbs de gradiente -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-float opacity-60"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-float opacity-50" style="animation-delay: 2s;"></div>

      <!-- Padrão de grade -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>

      <!-- Partículas flutuantes -->
      <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" style="animation-delay: 0s;"></div>
      <div class="absolute top-32 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-float opacity-40" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float opacity-50" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-float opacity-30" style="animation-delay: 3s;"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style="z-index: 20;">
      <div class="text-center space-y-8">
        <!-- Badge Profissional -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/20 text-blue-400 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Portfólio de Desenvolvimento</span>
        </div>

        <!-- Título Principal -->
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Projetos & Soluções
            </span>
            <br>
            <span class="text-gray-100">Desenvolvidas</span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore uma seleção de projetos que demonstram minha experiência em
            <span class="text-blue-400 font-semibold">desenvolvimento full stack</span>,
            desde sistemas empresariais até aplicações web modernas.
          </p>
        </div>

        <!-- Estatísticas Melhoradas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-blue-400 mb-1">3+</div>
            <div class="text-sm text-gray-400">Projetos Completos</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-emerald-400 mb-1">12+</div>
            <div class="text-sm text-gray-400">Tecnologias</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-purple-400 mb-1">100%</div>
            <div class="text-sm text-gray-400">Código Próprio</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-yellow-400 mb-1">95+</div>
            <div class="text-sm text-gray-400">Performance Score</div>
          </div>
        </div>

        <!-- Categorias de Projetos -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/20 border border-blue-800/30 rounded-full text-sm text-blue-300">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            Full Stack
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/20 border border-emerald-800/30 rounded-full text-sm text-emerald-300">
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            Frontend
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-900/20 border border-purple-800/30 rounded-full text-sm text-purple-300">
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            E-commerce
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-900/20 border border-yellow-800/30 rounded-full text-sm text-yellow-300">
            <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
            Sistema de Gestão
          </div>
        </div>

        <!-- CTA Melhorado -->
        <div class="pt-8">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projetos"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              <span>Explorar Projetos</span>
            </a>

            <a href="/contato.html"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/50 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          <!-- Indicador de scroll -->
          <div class="mt-12 animate-bounce">
            <svg class="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'ProjetosHero',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  }
}
</script>

