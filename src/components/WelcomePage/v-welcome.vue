<template>
  <section>
    <div class="flex-container">
      <div class="welcome__photo flex-item-left">
      <p class="welcome__title"><h2>Olá, este é o App Album feito em Vue.js</h2></p>
      <p class="welcome__subtitle"><h3>Este app utiliza a API Pexels</h3></p> 
      </div>
    </div>
    <div class="welcome__photo flex-item-right"><h3>Este site/aplicação foi desenvolvido com auxílio de Bootstrap</h3></div>
    <div class="image"><img src="src/assets/logo.png" alt="Estou aqui"></div>
  </section>
</template>
<script>
  export default {
    name: "v-welcome"
  };
</script>
<style lang="scss" scoped>

  .image img {
    width: 100%;
    max-width: 100%;
  }


  section {
    margin: 40px;
    margin-left: 0;
    width: 100%;
    height: 600px;
  
    h1, h2, h3, h4, h5 {
      margin: 20px;
      text-align: center;
      color: #FFF;
      text-shadow: 4px 3px 0 #7A7A7A;;

    }

    .flex-item-left, .flex-item-right {

      padding: 10px;
      flex: 50%;
      flex-direction: column;

    }

         
    .welcome__photo {
      margin:40px;
      box-shadow: -5px -2px 6px 1px rgba(0,0,0,0.58);
      border-radius: 20px;
      justify-content: center;
      display: inline-flexbox;
      flex-direction: row;
      float:left;
	    width: 300px;
      height: auto;
	    background: $accentColor;
	    display: inline-flexbox;
      justify-content: space-between;
    
    }



  }
  
</style>