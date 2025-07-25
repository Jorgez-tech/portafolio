<template>
  <div class="background-constellation">
    <TerminalShell>
      <h1><span ref="typewriter"></span></h1>
      <p>Bienvenido a tu portafolio interactivo tipo terminal.</p>
      <nav class="terminal-nav">
        <router-link to="/motivacion" class="accent">$ echo motivacion.txt</router-link>
        <button class="accent" @click="toggleTheme">$ theme.sh</button>
      </nav>
      <!-- CLI funcional: solo comandos habilitados -->
      <div class="cli-links">
        <router-link to="/proyectos" class="accent">$ ls proyectos/</router-link>
        <router-link to="/log" class="accent">$ cat log-tecnico.md</router-link>
      </div>
      <Motivation />
      <ProjectList v-if="!proyectoSeleccionado" @seleccionar="verDetalle" />
      <ProjectDetail v-if="proyectoSeleccionado" :proyecto="proyectoSeleccionado" @volver="proyectoSeleccionado = null" />
      <LogTechnical />
    </TerminalShell>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TerminalShell from '../components/TerminalShell.vue';
import Motivation from '../components/Motivation.vue';
import ProjectList from '../components/ProjectList.vue';
import ProjectDetail from '../components/ProjectDetail.vue';
import LogTechnical from '../components/LogTechnical.vue';
import gsap from 'gsap';

const proyectoSeleccionado = ref(null);
const theme = ref('dark');
const typewriter = ref(null);
const titleText = 'DevLog Terminal';

function verDetalle(proyecto) {
  proyectoSeleccionado.value = proyecto;
}
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.body.className = theme.value === 'dark' ? '' : 'light-mode';
}

onMounted(() => {
  let chars = '';
  let i = 0;
  function type() {
    if (i < titleText.length) {
      chars += titleText[i];
      typewriter.value.textContent = chars;
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});
</script>


<style>
.background-constellation {
  min-height: 100vh;
  width: 100vw;
  background: url('../assets/img/constellation.jpg') center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Estilos específicos para la vista principal */
 .terminal-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
h1, p {
  color: #23364d;
}
body.light-mode h1, body.light-mode p {
  color: #222;
}
.cli-links {
  margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}
.cli-list {
  margin-left: 1rem;
  font-size: 0.9rem;
}
</style>
