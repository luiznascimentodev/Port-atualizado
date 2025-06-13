<template>
  <header class="py-20 relative overflow-hidden print:py-10" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0 print:hidden" style="z-index: 0;" />
    <AdvancedCodeParticles class="absolute inset-0 print:hidden" style="z-index: 0;" />
    <AnimatedBackground class="absolute inset-0 print:hidden" style="z-index: 0;" />

    <!-- Modern Background Elements - Consistente com página inicial -->
    <div class="absolute inset-0 overflow-hidden print:hidden" style="z-index: 2;">
      <!-- Programming Particles específicos para currículo -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Símbolos de código profissionais -->
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
      <!-- Professional Header Content -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- Curriculum Vitae Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/20 text-blue-400 text-sm font-medium mb-6 print:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Currículo Profissional</span>
        </div>

        <!-- Professional Title Section -->
        <div class="text-center lg:text-left max-w-3xl mb-8">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Luiz Felippe Nascimento
            </span>
          </h1>

          <h2 class="text-2xl font-medium text-blue-100/80 mb-6 flex items-center justify-center lg:justify-start flex-wrap gap-3">
            <span>Desenvolvedor Full Stack</span>
            <span class="h-1.5 w-1.5 rounded-full bg-blue-500/70"></span>
            <span class="text-blue-300 font-normal">Vue.js & React</span>
          </h2>

          <!-- Contact and Social Links in a professional layout -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
            <a href="https://www.linkedin.com/in/luiz-felippe-nascimento" target="_blank"
              class="group flex items-center gap-2 bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-800/20
              hover:bg-blue-800/20 transition-all duration-300">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </a>

            <a href="https://github.com/luiznascimentodev" target="_blank"
              class="group flex items-center gap-2 bg-gray-800/40 px-4 py-2 rounded-lg border border-gray-700/20
              hover:bg-gray-800/60 transition-all duration-300">
              <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="text-sm text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            </a>

            <a href="https://wa.me/+5541984821206" target="_blank"
              class="group flex items-center gap-2 bg-green-900/20 px-4 py-2 rounded-lg border border-green-800/20
              hover:bg-green-800/20 transition-all duration-300">
              <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
              </svg>
              <span class="text-sm text-gray-300 group-hover:text-green-400 transition-colors">WhatsApp</span>
            </a>

            <a href="mailto:luiznascimentodev@gmail.com" target="_blank"
              class="group flex items-center gap-2 bg-gray-800/40 px-4 py-2 rounded-lg border border-gray-700/20
              hover:bg-gray-800/60 transition-all duration-300">
              <svg class="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-sm text-gray-300 group-hover:text-blue-300 transition-colors">Email</span>
            </a>
          </div>
        </div>

        <!-- Key info cards -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-4 w-full mb-8">
          <!-- Experience -->
          <div class="flex items-center gap-3 bg-blue-900/20 px-4 py-3 rounded-lg border border-blue-800/20">
            <div class="p-2 rounded-lg bg-blue-900/30">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400">Experiência</p>
              <p class="font-medium text-white">+5 anos</p>
            </div>
          </div>

          <!-- Localização -->
          <div class="flex items-center gap-3 bg-blue-900/20 px-4 py-3 rounded-lg border border-blue-800/20">
            <div class="p-2 rounded-lg bg-blue-900/30">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400">Localização</p>
              <p class="font-medium text-white">Curitiba, PR</p>
            </div>
          </div>

          <!-- Disponibilidade -->
          <div class="flex items-center gap-3 bg-blue-900/20 px-4 py-3 rounded-lg border border-blue-800/20">
            <div class="p-2 rounded-lg bg-blue-900/30">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400">Disponibilidade</p>
              <p class="font-medium text-white">Imediata</p>
            </div>
          </div>

          <!-- Idiomas -->
          <div class="flex items-center gap-3 bg-blue-900/20 px-4 py-3 rounded-lg border border-blue-800/20">
            <div class="p-2 rounded-lg bg-blue-900/30">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400">Idiomas</p>
              <p class="font-medium text-white">Português, Inglês</p>
            </div>
          </div>
        </div>

        <!-- Professional summary -->
        <div class="w-full bg-gray-800/40 border border-gray-700/20 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Resumo Profissional</span>
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Desenvolvedor Full Stack com mais de 5 anos de experiência na criação e manutenção de aplicações web e sistemas corporativos.
            Especialista em Vue.js e React para interfaces modernas, combinado com Node.js e PHP para backend robusto.
            Meu foco está em desenvolver código limpo, escalável e soluções centradas no usuário que resolvem problemas de negócio reais.
            Tenho histórico comprovado em otimização de desempenho, integração de APIs e implementação de melhores práticas de segurança.
          </p>
        </div>

        <!-- Download CV and Ver Competências -->
        <div class="flex flex-wrap gap-4 justify-center lg:justify-start print:hidden">
          <a href="/src/assets/luiz-nascimento-desenvolvedor-fullstack.pdf" target="_blank"
            class="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/20">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </a>
          <a href="#skills-section"
            class="flex items-center gap-2 bg-gray-800/60 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700/60 hover:text-white transition-all duration-300">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Ver Competências</span>
          </a>
        </div>
      </div>

      <!-- Print-only contact info -->
      <div class="hidden print:flex print:flex-wrap print:justify-start print:gap-4 print:mt-2 print:text-xs print:text-gray-600">
        <div class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          luiznascimentodev@gmail.com
        </div>
        <div class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +55 (41) 9 8482-1206
        </div>
        <div class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          Curitiba, PR
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center print:hidden">
      <span class="text-xs text-gray-500 mb-2">Role para mais</span>
      <div class="w-6 h-10 rounded-full border-2 border-gray-500/30 flex justify-center pt-1">
        <div class="w-1.5 h-2.5 bg-blue-500/80 rounded-full animate-bounce"></div>
      </div>
    </div>
  </header>
</template>

<script>
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'CurriculoHero',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  mounted() {
    // Ajustar o espaçamento entre as seções
    const header = document.querySelector('header');
    const nextSection = header.nextElementSibling;

    if (nextSection) {
      nextSection.style.marginTop = '0';
    }

    // Desativar animações para impressão
    window.addEventListener('beforeprint', this.disableAnimations);
    window.addEventListener('afterprint', this.enableAnimations);
  },
  beforeUnmount() {
    // Remover event listeners
    window.removeEventListener('beforeprint', this.disableAnimations);
    window.removeEventListener('afterprint', this.enableAnimations);
  },
  methods: {
    disableAnimations() {
      document.body.classList.add('print-mode');
    },
    enableAnimations() {
      document.body.classList.remove('print-mode');
    }
  }
}
</script>

<style scoped>
/* Desativar animações na impressão */
@media print {
  .animate-ping,
  .animate-bounce {
    animation: none !important;
  }

  .min-h-screen {
    min-height: auto !important;
  }
}

/* Garantir transições suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Impedir sobreposição de elementos */
.relative {
  position: relative;
  z-index: 1;
}

/* Melhorar a visualização em dispositivos pequenos */
@media (max-width: 640px) {
  .grid {
    row-gap: 2rem;
  }
}
</style>
