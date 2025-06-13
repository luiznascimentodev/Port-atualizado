<template>
  <div class="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 flex items-center min-w-72">
    <span class="min-h-[28px] flex items-center">{{ currentPhrase }}</span>
    <span class="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse flex-shrink-0" v-show="showCursor"></span>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NavigationTyping',
  setup() {
    const phrases = [
      'Transformando ideias em código',
      'Seu sucesso digital começa aqui',
      'Inovação que gera resultados',
      'Experiências web memoráveis',
      'Tecnologia que impulsiona negócios'
    ]

    const currentPhrase = ref('')
    const showCursor = ref(true)
    const currentIndex = ref(0)
    const charIndex = ref(0)
    const isDeleting = ref(false)
    const typeSpeed = ref(80)
    const deleteSpeed = ref(40)
    const pauseTime = ref(2000)

    let timeout = null

    const typeEffect = () => {
      const current = phrases[currentIndex.value]

      if (isDeleting.value) {
        currentPhrase.value = current.substring(0, charIndex.value - 1)
        charIndex.value--

        if (charIndex.value === 0) {
          isDeleting.value = false
          currentIndex.value = (currentIndex.value + 1) % phrases.length
          timeout = setTimeout(typeEffect, typeSpeed.value)
        } else {
          timeout = setTimeout(typeEffect, deleteSpeed.value)
        }
      } else {
        currentPhrase.value = current.substring(0, charIndex.value + 1)
        charIndex.value++

        if (charIndex.value === current.length) {
          timeout = setTimeout(() => {
            isDeleting.value = true
            typeEffect()
          }, pauseTime.value)
        } else {
          timeout = setTimeout(typeEffect, typeSpeed.value)
        }
      }
    }

    onMounted(() => {
      currentPhrase.value = phrases[0].charAt(0)
      charIndex.value = 1
      timeout = setTimeout(typeEffect, typeSpeed.value)
    })

    onUnmounted(() => {
      if (timeout) {
        clearTimeout(timeout)
      }
    })

    return {
      currentPhrase,
      showCursor
    }
  }
}
</script>
