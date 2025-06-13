/**
 * Módulo para métricas e analytics de carregamento
 * Mede e reporta o desempenho de carregamento do site, incluindo FCP, LCP e TTI
 */

/**
 * Reporta métricas de carregamento para analytics
 * @param {Object} metrics - Objeto com métricas a serem reportadas
 */
export function reportLoadingMetrics(metrics = {}) {
  try {
    // Obter métricas de performance
    const performanceMetrics = getPerformanceMetrics();
    const allMetrics = { ...performanceMetrics, ...metrics };

    // Registrar no console (substituir por seu analytics real)
    console.log("[Performance Metrics]", allMetrics);

    // Enviar para Google Analytics (se estiver configurado)
    if (window.gtag) {
      gtag("event", "performance_metrics", {
        event_category: "Performance",
        event_label: "Page Load",
        ...allMetrics,
      });
    }

    // Web Vitals (se estiver disponível)
    if (window.webVitals) {
      Object.entries(allMetrics).forEach(([key, value]) => {
        window.webVitals.sendToAnalytics(key, value);
      });
    }
  } catch (error) {
    console.error("Erro ao reportar métricas:", error);
  }
}

/**
 * Coleta métricas de performance da Web Performance API
 * @returns {Object} Objeto com métricas de performance
 */
export function getPerformanceMetrics() {
  // Inicializar objeto de métricas vazio
  const metrics = {
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
  };

  try {
    // Verificar se a API de performance está disponível
    if (!window.performance || !window.performance.timing) {
      return metrics;
    }

    const timing = window.performance.timing;

    // Calcular métricas básicas
    metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded =
      timing.domContentLoadedEventEnd - timing.navigationStart;

    // Obter First Paint e First Contentful Paint (apenas Chrome/Edge)
    const paintEntries = window.performance.getEntriesByType("paint");
    if (paintEntries && paintEntries.length) {
      const firstPaint = paintEntries.find(
        (entry) => entry.name === "first-paint"
      );
      const firstContentfulPaint = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"
      );

      if (firstPaint) metrics.firstPaint = Math.round(firstPaint.startTime);
      if (firstContentfulPaint)
        metrics.firstContentfulPaint = Math.round(
          firstContentfulPaint.startTime
        );
    }

    // Adicionar métricas customizadas
    metrics.jsLoadTime = timing.domComplete - timing.domLoading;
    metrics.interactionTime = timing.domInteractive - timing.navigationStart;

    // Arredondar todos os valores para inteiros (em ms)
    Object.keys(metrics).forEach((key) => {
      metrics[key] = Math.round(metrics[key]);
    });
  } catch (error) {
    console.error("Erro ao coletar métricas:", error);
  }

  return metrics;
}

/**
 * Rastreia o tempo de carregamento de componentes assíncronos
 * @returns {Object} Objeto com métodos de início e término
 */
export function trackComponentLoading(componentName) {
  const startTime = performance.now();

  return {
    start: () => {
      return startTime;
    },
    end: () => {
      const loadTime = Math.round(performance.now() - startTime);
      console.log(
        `[Performance] Componente '${componentName}' carregado em ${loadTime}ms`
      );
      return loadTime;
    },
  };
}

export default {
  reportLoadingMetrics,
  getPerformanceMetrics,
  trackComponentLoading,
};
