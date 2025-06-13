<template>
  <section class="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style="z-index: 20;">
      <div class="space-y-8">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          Vamos construir algo incrível juntos?
        </h2>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Tenho experiência em desenvolvimento full stack e estou sempre em busca
          de novos desafios e projetos interessantes.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:luiznascimentodev@gmail.com"
             class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Entrar em Contato
          </a>

          <a href="https://wa.me/+5541984821206" target="_blank"
             class="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors transform hover:scale-105">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <!-- Additional Links -->
        <div class="pt-8 border-t border-white/20">
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/curriculo.html" class="flex items-center hover:underline opacity-90 hover:opacity-100 transition-opacity">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              Ver Currículo Completo
            </a>
            <a href="/" class="flex items-center hover:underline opacity-90 hover:opacity-100 transition-opacity">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
              </svg>
              Voltar ao Início
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
  name: 'ContactCTA',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  }
}
</script>
