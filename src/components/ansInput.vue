<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps(['quesId'])
const emit = defineEmits(['subAns'])

let inputH = ref('0px');
let placeholderText = "有什么想说的呢！不超过300字哦~"
let tipIcon = ref('↓')
let inputContent = ref('')

const debounce = (function () {
    let timer = 0;
    return function (callback, ms = 200) {  //设置默认200ms
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


function displayInput() {
    if (inputH.value == '0px') {
        inputH.value = '310px'
        tipIcon.value = '↑'
    } else {
        inputH.value = '0px'
        tipIcon.value = '↓'
    }
}

function postData(content) {
    axios.post('https://api.bulbul559.cn/bulbox/postIAskYou/',
        {
            quesId: props.quesId,
            content: content
        }
    ).then(
        () => {
            //执行成功后代码处理
            inputContent.value = ''//清空发送框文字
            // inputH.value = '0px'//收起发送框
            displayInput()
            alert('回答已发送！等待审核吧！')
            emit('subAns')
        }
    ).catch(function (error) {
        console.log(error);
    });
}

function submitQues() {
    let content = inputContent.value

    if (content.length == 0) {
        alert('你的回答是什么呢?_?')
    } else {
        debounce(async () => {
            postData(content);
        }, 200);
    }
}

</script>

<template>
    <div class="subAns">
        <div class="ansInput" :style="{ '--inputH': inputH }">
            <textarea type=" text" class="inputContent" v-model="inputContent" maxlength="300"
                :placeholder="placeholderText"> </textarea>
            <div class="inputSubmit" @click="submitQues">发送回答</div>
        </div>
        <div class="tips" @click="displayInput">{{ tipIcon }}</div>
    </div>
</template>

<style scoped>
.subAns {
    width: 100%;
}

.ansInput {
    width: 100%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    overflow: hidden;
    height: var(--inputH);
    width: 100%;
    transition: height 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 10px rgba(187, 187, 187, 0.511);
    background-color: rgba(243, 243, 243, 0.436);
}

.tips {
    font-size: 30px;
    font-family: "SmileySans";
}

.inputContent {
    width: 85%;
    height: 200px;
    margin: 15px;
    padding: 20px;
    border: 3px solid black;
    border-radius: 15px;
    font-size: 18px;
    box-shadow: 0 0 3px rgb(255, 255, 255);
}

.inputSubmit {
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 700;
    color: black;
    border: 3px solid black;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 3px rgb(255, 255, 255);
}

.inputSubmit:active {
    background-color: black;
    color: white;
}
</style>