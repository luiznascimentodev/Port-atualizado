<template>
  <div class="min-h-screen bg-gray-900 relative flex items-center justify-center">
    <!-- Animated Background -->
    <AnimatedBackground />

    <!-- Floating particles for visual appeal -->
    <div class="absolute inset-0 overflow-hidden" style="z-index: 2;">
      <div class="absolute inset-0 pointer-events-none">
        <!-- Error symbols floating -->
        <div class="absolute top-20 left-10 opacity-20 animate-float" style="animation-delay: 0s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(239, 68, 68, 0.6)">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M12 8v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="absolute top-40 right-20 opacity-25 animate-float" style="animation-delay: 2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(245, 158, 11, 0.6)">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute bottom-32 left-16 opacity-20 animate-float" style="animation-delay: 4s;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(59, 130, 246, 0.6)">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <!-- Floating code lines -->
        <div class="absolute top-60 left-1/4 w-20 h-0.5 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded opacity-15 animate-float" style="animation-delay: 3s;"></div>
        <div class="absolute bottom-40 right-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded opacity-15 animate-float" style="animation-delay: 5s;"></div>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-float opacity-60"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float opacity-50" style="animation-delay: 2s;"></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style="z-index: 20;">
      <div class="space-y-8 animate-fade-in-up">
        <!-- 404 Icon -->
        <div class="flex justify-center mb-8">
          <div class="relative">
            <div class="w-32 h-32 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl flex items-center justify-center border border-red-700/30 shadow-2xl backdrop-blur-sm">
              <!-- Glow effect -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 animate-pulse"></div>

              <!-- Error Icon -->
              <div class="relative z-10">
                <svg class="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
            </div>

            <!-- Floating particles around icon -->
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-float opacity-60" style="animation-delay: 1s;"></div>
            <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-40" style="animation-delay: 3s;"></div>
          </div>
        </div>

        <!-- Error Number -->
        <div class="space-y-4">
          <h1 class="text-8xl sm:text-9xl lg:text-[12rem] font-bold leading-none">
            <span class="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto"></div>
        </div>

        <!-- Error Messages -->
        <div class="space-y-4">
          <h2 class="text-3xl sm:text-4xl font-bold text-white">
            Página Não Encontrada
          </h2>

          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Parece que você se perdeu no código! A página que você está procurando
            <span class="text-red-400 font-semibold">não existe</span> ou foi movida para outro lugar.
          </p>
        </div>

        <!-- Quick Stats about the error -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-red-400 mb-1">404</div>
            <div class="text-sm text-gray-400">Erro HTTP</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-yellow-400 mb-1">0</div>
            <div class="text-sm text-gray-400">Resultados</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-blue-400 mb-1">100%</div>
            <div class="text-sm text-gray-400">Solução Disponível</div>
          </div>
        </div>

        <!-- Navigation Options -->
        <div class="space-y-6">
          <p class="text-gray-400">
            Não se preocupe! Aqui estão algumas opções para você continuar navegando:
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Voltar ao Início
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>

            <button @click="goBack"
                    class="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              Página Anterior
            </button>
          </div>

          <!-- Quick Navigation Links -->
          <div class="flex flex-wrap justify-center gap-3">
            <a href="/servicos.html"
               class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/20 border border-emerald-700/30 hover:border-emerald-600/50 text-emerald-300 hover:text-emerald-200 rounded-xl transition-all duration-300 hover:scale-105">
              <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
              Serviços
            </a>

            <a href="/projetos.html"
               class="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-700/30 hover:border-blue-600/50 text-blue-300 hover:text-blue-200 rounded-xl transition-all duration-300 hover:scale-105">
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              Projetos
            </a>

            <a href="/curriculo.html"
               class="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-700/30 hover:border-purple-600/50 text-purple-300 hover:text-purple-200 rounded-xl transition-all duration-300 hover:scale-105">
              <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
              Currículo
            </a>

            <a href="/contato.html"
               class="inline-flex items-center gap-2 px-4 py-2 bg-orange-900/20 border border-orange-700/30 hover:border-orange-600/50 text-orange-300 hover:text-orange-200 rounded-xl transition-all duration-300 hover:scale-105">
              <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
              Contato
            </a>
          </div>
        </div>

        <!-- Help Message -->
        <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="text-left">
              <h3 class="text-lg font-semibold text-white mb-2">Precisa de Ajuda?</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Se você chegou aqui através de um link externo, verifique se a URL está correta.
                Caso o problema persista, entre em contato comigo e eu te ajudarei a encontrar o que precisa!
              </p>
              <a href="/contato.html"
                 class="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'NotFoundPage',
  components: {
    AnimatedBackground
  },
  methods: {
    goBack() {
      // Verifica se há histórico para voltar
      if (window.history.length > 1) {
        window.history.back()
      } else {
        // Se não há histórico, vai para a página inicial
        window.location.href = '/'
      }
    }
  },
  mounted() {
    // Opcional: Log do erro 404 para analytics
    console.log('404 Error - Page not found:', window.location.pathname)
  }
}
</script>
