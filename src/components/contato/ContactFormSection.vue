<template>
  <section class="py-10 bg-gray-900 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0" style="z-index: 10;" />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative" style="z-index: 20;">
      <div class="max-w-3xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
            Fale comigo
          </h2>
          <p class="text-gray-400 max-w-xl mx-auto">
            Preencha o formulário para um contato rápido ou use os links acima para contato direto.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <form @submit.prevent="submitForm" class="space-y-5">
            <!-- Name and Email Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Name Input -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Seu nome"
                />
                <div v-if="errors.name" class="mt-1 text-xs text-red-400">
                  {{ errors.name }}
                </div>
              </div>

              <!-- Email Input -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  placeholder="seu.email@exemplo.com"
                />
                <div v-if="errors.email" class="mt-1 text-xs text-red-400">
                  {{ errors.email }}
                </div>
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">
                Assunto *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
              >
                <option value="">Selecione um assunto</option>
                <option value="novo-projeto">Novo Projeto</option>
                <option value="orcamento">Orçamento</option>
                <option value="consultoria">Consultoria</option>
                <option value="outros">Outros</option>
              </select>
              <div v-if="errors.subject" class="mt-1 text-xs text-red-400">
                {{ errors.subject }}
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">
                Mensagem *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                placeholder="Descreva seu projeto ou como posso ajudar..."
              ></textarea>
              <div v-if="errors.message" class="mt-1 text-xs text-red-400">
                {{ errors.message }}
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-3 flex justify-center">
              <button
                type="submit"
                :disabled="submitting"
                class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div class="flex items-center">
                  <span v-if="submitting" class="inline-block animate-spin mr-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span>{{ submitting ? 'Enviando...' : 'Enviar Mensagem' }}</span>
                </div>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="formSubmitted" class="mt-4 p-4 bg-green-900/30 border border-green-700 rounded-lg text-center">
            <p class="text-green-400">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'ContactFormSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  emits: ['send-message'],
  setup(props, { emit }) {
    const submitting = ref(false)
    const formSubmitted = ref(false)

    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const errors = reactive({})

    const validateForm = () => {
      const newErrors = {}
      if (!form.name.trim()) newErrors.name = 'Nome é obrigatório'
      if (!form.email.trim()) {
        newErrors.email = 'Email é obrigatório'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = 'Email inválido'
      }
      if (!form.subject) newErrors.subject = 'Assunto é obrigatório'
      if (!form.message.trim()) newErrors.message = 'Mensagem é obrigatória'

      // Update errors object
      Object.keys(errors).forEach(key => delete errors[key])
      Object.assign(errors, newErrors)

      return Object.keys(newErrors).length === 0
    }

    const submitForm = async () => {
      if (!validateForm()) return

      submitting.value = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        emit('send-message', { ...form })
        formSubmitted.value = true

        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = ''
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSubmitted.value = false
        }, 5000)
      } catch (error) {
        console.error('Error sending message:', error)
      } finally {
        submitting.value = false
      }
    }

    return {
      form,
      errors,
      submitting,
      formSubmitted,
      submitForm
    }
  }
}
</script>
