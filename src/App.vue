<script setup>
import { RouterView } from 'vue-router'
import './assets/css/index.css'
import './assets/css/whoAskWho.css'
import { ref } from 'vue'

let version = 'v2.1.1'

let youAskMe = ref(false)
let IAskYou = ref(false)
let inputH = ref("0px");

function displayInput() {
  if (inputH.value == '0px') {
    inputH.value = '310px'
  } else {
    inputH.value = '0px'
  }
}

function toMode1OnMounted() {
  youAskMe.value = true;
  IAskYou.value = false;
}

function switchMode1() {
  if (youAskMe.value == true) {
    // now is the mode 1  
    displayInput();
  } else if (IAskYou.value == false) {
    // now is the mode 1, and this is default state
    displayInput();
  } else {
    //now is the mode 2
    youAskMe.value = true;
    IAskYou.value = false;
  }
}

function switchMode2() {
  if (youAskMe.value == true || (youAskMe.value == false && IAskYou.value == false)) {
    // now is the mode 1
    inputH.value = '0px'
    youAskMe.value = false
    IAskYou.value = true
  } else {
    //now is the mode 2
  }
}


</script>

<template>
  <router-view name="banner" :-i-ask-you="IAskYou" :you-ask-me="youAskMe"></router-view>

  <router-view name="mode" @mode1="switchMode1" @mode2="switchMode2"></router-view>

  <router-view name="youAskMe" @mode1="toMode1OnMounted" :input-h="inputH"></router-view>
  <router-view name="IAskYou" @mode2="switchMode2"></router-view>

  <router-view name="IAskYouQues"></router-view>



  <div class="boxInfo">
    <div class="copyright">By Bulbul</div>
    <div class="version">{{ version }}</div>
  </div>
</template>

<style scoped>
.boxInfo {
  font-family: "SmileySans";
  color: rgba(0, 0, 0, 0.438);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
