<template>
  <!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent />
    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3"> 
        </b-col>
      </b-row>
      <h3 class="font-weight-bold">Usuarios</h3>
    </b-container>
    <table id="table_id" class="table table-bordered" style="width: 90%" align="center"
    >
      <thead>
        <tr class="bg-primary text-white">
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
              Eliminar
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
import { db } from "@/firebase/init.js";
import { deleteDoc, doc } from "firebase/firestore";

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
  // firestore(){
  //     return {
  //       Intereses: db.collection('Intereses'),
  //     }
  // },
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
              lengthMenu: [8,10],
              paging: true,
              searching: true,
              lenguaje: {
                sInfo: "Mostrando registros del _START_ al _END_",
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //  deleteProduct(user){
    //   db.collection("Intereses").doc(user).delete().then(() => {
    // console.log("Document successfully deleted!");
    // }).catch((error) => {
    // console.error("Error removing document: ", error);
    // });
    // },

    // async getDelete(){
    //   const deleteTask = id => db.collection("Intereses")
    //    .doc(id)
    //    .delete()
    //   .then(function () {
    //   console.log("Document successfully deleted!");
    //    }).catch(
    //    function(error) {
    //    console.error("Error removing document: ", error);
    //   });

    //   const deleteButtons = document.querySelectorAll('.btn-delete');
    //         deleteButtons.forEach(btn => {
    //             btn.addEventListener('click', async (e) => {
    //                 await deleteTask(e.target.dataset.id);
    //             })
    //         })
    // },

    //  async eliminarDato (index){
    //   await deleteDoc(doc(db, "Intereses", index ));
    //   router.go('/registroempresas')
    // },

    eliminarDato() {
      if (confirm("Are you sure you want to delete this document?")) {
        db.collection("Intereses")
          .doc()
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      } else {
      }
    },
  },
};

// function DeleteData(){
//   remove(ref(db, "Frases/" + index.value))
//   .then(() => {
//     alert("Frase eliminada Correctamente")
//   })
//   .catch((error) => {
//     alert("Pailas" +error);
//   });
// }

// delBtn.addEventListener('click', DeleteData);
function eliminar(id) {}
</script>