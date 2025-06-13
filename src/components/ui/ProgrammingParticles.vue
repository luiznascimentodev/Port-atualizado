<template>
  <div class="programming-particles-container">
    <!-- Background Programming Particles -->
    <div class="fixed inset-0 pointer-events-none particles-layer overflow-hidden">
      <!-- Code Symbols Layer -->
      <div
        v-for="particle in codeParticles"
        :key="`code-${particle.id}`"
        class="absolute opacity-30 programming-particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's'
        }"
      >
        <svg
          :width="particle.size"
          :height="particle.size"
          viewBox="0 0 24 24"
          :fill="particle.color"
          class="drop-shadow-lg"
        >
          <!-- Code Brackets { } -->
          <path v-if="particle.type === 'brackets'"
            d="M8 3C7.4 3 7 3.4 7 4s.4 1 1 1c.6 0 1-.4 1-1s-.4-1-1-1zM8 7C7.4 7 7 7.4 7 8s.4 1 1 1c.6 0 1-.4 1-1s-.4-1-1-1zM8 11C7.4 11 7 11.4 7 12s.4 1 1 1c.6 0 1-.4 1-1s-.4-1-1-1zM5 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8zm11-2c.6 0 1 .4 1 1s-.4 1-1 1-.6-.4-.6-1 .4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-.6-.4-.6-1 .4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-.6-.4-.6-1 .4-1 1-1zm3-6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8z"/>

          <!-- Function Symbol f(x) -->
          <path v-else-if="particle.type === 'function'"
            d="M7 2C5.9 2 5 2.9 5 4v4c0 1.1.9 2 2 2h1v2H6c-.6 0-1 .4-1 1s.4 1 1 1h2v6c0 .6.4 1 1 1s1-.4 1-1v-6h2c.6 0 1-.4 1-1s-.4-1-1-1H10v-2h1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm0 2h4v4H7V4zm6 4h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h3c.6 0 1-.4 1-1s-.4-1-1-1h-3c-.6 0-1 .4-1 1s.4 1 1 1z"/>

          <!-- Binary Digits -->
          <g v-else-if="particle.type === 'binary'">
            <circle cx="6" cy="6" r="2.5"/>
            <circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="6" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="18" cy="18" r="2.5"/>
          </g>

          <!-- Semicolon ; -->
          <g v-else-if="particle.type === 'semicolon'">
            <circle cx="12" cy="8" r="2"/>
            <path d="M12 14c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8L10 20h4l-1.2-2.2c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2z"/>
          </g>

          <!-- Arrow Function => -->
          <path v-else-if="particle.type === 'arrow'"
            d="M4 12h12M13 7l5 5-5 5"/>

          <!-- HTML Tag < > -->
          <path v-else-if="particle.type === 'tag'"
            d="M7 4L3 8l4 4M17 4l4 4-4 4M14 2l-4 20"/>

          <!-- Variable $ -->
          <path v-else-if="particle.type === 'variable'"
            d="M12 2v2m0 16v2M9.5 7a2.5 2.5 0 015 0c0 1.61-1.46 2.59-2.5 3.17V13a2.5 2.5 0 01-2.5 2.5c-1.38 0-2.5-1.12-2.5-2.5"/>
        </svg>
      </div>

      <!-- Floating Code Lines -->
      <div
        v-for="line in codeLines"
        :key="`line-${line.id}`"
        class="absolute opacity-15 code-line"
        :style="{
          left: line.x + '%',
          top: line.y + '%',
          width: line.width + 'px',
          animationDelay: line.delay + 's',
          animationDuration: line.duration + 's'
        }"
      >
        <div
          class="h-1 rounded-full bg-gradient-to-r"
          :class="line.gradient"
        ></div>
      </div>

      <!-- Geometric Code Structures -->
      <div
        v-for="geo in geometricElements"
        :key="`geo-${geo.id}`"
        class="absolute opacity-20 geometric-element"
        :style="{
          left: geo.x + '%',
          top: geo.y + '%',
          animationDelay: geo.delay + 's',
          animationDuration: geo.duration + 's'
        }"
      >
        <svg
          :width="geo.size"
          :height="geo.size"
          viewBox="0 0 50 50"
          class="drop-shadow-md"
        >
          <!-- Hexagon (represents efficiency) -->
          <polygon v-if="geo.type === 'hexagon'"
            points="25,5 35,15 35,25 25,35 15,25 15,15"
            fill="none"
            :stroke="geo.color"
            stroke-width="2"/>

          <!-- Triangle (represents hierarchy) -->
          <polygon v-else-if="geo.type === 'triangle'"
            points="25,5 40,35 10,35"
            fill="none"
            :stroke="geo.color"
            stroke-width="2"/>

          <!-- Circuit pattern -->
          <g v-else-if="geo.type === 'circuit'">
            <rect x="10" y="10" width="30" height="30" fill="none" :stroke="geo.color" stroke-width="1.5"/>
            <circle cx="15" cy="15" r="2" :fill="geo.color"/>
            <circle cx="35" cy="15" r="2" :fill="geo.color"/>
            <circle cx="15" cy="35" r="2" :fill="geo.color"/>
            <circle cx="35" cy="35" r="2" :fill="geo.color"/>
            <line x1="15" y1="15" x2="35" y2="35" :stroke="geo.color" stroke-width="1"/>
            <line x1="35" y1="15" x2="15" y2="35" :stroke="geo.color" stroke-width="1"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ProgrammingParticles',
  setup() {
    const codeParticles = ref([])
    const codeLines = ref([])
    const geometricElements = ref([])
    let animationFrame = null

    // Configurações das partículas
    const particleConfig = {
      codeSymbols: ['brackets', 'function', 'binary', 'semicolon', 'arrow', 'tag', 'variable'],
      colors: [
        'rgba(59, 130, 246, 0.6)',   // Blue
        'rgba(16, 185, 129, 0.6)',   // Emerald
        'rgba(139, 92, 246, 0.6)',   // Purple
        'rgba(245, 158, 11, 0.6)',   // Amber
        'rgba(236, 72, 153, 0.6)',   // Pink
        'rgba(34, 197, 94, 0.6)',    // Green
      ],
      lineGradients: [
        'from-blue-500 to-emerald-500',
        'from-purple-500 to-pink-500',
        'from-emerald-500 to-blue-500',
        'from-amber-500 to-orange-500',
        'from-indigo-500 to-purple-500',
      ],
      geoColors: [
        '#3b82f6',  // Blue
        '#10b981',  // Emerald
        '#8b5cf6',  // Purple
        '#f59e0b',  // Amber
      ]
    }

    // Gerar partículas de código
    const generateCodeParticles = () => {
      const particles = []
      const particleCount = 4 // Reduzido de 6 para 4 para máxima otimização

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          type: particleConfig.codeSymbols[Math.floor(Math.random() * particleConfig.codeSymbols.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 14 + 10,
          color: particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)],
          delay: Math.random() * 6,
          duration: Math.random() * 12 + 8,
        })
      }

      return particles
    }

    // Gerar linhas de código flutuantes
    const generateCodeLines = () => {
      const lines = []
      const lineCount = 3 // Reduzido de 6 para 3

      for (let i = 0; i < lineCount; i++) {
        lines.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 100,
          width: Math.random() * 60 + 30, // Reduzido de 40-120px para 30-90px
          gradient: particleConfig.lineGradients[Math.floor(Math.random() * particleConfig.lineGradients.length)],
          delay: Math.random() * 4,
          duration: Math.random() * 10 + 12, // Reduzido de 12+15 para 10+12 (mais movimento)
        })
      }

      return lines
    }

    // Gerar elementos geométricos
    const generateGeometricElements = () => {
      const elements = []
      const elementCount = 1 // Reduzido de 2 para 1 para máxima otimização
      const types = ['hexagon', 'triangle', 'circuit']

      for (let i = 0; i < elementCount; i++) {
        elements.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: Math.random() * 90,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15, // Mantido conforme otimização anterior
          color: particleConfig.geoColors[Math.floor(Math.random() * particleConfig.geoColors.length)],
          delay: Math.random() * 6,
          duration: Math.random() * 15 + 12,
        })
      }

      return elements
    }

    // Animar partículas com movimento suave
    const animateParticles = () => {
      // Pequenos ajustes nas posições para movimento orgânico
      codeParticles.value.forEach(particle => {
        // Movimento sutil baseado no tempo
        const time = Date.now() * 0.0001
        particle.x = particle.x + Math.sin(time + particle.id) * 0.01
        particle.y = particle.y + Math.cos(time + particle.id * 0.5) * 0.01

        // Manter dentro dos limites
        if (particle.x > 100) particle.x = -5
        if (particle.x < -5) particle.x = 100
        if (particle.y > 100) particle.y = -5
        if (particle.y < -5) particle.y = 100
      })

      animationFrame = requestAnimationFrame(animateParticles)
    }

    onMounted(() => {
      // Inicializar partículas
      codeParticles.value = generateCodeParticles()
      codeLines.value = generateCodeLines()
      geometricElements.value = generateGeometricElements()

      // Iniciar animação
      animateParticles()
    })

    onUnmounted(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    })

    return {
      codeParticles,
      codeLines,
      geometricElements
    }
  }
}
</script>

