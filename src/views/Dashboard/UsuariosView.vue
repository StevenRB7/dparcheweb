<template>
  <!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent />
    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3"> </b-col>
      </b-row>
      <h1 class="contemelo">Usuarios</h1>
    </b-container>
    <table
      id="table_id"
      class="table table-bordered"
      style="width: 90%"
      align="center"
    >
      <thead>
        <tr class="bg-secondary text-white">
          <th scope="col">Id</th>
          <th scope="col">Correo</th>
          <th scope="col">Usuario</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataUsers" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.mail }}</td>
          <td>{{ user.nombre }}</td>
          <td>
            <button class="btn btn-danger" @click="eliminarDato(index)">
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
/* eslint-disable */
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";
import { database } from "@/firebase/init.js";
let usersRef = database.ref("User");

export default {
  name: "RegistroEmpresasView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      slide: 0,
      sliding: null,

      dataUsers: [],
    };
  },

  mounted() {
    this.verUsuarios();
  },
  computed: {
    rows() {
      return this.dataUsers.length;
    },
  },
  methods: {
    verUsuarios() {
      axios
        .get(
          "https://deparche-51e93-default-rtdb.firebaseio.com/User.json?print=pretty"
        )
        .then((rows) => {
          return rows.data;
        })
        .then((responseTwo) => {
          console.table(responseTwo);
          this.dataUsers = responseTwo;
          $(document).ready(function () {
            $("#table_id").DataTable({
              pageLength: 8,
              lengthMenu: [8, 10],
              paging: true,
              searching: true,
              lenguaje: {
                sInfo: "Mostrando registros del _START_ al _END_",
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteusuario(index) {
        usersRef
          .child(index)
          .remove()
          .then(function () {
            console.log("Document successfully deleted! " + index);
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        this.$router.go();
    },
    eliminarDato(index) {
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
            this.$router.go();
            this.deleteusuario(index);
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