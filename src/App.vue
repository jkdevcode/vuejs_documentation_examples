<template>
  <div class="app-container">

    <MainView />
  </div>

</template>

<script setup>
import MainView from './views/MainView.vue'
</script>

<style scoped>
/* Fondo claro para el layout principal */
.app-container {
  background: linear-gradient(135deg, #f5f7fa, #e6eef5); /* Degradado suave */
  min-height: 100vh; /* Ocupa toda la altura de la pantalla */
  display: flex; /* Para asegurar el ajuste al contenido */
  flex-direction: column; /* Mantiene el flujo vertical */
}

/* Asegura que MainView ocupe el espacio disponible */
.MainView {
  flex: 1;
}

/* Elimina los márgenes globales */
:global(body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño */
  overflow-x: hidden; /* Previene el scroll horizontal si aparece */
}
</style>
