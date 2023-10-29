<script setup>
import "../assets/css/inputBox.css"
import { ref } from "vue"
import axios from 'axios';

defineProps(['inputH'])
const emit = defineEmits(['sub-ques'])

let inputContent = ref('')
let placeholderText = "Ask me anything！此处可以进行匿名提问，不友善的提问会被折叠，最多不超过 200 字哦~"

const debounce = (function () {
    let timer = 0;
    return function (callback, ms = 200) {  //设置默认200ms
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function postData(content) {
    axios.post('https://api.bulbul559.cn/bulbox/postYouAskMe/',
        {
            ques: content
        }
    ).then(
        () => {
            //执行成功后代码处理
            inputContent.value = ''//清空发送框文字
            // inputH.value = '0px'//收起发送框

            alert('提问已发送，等待回复吧！未回复内容不会显示，回复后会显示在下方。')

            emit('sub-ques')//上抛事件，触发 getQues

        }
    ).catch(function (error) {
        console.log(error);
    });
}
function submitQues() {

    let content = inputContent.value

    if (content.length == 0) {
        alert('请输入你要提问的内容~~')
    } else {
        debounce(async () => {
            postData(content);
        }, 200);
    }
}


</script>

<template>
    <div class="inputBox center-col" :style="{ '--inputH': inputH }">
        <textarea type="text" class="inputContent" v-model="inputContent" maxlength="200"
            :placeholder="placeholderText"> </textarea>
        <div class="inputSubmit" @click="submitQues">发送提问</div>
    </div>
</template>

<style></style>