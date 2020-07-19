<template>
  <div class="list min-h-screen justify-start">
    <div class="content flex-col justify-start">
      <div class="flex-row justify-between">
        <div class="flex-row w-auto">
          <h2>Функция Drag&Drop</h2>
          <div class="switch" :class="{'active': dragndrop}" @click="dragndrop = !dragndrop"></div>
        </div>
        <router-link to="/create">Создать новый</router-link>
      </div>
      <div class="carts flex-row flex-wrap justify-start items-start">


        <div class="cart flex-col justify-start" v-for="(list, i) in carts">
          <div class="justify-start items-start" :class="{'drop': (drag || drag === 0) && drag !== j}" @mouseup="dropItem(i, j)" drag="true" v-for="(cart, j) in list">
            <div class="newDrop justify-start items-start" @mousedown="e => dragItem(e, i, j)">
              <h2 class="flex flex-row justify-between items-center">
                <span :title="cart.title">{{cart.id}}) {{cart.title}}</span>

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="inherit" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.90837 2.72154C9.35656 0.424199 12.6434 0.424199 13.0916 2.72154C13.3644 4.11951 14.9053 4.8616 16.1683 4.20321C18.2439 3.12125 20.2933 5.69104 18.7766 7.47381C17.8536 8.55866 18.2342 10.2261 19.5365 10.8031C21.6765 11.7512 20.9451 14.9557 18.6056 14.8815C17.182 14.8363 16.1156 16.1735 16.4764 17.5513C17.0694 19.8156 14.108 21.2418 12.7075 19.3664C11.8552 18.2252 10.1448 18.2252 9.29256 19.3664C7.89198 21.2418 4.93059 19.8156 5.52357 17.5513C5.88441 16.1735 4.81802 14.8363 3.39442 14.8815C1.05494 14.9557 0.323542 11.7512 2.46356 10.8031C3.76578 10.2261 4.14637 8.55866 3.22344 7.47381C1.70674 5.69104 3.75609 3.12125 5.83166 4.20321C7.09468 4.8616 8.63564 4.11951 8.90837 2.72154Z" stroke="inherit" stroke-width="1.8"/>
                  <path d="M14 11.0001C14 12.657 12.6569 14.0001 11 14.0001C9.34315 14.0001 8.00001 12.657 8.00001 11.0001C8.00001 9.34327 9.34315 8.00012 11 8.00012C12.6569 8.00012 14 9.34327 14 11.0001Z" stroke="inherit" stroke-width="1.8"/>
                </svg>

                <div class="shower flex-row justify-between">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="inherit" xmlns="http://www.w3.org/2000/svg" @click="removeItem(i, cart.id)">
                    <path d="M14 10L13.7 17M10.3 17L10 10M6 6L6.87554 19.133C6.94558 20.1836 7.81818 21 8.87111 21H15.1289C16.1818 21 17.0544 20.1836 17.1245 19.133L18 6M6 6H9M6 6H4M18 6H20M18 6H15M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M15 6H9" stroke="inherit" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="inherit" xmlns="http://www.w3.org/2000/svg" @click="$emit('getId', cart.id)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 9.24985C18.2415 9.75838 17.9872 10.0126 17.6814 10.069C17.5615 10.0912 17.4385 10.0912 17.3186 10.069C17.0128 10.0126 16.7585 9.75838 16.25 9.24985L14.75 7.74985C14.2415 7.24132 13.9872 6.98706 13.9308 6.68123C13.9087 6.56132 13.9087 6.43838 13.9308 6.31846C13.9872 6.01264 14.2415 5.75838 14.75 5.24985C15.2585 4.74132 15.5128 4.48706 15.8186 4.43065C15.9385 4.40853 16.0615 4.40853 16.1814 4.43065C16.4872 4.48706 16.7415 4.74132 17.25 5.24985L18.75 6.74985C19.2585 7.25838 19.5128 7.51264 19.5692 7.81846C19.5913 7.93838 19.5913 8.06132 19.5692 8.18123C19.5128 8.48706 19.2585 8.74132 18.75 9.24985ZM6 19.9998C5.05719 19.9998 4.58579 19.9998 4.29289 19.707C4 19.4141 4 18.9427 4 17.9998V16.8283C4 16.4195 4 16.2151 4.07612 16.0314C4.15224 15.8476 4.29676 15.7031 4.58579 15.4141L11.0858 8.91406C11.7525 8.2474 12.0858 7.91406 12.5 7.91406C12.9142 7.91406 13.2475 8.2474 13.9142 8.91406L15.0858 10.0856C15.7525 10.7523 16.0858 11.0856 16.0858 11.4998C16.0858 11.9141 15.7525 12.2474 15.0858 12.9141L8.58579 19.4141C8.29676 19.7031 8.15224 19.8476 7.96847 19.9237C7.7847 19.9998 7.58032 19.9998 7.17157 19.9998H6Z" fill="inherit"/>
                  </svg>
                </div>
              </h2>
              <span>{{cart.discription}}</span>
            </div>

          </div>
            <div class="newDrop dis" :class="{'drop': drag || drag === 0}" :style="{backgroundColor: drag || drag === 0 ? '#00000026' : ''}" @mouseup="dropItem(i, list.length)">
            </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      col: false,
      drag: false,
      dragndrop: true
    }
  },
  computed:{
    carts() {
      return this.$store.getters['cart/getItems']
    }
  },
  methods: {
    removeItem(col, id){
      this.$store.dispatch('cart/removeItem', 
        {
          col: col,
          id: id,
        })
    },
    dropItem(col, index){
      if(this.drag || this.drag === 0){
        this.$store.dispatch('cart/moveItem', 
          {
            index: this.drag,
            newPos: index,
            newCol: col,
            prevCol: this.col
          })
        this.drag = false
      }
    },
    dragItem(e, col, index){
      if(!e.target.classList.contains('shower') && e.target.nodeName !== 'svg' && this.dragndrop){
        e.preventDefault()
        let item = e.target
        while(!item.getAttribute('drag')){
          item = item.parentElement
        }
        this.col = col
        this.drag = index
        item.style.maxWidth = item.clientWidth + 'px'
        item.classList.add('drag')
        document.body.style.cursor = 'grabbing'
        item.style.left = e.x + 'px'
        item.style.top = e.y + 'px'
        let x = e.x, inter
        document.body.onmousemove = ev => {
          item.style.transition = 'transform 0.3s'
          if(inter)
            clearInterval(inter)
          if(ev.x > x)
            item.style.transform = 'translate(-50%, 0.5rem) rotate(12deg)'
          else
            item.style.transform = 'translate(-50%, 0.5rem) rotate(-12deg)'
          inter = setInterval(()=> item.style.transform = 'translate(-50%, 0.5rem) rotate(0deg)',Math.abs(x - ev.x))
          item.style.left = ev.x + 'px'
          item.style.top = ev.y + 'px'
          x = ev.x
        }
        document.body.onmouseup = ev => {
          clearInterval(inter)
          this.drag = false
          item.style.left = '0px'
          item.style.top = '0px'
          item.style.transition = '0s'
          item.style.transform = 'unset'
          item.style.maxWidth = '100%'
          item.classList.remove('drag')
          document.body.style.cursor = 'default'
          document.body.onmouseup = () => {}
          document.body.onmousemove = () => {}
        }
      }
    }
  }
}
</script>

