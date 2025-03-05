<template>
  <Header />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
  </template>

  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  import Header from '@/components/Header.vue';
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

