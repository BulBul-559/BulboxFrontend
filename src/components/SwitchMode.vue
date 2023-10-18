<script setup>

import { RouterLink } from 'vue-router'
// mode1 is youAskMe
// mode2 is IAskYou

const emit = defineEmits(['mode1', 'mode2'])

function mode1() {
    emit('mode1')
}

function mode2() {
    emit('mode2')
}

</script>

<template>
    <div class="modeChoice">
        <router-link to="/bulbox/">
            <div class="mode1YouAskMe modeSwitchBtn" @click="mode1">
                我来提问
            </div>
        </router-link>
        <router-link to="/bulbox/IAskYou">
            <div class="mode2IAskYou modeSwitchBtn" @click="mode2">
                我要回答
            </div>
        </router-link>
    </div>
</template>


<style>
.modeChoice {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modeSwitchBtn {
    margin: 20px 10px 10px;
    padding: 10px 20px;
    font-size: 28px;
    font-family: SmileySans;
    border-radius: 20px;
    border: 3px solid rgba(0, 0, 0, 0.694);
    text-decoration: none;
    color: black;
}

.mode1YouAskMe:active {
    background-color: black;
    color: white;
}

.mode2IAskYou:active {
    background-color: black;
    color: white;
}
</style>