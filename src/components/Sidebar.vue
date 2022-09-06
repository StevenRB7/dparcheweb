<!-- eslint-disable quotes -->
/* eslint-disable */
<template>
  <div class="container" :class="{ show: showSidebar }">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="sidebar">
        <div v-show="showLink">
            <img
            src="../assets/hac.png"
            alt="Admin"
            class="rounded-circle"
            width="150"
            />
        </div>
        <div v-show="showLink">
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
      </div>
        <br><br>
    </div>
    <div class="navigation-icons">
      <i class="fas fa-grin-alt" @click="Animos()"></i>
      <i class="fas fa-skating"  @click="Eventos()"></i>
      <i class="fas fa-file-alt"  @click="Frases()"></i>
      <i class="fas fa-chess"  @click="Intereses()"></i>
      <i class="fas fa-chalkboard-teacher" @click="Publicaciones()"></i>
      <i class="fas fa-user-circle"  @click="Usuarios()"></i>
      <i class="fas fa-futbol"  @click="Eventos2()"></i>
      <i class="mover fa fa-sign-out"  @click="salir()"></i>

    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" @click="Animos()" key="1">Estados de animo</div>
        <div v-show="showLink" @click="Eventos()" key="2">Crear Eventos</div>
        <div v-show="showLink" @click="Frases()" key="3">Frases</div>
        <div v-show="showLink" @click="Intereses()" key="4">Intereses</div>
        <div v-show="showLink" @click="Publicaciones()" key="5">Publicaciones</div>
        <div v-show="showLink" @click="Usuarios()" key="5">Usuarios</div>
        <div v-show="showLink" @click="Eventos2()" key="5">Eventos</div>
        <div class="mover2" v-show="showLink" @click="salir()" key="7">Cerrar sesión</div>

      </transition-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    showSidebar: false,
    showLink: false,
    nombre: localStorage.getItem('nombre'),
    apellido: localStorage.getItem('apellido'),
    cerrar: localStorage.getItem('rol')
    // rol: localStorage.getItem('rol')
  }),
  // dataa: () => {
  //   // return {
  //   //   showSidebar: false,
  //   //   showLink: false
  //   // }
  // },
  
  methods: {

    Animos () {
      this.$router.push('/animos')
    },
    Eventos () {
      this.$router.push('/eventos')
    },
    Frases () {
      this.$router.push('/frases')
    },
    Intereses () {
      this.$router.push('/intereses')
    },
    Publicaciones () {
      this.$router.push('/dashboard')
    },
    Usuarios () {
      this.$router.push('/usuarios')
    },
    Eventos2 () {
      this.$router.push('/vereventos')
    },
    salir(){
      localStorage.clear();
      this.$router.push('/')

    },

    showNav () {
      if (this.showSidebar) {
        this.showLink = false
        setTimeout(() => {
          this.showSidebar = false
        }, 500)
      } else {
        this.showSidebar = true
        setTimeout(() => {
          this.showLink = true
        }, 500)
      }
    }
  },

  // dataa: () => {
  //   return {
  //     showSidebar: false,
  //     showLink: false
  //   }
  // }
}
</script>

<style lang="scss" scoped>

  .mover{
margin-top: 150px;
  }
  .mover2{
    margin-top: 175px;

  }
.container {
  position: absolute;
  box-sizing: content-box;
  top: 0;
  left: 0;
  width: 50px;
  padding: 10px;
  min-height: calc(100vh - 20px);
  background-color: rgba($color: #3fbeef, $alpha: 0.8);
  border: solid #fff;
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;

    i {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
  }

  &.show {
    width: 250px;

    .control > i {
      color: #fff;
      transform: rotateZ(-180deg);
    }

    .navigation-icons {
      color: #fff;
    }
  }

  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;

    i {
      font-size: 2rem;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }

  .navigation-links {
    padding-top: 14px;
    float: left;

    div {
      font-size: 1.35rem;
      padding-left: 10px;
      margin-bottom: 18px;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
}

@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform linear calc(0.1s * #{$var}), display 0.5s;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4, 5);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
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

</style>
