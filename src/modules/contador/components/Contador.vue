<template>
  <div class="contador-container">
    <h1>Hola mundo!</h1>
    <p class="contador-valor">{{ contador }}</p>
    <div class="botones-container">
      <button @click="incrementar" class="boton-incrementar">Incrementar</button>
      <button @click="decrementar" class="boton-decrementar">Decrementar</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const contador = ref(0)

const incrementar = () => {
  contador.value++
}
const decrementar = () => {
  contador.value--
}
</script>

<style scoped>
.contador-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.contador-valor {
  font-size: 2em;
  font-weight: bold;
  color: #3498db; /* Un color azul agradable */
  margin: 20px 0;
}

.botones-container {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton-incrementar {
  background-color: #2ecc71; /* Verde para incrementar */
  color: white;
}

.boton-decrementar {
  background-color: #e74c3c; /* Rojo para decrementar */
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>
