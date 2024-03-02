<template>
  <div class="estudiante-container">
    <h1>Estudiante</h1>
    <div class="token-container">
      <label for="">Token</label>
      <textarea type="text" v-model="token"></textarea>
    </div>
    <div class="datos-container">
      <label for="">Nombre</label>
      <input type="text" v-model="nombre">
      <label for="">Apellido</label>
      <input type="text" v-model="apellido">
      <label for="">Cedula</label>
      <input type="text" v-model="cedula">
    </div>
    <button @click="ingresarEstudiante">Guardar</button>
  </div>
  <TablaEstudiantes :estudiantes="listado"/>
</template>

<script>
import { ingresarEstudianteFachada } from '../helpers/EstudianteCliente';


export default {
  components: {
    TablaEstudiantes
  },
  data() {
    return {
      token: null,
      nombre: null,
      cedula: null,
      apellido: null,
      listado: []
    }
  },
  methods: {
    async ingresarEstudiante() {
      const data = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula
      };

      const estudiante = await ingresarEstudianteFachada(data, this.token);
      console.log(estudiante);
      this.listado.push(estudiante);
    }
  }
}
</script>

<style scoped>
.estudiante-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.datos-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.datos-container label {
  text-align: left;
  margin: 6px 0px;
}

.datos-container input {
  border: solid rgb(127, 53, 145) 2px;
  border-radius: 4px;
  height: 20px;
  width: 200px;
}

.token-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.token-container label {
  text-align: left;
  margin: 6px 0px;
}

.token-container textarea {
  border: solid rgb(127, 53, 145) 2px;
  border-radius: 10px;
  height: 140px;
  width: 200px;
}

.estudiante-container button {
  background: #2e6bb6;
  width: 90px;
  height: 40px;
  color: aliceblue;
  border: 2px solid rgb(127, 53, 145);
  margin-top: 10px;
  border-radius: 10px;
}
</style>
