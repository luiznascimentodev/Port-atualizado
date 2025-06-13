<template>
  <section id="servicos" class="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-semibold mb-8 shadow-lg">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span>Nossos Serviços Especializados</span>
        </div>

        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Soluções Inovadoras para
          <br>
          <span class="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Seu Sucesso Digital
          </span>
        </h2>

        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Oferecemos uma gama completa de serviços de desenvolvimento web premium, desde landing pages até sistemas complexos,
          sempre focando em performance, conversão e experiência excepcional do usuário.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
          :class="{
            'ring-2 ring-emerald-400/40 ring-offset-4 ring-offset-gray-900/50 shadow-2xl shadow-emerald-500/20': service.popular,
            'hover:ring-2 hover:ring-blue-400/30 hover:ring-offset-2 hover:ring-offset-gray-900/50': !service.popular
          }"
        >
          <!-- Popular Badge -->
          <div v-if="service.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg border border-emerald-400/50">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Mais Procurado</span>
              </div>
            </div>
          </div>

          <!-- Background Glow Effect -->
          <div
            class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="{
              'bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5': service.color === 'blue',
              'bg-gradient-to-br from-emerald-600/5 via-transparent to-emerald-800/5': service.color === 'emerald',
              'bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5': service.color === 'purple',
              'bg-gradient-to-br from-indigo-600/5 via-transparent to-indigo-800/5': service.color === 'indigo',
              'bg-gradient-to-br from-yellow-600/5 via-transparent to-yellow-800/5': service.color === 'yellow',
              'bg-gradient-to-br from-green-600/5 via-transparent to-green-800/5': service.color === 'green'
            }"
          ></div>

          <!-- Service Icon -->
          <div class="flex items-center justify-center mb-8 relative z-10">
            <div
              class="relative p-6 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              :class="{
                'bg-gradient-to-br from-blue-600/20 to-blue-800/20 shadow-lg shadow-blue-500/20': service.color === 'blue',
                'bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 shadow-lg shadow-emerald-500/20': service.color === 'emerald',
                'bg-gradient-to-br from-purple-600/20 to-purple-800/20 shadow-lg shadow-purple-500/20': service.color === 'purple',
                'bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 shadow-lg shadow-indigo-500/20': service.color === 'indigo',
                'bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 shadow-lg shadow-yellow-500/20': service.color === 'yellow',
                'bg-gradient-to-br from-green-600/20 to-green-800/20 shadow-lg shadow-green-500/20': service.color === 'green'
              }"
            >
              <!-- Glow effect around icon -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                :class="{
                  'bg-blue-500/30': service.color === 'blue',
                  'bg-emerald-500/30': service.color === 'emerald',
                  'bg-purple-500/30': service.color === 'purple',
                  'bg-indigo-500/30': service.color === 'indigo',
                  'bg-yellow-500/30': service.color === 'yellow',
                  'bg-green-500/30': service.color === 'green'
                }"
              ></div>

              <component :is="getServiceIcon(service.icon)"
                class="w-10 h-10 relative z-10"
                :class="{
                  'text-blue-400 group-hover:text-blue-300': service.color === 'blue',
                  'text-emerald-400 group-hover:text-emerald-300': service.color === 'emerald',
                  'text-purple-400 group-hover:text-purple-300': service.color === 'purple',
                  'text-indigo-400 group-hover:text-indigo-300': service.color === 'indigo',
                  'text-yellow-400 group-hover:text-yellow-300': service.color === 'yellow',
                  'text-green-400 group-hover:text-green-300': service.color === 'green'
                }"
              />
            </div>
          </div>

          <!-- Service Content -->
          <div class="text-center space-y-6 relative z-10">
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-500">
                {{ service.title }}
              </h3>

              <p class="text-base font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                :class="{
                  'group-hover:text-blue-300': service.color === 'blue',
                  'group-hover:text-emerald-300': service.color === 'emerald',
                  'group-hover:text-purple-300': service.color === 'purple',
                  'group-hover:text-indigo-300': service.color === 'indigo',
                  'group-hover:text-yellow-300': service.color === 'yellow',
                  'group-hover:text-green-300': service.color === 'green'
                }"
              >
                {{ service.subtitle }}
              </p>
            </div>

            <p class="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-base">
              {{ service.description }}
            </p>

            <!-- Features List -->
            <div class="pt-4">
              <div class="bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/30 group-hover:border-gray-600/40 transition-all duration-300">
                <h4 class="text-sm font-bold text-gray-200 mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full"
                    :class="{
                      'bg-blue-400': service.color === 'blue',
                      'bg-emerald-400': service.color === 'emerald',
                      'bg-purple-400': service.color === 'purple',
                      'bg-indigo-400': service.color === 'indigo',
                      'bg-yellow-400': service.color === 'yellow',
                      'bg-green-400': service.color === 'green'
                    }"
                  ></div>
                  <span>O que está incluído:</span>
                </h4>
                <ul class="space-y-3 text-sm text-gray-300">
                  <li v-for="feature in service.features.slice(0, 3)" :key="feature" class="flex items-start gap-3 group/item">
                    <svg class="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110"
                      :class="{
                        'text-blue-400': service.color === 'blue',
                        'text-emerald-400': service.color === 'emerald',
                        'text-purple-400': service.color === 'purple',
                        'text-indigo-400': service.color === 'indigo',
                        'text-yellow-400': service.color === 'yellow',
                        'text-green-400': service.color === 'green'
                      }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="group-hover/item:text-white transition-colors duration-300">{{ feature }}</span>
                  </li>
                </ul>
                <div v-if="service.features.length > 3" class="mt-4 pt-3 border-t border-gray-700/50">
                  <p class="text-xs font-medium text-gray-400 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    <span>+{{ service.features.length - 3 }} recursos adicionais inclusos</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Technologies -->
            <div class="pt-2">
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="tech in service.technologies.slice(0, 4)"
                  :key="tech"
                  class="px-3 py-1.5 bg-gray-700/40 border border-gray-600/30 text-xs font-medium text-gray-300 rounded-lg backdrop-blur-sm hover:bg-gray-600/40 hover:text-white transition-all duration-300"
                >
                  {{ tech }}
                </span>
                <span v-if="service.technologies.length > 4" class="px-3 py-1.5 bg-gray-700/20 border border-gray-600/20 text-xs font-medium text-gray-400 rounded-lg">
                  +{{ service.technologies.length - 4 }}
                </span>
              </div>
            </div>

            <!-- Pricing and Timeframe -->
            <div class="pt-6 space-y-6">
              <div class="bg-gray-800/20 rounded-2xl p-5 border border-gray-700/30 backdrop-blur-sm">
                <div class="flex items-center justify-between text-sm mb-3">
                  <span class="text-gray-400 font-medium flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Prazo de entrega:
                  </span>
                  <span class="text-white font-bold">{{ service.timeframe }}</span>
                </div>

                <div class="text-center mb-4">
                  <div class="text-2xl font-bold text-white mb-1">{{ service.starting_price }}</div>
                  <div class="text-xs text-gray-400">Valor inicial do projeto</div>
                </div>
              </div>

              <button
                @click="openServiceModal(service)"
                class="w-full px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group/btn"
                :class="{
                  'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25': service.color === 'blue',
                  'bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25': service.color === 'emerald',
                  'bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25': service.color === 'purple',
                  'bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/25': service.color === 'indigo',
                  'bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white shadow-lg shadow-yellow-500/25': service.color === 'yellow',
                  'bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25': service.color === 'green'
                }"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Solicitar Orçamento Grátis
                </span>
                <!-- Button shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-20">
        <div class="relative bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-800/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-10 lg:p-12 overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-4 left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
            <div class="absolute bottom-4 right-4 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl"></div>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 rounded-full text-emerald-300 text-sm font-semibold mb-6">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Projeto Personalizado</span>
            </div>

            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Não encontrou exatamente
              <br>
              <span class="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                o que procura?
              </span>
            </h3>

            <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos soluções sob medida para necessidades específicas do seu negócio.
              Vamos conversar sobre suas ideias e criar algo único para você.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contato.html"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 relative overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-3">
                  <svg class="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Conversar sobre Projeto Personalizado
                </span>
                <!-- Button shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              <div class="text-sm text-gray-400 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Consultoria gratuita • Orçamento sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Modal -->
    <ServiceModal
      v-if="selectedService"
      :service="selectedService"
      @close="closeServiceModal"
    />
  </section>
</template>

<script>
import { ref } from 'vue'
import ServiceModal from './ServiceModal.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceModal
  },
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  setup() {
    const selectedService = ref(null)

    const openServiceModal = (service) => {
      selectedService.value = service
    }

    const closeServiceModal = () => {
      selectedService.value = null
    }

    const getServiceIcon = (iconType) => {
      const icons = {
        layout: 'LayoutIcon',
        shopping: 'ShoppingIcon',
        code: 'CodeIcon',
        wordpress: 'WordPressIcon',
        search: 'SearchIcon',
        support: 'SupportIcon'
      }

      // Return a generic SVG component function
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
        case 'layout':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>'
        case 'shopping':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>'
        case 'code':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
        case 'wordpress':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>'
        case 'search':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>'
        case 'support':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a1.125 1.125 0 00-1.125 1.125v17.25A1.125 1.125 0 0012 21.75a1.125 1.125 0 001.125-1.125V3.375A1.125 1.125 0 0012 2.25z"/>'
        default:
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
      }
    }

    return {
      selectedService,
      openServiceModal,
      closeServiceModal,
      getServiceIcon
    }
  }
}
</script>