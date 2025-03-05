<template>
  <div class="lista-de-tareas">
    <h2>Lista de tareas</h2>
    <input
      type="text"
      v-model="nuevaTarea"
      @keyup.enter="addTarea"
      placeholder="Escribe una tarea"
    />
    <button @click="addTarea">Agregar</button>
    <ul v-if="tareas.length > 0">
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ index + 1 }}. {{ tarea.texto }}
        <button @click="borraTarea(index)">Borrar</button>
      </li>
    </ul>
    <p v-else>No hay tareas.</p>
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
.lista-de-tareas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}

li button {
  margin-left: 8px;
}

li.completa {
  text-decoration: line-through;
  color: #888;
}
</style>
