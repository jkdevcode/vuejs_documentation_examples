<template>
  <Header :msg="texto" />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view />
      <!-- <input type="text" v-model="texto"> --> <!-- v-model nos permite guardar una variable reactiva -->
      <!-- {{ texto }} -->
    </div>
  </div>
  </template>

  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  import Header from '@/components/Header.vue';
/*   import { ref } from "vue";

  const texto = ref('') */
  </script>

<style scoped>
.container {
  display: flex; /* Alinea Sidebar y Content horizontalmente */
  flex-direction: row;
  margin-left: 10px;
  /* background-color: rgb(212, 227, 239); */
}

.content {
  flex: 1; /* Ocupa el espacio restante */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinea el contenido arriba */
  padding: 20px; /* Espaciado interno para separación */
  box-sizing: border-box; /* Incluye padding en el tamaño total */
}
</style>
