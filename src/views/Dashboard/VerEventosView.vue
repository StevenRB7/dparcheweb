<!-- eslint-disable -->

<template>

  <div class="cara2">
    <h1 class="contemelo correr">Eventos</h1>
    <section class="contenedorinte">
      <div class="control-label correr" align="center">
        <div class="input-group" style="width: 50%" align="center">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Buscar Evento"
          ></b-form-input>
        </div>
        <br />
      </div>
      <b-table
        thead-class="green-bg bg-secondary text-white"
        responsive="sm"
        hover
        caption-top
        :filter="filter"
        id="my-table"
        :items="dataStatusGet"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        class="table melo"
        style="width: 80%"
        align="center"
      >
        <template #cell(Opciones)="row" class="botonees">
          <a type="button" @click="eliminarDato(row.item.id)" class="btn btn-danger"><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
          <!-- <a type="button" @click="enviarDato(row.item.id)" class="btn btn-warning"><b-icon icon="pencil-square" aria-hidden="true"></b-icon></a> -->
          <!-- <router-link
            :to="{ name: 'EditEventosView', params: { id: row.item.id} }"
            class="btn btn-outline-info mx-2" title="Editar Evento">
            <i class="fa-solid fa-pen-to-square"></i>
            </router-link> -->
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
    </section>
  </div>
</template> 
<script>
/* eslint-disable */

import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";
import { db } from "@/firebase/init.js";

export default {
  name: "EstadosAnimoView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      fields: [
        { key: "id", label: "id" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
        { key: "fecha", label: "Fecha" },
        { key: "imagen", label: "Url Img" },
        "Opciones",
      ],
      dataStatusGet: [],
      filter: null,
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.dataStatusGet.length;
    },
  },
  mounted() {
    this.AgregarEventos();
  },
  methods: {
    AgregarEventos() {
      axios
        .get("https://deparche-api.herokuapp.com/api/eventos")
        .then((response) => {
          this.dataStatusGet = response.data;
        });
    },
    deleteevento(id) {
      axios
        .delete("https://deparche-api.herokuapp.com/api/delete_evento/" + id)
        .then((response) => {
          this.dataStatusGet = response.data;
          this.$router.go();
          console.table(response);
        });
    },
    eliminarDato(id) {
      this.$swal
        .fire({
          title: "Estas segur@?",
          text: "??No podr??s revertir esto!",
          icon: "advertencia",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "??S??, b??rralo!",
          
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deleteevento(id)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    enviarDato(id) {
      
    },
  },
};
</script>
<style scoped>
.py-3 {
  color: rgb(255, 255, 255);
  outline-color: rgb(100, 162, 255);
}
.btnlist {
  color: rgb(255, 255, 255);
  background-color: rgb(65, 119, 254);
  border-color: blue;
}
.contenedorinte {
  margin-top: 3%;
}
.contemelo {
  color: #039be5;
  margin-top: 60px;
  font-family: "snap itc";
}
.cara2 {
  position: relative;
  margin-left: 300px;
  min-height: 90vh;
  min-width: 100vh;
}

.correr{
  margin-right: 350px;
}
.botonees{
  display: block;
}
</style>
