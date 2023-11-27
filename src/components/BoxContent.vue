<script setup>

defineProps(['question', 'answer', 'quesTime', 'ansTime'])

</script>

<template>
    <div class="quesBox flex-center-col animate__animated animate__fadeInUp">
        <div class="quesTime">{{ quesTime }}</div>
        <div class="ques">
            <div class="boxProfile">
                <img src="../assets/img/Q.png" alt="">
            </div>
            <div class="quesContent">{{ question }}</div>
        </div>
        <div class="ansTime">{{ ansTime }}</div>
        <div class="ans">
            <div class="boxProfile">
                <img class="meProfile" src="../assets/img/me.jpg" alt="">
            </div>
            <div class="ansContent">{{ answer }}</div>
        </div>
    </div>
</template>

<style scoped>
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
    /* font-size: 18px;
    font-family: "SmileySans"; */
}

.ques {
    width: 100%;
    /* padding: 0 10px 0 0; */
    padding: 0px 10px 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}

/*  old style */
/* .ans {
    background-color: rgba(222, 222, 222, 0.559);
    border-radius: 10px;
    padding: 10px 10px 10px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
} */

/*  new style */
.ans {
    width: 100%;
    padding: 0px 10px 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}


.meProfile {
    border-radius: 1000px;
}

.boxProfile {
    width: 13%;
    height: auto;
    margin: 10px;
}

.boxProfile>img {
    width: 100%;
    height: auto;
}

.quesContent {
    /* width: 100%; */
    width: 90%;
}

.ansContent {
    width: 90%;
    /* font-size: 16px; */
}

.quesTime {
    font-family: "SmileySans";
    color: rgba(0, 0, 0, 0.438);
}

.ansTime {
    padding: 10px 0 0 0;
    font-family: "SmileySans";
    color: rgba(0, 0, 0, 0.438);
    border-top: 2px solid black;
    width: 90%;
    text-align: center;
}
</style>