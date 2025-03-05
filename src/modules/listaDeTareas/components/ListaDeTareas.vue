<template>
  <div class="lista-de-tareas">
    <h2>📋 Lista de Tareas</h2>
    <div class="input-container">
      <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" placeholder="Escribe una tarea..." />
      <button @click="addTarea">➕ Agregar</button>
    </div>

    <ul v-if="tareas.length > 0" class="tareas">
      <li v-for="(tarea, index) in tareas" :key="index" class="tarea-item">
        <span>{{ index + 1 }}. {{ tarea.texto }}</span>
        <button @click="borraTarea(index)" class="btn-borrar">🗑️</button>
      </li>
    </ul>

    <p v-else class="mensaje-vacio">🚨 No hay tareas.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

const addTarea = () => {
  if (nuevaTarea.value.trim() !== '') {
    tareas.value.push({ texto: nuevaTarea.value, completa: false });
    nuevaTarea.value = '';
  }
};

const borraTarea = (index) => {
  tareas.value.splice(index, 1);
};

</script>

<style scoped>
/* Contenedor principal */
.lista-de-tareas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

/* Título */
h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

/* Input y botón de agregar */
.input-container {
  display: flex;
  width: 100%;
}

input {
  flex: 1;
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 8px 0 0 8px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #45a049;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #45a049;
}

/* Lista de tareas */
.tareas {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
}

/* Ítems de la lista */
.tarea-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.tarea-item:hover {
  transform: translateY(-2px);
}

/* Botón de borrar */
.btn-borrar {
  background-color: #e74c3c;
  border-radius: 6px;
}

.btn-borrar:hover {
  background-color: #c0392b;
}

/* Mensaje cuando no hay tareas */
.mensaje-vacio {
  color: #888;
  margin-top: 20px;
}
</style>
