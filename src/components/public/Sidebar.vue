<template>
  <div class="sidebar">
    <p>LOGOOOOO</p>
    <!--   LOGO   -->
    <router-link class="sidebar-link" to="/categoria/retratos">Retratos</router-link>
    <router-link class="sidebar-link" to="/categoria/paisajes">Paisajes</router-link>
    <router-link class="sidebar-link" to="/categoria/otros">Otros</router-link>
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
