<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
  </template>

  <script setup>
  import Sidebar from '../components/Sidebar.vue'
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

