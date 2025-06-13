<template>
  <section class="py-20 bg-gray-900 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">
          Tecnologias Utilizadas
        </h2>
        <p class="text-lg text-gray-400">
          Stack tecnológico aplicado nos projetos
        </p>
      </div>

      <!-- Technologies Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="tech in technologies" :key="tech.name"
             class="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700">
          <div class="text-3xl mb-3">{{ tech.icon }}</div>
          <h3 class="font-semibold text-white mb-2">{{ tech.name }}</h3>
          <p class="text-sm text-gray-400">{{ tech.count }} projeto{{ tech.count > 1 ? 's' : '' }}</p>
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
  name: 'TechnologiesSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>
