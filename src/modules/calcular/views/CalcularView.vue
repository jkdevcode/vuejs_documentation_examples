<template>
  <div class="computadas-container">
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor" class="input-valor" placeholder="Escribe algo..." />
    <p class="valor-mostrado">{{ valorCalculado }}</p>
    <ResultadoSection  v-if="mostrarElemento" :resultado="valorCalculado" />
    <!-- <ResultadoSection  v-show="mostrarElemento" :resultado="valorCalculado" /> -->
    <p v-else-if="isNaN(valor)">Dese ser un número para calcular</p>
    <p v-else>Aqui no hay nada ;D</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';

const valor = ref('');

const valorCalculado = computed(() => {
  return valor.value * 3
})

const mostrarElemento = computed(() => {
  return valor.value > 10
})
</script>

<style scoped>
.computadas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}

.input-valor {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 1em;
}

.valor-mostrado {
  font-size: 1.5em;
  font-weight: bold;
  color: #3498db;
  /* Un color azul agradable */
  margin-top: 20px;
}
</style>
