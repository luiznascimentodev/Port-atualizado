<template>
<section id="projetos" class="projects-section py-20 transition-colors duration-300 relative overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
<!-- Particle Components -->
<ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
<AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
<AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
<!-- Section Header -->
<div class="text-center mb-16">
<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
Meus Projetos
</h2>
<p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
Confira alguns dos projetos que desenvolvi, desde aplicações web completas até sistemas personalizados.
</p>
</div>

<!-- Projects Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div
v-for="project in projects"
:key="project.id"
class="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700"
>
<!-- Project Image -->
<div class="relative overflow-hidden">
<img
:src="project.image"
:alt="project.title"
class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div class="absolute bottom-4 left-4 right-4">
<div class="flex space-x-2">
<span
v-for="tech in project.technologies"
:key="tech"
class="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
>
{{ tech }}
</span>
</div>
</div>
</div>
</div>

<!-- Project Content -->
<div class="p-6">
<h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
{{ project.title }}
</h3>
<p class="text-gray-400 mb-4 leading-relaxed">
{{ project.description }}
</p>

<!-- Project Links -->
<div class="flex items-center justify-between">
<div class="flex space-x-3">
<a
v-if="project.demo"
:href="project.demo"
target="_blank"
class="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-sm rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
>
<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
</svg>
Demo
</a>
<a
v-if="project.github"
:href="project.github"
target="_blank"
class="flex items-center px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors duration-200"
>
<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>
GitHub
</a>
</div>

<!-- Project Status -->
<span
                class="px-3 py-1 text-xs font-medium rounded-full"
                :class="project.status === 'Concluído'
                  ? 'bg-green-900/30 text-green-400'
                  : 'bg-yellow-900/30 text-yellow-400'"
              >
{{ project.status }}
</span>
</div>
</div>
</div>
</div>

<!-- More Projects CTA -->
<div class="text-center mt-16">
  <p class="text-xl text-gray-400 mb-8">
    Gostou do que viu? Conheça todos os meus projetos!
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/projetos.html"
      class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
      Ver Todos os Projetos
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
    <a
      href="/contato.html"
      class="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-2xl transition-all duration-300"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"/>
      </svg>
      Iniciar um Projeto
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
  name: 'ProjectsSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>
