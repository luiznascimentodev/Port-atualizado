<template>
  <section class="py-20 bg-gray-800 print:py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 print:mb-8">
        <h2 class="text-3xl font-bold text-white mb-4 print:text-2xl print:mb-2">
          <span class="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Formação Acadêmica
          </span>
        </h2>
        <p class="text-lg text-gray-400 print:text-sm">
          Base educacional e certificações profissionais
        </p>
      </div>

      <!-- Education cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
        <div v-for="education in educations" :key="education.id"
             class="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 print:shadow-none print:border print:border-gray-300 print:p-4 print:hover:scale-100">

          <!-- Institution header -->
          <div class="flex items-start space-x-4 mb-4 print:mb-2">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 print:w-8 print:h-8">
              <svg class="w-6 h-6 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-white print:text-base">
                {{ education.degree }}
              </h3>
              <div class="text-blue-400 font-semibold print:text-sm">
                {{ education.institution }}
              </div>
              <div class="text-gray-400 text-sm flex items-center print:text-xs">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                {{ education.period }}
                <span v-if="education.status" class="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full print:px-1 print:py-0">
                  {{ education.status }}
                </span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-400 text-sm mb-4 leading-relaxed print:text-xs print:mb-2">
            {{ education.description }}
          </p>

          <!-- Highlights -->
          <div v-if="education.highlights">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm print:text-xs print:mb-1">Destaques do Curso:</h4>
            <ul class="space-y-1 print:space-y-0.5">
              <li v-for="highlight in education.highlights" :key="highlight"
                  class="flex items-start text-gray-600 dark:text-gray-400 text-sm print:text-xs">
                <svg class="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-12 print:mt-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center print:text-lg print:mb-3">
          Certificações e Cursos Complementares
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-2">
          <div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-600 text-center print:p-2 print:shadow-none">
            <div class="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white text-sm print:text-xs">Vue.js Avançado</h4>
            <p class="text-gray-600 dark:text-gray-400 text-xs">DevClub - 2024</p>
          </div>

          <div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-600 text-center print:p-2 print:shadow-none">
            <div class="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white text-sm print:text-xs">React Completo</h4>
            <p class="text-gray-600 dark:text-gray-400 text-xs">DevClub - 2024</p>
          </div>

          <div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-600 text-center print:p-2 print:shadow-none">
            <div class="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white text-sm print:text-xs">Node.js & APIs</h4>
            <p class="text-gray-600 dark:text-gray-400 text-xs">DevClub - 2024</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  props: {
    educations: {
      type: Array,
      required: true
    }
  }
}
</script>
