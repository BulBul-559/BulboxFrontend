<script setup>
defineProps(['question', 'ansNum', 'quesId'])

</script>

<template>
    <router-link class="quesLink flex-center-col" :to="'/bulbox/IAskYou/' + quesId">
        <div class="quesBox flex-center-col animate__animated animate__fadeInUp">
            <div class="ques myQues flex-center-col">
                <div class="quesContent flex-center-col">{{ question }}</div>
            </div>

            <div class="ansList">
                -- 共 {{ ansNum }} 条回答 --
            </div>
        </div>
    </router-link>
</template>

<style scoped>
a,
a:hover,
a:active,
a:visited,
a:link,
a:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
}

.quesLink {
    width: 100%;
    color: rgb(87, 101, 115);
}

.flex-center-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.quesBox {
    margin: 0 20px 20px;
    padding: 10px;
    width: 80%;
    border-radius: 20px;
    box-shadow: 0px 0px 30px rgba(116, 116, 116, 0.589);
}

.ques {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}

.quesContent {
    width: 100%;
    margin: 10px 20px;
    font-size: 16px;
}
</style>