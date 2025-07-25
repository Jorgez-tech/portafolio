<template>
  <div>
    <span class="accent">Motivación del día:</span>
    <p>{{ frase }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const frasesLocales = [
  'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
  'No cuentes los días, haz que los días cuenten.',
  'La mejor manera de predecir el futuro es crearlo.',
  'Nunca es tarde para aprender algo nuevo.',
  'La motivación te impulsa, el hábito te mantiene.',
];
const frase = ref('');

onMounted(async () => {
  try {
    // Nueva API: ZenQuotes
    const res = await fetch('https://zenquotes.io/api/random');
    const data = await res.json();
    frase.value = data[0]?.q || frasesLocales[Math.floor(Math.random() * frasesLocales.length)];
  } catch (e) {
    frase.value = frasesLocales[Math.floor(Math.random() * frasesLocales.length)];
  }
});
</script>

<style scoped>
.accent {
  color: #00e676;
  font-weight: bold;
}
</style>
