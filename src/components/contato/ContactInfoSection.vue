<template>
  <section class="py-20 bg-gray-800 transition-colors duration-300 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Outras Formas de Contato
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          Prefere outro meio de comunicação? Aqui estão todas as formas de entrar em contato comigo.
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- Email Card -->
        <div class="group bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              <path d="M12 14l-4-4m4 4l4-4" opacity="0.2" stroke-width="1" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Email</h3>
          <p class="text-gray-400 mb-4">{{ contactInfo.responseTime }}</p>
          <a
            :href="`mailto:${contactInfo.email}`"
            class="text-blue-400 hover:text-blue-300 font-medium transition-colors break-all"
          >
            {{ contactInfo.email }}
          </a>
        </div>

        <!-- Phone Card -->
        <div class="group bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              <path d="M12 9l2 2m0 0l2 2m-2-2v6" opacity="0.2" stroke-width="1" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Telefone</h3>
          <p class="text-gray-400 mb-4">Ligação ou SMS</p>
          <a
            :href="`tel:${contactInfo.phone.replace(/\s/g, '').replace(/[()]/g, '')}`"
            class="text-green-400 hover:text-green-300 font-medium transition-colors"
          >
            {{ contactInfo.phone }}
          </a>
        </div>

        <!-- Location Card -->
        <div class="group bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              <path d="M12 4.5v4m-3.75-2h7.5" stroke-width="1" opacity="0.3" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Localização</h3>
          <p class="text-gray-400 mb-4">Atendimento remoto</p>
          <p class="text-purple-400 font-medium">
            {{ contactInfo.location }}
          </p>
        </div>

        <!-- Availability Card -->
        <div class="group bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h.01M9 9h.01" stroke-width="1" opacity="0.4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Disponibilidade</h3>
          <p class="text-gray-400 mb-4">Status atual</p>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span class="text-emerald-400 font-medium">
              {{ contactInfo.availability }}
            </span>
          </div>
        </div>
      </div>

      <!-- Social Links Section -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-8">
          Redes Sociais
        </h3>

        <div class="flex justify-center space-x-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center p-4 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-32"
            :title="social.description"
          >
            <!-- LinkedIn Icon -->
            <div v-if="social.icon === 'linkedin'" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 11v5M8 8v.01M12 16v-5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 16v-3a2 2 0 00-4 0" />
                <!-- Elementos decorativos -->
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.01M18 18h.01" stroke-width="1" opacity="0.4" />
                <path d="M14 14a2 2 0 012 2" opacity="0.6" stroke-width="1" />
              </svg>
            </div>

            <!-- GitHub Icon -->
            <div v-else-if="social.icon === 'github'" class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.75c.85 0 1.68.1 2.47.3 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                <!-- Elementos decorativos -->
                <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.6" />
                <circle cx="15" cy="9" r="1" fill="currentColor" opacity="0.6" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 14.5c-.5.5-1.5.5-2 0" stroke-width="1" opacity="0.5" />
              </svg>
            </div>

            <!-- WhatsApp Icon -->
            <div v-else-if="social.icon === 'whatsapp'" class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                <!-- Elementos de chat -->
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 10.5h8M9.5 13h5" />
                <!-- Elementos decorativos -->
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 8.4c-.2-.3-1.6-1.2-1.8-1.2M6 15.6c.2.3 1.6 1.2 1.8 1.2" stroke-width="1" opacity="0.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8a1 1 0 100-2 1 1 0 000 2z" stroke-width="1" opacity="0.6" />
              </svg>
            </div>

            <!-- Email Icon -->
            <div v-else-if="social.icon === 'email'" class="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                <!-- Elementos decorativos -->
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 13l-4-4m4 4l4-4" stroke-width="1" opacity="0.3" />
                <path d="M7 16h10" stroke-width="1" opacity="0.2" />
              </svg>
            </div>

            <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {{ social.name }}
            </span>
          </a>
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
  name: 'ContactInfoSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    contactInfo: {
      type: Object,
      required: true
    },
    socialLinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>
