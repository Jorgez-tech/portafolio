<template>
  <div>
    <ul>
      <!-- Lista vacía, sin proyectos -->
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const proyectos = ref([]);
</script>

<style scoped>
.accent {
  color: #00e676;
  font-weight: bold;
}
ul {
  list-style: none;
  padding-left: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
