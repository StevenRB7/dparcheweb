<template>
  <div class="home">
    <HeaderComponent/>

 <div class="hello">

<div class="container-fluid fh5co-two-img">
    <div class="row">
      <div class="col-sm-6 pr-0 pl-0">
        <div class="card"> <img class="card-img" src="../assets/inici1.jpg" alt="">
          <div class="card-img-overlay"> </div>
        </div>
      </div>
      <div class="col-sm-6 pr-0 pl-0">
        <div class="card"> <img class="card-img" src="../assets/inici2.jpg" alt="">
          <div class="card-img-overlay"> </div>
        </div>
      </div>
    </div>
  </div>

  <div >
  <nav class="header navbar navbar-expand-md  fixed-top maine-menu">
    <div class="container">
      <button class="navbar-toggler ml-auto" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"> <span class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span> </button>
      <div id="my-nav" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">

          <li class="nav-item"> <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Home</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#act" tabindex="-1" aria-disabled="true">Actividad</a></li>
          <li class="nav-item"> <a class="nav-link" href="#eventos" tabindex="-1" aria-disabled="true">Eventos</a></li>
          <li class="nav-item"> <a class="nav-link" href="#categoria" tabindex="-1" aria-disabled="true">Categorias</a></li>
          <li class="nav-item"> <a class="nav-link" href="#nosotros" tabindex="-1" aria-disabled="true">Nosotros</a></li>
        <li>  <router-link to="/Inicios" class="nav-item"> <a class="nav-link"  href="#" tabindex="-1" aria-disabled="true">Iniciar Sesión</a></router-link></li>

        </ul>
      </div>
    </div>
  </nav>
</div>
  </div>
      <div class="container contact-pop">
      <div class="row">
        <div class="col-md-6  pr-0">
          <div class="card"> <img class="card-img w-100" src="../assets/dparchea_1000.png" alt="">
            <div class="card-img-overlay"> </div>
          </div>
        </div>
        <div class="col-md-6   " id="about">
          <div class="content  ">
            <h3>Comunidad D'PARCHE</h3>
            <h4>Professional </h4>
            <hr />x|
            <p> Generar con la ayuda de herramientas TIC espacios dedicados a mejorar la salud mental de las personas y economía.</p>
            <a href="#nosotros" class="btn">CONTACTANOS</a> </div>
          </div>
        </div>
      </div>
      <div class="container recent" id="act">
        <div class="row">
          <h2>Actividades</h2>
          <div class="owl-carousel owl-carousel2 owl-theme d-flex">
            <div>
              <div class="fo card"> <img class="" src="../assets/activida3.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Ejercicio</h5>
                    <p class="card-text">Has ejercicio y conoce nuevos amigos</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/actividad6.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Basquetbol</h5>
                    <p class="card-text">Disfruta del espectaculo</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/activida1.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Campar</h5>
                    <p class="card-text">Pasa tiempo con tus amigos </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/activida4.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Motocross</h5>
                    <p class="card-text">Vive un momento unico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
<br>
<br>
<br>
<div class="miv">
    <div class="a card">
        <div class="face front">
            <img src="../assets/amigos.jpg" alt="">
            <h3>MISION</h3>
        </div>
        <div class="face back">
            <h3>MISION</h3>
            <p>A raiz de nuestra aplicación buscamos que los aprendices sena CTPI busque diferentes alternativas de distracción y/o entretenimiento, que pueda ayudarles a "quemar energía" que es hacer que el aprendiz participe activamente en estos lugares y eventos, para así mantener un equilibrio entre en estudio o trabajo con su salud mental, ya que vemos que apartir de la pandemia este a sido afectada en un gran porcentaje</p>
            <div class="link">
                <!-- <a href="#">Detalles</a> -->
            </div>
        </div>
    </div>

    <div id="eventos" class="a card">
        <div class="face front">
    <img src="../assets/mision.jpg" alt="">
        <h3>VISION</h3>
        </div>
        <div class="face back">
            <h3>VISION</h3>
            <p>Lo que queremos lograr con esta aplicación es reducir la problematica psicosocial que se ha agravado a raiz de la pnademia como lo es el estre, teniendo como publico objetivo el Aprendiz CTPI buscamos que este mejore en sus actividades academica disminuyendo la cantidad de estres y depresión con nuestro aplicativo</p>
            <div class="link">
                <!-- <a href="#">Details</a> -->
            </div>
        </div>
    </div>
