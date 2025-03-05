<template>
  <div class="formulario-container">
    <h2>Formulario de registro</h2>
    <Form class="formulario" :validation-schema="validationSchema" @submit="submitForm">
      <div class="form-group">
        <label for="nombre">Nombres</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage class="errors-response" name="nombre" />
      </div>
      <div class="form-group">
        <label for="correo">Email</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su email" />
        <ErrorMessage class="errors-response" name="email" />
      </div>
      <div class="form-group">
        <button type="submit" class="boton-registrar">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { validationSchema } from "../schemas/validationSchema";
import {useRegistrarStore} from '../stores/registrarStore';
import { ref } from "vue";

const registrarStore = useRegistrarStore();

const nombre = ref("");
const email = ref("");

const submitForm = () => {
  registrarStore.guardarRegistro(nombre.value, email.value); // Llama a la acción del store
  console.log(nombre.value, email.value);
};
</script>

<style scoped>
.formulario-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.formulario {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.errors-response {
  color: red;
  font-size: 14px;
}

.boton-registrar {
  width: 100%;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton-registrar:hover {
  background-color: #2980b9;
}
</style>
