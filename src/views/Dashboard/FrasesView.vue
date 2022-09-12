<template>
  <!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent />
    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3"> </b-col>
      </b-row>
      <h1 class="contemelo">Frases</h1>
    </b-container>
    <table
      id="tabla_frases"
      class="table table-bordered"
      style="width: 90%"
      align="center"
    >
      <thead>
        <tr class="bg-secondary text-white">
          <th scope="col">Id</th>
          <th scope="col">Frase</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataFrasesGet" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ user.mensaje }}</td>
          <td>
            <button @click="eliminarDato(index)" class="btn btn-danger">
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";
import { database } from "@/firebase/init.js";
let frasesRef = database.ref("Frases");

export default {
  name: "FrasesView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      usuarios: {
        mensaje: "",
      },

      dataFrasesGet: [],
    };
  },
  // firestore(){
  //     return {
  //       Intereses: db.collection('Intereses'),
  //     }
  // },
  mounted() {
    this.getFrases();
  },

  methods: {
    async getFrases() {
      axios
        .get(
          "https://deparche-51e93-default-rtdb.firebaseio.com/Frases.json?print=pretty"
        )
        .then((rows) => {
          return rows.data;
        })
        .then((responseTwo) => {
          this.dataFrasesGet = responseTwo;
          $(document).ready(function () {
            $("#tabla_frases").DataTable({
              pageLength: 8,
              lengthMenu: [8, 10],
              paging: true,
              searching: true,
              lenguaje: {
                sInfo: "Mostrando registros del _START_ al _END_",
                url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json",
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletefrases(index) {
      frasesRef
        .child(index)
        .remove()
        .then(function () {"xtdtdt"+index});
    },
    eliminarDato(index) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.go();
            this.deletefrases(index);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.Empresas {
  margin-left: 300px;
  margin-right: 300px;
}

.contemelo {
  color: #039be5;
  margin-top: 60px;
  font-family: "snap itc";
}
</style>