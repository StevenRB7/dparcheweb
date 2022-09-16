<!-- eslint-disable -->

<template>
<div class="cara2">
  <h1 class="contemelo correr">Estados de Animo</h1>
  <section class="contenedorinte">
      <div class="control-label correr" align="center">
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
    <b-pagination class="correr" align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
  </section>
  <div>
  <a type="button" @click="count()" class="btn btn-secondary correr">Generar Registro</a>
</div>
<div class="contadores">
 
 <input type="text" id="conta1" class="color">
 <input type="text" id="conta2" class="color">
 <input type="text" id="conta3" class="color">

</div>
</div>
</template> 
<script>
/* eslint-disable */

import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";
import { db,database } from "@/firebase/init.js";
let felizRef = database.ref('Feliz');
let enojaRef = database.ref('Enojado');
let trizRef = database.ref('Trizte');


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
        {key: 'fechaa', label: 'Fecha',},
      ],
      dataStatusGet: [],
      contadores: [],
      filter:null,
      perPage: 8,
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
        console.table(response)
        this.dataStatusGet = response;

        });
    },

    async count (){

        felizRef.once('value',(snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById('conta1').value = "felices = " + count;
        console.log("felicez " + count);
        })

        enojaRef.once('value',(snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById('conta2').value = "enojados = " + count;
        console.log("enojado " + count);
        })

        trizRef.once('value',(snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById('conta3').value = "triztes = " + count;
        console.log("tristes " + count);
        })
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
  margin-top:3%;
}
.contemelo{
  color: #039be5;
  margin-top: 20px;
  font-family: "snap itc";
}


.contadores{
  margin-top: 20px;
  font-family: cursive;
  text-justify: auto;
  font-size: 20px;
  margin-right: 350px;
}

.color{
  background: #97dbfc;
}

.correr{
  margin-right: 350px;
}
.cara2{
  position: relative;
  margin-left: 300px;
  margin-right: 300px;
  min-height: 90vh;
  min-width: 130vh;
}
</style>
