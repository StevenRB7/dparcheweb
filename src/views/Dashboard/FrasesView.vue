<template>
<!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent/> 
<b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
        </b-col>
      </b-row>
      <h3 class="font-weight-bold">Frases</h3>
    </b-container>
<table id="tabla_frases" class="table table-bordered " style="width: 90%" align="center">
      <thead>
        <tr class="bg-primary text-white" >
          <th scope="col">Id</th>
          <th scope="col">Frase</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataFrasesGet" :key="index">
          <th scope="row">{{index}}</th>
          <td>{{ user.mensaje }}</td>
          <td>
          <button id="delBtn" class="btn btn-danger">Eliminar</button>
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
import { db } from "@/firebase/init.js";
import { deleteDoc, doc } from 'firebase/firestore';


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
    }
  },
  // firestore(){
  //     return {
  //       Intereses: db.collection('Intereses'),
  //     }
  // },
  mounted(){
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

     eliminarDato(){
      if(confirm("Are you sure you want to delete this document?")){
         db.collection("Intereses").doc().delete().then(function() {
         console.log("Document successfully deleted!");
         }).catch(function(error) {
         console.error("Error removing document: ", error);  
         });
      }else{

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
function eliminar(id){
     
    }
</script>