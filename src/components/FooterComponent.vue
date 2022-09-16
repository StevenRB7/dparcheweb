/* eslint-disable */
// @ is an alias to /src
<template>
  <div>
    <footer>

<div id="nosotros">
    <div class="qr">
      <div>
      <img class="ww" src="../assets/qr_download.png"/>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0733013783824!2d-76.56465938482123!3d2.4826874981908746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses-419!2sco!4v1660662008619!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
      <img class="www" src="../assets/redes.png"/>
      </div>
    </div>
</div>

<br>
        <a class="d" href="#menu"><h3   >D'PARCHE</h3></a>
        <h6><a href="https://wa.me/message/EKPS4PAESNM4L1" class="sj d"> Contactanos: 3245708819</a></h6>
        <h6 class="d">La Paciencia Es Una Gran Virtud</h6>

      <div class="footer-bottom">
        <p class="d">copyright &copy;2022 @D'Parche.</p>
      </div>
    </footer>
  </div>

</template>

<script>

export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
  .d{
    cursor: pointer;
    display: contents;
    text-decoration: none;
    text-transform: uppercase;
    list-style: none;
    color:#fff;
  }

footer {
  position: relative;
  background:  rgb(89, 165, 252);
  height: auto;
  font-family: "Open Sans";
  padding-top: 40px;
  color: #fff;
  margin-top: 100px;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.footer-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 3rem;
}
.footer-content p {
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
}
.footer-bottom {
  background: #000;
  padding: 20px 0;
  text-align: center;
}
.footer-bottom p {
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}

.footer-bottom span {
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}
.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
}

.iconos{
  width: 30px;
  height: 30px;
  margin-left: 40px;
}

.qr{
  display: flex;
}
.ww{
  width: 60%;
  margin-top: 15%;
  margin-left: 30px;
}
.www{
  width: 53%;
  margin-top: 15%;
  margin-left: 90px;
}
.map{
  margin-left: 6%;
}

@media (max-width: 682px) {
  .map{
    display: flex;
  position: relative;
  flex-wrap: wrap;
  min-width: 100px;

}
  }
</style>
