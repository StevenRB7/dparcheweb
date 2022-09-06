<!-- eslint-disable -->

<template>
<div class="cara2">
  <h1 class="contemelo ">Estados de Animo</h1>
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
    <b-table thead-class="green-bg bg-secondary text-white" responsive="sm" hover caption-top :filter="filter" id="my-table" :items="dataStatusGet" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table melo" style="width: 80%" align="center" >
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
        {key: 'idCorreo', label: 'id', _rowVariant: 'success'},
        {key: 'usuario', label: 'Usuario',},
        {key: 'estado', label: 'Estado'},
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
  mounted() {
    this.getStatus();
  },
  methods: {
    async getStatus() {
      let listStatus = [];
      db.collection("Estados De Animo")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push(status.data());
          });
          return listStatus;
        })
        .then((response) => {
        this.dataStatusGet = response;

        });
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
.contenedorinte{
  margin-top: 5%;
}
.contemelo{
  color: #039be5;
  margin-top: 60px;
  font-family: "snap itc";
}
.cara2{
  margin-left: 180px;
  width: 100%;
}

</style>
