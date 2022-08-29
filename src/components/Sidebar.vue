<template>
<div>
    <div class="sidebar">
        <div>
            <img
            src="../assets/hac.png"
            alt="Admin"
            class="rounded-circle"
            width="150"
            />
        </div>
        <div class="title">
        </div>
        <div class="row">
            <h5>Nombre</h5>
        </div>
        <div class="dato">
            <h6 class="">{{nombre}}</h6>
        </div>
         <div class="row">
            <h5>Apellido</h5>
        </div>
        <div class="dato">
            <h6 class="">{{apellido}}</h6>
        </div>
         <!-- <div class="row">
            <h5>Rol</h5>
        </div> -->
        <div class="dato">
            <h6 class="">{{rol}}</h6>
        </div>
        <div class="menu-items">
            <router-link to="/dashboard" exact active-class="active"  tag="button"   class="side-btn">
                <div class="link-container">
                    Publicaciónes
                </div>
            </router-link>
            <router-link to="/eventos" exact active-class="active"   tag="button"   class="side-btn">
                <div class="link-container">
                    Eventos
                </div>
            </router-link>
            <router-link to="/animos"  exact  active-class="active"  tag="button"  class="side-btn">
                <div class="link-container">
                    Estados de animo
                </div>
            </router-link>
            <router-link to="/intereses"  exact active-class="active"  tag="button"   class="side-btn">
                <div class="link-container">
                    Intereses
                </div>
            </router-link>
            <router-link to="/usuarios"  exact active-class="active"  tag="button"   class="side-btn">
                <div class="link-container">
                    Usuarios
                </div>
            </router-link>
            <router-link to="/frases"  exact active-class="active"  tag="button"   class="side-btn">
                <div class="link-container">
                   Frases
                </div>
            </router-link>
             <router-link to="/iniciar" class="button" @click.native="cerrarSesion()">
               <span class="material-icons">Logout</span>
               <span class="text mx-4">Salir</span>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {

  data: () => ({
    nombre: localStorage.getItem('nombre'),
    apellido: localStorage.getItem('apellido')
    // rol: localStorage.getItem('rol')

  })

}
</script>

<style scoped>

.rounded-circle{
    margin-top: -40px;

    }
.row{
    color: rgb(255, 255, 255);
    font-family: "viner hand itc";
}
.dato{
    font-family: "showcard gothic";
}
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 20px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;
    color: white;
    background-color: transparent;
    font-family: "ink free";

}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: rgb(89, 165, 252);
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: rgb(89, 165, 252);
}
</style>
