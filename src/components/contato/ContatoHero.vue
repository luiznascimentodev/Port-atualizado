<template>
  <section class="relative py-20 overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 0;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 0;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 0;" />

    <!-- Modern Background Elements - Consistente com outras páginas -->
    <div class="absolute inset-0 overflow-hidden" style="z-index: 2;">
      <!-- Programming Particles específicos para contato -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Símbolos de comunicação e conectividade -->
        <div class="absolute top-20 left-10 opacity-20 animate-float" style="animation-delay: 0s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(59, 130, 246, 0.6)">
            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute top-40 right-20 opacity-25 animate-float" style="animation-delay: 2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(16, 185, 129, 0.6)">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <div class="absolute bottom-32 left-16 opacity-20 animate-float" style="animation-delay: 4s;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(139, 92, 246, 0.6)">
            <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        </div>

        <div class="absolute bottom-20 right-32 opacity-30 animate-float" style="animation-delay: 1s;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(245, 158, 11, 0.6)">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <!-- Linhas de conexão flutuantes -->
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span>Vamos Conversar</span>
        </div>

        <!-- Título Principal Melhorado -->
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="text-gray-100">Transforme sua</span>
            <br>
            <span class="bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Ideia em Realidade
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Pronto para desenvolver seu próximo projeto? Entre em contato e vamos
            <span class="text-emerald-400 font-semibold">construir algo incrível juntos</span>.
          </p>
        </div>

        <!-- Estatísticas de Resposta -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-lg font-bold text-blue-400 mb-1">< 24h</div>
            <div class="text-xs text-gray-400">Tempo de Resposta</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
            <div class="flex items-center justify-center mb-2">
              <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-lg font-bold text-emerald-400 mb-1">100%</div>
            <div class="text-xs text-gray-400">Consulta Gratuita</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
            <div class="flex items-center justify-center mb-2">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div class="text-lg font-bold text-emerald-400 mb-1">Online</div>
            <div class="text-xs text-gray-400">Status Atual</div>
          </div>
        </div>

        <!-- Contact methods grid melhorada -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Email Card -->
          <a href="mailto:luiznascimentodev@gmail.com" class="group">
            <div class="relative overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative z-10">
                <!-- Icon container -->
                <div class="flex justify-center mb-4">
                  <div class="p-3 rounded-xl bg-gradient-to-br from-blue-600/90 to-blue-800/90 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="text-center space-y-3">
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Email Profissional</h3>
                  <div class="space-y-2">
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Resposta em até 24h
                      </span>
                    </p>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Ideal para orçamentos
                      </span>
                    </p>
                  </div>
                  <p class="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm">luiznascimentodev@gmail.com</p>
                </div>
              </div>
            </div>
          </a>

          <!-- WhatsApp Card -->
          <a href="https://wa.me/+5541984821206" target="_blank" class="group">
            <div class="relative overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative z-10">
                <!-- Icon container -->
                <div class="flex justify-center mb-4">
                  <div class="p-3 rounded-xl bg-gradient-to-br from-green-500/90 to-green-700/90 group-hover:from-green-400 group-hover:to-green-600 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="text-center space-y-3">
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">WhatsApp Direto</h3>
                  <div class="space-y-2">
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        Resposta imediata
                      </span>
                    </p>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                        Conversas rápidas
                      </span>
                    </p>
                  </div>
                  <p class="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300 text-sm">+55 (41) 98482-1206</p>
                </div>
              </div>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a href="https://www.linkedin.com/in/luiz-felippe-nascimento" target="_blank" class="group">
            <div class="relative overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative z-10">
                <!-- Icon container -->
                <div class="flex justify-center mb-4">
                  <div class="p-3 rounded-xl bg-gradient-to-br from-blue-600/90 to-indigo-700/90 group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="text-center space-y-3">
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">LinkedIn Profissional</h3>
                  <div class="space-y-2">
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z"/>
                        </svg>
                        Conexões profissionais
                      </span>
                    </p>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <span class="inline-flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        Ver experiências
                      </span>
                    </p>
                  </div>
                  <p class="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm">Conectar-se</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Call-to-Action melhorada -->
        <div class="pt-8 space-y-6">
          <!-- Status badge melhorado -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-300 text-sm font-medium">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Disponível para novos projetos</span>
            <span class="text-emerald-400">•</span>
            <span class="text-gray-400">Curitiba, PR</span>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact-form"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>Enviar Mensagem</span>
            </a>

            <a href="/curriculo.html"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/50 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span>Ver Currículo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'ContatoHero',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  }
}
</script>

