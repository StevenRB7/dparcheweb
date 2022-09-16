<!-- eslint-disable -->
<template>
  <div class="cara2">
    <!-- <BarChart class="bar"/> -->
    <h1 class="contemelo">Intereses</h1>
    <section class="contenedorinte">
      <div class="control-label" align="center">
        <div class="input-group" style="width: 50%" align="center">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Buscar Usuarios"
          ></b-form-input>
        </div>
        <br />
      </div>
      <b-table
        thead-class="green-bg bg-secondary text-white"
        hover
        caption-top
        :filter="filter"
        id="my-table"
        :items="dataStatusGet"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        class="table"
        style="width: 80%"
        align="center"
      >
        <!-- <template #cell(Acciones)="row">
          
          <a type="button" @click="eliminarDato(row.item.id)" class="btn btn-secondary"><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>

       </template> -->
      </b-table>
      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </section>
    <div>
      <a type="button" @click="count()" class="btn btn-secondary"
        >Generar Registro</a
      >
    </div>
    <div class="contadores">
      <input type="text" id="conta1" class="color" />
      <input type="text" id="conta2" class="color" />
      <input type="text" id="conta3" class="color" />
      <input type="text" id="conta4" class="color" />
      <input type="text" id="conta5" class="color" />
      <input type="text" id="conta6" class="color" />
    </div>
  </div>
</template>                           

<script>
/* eslint-disable */
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import BarChart from "@/components/Bar.vue";

import axios from "axios";
import { db, database } from "@/firebase/init.js";
import { deleteDoc, doc } from "firebase/firestore";
let cicliRef = database.ref("Ciclismo");
let recreRef = database.ref("Recreacion");
let cofeeRef = database.ref("Cofeebar");
let ambiRef = database.ref("Ambiente");
let pintuRef = database.ref("Pintura");
let pisciRef = database.ref("Piscinas");

export default {
  name: "RegistroEmpresasView",
  components: {
    HeaderComponent,
    BarChart,
  },

  data() {
    return {
      fields: [
        { key: "id", label: "id" },
        { key: "data.usuario", label: "Usuario" },
        { key: "data.interes", label: "Interes" },
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
    this.getStatus();
  },

  methods: {
    async getStatus() {
      let listStatus = [];
      db.collection("Intereses")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push({ id: status.id, data: status.data() });
          });

          return listStatus;
        })
        .then((response) => {
          this.dataStatusGet = response;
        });
    },

    async eliminarDato(id) {
      if (confirm("Deseas eleminar este registro?")) {
        db.collection("Intereses")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Registro eliminado Correctamente " + id);
          })
          .catch(function (error) {
            console.error("Error al eliminar el documento: ", error);
          });
      } else {
      }
    },

    async count() {
      cicliRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta1").value = "Ciclismo = " + count;
        console.log("felicez " + count);
      });

      recreRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta2").value = "Recreacion = " + count;
        console.log("enojado " + count);
      });

      cofeeRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta3").value = "Cofeebar = " + count;
        console.log("tristes " + count);
      });

      ambiRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta4").value = "Ambiente = " + count;
        console.log("felicez " + count);
      });

      pintuRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta5").value = "Pintura = " + count;
        console.log("enojado " + count);
      });

      pisciRef.once("value", (snapshot) => {
        var count = snapshot.numChildren();
        this.contadores = count;
        document.getElementById("conta6").value = "Piscinas = " + count;
        console.log("tristes " + count);
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
.contenedorinte {
  margin-top: 5%;
}
.contemelo {
  margin-top: 60px;
}
.contenedorinte{
  margin-top: 3%;
}
.contemelo{
  margin-top: 50px;
  color: #039be5;
  text-shadow: -1px -1px 1px #aaa 0px 4px 1px rgba(0, 0, 0, 0.5),
    4px 4px 5px rgba(0, 0, 0, 0.7), 0px 0px 7px rgba(0, 0, 0, 0.4);
  font-family: "snap itc";
}

.bar {
  width: 50%;
  margin-left: 300px;
  margin-top: 40px;
}

.contadores {
  margin-top: 20px;
  font-family: cursive;
  text-justify: auto;
  font-size: 17px;
}
.color {
  background: rgb(148, 224, 243);
}
.cara2{
  position: relative;
  margin-left: 300px;
  margin-right: 300px;
  min-height: 90vh;
  min-width: 100vh;
  }
</style>
