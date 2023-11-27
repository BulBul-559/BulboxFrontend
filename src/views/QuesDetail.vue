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
    passNum: 0,
    waitNum: 0,
    banedNum: 0
}
)

function getDetails() {
    axios.post('https://api.bulbul559.cn/bulbox/getIAskYouDetails/', { quesId: _quesId.value })
        .then((res) => {
            let tempList = []
            let pass = 0;
            let wait = 0;
            let baned = 0;
            let content = res.data
            for (let i = 0; i < content.comments.length; i++) {
                if (content.comments[i].display == 0) {
                    wait++;
                    continue;
                } else if (content.comments[i].display == 2) {
                    baned++;
                    continue;
                }
                else {
                    pass++;
                    let temp = {}//临时存储
                    temp.id = content.comments[i].id;
                    temp.content = content.comments[i].content
                    temp.ansTime = content.comments[i].ansTime
                    tempList.push(temp)
                }
            }
            ansContent.value.ansList = tempList
            ansContent.value.passNum = pass
            ansContent.value.waitNum = wait
            ansContent.value.banedNum = baned
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
    <div class="quesContent  animate__animated animate__fadeIn">
        <div class="quesText animate__animated animate__fadeIn">
            {{ quesContent }}
        </div>

    </div>

    <!-- <div class="line"></div> -->
    <ansInput :ques-id="_quesId" @sub-ques="getDetails" class="animate__animated animate__fadeIn"></ansInput>


    <div class="allAnsContent flex-col-center" v-for="item in ansContent.ansList" :key="item.id">
        <div class="quesTime">{{ item.ansTime }}</div>
        <div class="ansBox animate__animated animate__flipInX">
            {{ item.content }}
        </div>
    </div>

    <div class="tips">-- 共 {{ ansContent.passNum + ansContent.waitNum + ansContent.banedNum }} 条回答 -- </div>
    <div class="tips">-- 其中 {{ ansContent.waitNum }} 条待审核 {{ ansContent.banedNum }} 条被折叠 --</div>
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
    color: grey;
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
    border-radius: 30px 30px 0 0;
    box-shadow: 0 -3px 10px rgba(71, 71, 71, 0.411);
}

.quesText {
    text-align: center;
    font-size: 30px;
    font-family: "SmileySans";
    color: rgb(52, 103, 151);
}

.ansBox {
    margin: 0 20px 20px;
    padding: 0 20px;
    width: 80%;
    border-bottom: 2px solid black;
    font-size: 20px;
    font-family: "SmileySans";
    text-align: center;
}

.quesTime {
    font-family: "SmileySans";
    color: rgba(0, 0, 0, 0.438);
}
</style>