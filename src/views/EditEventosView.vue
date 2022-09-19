<template>
  <div class="Eventos">
    <HeaderComponent />
    <!-- eslint-disable -->
    <div class="row justify-content-center my-5">
      <div class="col-11 col-lg-8 offset-lg-0">
        <div class="card text-center ml-4 ml-sm-5 ml-lg-0" id="card-form">
          <div class="card-body justify-content-center border border-primary rounded">
            <h2 class="card-title mt-1" id="title-card">Formulario Eventos</h2>
            <div class="container">
              <form name="from" @submit.prevent="Editbus()">
                <div class="row my-5">
                  <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <h4 class="card-title mt-1" id="nombre" name="nombre">
                      Nombre del Evento
                    </h4>
                  </div>
                  <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <input
                      v-model="form.nombre"
                      type="text"
                      name="nombre"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Nombre del Evento"
                      required
                    />
                  </div>
                  <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <h4 class="card-title mt-1" id="imagen">
                      Imagen del Evento
                    </h4>
                  </div>
                  <div class=" form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <input
                      v-model="form.imagen"
                      name="imagen"
                      id="imagen"
                      type="text"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Copia la url de la imagen"
                      required
                    />
                  </div>
                  <!-- <div class="form-group my-4 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Imagen del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input  type="file" name="imagen" class="custom-file-input" id="imagen" required>
                                    <label v-model="form.imagen" class="custom-file-label mt-1" for="customFileLang" ></label>
                                </div> -->
                  <div class=" form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <h4 for="example-datepicker">Fecha Del Evento</h4>
                    <b-form-datepicker
                      id="example-datepicker"
                      v-model="form.fecha"
                      class="mb-2"
                      placeholder="Digita la fecha de tu evento"
                    ></b-form-datepicker>
                  </div>
                  <div class=" form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <h4 class="card-title mt-1" id="direccion">
                      Direccion del Evento
                    </h4>
                  </div>
                  <div class=" form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <input
                      v-model="form.direccion"
                      name="direccion"
                      id="direccion"
                      type="text"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Escribe la direccion de tu evento"
                      required
                    />
                  </div>
                  <div class=" form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <div class="card-body justify-content-center">
                      <h4 class="card-title" id="descripcion">
                        Detalles del Evento
                      </h4>
                    </div>
                    <textarea
                      v-model="form.descripcion"
                      name="descripcion"
                      type="text"
                      placeholder="Detallanos tu evento"
                      class="form-control"
                      rows="2"
                      cols="70"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <button type="submit" class="btn botontables">
                    ACTUALIZAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "RegistroEventosView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      form: {
        nombre: "",
        imagen: "",
        descripcion: "",
        fecha: "",
        direccion: "",
      },
    };
  },

  mounted() {
    // this.AgregarEventos();
  },

  methods: {
    Editbus() {
      axios
        .put(
          "https://deparche-api.herokuapp.com/api/edit_evento/" + this.$route.params.id,
          this.form,
          {
            validateStatus: function (status) {
              return status < 500; // Resuelve solo si el código de estado es menor que 500
            },
          }
        )
        .then((response) => {
         this.$route.push("/vereventos");
         console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    },
    GetEventos(){
      axios
      .get("https://deparche-api.herokuapp.com/api/evento/" + this.$route.params.id)
      .then ((datos) => {
        this.form.nombre = datos.data.nombre;
        this.form.imagen = datos.data.imagen;
        this.form.descripcion = datos.data.descripcion;
        this.form.direccion = datos.data.direccion;
        this.form.fecha = datos.data.fecha;
        console.log(datos);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
};
</script>
<style scoped>
  .Eventos{
position: relative;
  margin-left: 300px;
  margin-right: 300px;
  min-height: 100vh;
  min-width: 100vh;
  }
  .botontables{
    background-color: rgb(77, 138, 231);
    color: white
    ;
  }
</style>
