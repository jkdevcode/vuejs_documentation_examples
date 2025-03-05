<template>
  <div class="header">
    <h1>{{ mensajeRecibido }}</h1>
    <Weather />
  </div>
</template>

<script setup>
import Weather from './Weather.vue'
import { defineProps, ref, watch } from "vue";
const propsMsg = defineProps(['msg'])
const mensajeRecibido = ref(propsMsg.mensajeRecibido)

watch(() => propsMsg.msg, (newValue) => {
  mensajeRecibido.value = newValue
})
</script>

<style scoped>
.header {
  background: linear-gradient(145deg, #1e1e2f, #2a2a3d);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  margin: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>
