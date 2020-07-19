<template>
  <div id="app" class="justify-start">
    <div class="popup" v-if="find.id">
      <div class="bg"></div>
      <form class="popup-content items-start" @submit.prevent="sendForm">
        <input type="text" minlength="2" placeholder="Название" v-model="find.title" required>
        <textarea v-model="find.discription" minlength="2" placeholder="Введите описание..." required></textarea>
        <div class="buttons justify-between flex-row flex-wrap">
          <button @click="find = {}">Отмена</button>
          <label class="button"><input type="submit" style="display: none;">Сохранить</label>
        </div>
      </form>
    </div>
    <Header/>
    <router-view @getId="findById"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    components: { Header, Footer },
    name: 'App',
    data () {
      return {
        find: {
          title: '',
          discription: ''
        },
        index: -1,
        col: -1
      }
    },
    computed:{
      carts() {
        return this.$store.getters['cart/getItems']
      }
    },
    methods: {
      sendForm(){
        this.$store.dispatch('cart/changeItem', {
          col: this.col,
          index: this.index,
          title: this.find.title,
          discription: this.find.discription
        })
        this.find = {}
      },
      findById(e){
        this.index = -1
        this.carts.forEach((x, i) => {
          if(this.index === -1){
            this.index = x.findIndex(k => k.id === e)
          }
          if(this.index !== -1){
            this.find = JSON.parse(JSON.stringify(x[this.index]))
            this.col = i
          }
        })
      }
    }
  }
</script>

<style scoped>

  .popup{
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 10;
  }
  .bg{
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #00000056;
  }
  .popup-content{
    width: 100%;
    max-width: 425px;
    background-color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  input{
    background-color: transparent;
    width: 100%;
    max-width: 325px;
    border: none;
    border-bottom: 2px solid #020102;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #020102;
  }
  input:focus{
    border-color: #5b5bff;
  }
  input:valid, textarea:valid{
    border-color: #3bc63b;
  }
  textarea{
    padding: 1rem;
    height: 100%;
    min-height: 10vh;
    background-color: transparent;
    width: calc(100% - 2rem);
    font-size: 1.5rem;
    resize: none;
  }
  button{
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    max-width: 125px;
    background-color: transparent;
    border-color: transparent;
  }
  .button{
    margin: 1rem 0;
    width: auto;
    color: white;
    background-color: #5b5bff;
    border: 1px solid #5b5bff;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.5rem;
    min-width: 175px;
    transition: 0.3s;
    overflow: hidden;
    cursor: pointer;
  }
  .button:before, .button:after{
    content: "";
    position: absolute;
    top: 0;
    left: -60px;
    background-color: white;
    width: 10px;
    height: 100%;
    transform: scale(1.5) rotate(45deg);
    filter: opacity(0.5);
    /*z-index: -1;*/
  }
  .button:before{
    width: 15px;
    filter: blur(5px);
  }
  .button:hover{
    color: #ffffffd6;
    /*background-color: transparent;*/
  }
  .button:hover:before, .button:hover:after{
    left: 150%;
    transition: 0.6s;
  }

</style>
