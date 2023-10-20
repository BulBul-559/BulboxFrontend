<script setup>

let quesList = [{
    ques: "这是测试的提问1",
    quesTime: null,
    // ansList:[{}]
    ansNum: 0
}, {
    ques: "这是测试的提问2",
    quesTime: null,
    // ansList:[{}]
    ansNum: 10
}, {
    ques: "这是测试的提问3",
    quesTime: null,
    // ansList:[{}]
    ansNum: 2
},]

console.log(quesList)
</script>

<template>
    <div class="placeWait animate__animated animate__pulse ">
        新功能即将上线！
    </div>
</template>

<style>
.placeWait {
    font-family: "SmileySans";
    font-size: 30px;
    margin: 20px;
    animation-iteration-count: infinite;
}
</style>