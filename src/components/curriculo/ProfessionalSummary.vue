<template>
  <section class="py-16 bg-gray-800 print:py-8 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0 print:hidden" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0 print:hidden" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0 print:hidden" style="z-index: 10;" />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <div class="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600 print:shadow-none print:border print:border-gray-300">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center print:text-xl print:mb-4">
          <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          Resumo Profissional
        </h3>
        <p class="text-gray-300 leading-relaxed text-lg print:text-sm print:leading-relaxed">
          Desenvolvedor Full Stack com <strong>mais de 3 anos de experiência</strong> em desenvolvimento web, especializado em
          <strong>Vue.js, React, Node.js e WordPress</strong>. Tenho experiência empreendedora como fundador de agência própria,
          onde desenvolvi <strong>+20 projetos para o setor da construção civil</strong>. Combino habilidades técnicas sólidas
          com experiência em gestão de projetos e liderança de equipes. Apaixonado por criar soluções inovadoras que
          <strong>transformam ideias em produtos digitais de alto impacto</strong>, sempre focado em
          <strong>código limpo, performance otimizada e experiência do usuário excepcional</strong>.
        </p>

        <!-- Key Highlights -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 print:mt-4 print:gap-2">
          <div class="text-center p-4 bg-gray-800/50 rounded-lg print:p-2">
            <div class="text-2xl font-bold text-blue-400 print:text-lg">3+</div>
            <div class="text-sm text-gray-400 print:text-xs">Anos de Experiência</div>
          </div>
          <div class="text-center p-4 bg-gray-800/50 rounded-lg print:p-2">
            <div class="text-2xl font-bold text-emerald-400 print:text-lg">20+</div>
            <div class="text-sm text-gray-400 print:text-xs">Projetos Entregues</div>
          </div>
          <div class="text-center p-4 bg-gray-800/50 rounded-lg print:p-2">
            <div class="text-2xl font-bold text-purple-400 print:text-lg">100%</div>
            <div class="text-sm text-gray-400 print:text-xs">Satisfação dos Clientes</div>
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
  name: 'ProfessionalSummary',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  }
}
</script>
