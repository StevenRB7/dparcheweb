<template>
    <div class="dashboard">
        <SidebarEventos />
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import SidebarEventos from '@/components/SidebarEventos.vue'
export default {
  components: {
    SidebarEventos
  },
  mounted(){
    if (localStorage.token != null){
      this.$router.push('/dashvereventos')

    }else{
      this.$router.push('/IniciarSesion')

    }
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Anton');
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

/* .dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(89, 165, 252) ;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
} */
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
