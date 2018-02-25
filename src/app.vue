<template>
	<div>
		<h1>{{title | upperCase}}</h1>
		<vc-message :message='message'></vc-message>
	</div>
</template>

<script>
	import child from './components/child.vue'
	export default{
		components:{
			'vc-message':child
		},
		data() {
			return{
				title:'标题',
				message:'这是子组件'
			}
		},
		filters:{
			upperCase(str){
				return str.toUpperCase()
			}
		},
		mounted(){
			this.title='Hello world!'
		},
		methods:{
			setMessage(msg){
				this.message=msg
			}
		}
	}
</script>

<style>
</style>