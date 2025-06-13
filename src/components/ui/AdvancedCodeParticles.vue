<template>
  <div class="advanced-code-particles">
    <!-- Terminal/IDE Style Particles -->
    <div
      v-for="terminal in terminalParticles"
      :key="`terminal-${terminal.id}`"
      class="absolute terminal-particle opacity-10"
      :style="{
        left: terminal.x + '%',
        top: terminal.y + '%',
        animationDelay: terminal.delay + 's',
        animationDuration: terminal.duration + 's'
      }"
    >
      <div
        class="bg-gray-800 rounded-lg border border-gray-600 shadow-xl"
        :style="{ width: terminal.width + 'px', height: terminal.height + 'px' }"
      >
        <!-- Terminal Header -->
        <div class="bg-gray-700 rounded-t-lg p-2 flex items-center">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <!-- Terminal Content -->
        <div class="p-2 space-y-1">
          <div
            v-for="(line, index) in terminal.lines"
            :key="index"
            class="h-1 rounded"
            :class="line.class"
            :style="{ width: line.width }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Code Editor Snippets -->
    <div
      v-for="snippet in codeSnippets"
      :key="`snippet-${snippet.id}`"
      class="absolute code-snippet opacity-8"
      :style="{
        left: snippet.x + '%',
        top: snippet.y + '%',
        animationDelay: snippet.delay + 's',
        animationDuration: snippet.duration + 's'
      }"
    >
      <div class="bg-gray-900 rounded border border-gray-700 p-3 text-xs font-mono">
        <div class="text-blue-400">{{ snippet.comment }}</div>
        <div class="text-emerald-400">{{ snippet.code }}</div>
      </div>
    </div>

    <!-- API/Data Flow Particles -->
    <div
      v-for="api in apiParticles"
      :key="`api-${api.id}`"
      class="absolute api-particle"
      :style="{
        left: api.x + '%',
        top: api.y + '%',
        animationDelay: api.delay + 's',
        animationDuration: api.duration + 's'
      }"
    >
      <svg
        :width="api.size"
        :height="api.size"
        viewBox="0 0 100 100"
        class="drop-shadow-lg opacity-20"
      >
        <!-- Data Flow Visualization -->
        <g v-if="api.type === 'dataflow'">
          <!-- Nodes -->
          <circle cx="20" cy="20" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="80" cy="20" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="50" cy="50" r="10" :fill="api.color" opacity="0.8"/>
          <circle cx="20" cy="80" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="80" cy="80" r="8" :fill="api.color" opacity="0.6"/>

          <!-- Connections -->
          <line x1="20" y1="20" x2="50" y2="50" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="80" y1="20" x2="50" y2="50" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="50" y1="50" x2="20" y2="80" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="50" y1="50" x2="80" y2="80" :stroke="api.color" stroke-width="2" opacity="0.4"/>
        </g>

        <!-- Database Schema -->
        <g v-else-if="api.type === 'database'">
          <rect x="10" y="20" width="80" height="15" :fill="api.color" opacity="0.3" rx="2"/>
          <rect x="10" y="40" width="80" height="15" :fill="api.color" opacity="0.5" rx="2"/>
          <rect x="10" y="60" width="80" height="15" :fill="api.color" opacity="0.4" rx="2"/>
          <!-- Connection lines -->
          <line x1="30" y1="35" x2="30" y2="40" :stroke="api.color" stroke-width="1"/>
          <line x1="70" y1="55" x2="70" y2="60" :stroke="api.color" stroke-width="1"/>
        </g>

        <!-- Cloud/Server -->
        <g v-else-if="api.type === 'cloud'">
          <path d="M25 40c-5 0-10 5-10 10s5 10 10 10h50c8 0 15-7 15-15s-7-15-15-15c-1 0-2 0-3 1-3-8-11-14-20-14-8 0-15 4-19 10-3-2-6-3-8-3z"
                :fill="api.color" opacity="0.4"/>
          <!-- Server lines inside cloud -->
          <rect x="35" y="45" width="30" height="3" :fill="api.color" opacity="0.8"/>
          <rect x="35" y="50" width="25" height="3" :fill="api.color" opacity="0.6"/>
          <rect x="35" y="55" width="28" height="3" :fill="api.color" opacity="0.7"/>
        </g>
      </svg>
    </div>

    <!-- Git/Version Control Symbols -->
    <div
      v-for="git in gitParticles"
      :key="`git-${git.id}`"
      class="absolute git-particle opacity-25"
      :style="{
        left: git.x + '%',
        top: git.y + '%',
        animationDelay: git.delay + 's',
        animationDuration: git.duration + 's'
      }"
    >
      <svg
        :width="git.size"
        :height="git.size"
        viewBox="0 0 24 24"
        :fill="git.color"
        class="drop-shadow-md"
      >
        <!-- Git Branch -->
        <path v-if="git.type === 'branch'"
          d="M7 3a3 3 0 000 6 3 3 0 100 6 3 3 0 000 6M14 12a3 3 0 100-6 3 3 0 000 6zM7 12h4"/>

        <!-- Git Commit -->
        <g v-else-if="git.type === 'commit'">
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
        </g>

        <!-- Git Merge -->
        <path v-else-if="git.type === 'merge'"
          d="M7 3a3 3 0 000 6c1.1 0 2.1-.6 2.6-1.5L17 14a3 3 0 100-6c-1.1 0-2.1.6-2.6 1.5L7 3z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'AdvancedCodeParticles',
  setup() {
    const terminalParticles = ref([])
    const codeSnippets = ref([])
    const apiParticles = ref([])
    const gitParticles = ref([])

    const colors = [
      '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'
    ]

    const codeExamples = [
      { comment: '// React Hook', code: 'useState(0)' },
      { comment: '// Arrow Function', code: '() => { }' },
      { comment: '// Async/Await', code: 'await fetch()' },
      { comment: '// Destructuring', code: 'const { x } = obj' },
      { comment: '// Template String', code: '`Hello ${name}`' },
      { comment: '// CSS Grid', code: 'display: grid' },
    ]

    const generateTerminalParticles = () => {
      const particles = []
      for (let i = 0; i < 2; i++) { // Reduzido de 3 para 2 (ultra minimalista)
        const lines = []
        const lineCount = Math.floor(Math.random() * 2) + 2 // Reduzido de 3 para 2

        for (let j = 0; j < lineCount; j++) {
          lines.push({
            width: Math.random() * 40 + 15 + '%', // Reduzido de 50 para 40
            class: [
              'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-gray-500'
            ][Math.floor(Math.random() * 4)]
          })
        }

        particles.push({
          id: i,
          x: Math.random() * 85,
          y: Math.random() * 85,
          width: Math.random() * 60 + 80, // Reduzido de 70+100 para 60+80
          height: Math.random() * 30 + 40, // Reduzido de 35+50 para 30+40
          lines,
          delay: Math.random() * 8,
          duration: Math.random() * 12 + 18, // Reduzido de 15+20 para 12+18 (mais movimento)
        })
      }
      return particles
    }

    const generateCodeSnippets = () => {
      const snippets = []
      for (let i = 0; i < 1; i++) { // Reduzido de 2 para 1 (ultra minimalista)
        const example = codeExamples[Math.floor(Math.random() * codeExamples.length)]
        snippets.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 80,
          comment: example.comment,
          code: example.code,
          delay: Math.random() * 6,
          duration: Math.random() * 15 + 18, // Reduzido de 18+22 para 15+18 (mais movimento)
        })
      }
      return snippets
    }

    const generateAPIParticles = () => {
      const particles = []
      const types = ['dataflow', 'database', 'cloud']

      // Reduzido de 5 para 3 partículas
      for (let i = 0; i < 3; i++) {
        particles.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: Math.random() * 90,
          y: Math.random() * 90,
          size: Math.random() * 40 + 60,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 18,
          duration: Math.random() * 30 + 25,
        })
      }
      return particles
    }

    const generateGitParticles = () => {
      const particles = []
      const types = ['branch', 'commit', 'merge']

      // Reduzido de 6 para 4 partículas
      for (let i = 0; i < 4; i++) {
        particles.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: Math.random() * 90,
          y: Math.random() * 90,
          size: Math.random() * 15 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 20,
          duration: Math.random() * 35 + 20,
        })
      }
      return particles
    }

    onMounted(() => {
      terminalParticles.value = generateTerminalParticles()
      codeSnippets.value = generateCodeSnippets()
      apiParticles.value = generateAPIParticles()
      gitParticles.value = generateGitParticles()
    })

    return {
      terminalParticles,
      codeSnippets,
      apiParticles,
      gitParticles
    }
  }
}
</script>

