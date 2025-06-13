<template>
  <nav class="relative w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 w-72">
          <a href="/" class="block">
            <NavigationTyping />
          </a>
        </div>

        <!-- Desktop Navigation - Centralizado -->
        <div class="hidden md:flex items-center justify-center flex-1">
          <div class="flex items-center space-x-1 bg-gray-800 rounded-full p-1">
            <a v-for="item in navigation"
               :key="item.name"
               :href="item.href"
               class="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative overflow-hidden group"
               :class="item.current
                 ? 'bg-gray-700 text-blue-400 shadow-sm'
                 : 'text-gray-400 hover:text-white hover:bg-gray-700/50'">
              <span class="relative z-10">{{ item.name }}</span>
              <div v-if="item.current" class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-500/10 rounded-full"></div>
            </a>
          </div>
        </div>

        <!-- Right side actions -->
        <div class="flex items-center space-x-3 w-72 justify-end">
          <!-- Mobile menu button -->
          <button @click="$emit('toggle-mobile-menu')"
                  class="md:hidden p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200">
            <svg class="w-5 h-5 transition-transform duration-200"
                 :class="mobileMenuOpen ? 'rotate-90' : 'rotate-0'"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen"
           class="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg"
           @click.self="$emit('close-mobile-menu')">
        <div class="px-4 py-4 space-y-2">
          <a v-for="item in navigation"
             :key="item.name"
             :href="item.href"
             class="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
             :class="item.current
               ? 'bg-gradient-to-r from-blue-900/20 to-emerald-900/20 text-blue-400 border border-blue-800'
               : 'text-gray-300 hover:bg-gray-800 hover:text-white'"
             @click="$emit('close-mobile-menu')">
            <span>{{ item.name }}</span>
            <svg v-if="item.current" class="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavigationTyping from '../legacy/NavigationTyping.vue'

export default {
  name: 'Navigation',
  components: {
    NavigationTyping
  },
  props: {
    mobileMenuOpen: Boolean,
    navigation: Array
  },
  emits: ['toggle-mobile-menu', 'close-mobile-menu']
}
</script>
