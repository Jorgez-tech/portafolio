<template>
  <div v-if="proyecto">
    <span class="accent">$ cat {{ proyecto.nombre }}.md</span>
    <h2>{{ proyecto.nombre }}</h2>
    <p>{{ proyecto.descripcion }}</p>
    <div>
      <strong>Tecnologías:</strong>
      <ul>
        <li v-for="tech in proyecto.tecnologias" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <div>
      <strong>Detalles:</strong>
      <p>{{ proyecto.detalles }}</p>
    </div>
    <button @click="$emit('volver')">Volver</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({ proyecto: Object });
</script>

<style scoped>
.accent {
  color: #00e676;
  font-weight: bold;
}
button {
  margin-top: 1rem;
  background: #222;
  color: #00e676;
  border: 1px solid #00e676;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #00e676;
  color: #222;
}
</style>
