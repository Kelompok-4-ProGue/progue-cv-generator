<template>
	<div class="relative flex flex-col items-center justify-start z-[1]">
		<p class="text-5xl font-bold mb-3 " >Buat <span class="text-blue">CV Profesional</span></p>
		<p class="text-2xl mb-5">Cukup 15 Menit</p>
		<router-link to="/personal-detail" class="bg-blue text-2xl text-white px-[20px] py-[10px] rounded">Buat CV Anda</router-link>

		<!-- homepage cv preview -->
		<img src="../assets/img/cv-image.svg" alt="cv-image" class="mb-9">

		<!-- homepage background bottom -->
		<div class="absolute bottom-0 -z-[1] w-full h-[700px] bg-light-blue"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
</style>