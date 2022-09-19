<template>
  <div class="Eventos">
    <HeaderComponent />
    <!-- eslint-disable -->
    <div class="row justify-content-center my-5">
      <div class="col-11 col-lg-8 offset-lg-0">
        <div class="card text-center ml-4 ml-sm-5 ml-lg-0" id="card-form">
          <div
            class="
              card-body
              justify-content-center
              border border-primary
              rounded
            "
          >
            <h2 class="card-title mt-1" id="title-card">Formulario Empresas</h2>
            <div class="container">
              <form action="" method="POST" enctype="">
                <div class="row my-5">
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="nombre" name="nombre">
                      Nombre Empresa
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <input
                      v-model="form.nombre"
                      type="text"
                      name="nombre"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Nombre de la empresa"
                      required
                    />
                  </div>
                    <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="nit" name="nit">
                      NIT
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <input
                      v-model="form.nit"
                      type="number"
                      name="nit"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="NIT empresa"
                      required
                    />
                  </div>
                  <!-- <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="imagen">
                      Imagen del Evento
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
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
                  <div class="form-group my-4 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Imagen del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input  type="file" name="imagen" class="custom-file-input" id="imagen" required>
                                    <label v-model="form.imagen" class="custom-file-label mt-1" for="customFileLang" ></label>
                                </div>
                  <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 for="example-datepicker">Fecha Del Evento</h4>
                    <b-form-datepicker
                      id="example-datepicker"
                      v-model="form.fecha"
                      class="mb-2"
                      placeholder="Digita la fecha de tu evento"
                    ></b-form-datepicker>
                  </div> -->
                  <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="direccion">
                      Direccion de la empresa
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <input
                      v-model="form.direccion"
                      name="direccion"
                      id="direccion"
                      type="text"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Escribe la direccion de la empresa"
                      required
                    />
                  </div>
                  <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <div class="card-body justify-content-center">
                      <h4 class="card-title" id="descripcion">
                        Detalles de la empresa
                      </h4>
                    </div>
                    <textarea
                      v-model="form.descripcion"
                      name="descripcion"
                      type="text"
                      placeholder="Detalles de la empresa"
                      class="form-control"
                      rows="2"
                      cols="70"
                      required
                    ></textarea>
                  </div>
                 <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="direccion">
                      Categoria de la empresa
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <input
                      v-model="form.categoria"
                      name="categoria"
                      id="categoria"
                      type="text"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Escribe la categoria de la empresa"
                      required
                    />
                  </div>
                  <div
                    class="
                      form-group
                      my-3
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <h4 class="card-title mt-1" id="direccion">
                      Telefono de la empresa
                    </h4>
                  </div>
                  <div
                    class="
                      form-group
                      col-10 col-sm-8
                      offset-sm-2
                      col-lg-8
                      offset-lg-2
                    "
                  >
                    <input
                      v-model="form.telefono"
                      name="telefono"
                      id="telefono"
                      type="text"
                      maxlength="100"
                      class="form-control text-center"
                      placeholder="Escribe el telefono de la empresa"
                      required
                    />
                  </div>
                </div>
                <div class="row justify-content-center">
                  <input
                    class="col-sm-8 mt-2 mb-4 btn btn-primary"
                    v-on:click="AgregarEmpresas()"
                    type="button"
                    value="Registrar"
                  />
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
        nit: "",
        direccion: "",
        descripcion: "",
        categoria: "",
        telefono: "",
        
      },
    };
  },

  mounted() {
    // this.AgregarEventos();
  },

  methods: {
    AgregarEmpresas() {
      axios
        .post(
          "https://deparche-api.herokuapp.com/api/nuevo_negocio",
          this.form,
          {
            validateStatus: function (status) {
              return status < 500; // Resuelve solo si el código de estado es menor que 500
            },
          }
        )
        .then((response) => {
          setTimeout(() => this.$router.push("/empresa"), 2000);
          this.$swal.fire({
            position: "top-center",
            icon: "success",
            title: "Empresa registrada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
        });
    },
  },
};
</script>
