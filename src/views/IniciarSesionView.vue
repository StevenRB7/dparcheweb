<template>
  <div id="">
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

        <div class="stars"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="wrapper">
          <div class="logo">
            <img src="../assets/dparchea_1000.png" alt="" />
          </div>
          <div class="hi text-center mt-4 name">Hi developer</div>
          <div class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input
                type="text"
                v-model="form.email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <!-- <input type="password" v-model="form.clave" name="clave" id="clave" placeholder="Password"> -->
              <div class="control is-expanded">
                <input
                  v-if="showPassword"
                  type="text"
                  class="input"
                  v-model="form.clave"
                />
                <input
                  v-else
                  type="password"
                  class="input"
                  v-model="form.clave"
                  placeholder="Password">
              </div>
              <div class="controll">
                  <!-- <img src="../assets/ver.png" alt="" button class="button" @click="toggleShow"> -->
                  <span class="icon is-small is-right">
                    <i
                      class="fas"
                      button  @click="toggleShow"
                      :class="{
                        'fa-eye-slash': showPassword,
                        'fa-eye': !showPassword,
                      }"
                    ></i>
                  </span>
              </div>

              <!-- <label for="exampleInputPassword1" class="form-label">Contraseña</label> -->
            </div>
            <button pill variant  @click="Login()" class="btn mt-3">
              Iniciar Sesion
            </button>
          </div>
          <div class="text-center fs-6">
            <a href="#">Bienvenido Developer</a>
          </div>
        </div>
      </ul>
    </div>
    <!-- <FooterComponent/> -->
  </div>
</template>
<script>
/* eslint-disable */

import axios from "axios";

export default {
  
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  name: "Inicios",
  components: {},
  data() {
    return {
     showPassword: false,
      password: null,
     
      isLogin: false,
      token: "",
      message: "",
      user: {
        rol: "",
        nombre: "",
        apellido: "",
      },
      form: {
        email: "",
        clave: "",
      },
    };
  },
  mounted() {
    //this.Login;
  },

  methods: {
    toggleShow() {
      
      this.showPassword = !this.showPassword;
     
    },
    closeSesion() {
      this.isLogin = false;
      this.token = "";
      localStorage.clear();
      window.location.replace("/");
    },
    //...mapActions(['mockLogin']),
    Login() {
      let headers = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.token,
        },
      };
      axios
        .post(
          "https://interbusapi.herokuapp.com/usuarios/login",
          this.form,
          {
            validateStatus: function (status) {
              return status < 500; // Resuelve solo si el código de estado es menor que 500
            },
          },
          headers
        )
        .then((response) => {
          if (response.data.message !== "Invalid email y/o clave") {
            this.user.rol = response.data.rows[0].rol;
            // this.user.nombre = response.data.rows[0].nombre;
            // this.user.apellido = response.data.rows[0].apellido;
            localStorage.rol = response.data.rows[0].rol;
            localStorage.nombre = response.data.rows[0].nombre;
            localStorage.apellido = response.data.rows[0].apellido;
            // console.log(this.user.rol);
            let access_token = response.data.token;
            localStorage.token = access_token;
            this.isLogin = true;
            //console.log(localStorage.token);
            //console.log(response.data.rows[0].rol);
            //console.log(access_token);
            if (this.user.rol === "administrador") {
              //opcion vuex
              //store.dispatch('mockLogin')
              this.$router.push("/dashboard");
            }
          } else {
            this.message = this.$swal("Email y/o clave incorrecta");
          }
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
/* Importing fonts from Google */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

/* Reseting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.hi {
  font-family: "algerian";
}
.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
  /* border: 1px solid red; */
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #03a9f4;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.wrapper .btn:hover {
  background-color: #039be5;
}

.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}

.wrapper a:hover {
  color: #039be5;
}

@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
@import url("https://fonts.googleapis.com/css?family=Exo:400,700");

/* estilos de fondo */
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.area {
  background-color: rgba(100, 213, 254, 0.902);
  background: -moz-radial-gradient(to center #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  /* background: rgba(255, 249, 249, 0.2); */
  background-color: rgb(208, 233, 255);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
.campo {
  position: relative;
}

label {
  width: 100%;
}
.button{
  border-radius: 10px;
  cursor: pointer;
}



</style>
