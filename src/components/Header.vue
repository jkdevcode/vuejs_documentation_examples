<template>
  <div class="header">
    <h3>Temperatura actual es: <Weather /> </h3>
  </div>

</template>

<script setup>
import Weather from './Weather.vue'
</script>

<style scoped>
.header {
  background-color: #cac9c9;
  padding: 10px 0;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
}
.h1 {
  font-size: 20px;
}
</style>
