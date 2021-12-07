<template>
  <section>
    <div class="flex-container">
      <div class="welcome__photo flex-item-left">
        <p class="welcome__title"><h2>Olá, este é o App Album feito em Vue.js</h2></p>
        <div class="img-responsive"><img src="@/assets/images/logo.png" alt="Vue.js 3.0"></div>
      </div>
      <div class="welcome__photo flex-item-right"><p><h3>Este app utiliza a API Pexels</p></h3>
        <div class="img-responsive"><img src="@/assets/images/pexels_logo.png" alt="Pexels API 1.0"></div>
      </div>
      <div class="welcome__photo flex-item-right"><p><h3>Este site/aplicação foi desenvolvido com auxílio de Bootstrap</h3></p>
        <div class="img-responsive"><img src="@/assets/images/bootstrap.jpg" alt="Bootstrap 5.0"></div>
      </div>
    </div>
    
    
  </section>
</template>
<script>
  export default {
    name: "v-welcome"
  };
</script>
<style lang="scss" scoped>

@media (min-width: 200px) and (max-width: 999px) {

  section {
    width: 100% !important;
    height: 600px;
    
    
    h1, h2, h3, h4, h5 {

      font-size: 3vmax;

    }

    .welcome__photo {

      margin-left: 40px !important;
      max-width: 270pt !important;
      max-height: 200px;
      
    }

  }
}
 
  section {
    width: 100%;
    height: 600px;
        
    .flex-container {
      display: flexbox;
      align-content: center;
      justify-content: center;
      align-self: center;
      align-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      margin: auto;
      margin-top: 50pt;
      padding: auto;

      @media (min-width: 1100px) {

        .welcome__photo {
        margin-left: 15px !important;
        box-shadow: -5px -2px 6px 1px rgba(0,0,0,0.58);
        border-radius: 20px;
        flex-direction: inline-flexbox;
        float: left;
	      width: 250px;
        height: 400px !important;
        background: $accentColor;
	      justify-content: space-evenly;
      }    

    }

    img {
    width: 31.5%;
    align-self: center;
    border-radius: 20px;
    box-shadow: 0 0 2px 2px #211f1f;
    margin-bottom: 20px;
    object-fit: cover;
    will-change: transform;
    justify-self : center;

    }

    .img-responsive {
    width: 100%;
    max-width: 100%;
    justify-content: center;    
    display: flex;
    position: relative;
    // overflow: hidden;

  }

    h1, h2, h3, h4, h5 {
      margin: 20px;
      text-align: center;
      color: #FFF;
      text-shadow: 4px 3px 0 #7A7A7A;;

    }

    .flex-item-left {

      padding: 20px;
      display: flex;
      flex-direction: column;
      max-width: 100% !important;
      min-width: 30%;
      min-height: 410px !important;
      max-height: 100%;
      
    }

    .flex-item-right {

      padding: 20px;
      display: flex;
      flex-direction: column;
      max-width: 100% !important;
      min-width: 30%;
      min-height: 410px !important;
      max-height: 100%;
      
    }
 
}

    .welcome__photo {
      min-height: 410px !important;
      margin: 21.5px;
      box-shadow: -5px -2px 6px 1px rgba(0,0,0,0.58);
      border-radius: 20px;
      flex-direction: inline-flexbox;
      float: left;
	    width: 280px;
      height: auto;
	    background: $accentColor;
	    justify-content: space-evenly;
      
      
      }
}
</style>