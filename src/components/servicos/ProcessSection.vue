<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background decorativo aprimorado -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <!-- Padrão de grade melhorado -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <!-- Efeitos de luz aprimorados -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s"></div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header da seção melhorado -->
      <div class="text-center mb-20">
        <!-- Badge superior -->
        <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-semibold mb-8 shadow-lg">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span>Nosso Processo Comprovado</span>
        </div>

        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Metodologia que
          <br>
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Garante Resultados
          </span>
        </h2>

        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Seguimos um processo estruturado e transparente, desenvolvido ao longo de anos de experiência,
          que garante entregas de qualidade superior e total satisfação do cliente.
        </p>
      </div>

      <!-- Timeline do processo aprimorado -->
      <div class="relative">
        <!-- Linha conectora central melhorada -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block opacity-30"></div>

        <!-- Linha conectora com pontos de luz -->
        <div class="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div class="w-2 h-2 bg-blue-400 rounded-full absolute top-16 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          <div class="w-2 h-2 bg-purple-400 rounded-full absolute top-80 left-1/2 transform -translate-x-1/2 animate-pulse" style="animation-delay: 1s"></div>
          <div class="w-2 h-2 bg-emerald-400 rounded-full absolute top-[540px] left-1/2 transform -translate-x-1/2 animate-pulse" style="animation-delay: 2s"></div>
          <div class="w-2 h-2 bg-yellow-400 rounded-full absolute top-[800px] left-1/2 transform -translate-x-1/2 animate-pulse" style="animation-delay: 3s"></div>
          <div class="w-2 h-2 bg-pink-400 rounded-full absolute top-[1060px] left-1/2 transform -translate-x-1/2 animate-pulse" style="animation-delay: 4s"></div>
        </div>

        <!-- Etapas do processo -->
        <div class="space-y-20 lg:space-y-24">
          <div
            v-for="(step, index) in process"
            :key="step.id"
            class="flex flex-col lg:flex-row items-center relative"
            :class="index % 2 === 0 ? '' : 'lg:flex-row-reverse'"
          >
            <!-- Número da etapa moderno -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl items-center justify-center text-white font-bold text-xl z-20 shadow-2xl hidden lg:flex"
              :class="{
                'bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-500/50': getStepColor(step.icon) === 'blue',
                'bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-500/50': getStepColor(step.icon) === 'purple',
                'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-500/50': getStepColor(step.icon) === 'emerald',
                'bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-yellow-500/50': getStepColor(step.icon) === 'yellow',
                'bg-gradient-to-br from-pink-500 to-pink-700 shadow-pink-500/50': getStepColor(step.icon) === 'pink'
              }"
            >
              <div class="absolute inset-0 rounded-2xl opacity-50 blur-lg"
                :class="{
                  'bg-blue-400': getStepColor(step.icon) === 'blue',
                  'bg-purple-400': getStepColor(step.icon) === 'purple',
                  'bg-emerald-400': getStepColor(step.icon) === 'emerald',
                  'bg-yellow-400': getStepColor(step.icon) === 'yellow',
                  'bg-pink-400': getStepColor(step.icon) === 'pink'
                }"
              ></div>
              <span class="relative z-10">{{ index + 1 }}</span>
            </div>

            <!-- Conteúdo da etapa melhorado -->
            <div class="w-full lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'">
              <div class="group relative bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 lg:p-10 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                :class="{
                  'hover:shadow-blue-500/10': getStepColor(step.icon) === 'blue',
                  'hover:shadow-purple-500/10': getStepColor(step.icon) === 'purple',
                  'hover:shadow-emerald-500/10': getStepColor(step.icon) === 'emerald',
                  'hover:shadow-yellow-500/10': getStepColor(step.icon) === 'yellow',
                  'hover:shadow-pink-500/10': getStepColor(step.icon) === 'pink'
                }"
              >
                <!-- Efeito de brilho no hover -->
                <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  :class="{
                    'bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5': getStepColor(step.icon) === 'blue',
                    'bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5': getStepColor(step.icon) === 'purple',
                    'bg-gradient-to-br from-emerald-600/5 via-transparent to-emerald-800/5': getStepColor(step.icon) === 'emerald',
                    'bg-gradient-to-br from-yellow-600/5 via-transparent to-yellow-800/5': getStepColor(step.icon) === 'yellow',
                    'bg-gradient-to-br from-pink-600/5 via-transparent to-pink-800/5': getStepColor(step.icon) === 'pink'
                  }"
                ></div>

                <!-- Header do step -->
                <div class="flex items-center mb-6 relative z-10">
                  <!-- Ícone melhorado -->
                  <div class="relative p-4 rounded-2xl mr-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    :class="{
                      'bg-gradient-to-br from-blue-600/20 to-blue-800/20 shadow-lg shadow-blue-500/20': getStepColor(step.icon) === 'blue',
                      'bg-gradient-to-br from-purple-600/20 to-purple-800/20 shadow-lg shadow-purple-500/20': getStepColor(step.icon) === 'purple',
                      'bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 shadow-lg shadow-emerald-500/20': getStepColor(step.icon) === 'emerald',
                      'bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 shadow-lg shadow-yellow-500/20': getStepColor(step.icon) === 'yellow',
                      'bg-gradient-to-br from-pink-600/20 to-pink-800/20 shadow-lg shadow-pink-500/20': getStepColor(step.icon) === 'pink'
                    }"
                  >
                    <!-- Efeito de brilho no ícone -->
                    <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      :class="{
                        'bg-blue-500/30': getStepColor(step.icon) === 'blue',
                        'bg-purple-500/30': getStepColor(step.icon) === 'purple',
                        'bg-emerald-500/30': getStepColor(step.icon) === 'emerald',
                        'bg-yellow-500/30': getStepColor(step.icon) === 'yellow',
                        'bg-pink-500/30': getStepColor(step.icon) === 'pink'
                      }"
                    ></div>

                    <component :is="getStepIcon(step.icon)"
                      class="w-8 h-8 relative z-10"
                      :class="{
                        'text-blue-400 group-hover:text-blue-300': getStepColor(step.icon) === 'blue',
                        'text-purple-400 group-hover:text-purple-300': getStepColor(step.icon) === 'purple',
                        'text-emerald-400 group-hover:text-emerald-300': getStepColor(step.icon) === 'emerald',
                        'text-yellow-400 group-hover:text-yellow-300': getStepColor(step.icon) === 'yellow',
                        'text-pink-400 group-hover:text-pink-300': getStepColor(step.icon) === 'pink'
                      }"
                    />
                  </div>

                  <!-- Número mobile -->
                  <div class="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold mr-4"
                    :class="{
                      'bg-gradient-to-br from-blue-500 to-blue-700': getStepColor(step.icon) === 'blue',
                      'bg-gradient-to-br from-purple-500 to-purple-700': getStepColor(step.icon) === 'purple',
                      'bg-gradient-to-br from-emerald-500 to-emerald-700': getStepColor(step.icon) === 'emerald',
                      'bg-gradient-to-br from-yellow-500 to-yellow-700': getStepColor(step.icon) === 'yellow',
                      'bg-gradient-to-br from-pink-500 to-pink-700': getStepColor(step.icon) === 'pink'
                    }"
                  >
                    {{ index + 1 }}
                  </div>

                  <!-- Título e duração -->
                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                      :class="{
                        'group-hover:from-blue-300 group-hover:to-blue-400': getStepColor(step.icon) === 'blue',
                        'group-hover:from-purple-300 group-hover:to-purple-400': getStepColor(step.icon) === 'purple',
                        'group-hover:from-emerald-300 group-hover:to-emerald-400': getStepColor(step.icon) === 'emerald',
                        'group-hover:from-yellow-300 group-hover:to-yellow-400': getStepColor(step.icon) === 'yellow',
                        'group-hover:from-pink-300 group-hover:to-pink-400': getStepColor(step.icon) === 'pink'
                      }"
                    >
                      {{ step.title }}
                    </h3>
                    <div class="flex items-center gap-2 mt-2">
                      <div class="w-2 h-2 rounded-full"
                        :class="{
                          'bg-blue-400': getStepColor(step.icon) === 'blue',
                          'bg-purple-400': getStepColor(step.icon) === 'purple',
                          'bg-emerald-400': getStepColor(step.icon) === 'emerald',
                          'bg-yellow-400': getStepColor(step.icon) === 'yellow',
                          'bg-pink-400': getStepColor(step.icon) === 'pink'
                        }"
                      ></div>
                      <span class="text-sm font-semibold text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Duração: {{ step.duration }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Descrição melhorada -->
                <p class="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {{ step.description }}
                </p>

                <!-- Detalhes adicionais -->
                <div class="mt-6 pt-6 border-t border-gray-700/30 relative z-10">
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div class="bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/20">
                      <div class="text-xs font-semibold text-gray-400 mb-1">Entregas</div>
                      <div class="text-sm font-bold text-white">{{ getStepDeliverables(step.icon) }}</div>
                    </div>
                    <div class="bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/20">
                      <div class="text-xs font-semibold text-gray-400 mb-1">Ferramentas</div>
                      <div class="text-sm font-bold text-white">{{ getStepTools(step.icon) }}</div>
                    </div>
                    <div class="bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/20">
                      <div class="text-xs font-semibold text-gray-400 mb-1">Comunicação</div>
                      <div class="text-sm font-bold text-white">{{ getStepCommunication(step.icon) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Espaço vazio no desktop -->
            <div class="hidden lg:block lg:w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- CTA da seção melhorado -->
      <div class="text-center mt-24">
        <div class="relative bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-800/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-10 lg:p-12 overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-4 left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
            <div class="absolute bottom-4 right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-600/15 rounded-full blur-2xl animate-pulse" style="animation-delay: 4s"></div>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 rounded-full text-emerald-300 text-sm font-semibold mb-6">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Pronto para Começar?</span>
            </div>

            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Transforme sua
              <span class="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Ideia em Realidade
              </span>
            </h3>

            <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Agende uma consulta gratuita e descubra como nosso processo comprovado pode acelerar
              o crescimento do seu negócio no mundo digital.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 relative overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-3">
                  <svg class="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                  </svg>
                  Iniciar Projeto Agora
                </span>
                <!-- Button shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              <a
                href="/contato.html"
                class="group inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-bold rounded-2xl transition-all duration-500 backdrop-blur-sm"
              >
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Agendar Consultoria Gratuita
              </a>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Consultoria 100% gratuita</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Orçamento sem compromisso</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Resposta em até 24h</span>
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
  name: 'ProcessSection',
  props: {
    process: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup() {
    const getStepColor = (icon) => {
      const colors = {
        discovery: 'blue',
        design: 'purple',
        development: 'emerald',
        testing: 'yellow',
        delivery: 'pink'
      }
      return colors[icon] || 'blue'
    }

    const getStepIcon = (iconType) => {
      return {
        template: `
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-8 h-8">
            ${getIconPath(iconType)}
          </svg>
        `
      }
    }

    const getIconPath = (iconType) => {
      switch(iconType) {
        case 'discovery':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>'
        case 'design':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>'
        case 'development':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
        case 'testing':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
        case 'delivery':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>'
        default:
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>'
      }
    }

    const getStepDeliverables = (icon) => {
      const deliverables = {
        discovery: 'Briefing & Estratégia',
        design: 'Protótipos & UI',
        development: 'Código & Deploy',
        testing: 'QA & Validação',
        delivery: 'Entrega & Docs'
      }
      return deliverables[icon] || 'Entregáveis'
    }

    const getStepTools = (icon) => {
      const tools = {
        discovery: 'Miro & Figma',
        design: 'Figma & Adobe',
        development: 'VS Code & Git',
        testing: 'Cypress & Jest',
        delivery: 'Vercel & GitHub'
      }
      return tools[icon] || 'Ferramentas'
    }

    const getStepCommunication = (icon) => {
      const communication = {
        discovery: 'Calls Diárias',
        design: 'Reviews & Feedback',
        development: 'Updates Semanais',
        testing: 'Reports & Demos',
        delivery: 'Handoff & Suporte'
      }
      return communication[icon] || 'Comunicação'
    }

    return {
      getStepColor,
      getStepIcon,
      getStepDeliverables,
      getStepTools,
      getStepCommunication
    }
  }
}
</script>

<style scoped>
/* Animações personalizadas aprimoradas */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Efeitos de hover personalizados */
.group:hover .group-hover\:animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Timeline conectora customizada */
.timeline-connector {
  background: linear-gradient(
    to bottom,
    #3b82f6,
    #8b5cf6,
    #10b981,
    #f59e0b,
    #ec4899
  );
  background-size: 100% 200%;
  animation: gradientMove 8s ease-in-out infinite;
}

@keyframes gradientMove {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
}

/* Melhorias responsivas */
@media (max-width: 1024px) {
  .timeline-connector {
    display: none;
  }
}

/* Efeitos de partículas */
.particle-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(1px 1px at 20px 30px, rgba(59, 130, 246, 0.3), transparent),
                    radial-gradient(1px 1px at 40px 70px, rgba(139, 92, 246, 0.3), transparent),
                    radial-gradient(1px 1px at 90px 40px, rgba(16, 185, 129, 0.3), transparent),
                    radial-gradient(1px 1px at 130px 80px, rgba(245, 158, 11, 0.3), transparent),
                    radial-gradient(1px 1px at 160px 30px, rgba(236, 72, 153, 0.3), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: particleFloat 20s linear infinite;
  pointer-events: none;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}

/* Efeito de cristal nos cards */
.glass-effect {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(31, 41, 55, 0.4);
  border: 1px solid rgba(75, 85, 99, 0.3);
}

.glass-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: inherit;
  pointer-events: none;
}

/* Scroll reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects for step cards */
.step-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.step-card:hover .step-icon {
  transform: rotate(5deg) scale(1.1);
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #10b981, #f59e0b);
  background-size: 400% 400%;
  animation: gradientShift 4s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>