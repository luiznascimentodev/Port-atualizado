<template>
  <section class="py-12 bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
          Perguntas Frequentes
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Respostas rápidas para as dúvidas mais comuns
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
            :class="openFaqs.includes(faq.id) ? 'bg-blue-900/20' : 'hover:bg-gray-700/50'"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-base font-medium text-white pr-4">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <svg
                  class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                  :class="openFaqs.includes(faq.id) ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </button>

          <div
            v-show="openFaqs.includes(faq.id)"
            class="px-5 pb-4 text-gray-400"
          >
            <div class="border-t border-gray-700 pt-3 text-sm">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Call to Action -->
      <div class="mt-10 text-center">
        <p class="text-gray-400 mb-4">
          Outras dúvidas? Entre em contato diretamente:
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/+5541984821206"
            target="_blank"
            class="inline-flex items-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:luiznascimento.dev@gmail.com"
            class="inline-flex items-center px-4 py-2 border border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FAQSection',
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const openFaqs = ref([])

    const toggleFaq = (id) => {
      const index = openFaqs.value.indexOf(id)
      if (index > -1) {
        openFaqs.value.splice(index, 1)
      } else {
        openFaqs.value.push(id)
      }
    }

    return {
      openFaqs,
      toggleFaq
    }
  }
}
</script>
