<template>
  <div class="sidebar">
    <p>ADMIN LOGOOOOO</p>
    <!--   LOGO   -->
    <router-link class="sidebar-link" to="/administracion/fotos">Fotos</router-link>
    <router-link class="sidebar-link" to="/administracion/categorias">Categorias</router-link>
    <router-link class="sidebar-link" to="/administracion/contacto">Contacto</router-link>

    <router-link class="sidebar-link" style="margin-top:1em;" to="/">ir a la web </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
  }
}
</script>

<style scoped>
.sidebar{
  background-color:#777;
  padding:1rem 0;
  width:15rem;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:stretch;
}
.sidebar-link{
  text-decoration: none;
  color:#000;
  text-transform:uppercase;
  font-size:1.2em;
  padding:.5em 0;
  text-align:center;
}
.sidebar-link.router-link-exact-active{
  background-color:#999;
}
</style>
