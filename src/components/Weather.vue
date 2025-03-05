<template>
<h3>Temperatura actual es: {{ weatherStore.temperatura }} °</h3>
</template>

<script setup>
import useWeather from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();
onMounted(() => { /* cuando el archivo se monte, se llama la funcion useWeather*/
  useWeather();
});
</script>

<style scoped>
</style>
