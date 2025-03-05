<template>
  <div class="header">
  {{ mensajeRecibido }}  <Weather />
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
