<template>
<!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent/>
 <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
        </b-col>
      </b-row>
      <h3 class="font-weight-bold ">Tabla Publicaciones</h3>
    </b-container>
    <div class="table-responsive">
<table  class="table table-bordered " style=" width: 80%"  align="center">
      <thead>
        <tr class="bg-primary text-white" >
          <th >Id</th>
          <th >Correo</th>
          <th >Usuario</th>
          <th >Categoria</th>
          <th >Descripcion</th>
          <th >Url de perfil</th>
          <th >Fecha</th>
          <th >Ubicacion</th>
          <th >Url Img Publicacion</th>
          <th >Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataStatusGet" :key="index">
          <td class="col-ms-4">{{ user.ides }}</td>
          <td class="col-ms-4">{{ user.correoNom }}</td>
          <td class="col-ms-4">{{ user.nomCorreo }}</td>
          <td class="col-ms-4">{{ user.categorias }}</td>
          <td class="col-ms-4">{{ user.descripciones }}</td>
          <td class="col-ms-4">{{ user.fotoCorreo }}</td>
          <td class="col-ms-4">{{ user.tiempo }}</td>
          <td class="col-ms-4">{{ user.ubicacion }}</td>
          <td class="col-ms-4">{{ user.url }}</td>
          <td><button class="btn btn-danger" @click="eliminarDato(index)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
    </div>
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
      slide: 0,
      sliding: null,

      usuarios: {
        ides: "",
        correoNom: "",
        nomCorreo: "",
        categorias: "",
        descripciones: "",
        fotoCorreo: "",
        tiempo: "",
        ubicacion: "",
        url: "",
      },

      dataUsers: [],
      dataStatusGet: [],

      frases: {
         id: "",
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
   this.getPublicaciones();
  },

  methods: {
   async getPublicaciones() {
      let listStatus = [];
      db.collection("publicacion")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push(status.data());
          });
          return listStatus;
        })
        .then((response) => {
          console.table(response)
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

<style scoped>
.size{
  width: 50px;
}
</style>