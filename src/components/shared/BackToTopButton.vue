<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-90 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-90 translate-y-2"
  >
    <button
      class="back-to-top-btn"
      @click="scrollToTop"
      title="^ top"
    >
      <!-- Programming Icon -->
      <div class="flex items-center justify-center w-full h-full">
        <svg
          class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <!-- Code brackets going up -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8l-4 4 4 4" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4-4 4" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v8" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 7l3-3 3 3" />
        </svg>
      </div>
    </button>
  </Transition>
</template>

<script>
export default {
  name: 'BackToTopButton',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top-btn {
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  z-index: 9999 !important;
  width: 3rem !important;
  height: 3rem !important;
  background-color: rgba(17, 24, 39, 0.9) !important;
  backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(55, 65, 81, 0.3) !important;
  border-radius: 0.5rem !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  outline: none !important;
}

.back-to-top-btn:hover {
  background-color: rgba(37, 99, 235, 0.2) !important;
  border-color: rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.25) !important;
}

.back-to-top-btn svg {
  width: 1.25rem !important;
  height: 1.25rem !important;
  color: rgb(156, 163, 175) !important;
  transition: color 0.3s ease !important;
}

.back-to-top-btn:hover svg {
  color: rgb(96, 165, 250) !important;
}

/* Garantir que funcione em todos os viewports */
@media (max-width: 640px) {
  .back-to-top-btn {
    bottom: 1.5rem !important;
    right: 1.5rem !important;
    width: 2.75rem !important;
    height: 2.75rem !important;
  }

  .back-to-top-btn svg {
    width: 1.125rem !important;
    height: 1.125rem !important;
  }
}
</style>
