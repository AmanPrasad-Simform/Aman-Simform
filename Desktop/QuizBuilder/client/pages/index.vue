<template>
	<div>
		<h1>Index page : {{ data1 }}</h1>
		<h1 class="text-3xl font-bold underline">Hello world!</h1>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const data1 = ref(null)
onMounted(() => {
	console.log('here')
	fetch('http://localhost:8080/palak').then((response) => {
		response.json().then((data) => {
			console.log(data)
			data1.value = data.message
		})
	})
})
</script>
