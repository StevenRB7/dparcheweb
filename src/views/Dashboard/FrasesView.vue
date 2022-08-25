<template>
<!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent/> 
<b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
        </b-col>
      </b-row>
      <h3 class="font-weight-bold text-primary">Frases</h3>
    </b-container>
<table class="table table-bordered " style="width: 80%" align="center">
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
    <FooterComponent />
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
  name: "RegistroEmpresasView",
  components: {
    HeaderComponent,
  },

  data() {
    return {
      usuarios: {
        mensaje: "",
      },

 
      dataFrasesGet: [],
      dataStatusGet: [],
    }
  },
  // firestore(){
  //     return {
  //       Intereses: db.collection('Intereses'),
  //     }
  // },
  mounted(){
    this.getStatus();
    this.getFrases();
  },

  methods: {
    async getStatus() {
      let listStatus = [];
      db.collection("Intereses")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push(status.data());
          });
          return listStatus;
        })
        .then((response) => {
          console.table(response);
        this.dataStatusGet = response;

        });
    },

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