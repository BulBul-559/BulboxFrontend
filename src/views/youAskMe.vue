<script setup>
import BoxContent from '../components/BoxContent.vue';
import InputBox from '../components/InputBox.vue';
import "../assets/css/youAskMeView.css"
import { ref, onMounted } from 'vue'
import axios from 'axios';

defineProps(['inputH'])
const emit = defineEmits(['mode1'])

let ansContent = ref({
    ansList: [],
    ansNum: 0,
    notAnsNum: 0,
    notDisplay: 0,
    id: 0
})

function getQues() {
    axios.get('https://api.bulbul559.cn/bulbox/getYouAskMe/')
        // axios.get('https://api.bulbul559.cn/bulbox/getQues/')
        .then(
            (res) => {
                //执行成功后代码处理
                let tempList = []//已回复问题的列表
                let tempNotAnsNum = 0;//未回复问题的列表
                let tempNotDisplay = 0;
                for (let i = 0; i < res.data.length; i++) {

                    if (res.data[i].display == 0) {
                        tempNotDisplay++;
                    } else if (res.data[i].ans != null) {
                        let temp = {}//临时存储
                        temp.id = i;
                        temp.question = res.data[i].ques
                        temp.answer = res.data[i].ans
                        // temp.quesTime = res.data[i].quesTime
                        // temp.ansTime = res.data[i].ansTime
                        temp.display = res.data[i].display
                        tempList.push(temp)
                    } else {
                        tempNotAnsNum++;
                    }
                }
                //设置绑定的数据
                ansContent.value.ansList = tempList
                ansContent.value.ansNum = ansContent.value.ansList.length
                ansContent.value.notAnsNum = tempNotAnsNum
                ansContent.value.notDisplay = tempNotDisplay
            }
        ).catch(function (error) {
            console.log(error);
        })
}

onMounted(() => {
    getQues();
    emit('mode1')
    console.log('mounted')
})

</script>

<template>
    <InputBox @sub-ques="getQues" :input-h="inputH" />

    <div class="tips animate__animated animate__flipInX">
        <div>- 共 {{ ansContent.ansNum + ansContent.notAnsNum + ansContent.notDisplay }} 条提问 -</div>
        <div>- 已回复 {{ ansContent.ansNum }} 条 未回复 {{ ansContent.notAnsNum }} 条 折叠 {{ ansContent.notDisplay }} 条-</div>
    </div>

    <BoxContent v-for="item in ansContent.ansList" v-bind:key="item.id" :question="item.question" :answer="item.answer" />

    <div class="bottom">
        -- 已经到底啦！！ --
    </div>
</template>

<style scoped></style>