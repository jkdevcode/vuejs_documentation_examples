<template>
  <div class="sidebar">
    <nav class="main-nav">
      <ul class="main-list">
        <li class="list"><router-link to="/contador">Contador</router-link></li>
        <li class="list"><router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
        <li class="list"><router-link to="/registrar">Registrar</router-link></li>
        <li class="list"><router-link to="/calcular">Calcular</router-link></li>
      </ul>
      <div class="user-info">
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
// import { ref, watch } from 'vue'

const registrarStore = useRegistrarStore();
// const nombre = ref(registrarStore.nombre);
// const email = ref(registrarStore.email);

// watch(() => registrarStore.nombre, (newValue) => {
//   nombre.value = newValue;
// });
// watch(() => registrarStore.email, (newValue) => {
//   email.value = newValue;
// });

</script>

<style scoped>
.sidebar {
  background: linear-gradient(145deg, #1e1e2f, #2a2a3d);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: #ffffff;
  max-width: 300px;
  min-height:75vh;
}

.main-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-list li {
  margin: 10px 0;
}

.main-list li a {
  color: white;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  display: block;
  transition: background 0.3s;
}

.main-list li a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.user-info {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

h3 {
  font-size: 18px;
  margin: 5px 0;
}
</style>
