<template>
  <span class="typing-text">
    {{ displayText }}<span class="typing-cursor">|</span>
  </span>
</template>

<script>
export default {
  name: 'TypingEffect',
  data() {
    return {
      texts: [
        'Desenvolvedor Web Fullstack',
        'Especialista em Vue.js',
        'Criador de Experiências Digitais',
        'Apaixonado por Tecnologia'
      ],
      currentTextIndex: 0,
      currentCharIndex: 0,
      displayText: '',
      isDeleting: false,
      typeSpeed: 100,
      deleteSpeed: 50,
      pauseTime: 2000
    }
  },
  mounted() {
    this.startTyping()
  },
  methods: {
    startTyping() {
      this.typeEffect()
    },
    typeEffect() {
      const currentText = this.texts[this.currentTextIndex]

      if (this.isDeleting) {
        this.displayText = currentText.substring(0, this.currentCharIndex - 1)
        this.currentCharIndex--
      } else {
        this.displayText = currentText.substring(0, this.currentCharIndex + 1)
        this.currentCharIndex++
      }

      let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed

      if (!this.isDeleting && this.currentCharIndex === currentText.length) {
        speed = this.pauseTime
        this.isDeleting = true
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
      }

      setTimeout(() => this.typeEffect(), speed)
    }
  }
}
</script>

<style scoped>
.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
