<template>
  <Header :msg="texto" />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view />
      <input type="text" v-model="texto"> <!-- v-model nos permite guardar una variable reactiva -->
      {{ texto }}
    </div>
  </div>
  </template>

  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  import Header from '@/components/Header.vue';
  import { ref } from "vue";

  const texto = ref('')
  </script>

  <style>
  .container {
    flex-direction: row;
  }
  .content {
   display: flex;
   justify-content: center;
    align-items: center;
  }
  </style>

