<template>
  <div class="animated-background">
    <!-- Componentes condicionais baseados em preferências de movimento e performance -->
    <template v-if="!prefersReducedMotion">
      <!-- Main Programming Particles (renderização condicional) -->
      <ProgrammingParticles />

      <!-- Advanced Code Particles (renderização condicional) -->
      <AdvancedCodeParticles />
    </template>

    <!-- Geometric Grid Background (estático, mantido mesmo com movimento reduzido) -->
    <div class="fixed inset-0 pointer-events-none opacity-4 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-emerald-900/10"></div>
    </div>

    <!-- Floating Tech Orbs -->
    <div v-if="!prefersReducedMotion" class="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="orb in techOrbs"
        :key="`orb-${orb.id}`"
        class="absolute rounded-full blur-3xl tech-orb"
        :style="{
          left: orb.x + '%',
          top: orb.y + '%',
          width: orb.size + 'px',
          height: orb.size + 'px',
          background: orb.gradient,
          animationDelay: orb.delay + 's',
          animationDuration: orb.duration + 's'
        }"
      ></div>
    </div>

    <!-- Code Rain Effect (renderização condicional) -->
    <div v-if="!prefersReducedMotion" class="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
      <div
        v-for="drop in codeRain"
        :key="`rain-${drop.id}`"
        class="absolute code-drop text-emerald-500 font-mono text-xs opacity-40"
        :style="{
          left: drop.x + '%',
          animationDelay: drop.delay + 's',
          animationDuration: drop.duration + 's'
        }"
      >
        {{ drop.char }}
      </div>
    </div>

    <!-- Network Connections (renderização condicional) -->
    <div v-if="!prefersReducedMotion && networkConnections.length > 0" class="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      <svg width="100%" height="100%" class="absolute inset-0">
        <defs>
          <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />

        <!-- Dynamic connection lines (renderização condicional) -->
        <g v-for="connection in networkConnections" :key="`connection-${connection.id}`">
          <line
            :x1="connection.x1 + '%'"
            :y1="connection.y1 + '%'"
            :x2="connection.x2 + '%'"
            :y2="connection.y2 + '%'"
            :stroke="connection.color"
            stroke-width="1"
            opacity="0.2"
            class="network-line"
            :style="{
              animationDelay: connection.delay + 's',
              animationDuration: connection.duration + 's'
            }"
          />
          <circle
            :cx="connection.x1 + '%'"
            :cy="connection.y1 + '%'"
            r="2"
            :fill="connection.color"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProgrammingParticles from './ProgrammingParticles.vue'
import AdvancedCodeParticles from './AdvancedCodeParticles.vue'

export default {
  name: 'AnimatedBackground',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles
  },
  setup() {
    const techOrbs = ref([])
    const codeRain = ref([])
    const networkConnections = ref([])

    // Detectar preferência por movimento reduzido
    const prefersReducedMotion = ref(false)

    // Configurações
    const gradients = [
      'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
    ]

    const codeChars = ['0', '1', '{', '}', '(', ')', '[', ']', ';', ':', '='] // Reduzido

    const colors = ['#3b82f6', '#10b981', '#8b5cf6']

    // Gerar tech orbs flutuantes - OTIMIZADO
    const generateTechOrbs = () => {
      const orbs = []
      // Reduzido para apenas 1 orb para melhorar performance
      for (let i = 0; i < 1; i++) {
        orbs.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50, // Reduzido ainda mais
          gradient: gradients[Math.floor(Math.random() * gradients.length)],
          delay: Math.random() * 6,
          duration: Math.random() * 15 + 20,
        })
      }
      return orbs
    }

    // Gerar code rain - OTIMIZADO
    const generateCodeRain = () => {
      const rain = []
      // Reduzido para 4 para melhorar performance
      for (let i = 0; i < 4; i++) {
        rain.push({
          id: i,
          x: Math.random() * 100,
          char: codeChars[Math.floor(Math.random() * codeChars.length)],
          delay: Math.random() * 10,
          duration: Math.random() * 6 + 6,
        })
      }
      return rain
    }

    // Gerar conexões de rede - OTIMIZADO
    const generateNetworkConnections = () => {
      const connections = []
      // Reduzido para 1 para melhorar performance
      for (let i = 0; i < 1; i++) {
        connections.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 6,
          duration: Math.random() * 12 + 15,
        })
      }
      return connections
    }

    onMounted(() => {
      // Verificar se o usuário prefere movimento reduzido
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        prefersReducedMotion.value = true
      } else {
        // Só gerar animações se o usuário não preferir movimento reduzido
        techOrbs.value = generateTechOrbs()
        codeRain.value = generateCodeRain()
        networkConnections.value = generateNetworkConnections()
      }

      // Remover elementos desnecessários em dispositivos móveis
      const checkMobile = () => {
        if (window.innerWidth < 768) {
          codeRain.value = codeRain.value.slice(0, 2) // Apenas 2 drops em mobile
        }
      }

      checkMobile()
      window.addEventListener('resize', checkMobile)

      // Cleanup
      return () => {
        window.removeEventListener('resize', checkMobile)
      }
    })

    return {
      techOrbs,
      codeRain,
      networkConnections,
      prefersReducedMotion
    }
  }
}
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
  background-size: 50px 50px;
}

.tech-orb {
  animation: float-orb infinite ease-in-out;
  will-change: transform;
}

.code-drop {
  animation: fall-code infinite linear;
  will-change: transform;
}

.network-line {
  animation: pulse-line infinite ease-in-out;
  will-change: opacity;
}

/* Animações para orbs */
@keyframes float-orb {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  25% {
    transform: translateY(-25px) translateX(15px) scale(1.08);
  }
  50% {
    transform: translateY(-10px) translateX(-20px) scale(0.92);
  }
  75% {
    transform: translateY(15px) translateX(8px) scale(1.03);
  }
}

/* Animação code rain */
@keyframes fall-code {
  0% {
    transform: translateY(-100vh) translateX(0px);
    opacity: 0;
  }
  5% {
    opacity: 0.4;
  }
  10% {
    transform: translateY(-80vh) translateX(5px);
    opacity: 0.7;
  }
  85% {
    transform: translateY(80vh) translateX(-5px);
    opacity: 0.7;
  }
  95% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(100vh) translateX(0px);
    opacity: 0;
  }
}

/* Animação para linhas de rede */
@keyframes pulse-line {
  0%, 100% {
    opacity: 0.05;
    stroke-width: 1;
  }
  25% {
    opacity: 0.2;
    stroke-width: 1.5;
  }
  50% {
    opacity: 0.3;
    stroke-width: 2;
  }
  75% {
    opacity: 0.2;
    stroke-width: 1.5;
  }
}

/* Performance otimizations */
.tech-orb,
.code-drop,
.network-line {
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
  contain: paint layout;  /* Melhorando a performance com containment */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .bg-grid-pattern {
    background-size: 30px 30px;
  }

  .tech-orb {
    opacity: 0.7;
  }

  .code-drop {
    display: none; /* Removendo completamente em dispositivos móveis para melhorar performance */
  }

  .network-line {
    display: none; /* Removendo completamente em dispositivos móveis */
  }
}

@media (max-width: 480px) {
  .bg-grid-pattern {
    background-size: 20px 20px;
    opacity: 0.3;
  }

  .tech-orb {
    opacity: 0.4;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .tech-orb,
  .code-drop,
  .network-line {
    animation: none;
  }
}
</style>
