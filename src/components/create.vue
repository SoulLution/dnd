<template>
	<div class="create min-h-screen justify-start">
		<div class="content items-start">
			<form class="items-start" @submit.prevent="sendForm">
				<h1>Создать задачу</h1>
				<div class="items-start">
					<input type="text" minlength="2" placeholder="Название" v-model="data.title" required>
					<textarea v-model="data.discription" minlength="2" placeholder="Введите описание..." required></textarea>
				</div>
				<div class="buttons justify-between flex-row flex-wrap">
					<button><router-link to="/">Отмена</router-link></button>
					<label class="button"><input type="submit" style="display: none;">Добавить</label>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				data: {
					title: '',
					discription: ''
				}
			}
		},
		methods: {
			sendForm(e){
				e.preventDefault()
				this.$store.dispatch('cart/addItem', this.data)
				setTimeout(()=> this.$router.push('/'),500)
			}
		}
	}
</script>

<style>
	form{
		width: 100%;
		background-color: #e5e5eb;
    border-radius: 5px;
    margin: 1rem;
	}
	form>*{
    padding: 0.5rem 1rem;
    width: calc(100% - 2rem);
  }
  h1{
		border-bottom: 1px solid #020102;
		margin-bottom: 2rem;
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
		min-height: 50vh;
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