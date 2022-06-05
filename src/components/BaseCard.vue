<template>
    <div class="flex flex-col justify-start p-[50px] bg-white rounded-[20px] shadow-lg w-full mb-12" :class="titleCenter ? 'items-center' : 'items-start'">
        <p v-if="title" class="font-bold text-2xl mb-7">{{title}}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        titleCenter: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style>

</style>