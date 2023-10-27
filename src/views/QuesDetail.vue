<script setup>

import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"

// const router = useRouter()
const route = useRoute()

let res = ref(0)
onMounted(() => {
    console.log(route.params)
    res.value = route.params
})
</script>

<template>
    <div>add some default information</div>
    <div>{{ res }}</div>


    <div class="line"></div>


</template>

<style scoped>
.line {
    margin: 10px;
    height: 3px;
    width: 100%;
    background-color: black;

}
</style>