<style scoped>
.programming-particles-container {
  position: relative;
  pointer-events: none;
}

.programming-particle {
  animation: float-code infinite ease-in-out;
  will-change: transform;
}

.code-line {
  animation: slide-fade infinite ease-in-out;
  will-change: transform, opacity;
}

.geometric-element {
  animation: rotate-float infinite ease-in-out;
  will-change: transform;
}

/* Animações customizadas para partículas */
@keyframes float-code {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) translateX(0px);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-15px) rotate(8deg) translateX(5px);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-5px) rotate(-5deg) translateX(-8px);
    opacity: 0.35;
  }
  75% {
    transform: translateY(8px) rotate(3deg) translateX(3px);
    opacity: 0.3;
  }
}

@keyframes slide-fade {
  0% {
    transform: translateX(-30px) translateY(0px);
    opacity: 0;
  }
  25% {
    transform: translateX(-10px) translateY(-5px);
    opacity: 0.2;
  }
  50% {
    transform: translateX(0px) translateY(0px);
    opacity: 0.25;
  }
  75% {
    transform: translateX(10px) translateY(5px);
    opacity: 0.2;
  }
  100% {
    transform: translateX(30px) translateY(0px);
    opacity: 0;
  }
}

@keyframes rotate-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1) translateX(0px);
    opacity: 0.2;
  }
  33% {
    transform: translateY(-20px) rotate(120deg) scale(1.05) translateX(-10px);
    opacity: 0.3;
  }
  66% {
    transform: translateY(10px) rotate(240deg) scale(0.95) translateX(10px);
    opacity: 0.25;
  }
}

/* Hover effects para melhor interatividade */
.programming-particle:hover {
  opacity: 0.4 !important;
  transition: opacity 0.3s ease;
}

.geometric-element:hover {
  opacity: 0.3 !important;
  transition: opacity 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .programming-particle {
    opacity: 0.1 !important;
  }

  .code-line {
    opacity: 0.05 !important;
  }

  .geometric-element {
    opacity: 0.08 !important;
  }
}

@media (max-width: 480px) {
  .programming-particle {
    opacity: 0.05 !important;
  }

  .code-line {
    opacity: 0.03 !important;
  }

  .geometric-element {
    opacity: 0.05 !important;
  }
}

/* Z-index layering for particles - Below navigation */
.particles-layer {
  z-index: 2 !important;
}
</style>