<style scoped>
  .drag{
    position: fixed;
    width: 100%;
    height: 200px !important;
    transform: translate(-50%, 0.5rem);
    z-index: 10;
  }
  .dis{
    opacity: 0;
    cursor: default !important;
  }
  .dis.drop{
    opacity: 0.5;
    cursor: grabbing !important;
  }
  .drop:hover:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #aaa;
    z-index: 5;
  }
  .cart{
    left: 0;
    top: 0;
    flex: 0 0 25%;
    max-width: calc(25% - 2rem);
    padding: 1rem;
  }
  .cart>div{
    height: 200px;
  }
  .newDrop{
    height: 100%;
    background-color: #e5e5eb;
    border-radius: 5px;
    overflow: hidden auto;
    cursor: pointer;
    margin-top: 1rem;
  }
  .newDrop::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #aaa;
  }
  .newDrop::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #5b5bff; 
  }
  .cart h2{
    padding: 0.5rem;
    width: calc(100% - 1rem);
    border-bottom: 1px solid #020102;
    background-color: #e5e5eb;
    position: sticky;
    top: 0;
    fill: #6D6F80;
    stroke: #6D6F80;
  }
  .cart h2>span{
    width: calc(100% - 48px);
    padding: 0;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cart h2>svg{
    transition: transform 0.3s;
  }
  .cart h2>svg:hover{
    transform: rotate(180deg);
    cursor: pointer;
    stroke: #5b5bff !important;
  }
  .cart h2>svg:hover + .shower{
    display: flex;
  }
  .shower{
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: white;
    width: 70px;
    padding: 1rem;
    transform: translateY(70%);
    display: none;
    border: 1px solid #1d1a30;
    border-radius: 5px;
  }
  .shower svg:first-child:hover{
    fill: transparent !important;
    stroke: red !important;
  }
  .shower svg:hover{
    fill: #5b5bff !important;
  }
  .shower:hover{
    display: flex;
  }
  .cart span{
    padding: 0.5rem;
    margin-top: 0.75rem;
    font-size: 1.25rem;
  }
  a{
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
  }
  a:before, a:after{
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
  a:before{
    width: 15px;
    filter: blur(5px);
  }
  a:hover{
    color: #ffffffd6;
    /*background-color: transparent;*/
  }
  a:hover:before, a:hover:after{
    left: 150%;
    transition: 0.6s;
  }
  .switch{
    width: 100px;
    height: 50px;
    background-color: #00000018;
    border-radius: 50px;
    cursor: pointer;
    margin-left: 0.5rem;
    transition: 0.3s;
  }
  .switch:after{
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
    border-radius: 50%;
    transition: 0.3s;
    background-color: #00000056;
  }
  .switch.active{
    background-color: #5b5bff38;
  }
  .switch.active:after{
    left: 55px;
    background-color: #5b5bff;
  }
</style>
