<script setup>

import ansInput from "../components/ansInput.vue";
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"
import axios from "axios"
// const router = useRouter()
const route = useRoute()

let _quesId = ref(0)
let quesContent = ref("")
let ansContent = ref({
    ansList: [],
    ansNum: 0,
    hiddenAns: 0
}
)

function getDetails() {
    axios.post('https://api.bulbul559.cn/bulbox/getIAskYouDetails/', { quesId: _quesId.value })
        .then((res) => {
            let tempList = []
            let cnt = 0;
            let icnt = 0;
            let content = res.data
            for (let i = 0; i < content.comments.length; i++) {
                if (content.comments[i].display == 0) {
                    icnt++;
                    continue;
                } else {
                    cnt++;
                    let temp = {}//临时存储
                    temp.id = content.comments[i].id;
                    temp.content = content.comments[i].content
                    tempList.push(temp)
                }
            }
            ansContent.value.ansList = tempList
            ansContent.value.ansNum = cnt
            ansContent.value.hiddenAns = icnt
            quesContent.value = content.ques
        }).catch((err) => { console.log(err) })
}

onMounted(() => {
    let linkParams = route.params
    _quesId.value = linkParams.quesId
    getDetails();
})

</script>

<template>
    <router-link to="/IAskYou/" class="navBar flex-col-center">
        Back to Box
    </router-link>
    <div class="quesContent">
        {{ quesContent }}
    </div>

    <!-- <div class="line"></div> -->
    <ansInput :ques-id="_quesId" @sub-ques="getDetails"></ansInput>
    <div class="allAnsContent flex-col-center" v-for="item in ansContent.ansList" :key="item.id">
        <div class="ansBox">
            {{ item.content }}
        </div>
    </div>
    <div class="tips">-- 共 {{ ansContent.ansNum + ansContent.hiddenAns }} 条回答 其中 {{ ansContent.hiddenAns }} 条待审核 --</div>
</template>

<style scoped>
.navBar {
    height: 50px;
    width: 100%;
    background-color: rgb(31, 60, 103);
    color: white;
    font-size: 20px;
    font-family: "SmileySans";
}

.tips {
    margin: 0;
}

.flex-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.quesContent {
    margin: 50px 50px 0;
    padding: 20px 20px 10px;
    width: 80%;
    color: black;
    font-size: 30px;
    font-family: "SmileySans";
    border-radius: 30px 30px 0 0;
    color: rgb(52, 103, 151);
    box-shadow: 0 -3px 10px rgba(71, 71, 71, 0.411);
    text-align: center
}

.ansBox {
    margin: 0 20px 20px;
    padding: 20px 20px 0;
    width: 80%;
    border-bottom: 2px solid black;
    font-size: 20px;
    font-family: "SmileySans";
    text-align: center;
}

.line {
    height: 2px;
    width: 100%;
    background-color: black;

}
</style>