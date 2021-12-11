<template>
<section>
<div class="flex-container"></div><span><h1>Entre em contato</h1></span>
<form method="POST" action="https://formspree.io/f/xlezebdw">
  <fieldset>
    <input type="hidden" name="_subject" value="Novo contato" />
    <input type="hidden" name="_next" value="Mensagem enviada com sucesso!" />
    <input type="hidden" name="_language" value="pt-BR" />

    <input type="text" name="nome" placeholder="Seu nome" required>
      
    <input type="text" name="email" placeholder="Seu e-mail" required>
    
    <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
    

    <button type="submit">Enviar</button>
    
  </fieldset>
</form>
</div>
</section>
</template>

<style lang="scss" scoped>

h1 {
    margin: 40px;
    text-align: center;
    font-size: 3.5vmax;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;

}

form {
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  max-width: 50%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  }

form fieldset {
  border: none;
  font-weight: normal;
}

form input[type="text"],
form input[type="email"],
form textarea {
 
  box-sizing: border-box;
  outline: none;
  display: block;
  color: rgb(19, 18, 18);
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 0.5px solid rgb(51, 50, 50);
  // margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 2vmax;
  font-weight: 100;
  height: 50px;
  letter-spacing: 1px;
}
form textarea {
  height: 200px;
  letter-spacing: 1px;
}
form button[type="submit"] {
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  background: #1abc9c;
  font-size: 2vmax;
  width: 100%;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-top: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  border-radius: 20px;
  letter-spacing: 1px;
}
form button[type="submit"]:hover {
  background: #109177;
}

</style>