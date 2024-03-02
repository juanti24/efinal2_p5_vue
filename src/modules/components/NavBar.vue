<template>
  <div class="navbar">
    <router-link to="/tokens">Tokens</router-link>
    <router-link to="/estudiantes">Estudiantes</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #56ccf2;
  color: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar a {
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
}

.navbar a:hover {
  color: #4a8dff;
}
</style>
