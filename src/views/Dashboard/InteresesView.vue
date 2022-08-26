<!-- eslint-disable -->

<template>
<div class="cara2">
  <h1 class="contemelo text-primary">Intereses</h1>
  <section class="contenedorinte">
      <div class="control-label" align="center">
        <div class="input-group" style="width: 50%" align="center"> 
             
             <b-form-input
             v-model="filter"
             type="search"
             placeholder="Buscar Usuarios"
             ></b-form-input>
        </div>
<br>
</div>
    <b-table hover caption-top :filter="filter" id="my-table" :items="dataStatusGet" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" style="width: 80%" align="center" >
       <!-- <template #cell(Acciones)="row">
          
          <a type="button" @click="borrarAutores(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon


       </template> -->
    </b-table>
    <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
  </section>
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
      fields: [
        {key: 'idCorreo', label: 'id',},
        {key: 'usuario', label: 'Usuario',},
        {key: 'interes', label: 'Interes'},
      ],
      dataStatusGet: [],
      filter:null,
      perPage: 10,
      currentPage: 1,
    }
  },
  computed: {
   rows() {
    return this.dataStatusGet.length;
   }
  }, 
  mounted(){
    this.getStatus();
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

    //  eliminarDato(){
    //   if(confirm("Are you sure you want to delete this document?")){
    //      db.collection("Intereses").doc().delete().then(function() {
    //      console.log("Document successfully deleted!");
    //      }).catch(function(error) {
    //      console.error("Error removing document: ", error);  
    //      });
    //   }else{

    //   }
    // },
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
.contenedorinte{
  margin-top: 5%;
}
.contemelo{
  margin-top: 60px;
  text-shadow: -1px -1px 1px #aaa
  0px 4px 1px rgba(0,0,0,0.5),
  4px 4px 5px rgba(0,0,0,0.7),
  0px 0px 7px rgba(0,0,0,0.4);
  font-family: "snap itc";
}
</style>
