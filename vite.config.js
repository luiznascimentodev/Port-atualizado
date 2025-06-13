import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// Detecta base pelo env (útil para deploy em subdiretório como GitHub Pages)
const base = process.env.BASE_URL || "/";

// https://vite.dev/config/
export default defineConfig({
  base, // Corrigido para funcionar em Hostinger (raiz) e GitHub Pages (subdiretório)
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Remover comentários em produção
          comments: false,
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Usar esbuild para minificação mais rápida caso terser não esteja disponível
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
        passes: 2, // Passes adicionais para melhor otimização
        ecma: 2020, // Usar recursos modernos
      },
      format: {
        comments: false, // Remover comentários
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        curriculo: resolve(__dirname, "curriculo.html"),
        projetos: resolve(__dirname, "projetos.html"),
        contato: resolve(__dirname, "contato.html"),
        servicos: resolve(__dirname, "servicos.html"),
        404: resolve(__dirname, "404.html"),
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp|ico)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        manualChunks: (id) => {
          // Vendor chunk para bibliotecas externas
          if (id.includes("node_modules")) {
            if (id.includes("vue")) return "vendor-vue";
            return "vendor-deps";
          }

          // UI pesado como animações
          if (
            id.includes("/ui/AnimatedBackground") ||
            id.includes("/ui/ProgrammingParticles") ||
            id.includes("/ui/AdvancedCodeParticles")
          ) {
            return "ui-heavy";
          }

          // Componentes por página
          if (id.includes("/home/")) return "page-home";
          if (id.includes("/servicos/")) return "page-servicos";
          if (id.includes("/projetos/")) return "page-projetos";
          if (id.includes("/contato/")) return "page-contato";
          if (id.includes("/curriculo/")) return "page-curriculo";

          // Componentes compartilhados
          if (id.includes("/shared/")) return "shared";

          // Utils
          if (id.includes("/utils/")) return "utils";

          // Dynamic imports - deixar em seus próprios chunks
          if (id.includes("import")) return null;
        },
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    // Compressão avançada para produção
    target: "es2020", // Garantir compatibilidade com browsers modernos
    cssTarget: "es2020", // Compatível com a mesma target do JS
    assetsInlineLimit: 8192, // Limite para inline de arquivos pequenos (8kb)
    modulePreload: { polyfill: true }, // Adicionar polyfill para module preload
    sourcemap: false, // Desabilitar sourcemaps em produção
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=0",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable", // 1 ano para assets
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      // Headers adicionais para performance
      "Permissions-Policy": "interest-cohort=()",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "Content-Security-Policy": "upgrade-insecure-requests",
    },
  },
});