</div>
<br>
<br>
 <div class="container  recent" id="categoria">
        <div class="arow">
          <h2>Categoria</h2>
          <br>
          <br>
          <div class="owl-carousel owl-carousel2 owl-theme d-flex">
            <div>
              <div class="fo card"> <img class="" src="../assets/cultura2.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Cultura</h5>
                    <p class="card-text">Cultura se refiere al conjunto de bienes materiales y espirituales de un grupo social transmitido de generación en generación a fin de orientar las prácticas individuales y colectivas.  Incluye lengua, procesos, modos de vida, costumbres, tradiciones, hábitos, valores, patrones, herramientas y conocimiento.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/restaurante2.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Restaurantes</h5>
                    <p class="card-text">Es un establecimiento de servicio, Hoy en día existe una gran variedad de modalidades de servicio y tipos de cocina, es uno de los lugares que más visitamos las personas para comer, beber y porque no también para celebrar y encontrarnos con amigos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/bares1.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Bares</h5>
                    <p class="card-text">Un bar es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social. </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/recreacion.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Recreacion</h5>
                    <p class="card-text">Como recreación se denomina la actividad destinada al aprovechamiento del tiempo libre para el esparcimiento físico y mental, realizado de forma individual o grupal. Factor de formación de niños y adolescentes, vinculándose como modos de estimulación y aprendizaje.</p>
                </div>
              </div>
            </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/motel.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Moteles</h5>
                    <p class="card-text">Lo que de verdad caracteriza a estos establecimientos es la intimidad que ofrecen al huésped.  se suele acceder directamente por el garaje individual a la habitación asegurando la máxima privacidad. Tambien los moteles pueden ser una opción buena y barata para hospedarse por un rato. </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="fo card"> <img class="" src="../assets/discoteca1.jpg" alt="">
                <div class="card-img-overlay"> <a href="#"></a>
                  <div class="bottom-text">
                    <h5 class="card-title">Discotecas</h5>
                    <p class="card-text">Una discoteca es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
 </div>
        <br>
        <br>
        <br>
<CarruselComponent/>
  <div class="container-fluid fh5co-insta-feed activity">
    <div class="container align-items-center">
      <div class="row mb-5 pb-5">
      </div>
      <h2 class="text-center d-block">NOS PUEDES ENCONTRAR EN</h2>
      <!-- <div class="row social-links">
        <ul class="nav mx-auto">
          <li class="nav-item"> <a class="nav-link" href=""><img src="assets/img/facebook.png" alt=""></a> </li>
          <li class="nav-item"> <a class="nav-link" href=""><img src="assets/img/twitter.png" alt=""></a> </li>
          <li class="nav-item"> <a class="nav-link" href="#"><img src="assets/img/google-plus.png" alt=""></a> </li>
        </ul>
      </div> -->
      <div class="d-block " id="contact">
      <div class="iconos1 ">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <ul class="redes">
          <li class="redes2">
            <a href="https://es-la.facebook.com/"  target="_blank">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span  class="fa fa-facebook"></span>
            </a>
          </li>
          <li class="redes2">
            <a href="https://wa.me/message/EKPS4PAESNM4L1"  target="_blank">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span  class="fa fa-whatsapp"></span>
            </a>
          </li>

          <li class="redes2">
            <a href="https://www.instagram.com/" target="_blank">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span  class="fa fa-instagram"></span>
            </a>
          </li>
        </ul>

      </div>
    </div>
    </div>
  </div>
    <FooterComponent/>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


import axios from "axios";
import { db } from "@/firebase/init.js";

