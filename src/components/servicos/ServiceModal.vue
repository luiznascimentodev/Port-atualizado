<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="$emit('close')"
      ></div>

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-gray-800 rounded-2xl border border-gray-700/50 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <!-- Header -->
        <div class="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-700/50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div
                class="p-3 rounded-xl"
                :class="{
                  'bg-gradient-to-br from-blue-600/20 to-blue-800/20': service.color === 'blue',
                  'bg-gradient-to-br from-emerald-600/20 to-emerald-800/20': service.color === 'emerald',
                  'bg-gradient-to-br from-purple-600/20 to-purple-800/20': service.color === 'purple',
                  'bg-gradient-to-br from-indigo-600/20 to-indigo-800/20': service.color === 'indigo',
                  'bg-gradient-to-br from-yellow-600/20 to-yellow-800/20': service.color === 'yellow',
                  'bg-gradient-to-br from-green-600/20 to-green-800/20': service.color === 'green'
                }"
              >
                <svg
                  class="w-6 h-6"
                  :class="{
                    'text-blue-400': service.color === 'blue',
                    'text-emerald-400': service.color === 'emerald',
                    'text-purple-400': service.color === 'purple',
                    'text-indigo-400': service.color === 'indigo',
                    'text-yellow-400': service.color === 'yellow',
                    'text-green-400': service.color === 'green'
                  }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path v-html="getIconPath(service.icon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white" id="modal-title">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-gray-400">{{ service.subtitle }}</p>
              </div>
            </div>
            <button
              @click="$emit('close')"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="px-6 py-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column - Details -->
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Descrição do Serviço</h4>
                <p class="text-gray-400 leading-relaxed">{{ service.description }}</p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-white mb-4">O que está incluso:</h4>
                <ul class="space-y-3">
                  <li v-for="feature in service.features" :key="feature" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-gray-300">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-white mb-4">Tecnologias utilizadas:</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in service.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-gray-700/50 text-sm text-gray-300 rounded-lg border border-gray-600/30"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column - Pricing & Action -->
            <div class="space-y-6">
              <div class="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <h4 class="text-lg font-semibold text-white mb-4">Informações do Projeto</h4>

                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-400">Prazo de entrega:</span>
                    <span class="text-white font-medium">{{ service.timeframe }}</span>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-400">Investimento:</span>
                    <span class="text-xl font-bold text-white">{{ service.starting_price }}</span>
                  </div>

                  <div class="pt-4 border-t border-gray-600/30">
                    <p class="text-sm text-gray-400 mb-4">
                      * Valores podem variar de acordo com a complexidade e requisitos específicos do projeto.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <a
                  href="/contato.html"
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  :class="{
                    'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white': service.color === 'blue',
                    'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white': service.color === 'emerald',
                    'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white': service.color === 'purple',
                    'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white': service.color === 'indigo',
                    'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white': service.color === 'yellow',
                    'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white': service.color === 'green'
                  }"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Solicitar Orçamento Personalizado
                </a>

                <a
                  href="https://wa.me/+5541984821206?text=Olá! Gostaria de saber mais sobre o serviço: {{ service.title }}"
                  target="_blank"
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                  </svg>
                  Conversar via WhatsApp
                </a>
              </div>

              <!-- Additional Info -->
              <div class="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h5 class="text-sm font-semibold text-blue-300 mb-1">Consulta Gratuita</h5>
                    <p class="text-xs text-blue-200/80">
                      Oferecemos uma consulta inicial gratuita para entender suas necessidades e definir a melhor estratégia para seu projeto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceModal',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    getIconPath(iconType) {
      switch(iconType) {
        case 'layout':
          return 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
        case 'shopping':
          return 'M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z'
        case 'code':
          return 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        case 'wordpress':
          return 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        case 'search':
          return 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        case 'support':
          return 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a1.125 1.125 0 00-1.125 1.125v17.25A1.125 1.125 0 0012 21.75a1.125 1.125 0 001.125-1.125V3.375A1.125 1.125 0 0012 2.25z'
        default:
          return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    }
  },
  mounted() {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  },
  beforeUnmount() {
    // Restore body scroll when modal is closed
    document.body.style.overflow = ''
  }
}
</script>