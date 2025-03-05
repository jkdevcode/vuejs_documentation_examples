<template>
  <div class="resultado">{{ props.resultado }}</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(
  [
    'resultado'
  ]
)
</script>

<style scoped>
.resultado {
  background-color: rgb(163, 247, 253);
  font-size: 1.5em;
  font-weight: bold;
  color: #96a4ae;
  /* Un color azul agradable */
  margin-top: 20px;
}
</style>