<style scoped>
.terminal-particle {
  animation: drift-terminal infinite ease-in-out;
  will-change: transform;
}

.code-snippet {
  animation: fade-slide infinite ease-in-out;
  will-change: transform, opacity;
}

.api-particle {
  animation: pulse-float infinite ease-in-out;
  will-change: transform, opacity;
}

.git-particle {
  animation: rotate-drift infinite linear;
  will-change: transform;
}

@keyframes drift-terminal {
  0%, 100% {
    transform: translateX(0px) translateY(0px);
  }
  33% {
    transform: translateX(15px) translateY(-8px);
  }
  66% {
    transform: translateX(-10px) translateY(5px);
  }
}

@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(30px) translateX(-10px);
  }
  25% {
    opacity: 0.15;
    transform: translateY(10px) translateX(0px);
  }
  50% {
    opacity: 0.2;
    transform: translateY(0px) translateX(5px);
  }
  75% {
    opacity: 0.15;
    transform: translateY(-10px) translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) translateX(10px);
  }
}

@keyframes pulse-float {
  0%, 100% {
    transform: scale(1) translateY(0px) translateX(0px);
    opacity: 0.25;
  }
  25% {
    transform: scale(1.08) translateY(-12px) translateX(8px);
    opacity: 0.35;
  }
  50% {
    transform: scale(0.95) translateY(-5px) translateX(-5px);
    opacity: 0.3;
  }
  75% {
    transform: scale(1.03) translateY(3px) translateX(3px);
    opacity: 0.28;
  }
}

@keyframes rotate-drift {
  0% {
    transform: rotate(0deg) translateX(0px) translateY(0px);
  }
  25% {
    transform: rotate(90deg) translateX(8px) translateY(-5px);
  }
  50% {
    transform: rotate(180deg) translateX(0px) translateY(8px);
  }
  75% {
    transform: rotate(270deg) translateX(-8px) translateY(-3px);
  }
  100% {
    transform: rotate(360deg) translateX(0px) translateY(0px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .terminal-particle,
  .code-snippet,
  .api-particle,
  .git-particle {
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .terminal-particle,
  .code-snippet,
  .api-particle,
  .git-particle {
    opacity: 0.3;
  }
}

/* Z-index layering for advanced particles - Below navigation */
.advanced-code-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3 !important;
}
</style>
