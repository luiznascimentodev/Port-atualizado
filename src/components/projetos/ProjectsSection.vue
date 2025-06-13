<template>
  <section id="projetos" class="py-20 bg-gray-800 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Projetos em Destaque
          </span>
        </h2>
        <p class="text-lg text-gray-400 max-w-3xl mx-auto">
          Cada projeto representa um desafio superado e uma solução inovadora implementada
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          @click="activeFilter = 'all'"
          :class="activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'"
          class="px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
        >
          Todos
        </button>
        <button
          @click="activeFilter = 'Frontend'"
          :class="activeFilter === 'Frontend' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'"
          class="px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
        >
          Frontend
        </button>
        <button
          @click="activeFilter = 'Full Stack'"
          :class="activeFilter === 'Full Stack' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'"
          class="px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
        >
          Full Stack
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-12">
        <div v-for="(project, index) in filteredProjects" :key="project.id"
             class="group hover:scale-105 transition-all duration-300">

          <!-- Project Card -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <div class="flex flex-col lg:flex-row"
                 :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''">

              <!-- Project Image -->
              <div class="lg:w-1/2 relative overflow-hidden">
                <img :src="project.image" :alt="project.title"
                     loading="lazy"
                     decoding="async"
                     class="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform">

                <!-- Status Badge -->
                <div class="absolute top-4 left-4">
                  <span :class="project.status === 'Concluído' ? 'bg-green-500' : 'bg-yellow-500'"
                        class="px-3 py-1 text-white text-xs rounded-full font-medium">
                    {{ project.status }}
                  </span>
                </div>

                <!-- Category Badge -->
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                    {{ project.category }}
                  </span>
                </div>
              </div>

              <!-- Project Content -->
              <div class="lg:w-1/2 p-8 flex flex-col justify-center">
                <div class="space-y-6">
                  <!-- Title and Description -->
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-4">
                      {{ project.title }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed">
                      {{ project.description }}
                    </p>
                  </div>

                  <!-- Features -->
                  <div>
                    <h4 class="font-semibold text-white mb-3">Principais Funcionalidades:</h4>
                    <ul class="space-y-2">
                      <li v-for="feature in project.features" :key="feature"
                          class="flex items-start text-gray-400 text-sm">
                        <svg class="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>{{ feature }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div>
                    <h4 class="font-semibold text-white mb-3">Tecnologias Utilizadas:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in project.technologies" :key="tech"
                            class="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-wrap gap-4 pt-4">
                    <a v-if="project.demo" :href="project.demo" target="_blank"
                       class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Ver Demo
                    </a>

                    <a v-if="project.github" :href="project.github" target="_blank"
                       class="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 font-medium rounded-lg transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Código
                    </a>

                    <span v-if="!project.demo && !project.github"
                          class="inline-flex items-center px-6 py-3 bg-gray-700 text-gray-400 font-medium rounded-lg">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                      </svg>
                      Projeto Privado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'ProjectsSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const activeFilter = ref('all')

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return props.projects
      }
      return props.projects.filter(project => project.category === activeFilter.value)
    })

    return {
      activeFilter,
      filteredProjects
    }
  }
}
</script>
