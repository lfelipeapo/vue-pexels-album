<template>
  <footer>
    <div class="rights">© 2021 All rights reserved</div>
      <div class="credits">Developed by <a href="https://www.linkedin.com/in/luiz-felipe-apolinário-80939210a/">Luiz Felipe Apolinário</a></div>
    <div class="container">
      <a class="pexels__link" href="https://www.pexels.com" target="_blank">
        <img class="pexels__img img-fluid" alt="pexels logo" src="https://images.pexels.com/lib/api/pexels.png"/>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "v-footer"
  };
</script>

<style lang="scss" scoped>
  
  footer {
    z-index: 5;
    bottom: 0;
    margin-top: 50px;
    width: 100%;
    min-width: 100%;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(135, 135, 135);
    color: #fff;
    font-weight: 300;
  }

  .container {
    width: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0;
  }

a {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}

  .credits {
    display: center;
    padding: 20px;
    font-size: 2.5vw;
    flex-direction: row;
    text-align: center;
    align-items: space-around;
    }
  
  .rights {
    font-size: 2.5vw;
    flex-direction: row;
    align-items: space-around;
    text-align: center;
  }

  .pexels__link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 15vmax;
  }

  .pexels__img {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;    
    width: 10vw;
    height: auto;
  }
</style>