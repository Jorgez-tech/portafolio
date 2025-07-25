

# DevLog Terminal

Portafolio interactivo tipo terminal para desarrolladores y exploradores técnicos. Documenta tu progreso, experimentos y proyectos en una interfaz CLI moderna y minimalista.

## Objetivos

- Inspirar a otros desarrolladores y principiantes mostrando tu evolución técnica.
- Documentar experimentos, pruebas y proyectos de forma estructurada.
- Integrar una frase motivacional diaria desde una API pública.
- Mantener una estética sobria, monoespaciada y accesible (modo oscuro y claro).

## Tecnologías utilizadas

- Vue.js 3
- GSAP (animaciones)
- Markdown (proyectos y log técnico)
- Bootstrap (opcional)
- Font Awesome (CDN)

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/devlog-terminal.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el proyecto:
   ```bash
   npm run dev
   ```
4. Accede a la app en tu navegador en `http://localhost:5173` (o el puerto configurado).

## Estructura del proyecto

- `/public/index.html`: Entrada principal
- `/src/components/TerminalShell.vue`: Interfaz CLI principal
- `/src/components/ProjectList.vue`: Listado de proyectos
- `/src/components/ProjectDetail.vue`: Vista detallada de cada proyecto
- `/src/components/LogTechnical.vue`: Log técnico y experimentos
- `/src/components/Motivation.vue`: Frase motivacional diaria (API)
- `/src/assets/css/estilos.css`: Estilos base, modo oscuro y claro
- `/src/assets/img/`: Imágenes y recursos visuales
- `/src/router/index.js`: Configuración de rutas

## Autor

- Jorge Z
- J-tech

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
