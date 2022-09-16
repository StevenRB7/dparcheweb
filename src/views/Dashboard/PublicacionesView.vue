<!-- eslint-disable -->
<template class="body">
  <div class="cara2">
    <h1 class="contemelo correr">Publicaciones</h1>
    <section class="cara3">
      <div class="control-label correr" align="center">
        <div class="input-group" style="width: 50%" align="center">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Buscar Publicacion"
          ></b-form-input>
        </div>
        <br />
      </div>
      <div>
        <b-table
          thead-class="green-bg bg-secondary text-white"
          sm
          v-bind="estilos"
          hover
          caption-top
          :filter="filter"
          id="my-table"
          :items="dataStatusGet"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
         
          class="tablagod"
        >
          <template #cell(Opciones)="row">
            <a
              type="button"
              @click="eliminarDato(row.item.id)"
              class="btn btn-danger"
              ><b-icon icon="trash-fill" aria-hidden="true"></b-icon
            ></a>
          </template>
        </b-table>
        <b-pagination
        class="correr"
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </section>
  </div>
</template>      
<script>
/* eslint-disable */
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";
import { db, onSnapshot } from "@/firebase/init.js";
import { deleteDoc, doc } from "firebase/firestore";

export default {
  name: "RegistroEmpresasView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      estilos: {
        responsive: true,
      },
      fields: [
        { key: "id", label: "Id" },
        { key: "data.correoNom", label: "Correo" },
        { key: "data.nomCorreo", label: "Usuario" },
        { key: "data.categorias", label: "Categoria" },
        { key: "data.descripciones", label: "Descripcion" },
        { key: "data.fotoCorreo", label: " Url Img Perfil" },
        { key: "data.tiempo", label: "Fecha" },
        { key: "data.ubicacion", label: "Ubicacion" },
        { key: "data.url", label: "Url Img Publicacion" },
        "Opciones",
      ],
      dataStatusGet: [],
      filter: null,
      perPage: 4,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.dataStatusGet.length;
    },
  },
  mounted() {
    this.getPublicaciones();
  },

  methods: {
    async getPublicaciones() {
      let listStatus = [];
      db.collection("publicacion")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push({ id: status.id, data: status.data() });
          });
          return listStatus;
        })
        .then((response) => {
          console.table(response);
          this.dataStatusGet = response;
        });
    },
    async eliminarDato(id) {
      this.$swal
        .fire({
          title: "Estas segur@?",
          text: "¡No podrás revertir esto!",
          icon: "advertencia",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "¡Sí, bórralo!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            setTimeout(() => this.$router.go(), 2000);
            db.collection("publicacion")
              .doc(id)
              .delete()
              .then(function () {
                console.log("Document successfully deleted! " + id);
              })
              .catch(function (error) {
                console.error("Error removing document: ", error);
              });
          }
        });
    },
  },
};
</script>

<style scoped>
.cara2 {
  margin-left: 140px;
  width: 110%;
}
.contemelo {
  color: #039be5;
  margin-top: 30px;
  font-family: "snap itc";
}
.cara3 {
  width: 100%;
}
.correr{
  margin-right: 350px;
}
<<<<<<< HEAD
.cara2{
  position: relative;
  margin-left: 300px;
  margin-right: 300px;
  min-height: 90vh;
  min-width: 100vh;
=======
.tablagod{
width: 80%;
>>>>>>> 6fce68d52d8d8260153a95696fbb922fa87dbf91
}
</style>