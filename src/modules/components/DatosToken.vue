<template>
  <div class="container">
    <h1>TOKEN</h1>
    <div class="datos-cont">
      <label for="">Semilla</label>
      <input type="text" v-model="usuario.semilla" />
      <label for="">Tiempo de vigencia</label>
      <input type="number" v-model="usuario.tiempo" />
    </div>
    <div class="token-cont">
      <label for="">Token</label>
      <textarea v-model="token" rows="8" readonly></textarea>
    </div>
    <button @click="obtenerToken">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/TokenCliente";

export default {
  data() {
    return {
      token: null,
      usuario: {
        username: "juan",
        password: "123",
        semilla: null,
        tiempo: null,
      },
    };
  },
  methods: {
    async obtenerToken() {
      const token = await obtenerTokenFachada(this.usuario);
      this.token = token;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.datos-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.datos-cont label {
  text-align: left;
  margin: 6px 0px;
}

.datos-cont input {
  border: solid rgb(127, 53, 145) 2px;
  border-radius: 4px;
  height: 20px;
  width: 200px;
}

.token-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.token-cont label {
  text-align: left;
  margin: 6px 0px;
}

.token-cont textarea {
  border: solid rgb(127, 53, 145) 2px;
  border-radius: 10px;
  height: 140px;
  width: 200px;
}

.container button{
    background: #2e6bb6;
    width: 90px;
    height: 40px;
    color: aliceblue;
    border: 2px solid rgb(127, 53, 145);
    margin-top: 10px;
    border-radius: 10px;
}
</style>