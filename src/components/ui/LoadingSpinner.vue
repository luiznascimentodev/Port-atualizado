<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center">
        <!-- Spinner code-themed -->
        <div class="relative w-20 h-20">
          <!-- Outer circle with gradient border -->
          <div class="absolute inset-0 rounded-full gradient-code-border animate-spin-slow"></div>

          <!-- Inner circle with animation -->
          <div class="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
            <!-- Code symbol inside spinner -->
            <span class="text-blue-500 text-2xl font-mono animate-pulse-slow">&lt;/&gt;</span>
          </div>
        </div>

        <!-- Loading text with typing effect -->
        <div class="mt-4 text-blue-400 text-lg font-mono">
          <span>{{ loadingText }}</span>
          <span class="animate-blink">_</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'LoadingSpinner',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    messages: {
      type: Array,
      default: () => ['Carregando...', 'Otimizando componentes...', 'Preparando interface...']
    },
    minDisplayTime: {
      type: Number,
      default: 800 // Tempo mínimo de exibição em ms
    },
    maxDisplayTime: {
      type: Number,
      default: 5000 // Tempo máximo de exibição em ms (segurança)
    }
  },
  emits: ['loading-complete'],
  setup(props, { emit }) {
    const loadingText = ref(props.messages[0])
    const messageIndex = ref(0)
    const displayStartTime = ref(Date.now())
    const isVisible = ref(true)
    let messageInterval = null
    let visibilityTimeout = null
    let safetyTimeout = null

    // Alternar mensagens de carregamento
    const cycleMessages = () => {
      messageIndex.value = (messageIndex.value + 1) % props.messages.length
      loadingText.value = props.messages[messageIndex.value]
    }

    // Gerenciar a visibilidade do spinner com tempo mínimo garantido
    const hideSpinner = () => {
      if (visibilityTimeout) {
        clearTimeout(visibilityTimeout)
      }

      const elapsedTime = Date.now() - displayStartTime.value

      if (elapsedTime < props.minDisplayTime) {
        // Se o tempo for inferior ao mínimo, agende para ocultar mais tarde
        const remainingTime = props.minDisplayTime - elapsedTime
        visibilityTimeout = setTimeout(() => {
          isVisible.value = false
          emit('loading-complete')
        }, remainingTime)
      } else {
        // Se já passou tempo suficiente, oculte imediatamente
        isVisible.value = false
        emit('loading-complete')
      }
    }

    // Observar mudanças na prop loading de forma reativa
    watch(() => props.loading, (newValue) => {
      if (!newValue) {
        console.log('[LoadingSpinner] Loading concluído, fechando spinner')
        hideSpinner()
      }
    }, { immediate: true }) // immediate:true verifica o valor inicial imediatamente

    onMounted(() => {
      // Iniciar ciclo de mensagens
      messageInterval = setInterval(cycleMessages, 2000)

      // Configurar um timeout máximo de segurança para evitar spinner infinito
      safetyTimeout = setTimeout(() => {
        if (isVisible.value) {
          console.log('[LoadingSpinner] Timeout de segurança acionado após', props.maxDisplayTime, 'ms')
          hideSpinner()
        }
      }, props.maxDisplayTime)

      // Remover classe de carregamento após a transição para evitar problemas
      // com classes CSS no body que podem afetar o resto da aplicação
      setTimeout(() => {
        if (document.body.classList.contains('loading')) {
          document.body.classList.add('loaded')
        }
      }, props.maxDisplayTime + 500)
    })

    onBeforeUnmount(() => {
      // Limpar todos os intervalos e timeouts
      clearInterval(messageInterval)
      if (visibilityTimeout) clearTimeout(visibilityTimeout)
      if (safetyTimeout) clearTimeout(safetyTimeout)
    })

    return {
      loadingText,
      isVisible
    }
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
  will-change: transform;
  contain: layout paint;
}

.animate-blink {
  animation: blink 0.8s step-end infinite;
  will-change: opacity;
  contain: strict;
}

/* Transição de fade para uma experiência visual melhor */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo para a borda animada */
.gradient-code-border {
  background: linear-gradient(45deg, #3b82f6, #10b981, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientBg 3s ease infinite;
}

@keyframes gradientBg {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
