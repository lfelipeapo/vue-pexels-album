<template>
  <form class="form"
    @submit.prevent="onSubmit"
  >
    <input
      class="form__textfield"
      type="text"
      :placeholder="placeHolder"
      :value="searchQuery"
      ref="searchQuery"
    />
    <button class="form__submit" type="submit">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
                <path
                  d="M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0
          S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786
          c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z
            M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667
          S302.646,384,202.667,384z"
                />
              </svg>
    </button>
  </form>
</template>

<script>
  export default {
    name: "v-form-search",
    props: {
      searchQuery: {
        type: String,
        default: ""
      },
      placeHolder: {
        type: String,
        default: ""
      }
    },
    methods: {
      onSubmit() {
        let searchQuery = this.$refs.searchQuery.value;
        this.$emit("input", searchQuery);
      }
    }
  };
</script>

<style scoped lang="scss">
  .form {
    display: flex;
    margin-top: 2vmax;
    max-width: 100%;
    width: 40%;
    align-self: center;

    @media (max-width: 400px) {

      width:60%;
      
    }
    
    &__textfield {
      background-color: #ecf0f1;
      width: 100%;
      border-bottom: 1px solid #b3b3b3;
      border-radius: 20px;
      box-shadow: 0 0 2px 2px #211f1f;
      color: #b3b3b3;
      padding: 0 0.5vmax;
      margin-right: 1vmax;
      font-size: 1.55vmax;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      transition: border-bottom-color 0.3s ease;
      
      &:focus {
        border-bottom-color: #3d3d3d;
      }
    }
      &__submit {
        svg {
        border: 1px solid none;
        border-radius:5px;  
        width: 1.75vmax;
        background-color: #f1efefd5;
        } 
      }
  }
</style>