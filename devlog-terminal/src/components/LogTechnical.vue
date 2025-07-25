<template>
  <div>
    <div v-html="renderedMarkdown" class="log-markdown" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { marked } from 'marked';

const markdown = ref(`# Log Técnico

- 2025-07-25: Primer experimento con animaciones GSAP en Vue.
- 2025-07-24: Prueba de integración de API motivacional.
- 2025-07-23: Diseño inicial de la interfaz CLI.

Puedes agregar aquí tus experimentos, pruebas y snippets en formato markdown.`);

const renderedMarkdown = computed(() => marked.parse(markdown.value));
</script>

<style>
.accent {
  color: #00e676;
  font-weight: bold;
}
 .log-markdown {
  background: #181818;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  color: #e0e0e0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}
body.light-mode .log-markdown {
  background: #fff;
  color: #222;
}
</style>
