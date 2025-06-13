<template>
  <section id="depoimentos" class="testimonials-section py-24 transition-colors duration-300 relative overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-[0.05]" style="z-index: 5;">
      <!-- Grid Pattern -->
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
      <!-- Decorative Elements -->
      <div class="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div class="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        <div class="absolute inset-0 rounded-full border border-emerald-500/20 scale-75 animate-pulse-slow" style="animation-delay: 1s;"></div>
        <div class="absolute inset-0 rounded-full border border-purple-500/20 scale-50 animate-pulse-slow" style="animation-delay: 2s;"></div>
      </div>
    </div>

    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full text-sm font-medium text-blue-400 mb-4">
          O QUE NOSSOS CLIENTES DIZEM
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Histórias reais de <span class="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">transformação digital</span>
        </h2>
        <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          Clientes satisfeitos compartilham como nossos serviços impactaram positivamente seus negócios,
          com resultados mensuráveis e comprovados.
        </p>
      </div>

      <!-- Testimonials Carousel - INCREASED SIZE TO FIX ZOOM ISSUE -->
      <div class="relative max-w-3xl mx-auto px-12">
        <!-- Navigation Buttons -->
        <button
          @click="previousSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-600/50 hover:border-blue-500/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
        >
          <svg class="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-600/50 hover:border-blue-500/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
        >
          <svg class="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Carousel Container - LARGER SPACING TO FIX ZOOM ROUNDED CORNERS -->
        <div class="py-16 px-12"
             @mouseenter="stopAutoSlide"
             @mouseleave="startAutoSlide">
          <div class="overflow-visible">
            <div
              class="flex transition-transform duration-700 ease-in-out carousel-transform"
              :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
            >
              <!-- Testimonial Cards - INCREASED PADDING -->
              <div
                v-for="(testimonial, index) in extendedTestimonials"
                :key="`${testimonial.id}-${Math.floor(index / limitedTestimonials.length)}`"
                class="flex-shrink-0 w-full px-10 py-8"
              >
              <div class="group bg-gradient-to-b from-gray-800/90 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10 border border-gray-700/50 hover:border-blue-500/30 h-full"
                   :class="{
                     'transform scale-105 shadow-2xl shadow-blue-500/20 border-blue-500/50 bg-gradient-to-b from-gray-700/95 to-gray-800/90': isMiddleCard(index % limitedTestimonials.length),
                     'transform hover:scale-105': !isMiddleCard(index % limitedTestimonials.length)
                   }">
                <!-- Quote Icon and Tag -->
                <div class="flex items-start justify-between mb-6">
                  <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/20"
                       :class="{ 'scale-110 shadow-blue-600/40': isMiddleCard(index % limitedTestimonials.length) }">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <span class="bg-gradient-to-r from-blue-900/40 to-emerald-900/40 text-xs font-medium px-3 py-1 rounded-full text-blue-400 border border-blue-800/30 whitespace-nowrap"
                        :class="{ 'bg-gradient-to-r from-blue-800/60 to-emerald-800/60 border-blue-700/50 text-blue-300': isMiddleCard(index % limitedTestimonials.length) }">
                    {{ testimonial.project }}
                  </span>
                </div>

                <!-- Testimonial Text -->
                <div class="mb-6 relative">
                  <span class="absolute -left-2 -top-2 text-4xl text-blue-500/20 font-serif">"</span>
                  <p class="text-gray-300 leading-relaxed text-base relative pl-1 line-clamp-4">
                    {{ testimonial.text }}
                  </p>
                  <span class="absolute -right-1 bottom-0 text-4xl text-blue-500/20 font-serif">"</span>
                </div>

                <!-- Results/Metrics -->
                <div v-if="testimonial.results" class="mb-6 py-3 px-4 bg-gradient-to-r from-gray-900/80 to-gray-900/60 rounded-xl border border-emerald-900/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <h5 class="text-sm text-gray-400 mb-2 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    Resultados mensuráveis
                  </h5>
                  <p class="text-sm text-emerald-400 font-medium">{{ testimonial.results }}</p>
                </div>

                <!-- Client Info -->
                <div class="flex items-center mt-auto">
                  <div class="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/10">
                    <span v-if="!testimonial.avatar" class="text-white font-bold text-lg">{{ getInitials(testimonial.name) }}</span>
                    <img v-else :src="testimonial.avatar" :alt="testimonial.name" loading="lazy" decoding="async" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                  </div>
                  <div>
                    <h4 class="font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{{ testimonial.name }}</h4>
                    <div class="flex items-center text-sm text-gray-400">
                      <span>{{ testimonial.role }}</span>
                      <span v-if="testimonial.company" class="flex items-center">
                        <span class="mx-2 w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span>{{ testimonial.company }}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Rating Stars -->
                <div class="flex items-center mt-4 space-x-1">
                  <svg v-for="i in testimonial.rating || 5" :key="i" class="w-4 h-4 text-yellow-400 animate-pulse-subtle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center space-x-2 mt-8">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'"
          ></button>
        </div>
      </div>

      <!-- Satisfaction Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div class="bg-gradient-to-br from-gray-800/60 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 flex items-center group relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-blue-500/5 blur-xl"></div>
          <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-600/20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </div>
          <div class="relative z-10">
            <div class="flex items-baseline">
              <div class="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">98%</div>
              <span class="text-blue-400 ml-1">⬆️</span>
            </div>
            <p class="text-gray-300">Índice de satisfação dos clientes</p>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-800/60 to-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 flex items-center group relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-emerald-500/5 blur-xl"></div>
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-600/20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="relative z-10">
            <div class="flex items-baseline">
              <div class="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">40%</div>
              <span class="text-emerald-400 ml-1">⬆️</span>
            </div>
            <p class="text-gray-300">Aumento médio em conversões</p>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-800/60 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 flex items-center group relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-purple-500/5 blur-xl"></div>
          <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-600/20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="relative z-10">
            <div class="flex items-baseline">
              <div class="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">90%</div>
              <span class="text-purple-400 ml-1">⬆️</span>
            </div>
            <p class="text-gray-300">Projetos entregues antes do prazo</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-20 bg-gradient-to-r from-blue-900/20 via-gray-900/80 to-emerald-900/20 rounded-3xl p-12 border border-blue-900/20 group hover:border-blue-600/20 transition-all duration-500 relative overflow-hidden shadow-xl shadow-blue-700/5">
        <!-- Decorative background elements for CTA -->
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>

        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
          Pronto para transformar seu negócio com soluções <span class="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">realmente eficazes</span>?
        </h3>
        <p class="text-lg text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
          Não perca mais tempo com soluções que não trazem resultados.
          Vamos discutir como posso ajudar a impulsionar seu negócio com tecnologia que realmente funciona.
        </p>
        <div class="flex flex-wrap justify-center gap-6 relative z-10">
          <a
            href="#contato"
            class="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            Agendar consulta gratuita
          </a>
          <a
            href="https://wa.me/+5541984821206"
            target="_blank"
            class="flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'TestimonialsSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const currentSlide = ref(1)
    const autoSlideInterval = ref(null)
    const itemsPerSlide = ref(3)
    const slideWidth = ref(100)

    // Show all testimonials (up to 6)
    const limitedTestimonials = computed(() => {
      return props.testimonials.slice(0, 6)
    })

    // Create extended array for infinite scroll (duplicate testimonials)
    const extendedTestimonials = computed(() => {
      const base = limitedTestimonials.value
      return [...base, ...base] // Duplicate the array for seamless infinite scroll
    })

    // Calculate total slides - one slide per testimonial for smooth transition
    const totalSlides = computed(() => {
      return limitedTestimonials.value.length
    })

    // Calculate maximum slide index
    const maxSlide = computed(() => {
      return totalSlides.value - 1
    })    // Check if a card is the middle card (for highlighting) - always highlight current slide
    const isMiddleCard = (index) => {
      return index === currentSlide.value
    }

    // Responsive settings - always show one testimonial at a time for smooth sliding
    const updateResponsiveSettings = () => {
      itemsPerSlide.value = 1
      slideWidth.value = 100
    }

    // Navigation methods - infinite scroll with seamless transition
    const nextSlide = () => {
      currentSlide.value++
      // Reset to start when reaching the duplicate section
      if (currentSlide.value >= limitedTestimonials.value.length) {
        // Disable transition temporarily for seamless reset
        const carousel = document.querySelector('.carousel-transform')
        if (carousel) {
          carousel.style.transition = 'none'
          setTimeout(() => {
            currentSlide.value = 1
            setTimeout(() => {
              carousel.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }, 50)
          }, 50)
        }
      }
    }

    const previousSlide = () => {
      currentSlide.value--
      // Reset to end when going before start
      if (currentSlide.value < 1) {
        currentSlide.value = limitedTestimonials.value.length
      }
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    // Auto slide functionality - infinite scroll
    const startAutoSlide = () => {
      autoSlideInterval.value = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds for better reading time
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval.value) {
        clearInterval(autoSlideInterval.value)
        autoSlideInterval.value = null
      }
    }

    // Helper function for initials
    const getInitials = (name) => {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    onMounted(() => {
      updateResponsiveSettings()
      window.addEventListener('resize', updateResponsiveSettings)
      startAutoSlide()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateResponsiveSettings)
      stopAutoSlide()
    })

    return {
      currentSlide,
      limitedTestimonials,
      extendedTestimonials,
      totalSlides,
      maxSlide,
      slideWidth,
      nextSlide,
      previousSlide,
      goToSlide,
      getInitials,
      isMiddleCard
    }
  }
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Testimonial cards styling - SOLUÇÃO PARA O PROBLEMA DO ZOOM */
.group {
  border-radius: 1rem !important;
  transform-origin: center center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
  backface-visibility: hidden;
  /* FORÇA BORDAS ARREDONDADAS SEMPRE */
  -webkit-border-radius: 1rem !important;
  -moz-border-radius: 1rem !important;
  overflow: visible !important;
}

/* Garante que bordas arredondadas sejam mantidas durante o hover/scale */
.group:hover,
.group.scale-105,
.group:focus,
.group:active {
  border-radius: 1rem !important;
  -webkit-border-radius: 1rem !important;
  -moz-border-radius: 1rem !important;
  overflow: visible !important;
}

/* FORÇA TODAS AS DIVS FILHAS A MANTER BORDAS ARREDONDADAS */
.group * {
  border-radius: inherit;
}

/* SOLUÇÃO ESPECÍFICA PARA ZOOM - CONTAINER MAIOR */
.group {
  margin: 0.5rem;
  transform-style: preserve-3d;
}

/* Container com espaço extra para zoom */
.px-10 {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}

.py-8 {
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important;
}

/* Performance optimizations for animations - Enhanced smooth sliding */
.carousel-transform {
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth easing */
}

/* Increased spacing fix for zoom */
.overflow-visible {
  overflow: visible !important;
}

/* Smooth transitions for scale transforms */
.group:hover {
  transform-origin: center center;
}

/* Ensure no overflow issues with larger containers */
.max-w-8xl {
  max-width: 88rem;
}
</style>
