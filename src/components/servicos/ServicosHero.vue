<template>
  <header class="py-20 relative overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 0;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 0;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 0;" />

    <!-- Modern Background Elements -->
    <div class="absolute inset-0 overflow-hidden" style="z-index: 2;">
      <!-- Programming Particles específicos para serviços -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Símbolos de desenvolvimento e serviços -->
        <div class="absolute top-20 left-10 opacity-20 animate-float" style="animation-delay: 0s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(59, 130, 246, 0.6)">
            <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute top-40 right-20 opacity-25 animate-float" style="animation-delay: 2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(16, 185, 129, 0.6)">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute bottom-32 left-16 opacity-20 animate-float" style="animation-delay: 4s;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(139, 92, 246, 0.6)">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute bottom-20 right-32 opacity-30 animate-float" style="animation-delay: 1s;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(245, 158, 11, 0.6)">
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke="currentColor" stroke-width="2" fill="none"/>
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

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="z-index: 20;">
      <div class="text-center space-y-8">
        <!-- Badge Profissional -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-700/20 text-emerald-400 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span>Serviços Profissionais</span>
        </div>

        <!-- Título Principal -->
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="text-gray-100">Desenvolvimento Web</span>
            <br>
            <span class="bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              que Impulsiona Resultados
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Transforme sua presença digital com soluções modernas, responsivas e otimizadas para
            <span class="text-emerald-400 font-semibold">gerar mais leads e vendas</span> para seu negócio.
          </p>
        </div>

        <!-- Estatísticas de Serviços -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-blue-400 mb-1">50+</div>
            <div class="text-sm text-gray-400">Projetos Entregues</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-emerald-400 mb-1">300%</div>
            <div class="text-sm text-gray-400">Aumento Médio em Leads</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-purple-400 mb-1">7-30</div>
            <div class="text-sm text-gray-400">Dias para Entrega</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div class="text-2xl font-bold text-emerald-400 mb-1">24/7</div>
            <div class="text-sm text-gray-400">Suporte Disponível</div>
          </div>
        </div>

        <!-- Serviços em Destaque -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/20 border border-blue-800/30 rounded-full text-sm text-blue-300">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            Sites Responsivos
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/20 border border-emerald-800/30 rounded-full text-sm text-emerald-300">
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            E-commerce
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-900/20 border border-purple-800/30 rounded-full text-sm text-purple-300">
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            Sistemas Web
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-900/20 border border-yellow-800/30 rounded-full text-sm text-yellow-300">
            <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
            SEO & Marketing
          </div>
        </div>

        <!-- Call-to-Action -->
        <div class="pt-8 space-y-6">
          <!-- Oferta especial -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-emerald-800/30 border border-emerald-700/40 text-emerald-300 text-sm font-medium">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span>Consulta gratuita para novos clientes</span>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicos"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              <span>Ver Todos os Serviços</span>
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
  name: 'ServicosHero',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  }
}
</script>