
 <template>
  <div class="about mt-4">
    <div class="alert alert-info" v-if="status">
      {{ status }}
    </div>
    <div class="container vh-100">
      <div class="botoon">
        <a class="btn colortb text-white" href="/NuevoBusView" role="button">
          Nuevo Bus</a
        >
      </div>
      <div class="table-responsive">
        <table id="buses" class="table table-striped">
          <thead>
            <tr class="colortb text-white">
              <th scope="col">id</th>
              <th scope="col">num_bus</th>
              <th scope="col">placa</th>
              <th scope="col">tipo_bus</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bus in buses" :key="bus.id" class="bg-white text-black">
              <td>{{ bus.id }}</td>
              <td>{{ bus.num_bus }}</td>
              <td>{{ bus.placa }}</td>
              <td>{{ bus.tipo_bus }}</td>
              <td>
                <form name="from" @submit.prevent="Eliminar(bus.id)">
                  <router-link
                    :to="{ name: 'NuevoUsubusView', params: { id: bus.id } }"
                    class="btn btn-outline-secondary"
                    ><i class="fa-regular fa-user"></i
                  ></router-link>
                  <router-link
                    :to="{ name: 'EditBusView', params: { id: bus.id } }"
                    class="btn btn-outline-info"
                    ><i class="fa-solid fa-pen-to-square"></i
                  ></router-link>
                  <button type="input" class="btn btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </form>
                <!-- <a @click="Eliminar(bus.id)" class="btn btn-outline-danger"><i
                  class="fa-solid fa-trash" v-on:click.prevent="Eliminar(bus.id)"></i></a> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "BusesView",

  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    return {
      status: "",
      buses: {
        id: "",
        num_bus: "",
        placa: "",
        tipo_bus: "",
      },
    };
  },

  mounted() {
    if (localStorage.token != null) {
      this.verBuses();
    } else {
      this.$router.push("/iniciar");
    }
  },

  methods: {
    verBuses() {
      axios
        .get("https://interbusapi.herokuapp.com/buses")
        .then((rows) => {
          this.buses = rows.data;
          $(document).ready(function () {
            $("#buses").DataTable({
              pageLength: 8,
              lengthMenu: [5, 8, 10],
              paging: true,
              searching: true,
              language: {
                sInfo: "Mostrando registros del START al END",
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
              },
            });
          });
          console.log(this.buses);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    Eliminar(id) {
      axios
        .delete("https://interbusapi.herokuapp.com/buses/" + id)
        .then((response) => {
          this.status = response.data.status;
          this.$router.go();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.colortb {
  background-color: #009ece;
}
.botoon {
  display: flex;
  align-content: flex-start;
}
</style>