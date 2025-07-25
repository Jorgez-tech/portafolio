<template>
  <div class="terminal" ref="terminalRef">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const terminalRef = ref(null);

onMounted(() => {
  // Animación de entrada tipo fade y slide (más suave, menos desplazamiento, rebote sutil)
  gsap.from(terminalRef.value, {
    opacity: 0,
    y: 80, // desplazamiento moderado
    duration: 1.4, // suave
    ease: 'back.out(1.7)', // llegada elástica pero controlada
  });
});
</script>

<style>
.terminal {
  background: #222;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 0 16px #000a;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1.1rem;
}
body.light-mode .terminal {
  background: #fff;
  color: #222;
}
</style>
