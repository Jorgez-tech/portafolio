<template>
  <div>
    <h3>Motivación Diaria</h3>
    <p>{{ frase }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const frase = ref('');

onMounted(async () => {
  // Ejemplo de API pública de frases motivacionales
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  frase.value = data.content;
});
</script>

<style scoped>
</style>
