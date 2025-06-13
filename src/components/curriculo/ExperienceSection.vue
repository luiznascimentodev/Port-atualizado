<template>
  <section class="py-20 bg-gray-900 print:py-8 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0 print:hidden" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0 print:hidden" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0 print:hidden" style="z-index: 10;" />

    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden print:hidden" style="z-index: 5;">
      <div class="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Enhanced Section Header -->
      <div class="text-center mb-20 print:mb-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-300 text-sm font-medium mb-6 print:hidden">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
          </svg>
          <span>Trajetória Profissional</span>
        </div>

        <h2 class="text-4xl sm:text-5xl font-bold mb-6 print:text-2xl print:mb-2">
          <span class="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            Experiência Profissional
          </span>
        </h2>

        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed print:text-sm">
          Uma jornada de evolução constante em desenvolvimento web, desde 2015 até hoje,
          com foco em tecnologias modernas e soluções inovadoras.
        </p>

        <!-- Enhanced Experience Stats with Premium Design -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 print:hidden">
          <!-- Anos de Experiência -->
          <div class="group relative bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-700/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-500 overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Animated gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <!-- Content -->
            <div class="relative z-10 text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
              <div class="text-sm text-blue-200/80 font-medium">Anos de Experiência</div>
            </div>
            <!-- Corner decoration -->
            <div class="absolute top-2 right-2 w-8 h-8 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Projetos Entregues -->
          <div class="group relative bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/10 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Animated gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <!-- Content -->
            <div class="relative z-10 text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">35+</div>
              <div class="text-sm text-emerald-200/80 font-medium">Projetos Entregues</div>
            </div>
            <!-- Corner decoration -->
            <div class="absolute top-2 right-2 w-8 h-8 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Setores Diferentes -->
          <div class="group relative bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-700/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Animated gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <!-- Content -->
            <div class="relative z-10 text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
              <div class="text-sm text-purple-200/80 font-medium">Setores Diferentes</div>
            </div>
            <!-- Corner decoration -->
            <div class="absolute top-2 right-2 w-8 h-8 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Taxa de Sucesso -->
          <div class="group relative bg-gradient-to-br from-yellow-900/30 via-yellow-800/20 to-orange-700/10 backdrop-blur-lg border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-500 overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Animated gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <!-- Content -->
            <div class="relative z-10 text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div class="text-sm text-yellow-200/80 font-medium">Taxa de Sucesso</div>
            </div>
            <!-- Corner decoration -->
            <div class="absolute top-2 right-2 w-8 h-8 bg-yellow-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <!-- Enhanced Timeline -->
      <div class="relative">
        <!-- Modern Timeline line with gradient and enhanced effects -->
        <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-2xl print:hidden"></div>

        <!-- Timeline glow effect with pulsing animation -->
        <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-3 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-emerald-500/20 blur-sm rounded-full print:hidden animate-pulse"></div>

        <!-- Experience items -->
        <div v-for="(experience, index) in experiences" :key="experience.id"
             class="relative mb-20 last:mb-0 print:mb-6 group"
             :class="index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'">

          <!-- Enhanced Timeline dot with premium styling -->
          <div class="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center print:hidden transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
               :class="experience.featured
                 ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 ring-4 ring-yellow-400/30 shadow-yellow-400/50'
                 : 'bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-blue-500/20 shadow-blue-500/30'">

            <!-- Featured star icon with glow -->
            <svg v-if="experience.featured" class="w-7 h-7 text-white animate-pulse drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>

            <!-- Regular work icon with enhanced styling -->
            <svg v-else class="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
            </svg>
          </div>

          <!-- Enhanced Experience card with glassmorphism -->
          <div class="ml-24 md:ml-0 print:ml-0 group-hover:transform group-hover:-translate-y-2 transition-all duration-700"
               :class="index % 2 === 0 ? 'md:mr-24' : 'md:ml-24'">

            <div class="relative bg-gray-800/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:shadow-3xl hover:border-gray-600/50 transition-all duration-700 overflow-hidden print:shadow-none print:border print:border-gray-300 print:p-4 print:rounded-lg"
                 :class="experience.featured ? 'ring-2 ring-yellow-400/40 shadow-yellow-400/10' : ''">

              <!-- Enhanced card glow effect -->
              <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 print:hidden"
                   :class="experience.featured
                     ? 'from-yellow-400/10 via-orange-500/5 to-red-500/10'
                     : 'from-blue-500/10 via-purple-500/5 to-emerald-500/10'"></div>

              <!-- Premium floating decoration -->
              <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-xl print:hidden"
                   :class="experience.featured ? 'bg-yellow-400' : 'bg-blue-500'"></div>

              <div class="relative z-10">
                <!-- Enhanced Featured Badge with premium styling -->
                <div v-if="experience.featured"
                     class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold mb-8 shadow-xl animate-pulse print:mb-2 print:animate-none">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  ⭐ Destaque da Carreira
                </div>

                <!-- Enhanced period badge with premium styling -->
                <div class="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-8 print:mb-2"
                     :class="experience.featured
                       ? 'bg-gradient-to-r from-yellow-900/40 to-orange-900/40 text-yellow-200 border border-yellow-400/30 shadow-lg'
                       : 'bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-200 border border-blue-400/30 shadow-lg'">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ experience.period }}
                </div>

                <!-- Enhanced Job info with better typography -->
                <h3 class="text-3xl font-bold mb-4 print:text-lg print:mb-1"
                    :class="experience.featured ? 'text-yellow-100' : 'text-white'">
                  {{ experience.title }}
                </h3>

                <div class="flex items-center gap-4 mb-3 print:mb-1">
                  <div class="font-bold text-xl"
                       :class="experience.featured ? 'text-yellow-400' : 'text-blue-400'">
                    {{ experience.company }}
                  </div>
                  <div class="w-2 h-2 rounded-full"
                       :class="experience.featured ? 'bg-yellow-400' : 'bg-blue-400'"></div>
                  <div class="text-gray-400 font-medium text-lg">{{ experience.location }}</div>
                </div>

                <!-- Enhanced Description with premium typography -->
                <p class="text-gray-300 leading-relaxed mb-8 text-lg print:text-xs print:mb-2">
                  {{ experience.description }}
                </p>

                <!-- Enhanced Achievements section with premium design -->
                <div class="mb-8 print:mb-2">
                  <h4 class="font-bold mb-6 text-xl flex items-center print:text-xs print:mb-1"
                      :class="experience.featured ? 'text-yellow-200' : 'text-emerald-300'">
                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    Principais Conquistas
                  </h4>

                  <div class="grid gap-4 print:gap-1">
                    <div v-for="achievement in experience.achievements" :key="achievement"
                         class="flex items-start text-gray-300 group/achievement hover:text-white transition-colors duration-300 print:text-xs">
                      <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 transition-all duration-300"
                           :class="experience.featured
                             ? 'bg-yellow-500/20 group-hover/achievement:bg-yellow-500/30'
                             : 'bg-emerald-500/20 group-hover/achievement:bg-emerald-500/30'">
                        <svg class="w-4 h-4 transition-all duration-300"
                             :class="experience.featured ? 'text-yellow-400' : 'text-emerald-400'"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <span class="leading-relaxed text-base">{{ achievement }}</span>
                    </div>
                  </div>
                </div>

                <!-- Enhanced Technologies section with premium styling -->
                <div>
                  <h4 class="font-bold mb-6 text-xl flex items-center print:text-xs print:mb-1"
                      :class="experience.featured ? 'text-yellow-200' : 'text-blue-300'">
                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    Stack Tecnológico
                  </h4>

                  <div class="flex flex-wrap gap-3 print:gap-1">
                    <span v-for="tech in experience.technologies" :key="tech"
                          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-110 print:px-1 print:py-0.5 print:text-xs print:hover:scale-100"
                          :class="experience.featured
                            ? 'bg-gradient-to-r from-yellow-900/40 to-orange-900/40 text-yellow-200 border border-yellow-400/30 hover:from-yellow-800/50 hover:to-orange-800/50 shadow-lg'
                            : 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 border border-gray-600/30 hover:from-gray-600/60 hover:to-gray-500/60 hover:text-white shadow-lg'">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Enhanced shine effect with premium animation -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 print:hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Call to Action with premium design -->
      <div class="text-center mt-20 print:hidden">
        <div class="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
          <!-- Background pattern -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl"></div>

          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-6">
              Interessado em conhecer mais sobre minha experiência?
            </h3>
            <p class="text-xl mb-8 opacity-90">
              Vamos conversar sobre como posso contribuir para seu projeto ou equipe.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/+5541984821206" target="_blank"
                 class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                </svg>
                Conversar no WhatsApp
              </a>
              <a href="mailto:luiznascimentodev@gmail.com"
                 class="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Enviar E-mail
              </a>
            </div>
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
  name: 'ExperienceSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    experiences: {
      type: Array,
      required: true
    }
  }
}
</script>
