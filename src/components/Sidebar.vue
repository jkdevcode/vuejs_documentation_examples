<template>
  <div class="sidebar">
    <!-- <h2>Barra lateral</h2> -->
    <nav class="main-nav">
      <ul class="main-list">
        <li class="list"><router-link to="/contador">Contador</router-link></li>
        <li class="list"><router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-nav {
  background-color: #a3a3a3;
  padding: 20px 0;
  border-radius: 10px;
}

.main-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;

}

.main-list li {
  display: inline;
  margin: 0 15px;
  font-size: 20px;
}

.main-list li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
}

.main-list li a:hover {
  background-color: #555;
}
</style>
