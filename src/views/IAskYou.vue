<script setup>
import QuesContent from '../components/QuesContent.vue';
import { ref } from 'vue';

let quesContent = ref({
    quesList: [],
    quesNum: 0
}
)

// let quesContent = ref({
//     quesList: [{
//         id: 0,
//         ques: "这是测试的提问1",
//         quesTime: null,
//         ansList: [{}],
//         ansNum: 0
//     }, {
//         id: 1,
//         ques: "这是测试的提问2",
//         quesTime: null,
//         ansList: [
//             { id: 0, ans: "This is the test." },
//             { id: 1, ans: "This is the test." },
//             { id: 2, ans: "This is the test." },
//             { id: 3, ans: "This is the test." },
//             { id: 4, ans: "This is the test." },
//             { id: 5, ans: "This is the test." },
//             { id: 6, ans: "This is the test." },
//             { id: 7, ans: "This is the test." },
//             { id: 8, ans: "This is the test." },
//             { id: 9, ans: "This is the test." }],
//         ansNum: 10
//     }, {
//         id: 2,
//         ques: "这是测试的提问3，并且测试一下如果内容很多折行了怎么办",
//         quesTime: null,
//         ansList: [
//             { id: 0, ans: "This is the test." },
//             { id: 1, ans: "This is the test." }],
//         ansNum: 2
//     },],
//     quesNum: 3
// })


// console.log(quesContent)
</script>

<template>
    <div class="tips animate__animated animate__flipInX">
        <div>- 共 {{ quesContent.quesNum }} 条提问 -</div>
        <!-- <div>- 已回复 {{ ansContent.ansNum }} 条 未回复 {{ ansContent.notAnsNum }} 条 折叠 {{ ansContent.notDisplay }} 条-</div> -->
    </div>

    <QuesContent v-for="item in quesContent.quesList" v-bind:key="item.id" :question="item.ques" :ques-id="item.id"
        :ans-num="item.ansNum">

    </QuesContent>
</template>

<style></style>