export default {
  
  data () {
    return {
      slide: 0,
      sliding: null,

      usuarios: {
        id: "",
        mail: "",
        nombre: "",
      },

      dataUsers: [],
    }
  },

 mounted() {
    this.verUsuarios();
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    verUsuarios() {
      axios
        .get(
          "https://deparche-51e93-default-rtdb.firebaseio.com/User.json?print=pretty"
        )
        .then((rows) => {
          return rows.data;
        })
        .then((responseTwo) => {
          this.dataUsers = responseTwo;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  name: 'HomeView',
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent
  }
}
</script>


<style scoped>
 *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

/* estilos contactanos */

.contact-pop {
  margin-top: -300px; }
  .contact-pop .card-img-overlay {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(134, 133, 133, 0.6));
    background: -moz-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    background: -o-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    background: -linear-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    border-radius: 15px 0 0 15px; }
  .contact-pop .row {
    
    max-width: 918px;
    margin: 0 auto; }
  .contact-pop img {
    border-radius: 15px 0 0 15px; }
  .contact-pop .content {
    padding: 45px 20px 20px 40px;
    height: 100%;
    background: #fff;
    border-radius: 0 15px 15px 0; }
    .contact-pop .content h3 {
      color: #3d383a;
      font-size: 30px;
      text-transform: uppercase;
      margin-bottom: 10px; }
    .contact-pop .content h4 {
      color: #978b91;
      font-size: 18px;
      font-family: "PT-Sans-Regular"; }
    .contact-pop .content p {
      color: #584f53; }
    .contact-pop .content hr {
      background-color: rgb(89, 165, 252);
      width: 50px;
      height: 5px;
      border: none;
      margin-left: 0; }
    .contact-pop .content a {
      background-color: rgb(89, 165, 252);
      width: 158px;
      border-radius: 40px;
      color: #fefefe;
      padding: 10px 0;
      margin-top: 20px; }
    @media (max-width: 991px) {
      .contact-pop .content {
        padding: 20px 20px 20px 25px; }
        .contact-pop .content h3 {
          font-size: 24px; }
        .contact-pop .content h4 {
          font-size: 16px; }
        .contact-pop .content p {
          font-size: 14px; }
        .contact-pop .content a {
          width: 120px;
          padding: 5px 0; }
        .contact-pop .content hr {
          margin: 10px 0; } }
  @media (max-width: 991px) {
    .contact-pop {
      margin-top: -250px; } }
  @media (max-width: 767px) {
    .contact-pop {
      margin-top: 0; }
      .contact-pop .col-md-6 {
        padding: 0; }
      .contact-pop img {
        border-radius: 15px 15px 0 0; }
      .contact-pop .card-img-overlay {
        border-radius: 15px 15px 0 0; }
      .contact-pop .content {
        border-radius: 0 0 15px 15px; } }


/* estilos redes */
.iconos1{
    display: flex;
    align-items: center;
      justify-content: center;

    }
        .redes{
          position: relative;
          display: contents;
          transform-style: preserve-3d;
          transform: rotate(-25deg) skew(25deg);


        }
        .redes .redes2{
          position: relative;
          list-style: none;
          width: 50px;
          height: 50px;
          margin: 0 10px;
        }
        .redes .redes2::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: #333;
          transform-origin: top;
          transform: skewX(-41deg);
        }
        .redes .redes2::after{
          content: '';
          position: absolute;
          top: 0;
          left: -9px;
          width: 9px;
          height: 100%;
          background: #333;
          transform-origin: right;
          transform: skewY(-49deg);
        }
        .redes .redes2 span{
          position: absolute;
          
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex !important;
          justify-content: center;
          align-items: center;
          background: #2a2a2a;
          color: rgb(251, 248, 248);
          font-size: 30px !important;
          transition: 0.2s;
        }
        .redes .redes2:hover span{
          z-index: 1000;
          transition: 0.5s;
          color: #fff;
          box-shadow: -1px 1px 1px rgba(103, 18, 18, 0.05);
        }
        .redes .redes2:hover span:nth-child(5){
          transform: translate(40px, -40px);
          opacity: 1;
        }
        .redes .redes2:hover span:nth-child(4){
          transform: translate(30px, -30px);
          opacity: 0.8;
        }
        .redes .redes2:hover span:nth-child(3){
          transform: translate(20px, -20px);
          opacity: 0.6;
        }
        .redes .redes2:hover span:nth-child(2){
          transform: translate(10px, -10px);
          opacity: 0.4;
        }
        .redes .redes2:hover span:nth-child(1){
          transform: translate(0px, 0px);
          opacity: 0.2;
        }
        .redes .redes2:nth-child(1):hover span{
          background: #3b5999;
        }
    
        .redes .redes2:nth-child(2):hover span{
          background: #25d366;
        }
    
        .redes .redes2:nth-child(3):hover span{
          background: #e4405f;
        }
       

 /* estilos mision,vision */
.ia{

   border-radius: 50%;
  
 }
 .miv {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.miv {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background: rgb(89, 165, 252);
}

.a {
  position:relative;
  width: 400px;
  height: 450px;
  margin: 20px;
}

.card .face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: .5s;
}

.card .front {
  transform: perspective(600px) rotateY(0deg);
  box-shadow: 0 5px 10px #000;
}

.card .front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .front h3 {
  position: absolute;
  bottom: 0;
  
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: rgba(0,0,0,.4);
  text-align: center;
}

.card .back {
  
  transform: perspective(600px) rotateY(180deg);
  background: rgb(3, 35, 54);
  padding: 15px;
  color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 5px 10px #000;
}

.card .back .link {
  
  border-top: solid 1px #f3f3f3;
  height: 50px;
  line-height: 50px;
}

.card .back .link a {
  color: #f3f3f3;
}

.card .back h3 {
  font-size: 30px;
  margin-top: 20px;
  letter-spacing: 2px;
}

.card .back p {
  letter-spacing: 1px;
} 

.card:hover .front {
  transform: perspective(600px) rotateY(180deg);
}

.card:hover .back {
  transform: perspective(600px) rotateY(360deg);

}
    /* estilos2 */

element.style {
}
.arow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: 100px;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
* {
    margin: 0;
    padding: 0;
}
*, ::after, ::before {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
    /* color de letras */
    .navbar-nav li .nav-link {
      
    font-family: "PT-Sans-Bold";
    font-size: 16px;
    text-transform: uppercase;
    padding: 15px 25px;
    color: #fff;
    
    }
    /* hover del header */
.maine-menu .navbar-nav li.active a, .maine-menu .navbar-nav li:hover a, .maine-menu .navbar-nav li:visited a {
    /* color: #559FE0; */
    color: rgb(89, 165, 252);

}
.fo{
  margin:25px;
  width: 300px;
  
}

.card {

    border-radius: 15px;
    margin-bottom: 30px;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s; }
    .recent .card .card-img {
      width: 250px;
      margin: 250px;
      border-radius: 15px; }
      

    .recent .card h5 {
      
      font-size: 20px;
      color: rgb(255, 255, 255);
      margin-bottom: 200px; }
    .recent .card p {
      
      font-size: 15px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color: transparent }
    .recent .card.active, .recent .card:hover {
      
      transform: scale(1.05, 1.1);
      -webkit-transform: scale(1.05, 1.1);
      -ms-transform: scale(1.05, 1.1);
      -moz-transform: scale(1.05, 1.1);
      box-shadow: 0px 20px 32px 0px rgba(0, 0, 0, 0.25); }
      
      .recent .card.active .card-img-overlay, .recent .card:hover .card-img-overlay {
        
        background: -webkit-linear-gradient(rgba(0, 0, 0, 0.3),#559FE0);
        background: -moz-linear-gradient(rgba(0, 0, 0, 0.3),#559FE0);
        background: linear-gradient(rgba(0, 0, 0, 0.3),#559FE0);
        background: -ms-linear-gradient(rgba(0, 0, 0, 0.3),#559FE0); }
      .recent .card.active p, .recent .card:hover p {
        color: #ffffff; }
.clickme-text {
  
  color: inherit;
  flex:  100 auto;
  justify-content: inherit;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  cursor: pointer;
  user-select: none;
    bottom: 0;
  position: relative !important;
}
.clickme-text:hover:before {
  opacity: 0.10;
}
.clickme-text:active:before {
  opacity: 100;
}
.hash {
  color: currentColor;
  opacity: 0.3;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

h3 {
  margin: 40px 0 0;
}


.inicio {
  margin-top: 5%;
  /* border: 3px solid #2E86C1; */
  /* border-radius: 50px; */
  padding: 20px;
}

.header {
  background-color: #000000;
}

.js{
  list-style: none;
  text-decoration: none;
  color:rgb(255, 255, 255);;
}
.sj{
     list-style: none;
     text-decoration: none;
}

</style>