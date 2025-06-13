<template>
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    <!-- Linhas de velocidade para performance -->
    <path stroke-linecap="round" stroke-linejoin="round" d="M2 8h4m-4 4h3m-3 4h5" stroke-width="1" opacity="0.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 4h4m-3 8h3m-4 4h4" stroke-width="1" opacity="0.5" />
    <!-- Indicadores de otimização -->
    <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.6" />
    <circle cx="18" cy="18" r="0.5" fill="currentColor" opacity="0.6" />
    <!-- Ondas de energia -->
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c0 2-1 3-1 5s1 3 1 5-1 3-1 5" stroke-width="1" opacity="0.3" />
  </svg>
</template>

<script>
export default {
  name: 'ZapIcon'
}
</script>
