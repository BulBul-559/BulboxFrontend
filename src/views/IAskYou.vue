<script setup>
import QuesContent from '../components/QuesContent.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const emit = defineEmits(['mode2'])


let quesContent = ref({
    quesList: [],
    quesNum: 0
}
)

function getQues() {
    axios.get('https://api.bulbul559.cn/bulbox/getIAskYouQues/')
        .then(
            (res) => {
                //执行成功后代码处理
                let tempList = []//问题列表
                for (let i = 0; i < res.data.length; i++) {
                    let temp = {}//临时存储
                    temp.id = res.data[i].id;
                    temp.ques = res.data[i].ques
                    temp.ansNum = res.data[i].commentsNum
                    tempList.push(temp)
                }

                //设置绑定的数据
                quesContent.value.quesList = tempList
                quesContent.value.quesNum = tempList.length
            }
        )
        .catch(function (error) {
            console.log(error);
        })
}

onMounted(() => {
    emit('mode2')
    getQues()
}
)

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