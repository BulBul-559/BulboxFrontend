<script setup>
import "../assets/css/whoAskWho.css"
defineProps(['youAskMe', 'IAskYou'])

</script>


<template>
    <div class="bulbox">BulBox</div>
    <div class="modeTip">
        <span class="ni" :class="{ mode1MoveNi: youAskMe, mode2MoveNi: IAskYou }">匿</span>
        <span class="wen">问</span>
        <span class="wo" :class="{ mode1MoveWo: youAskMe, mode2MoveWo: IAskYou }">我</span>
        <span class="da">答</span>
    </div>
</template>

<style>
.bulbox {
    margin: 0 0 -20px 0;
    color: white;
    font-size: 30px;
    font-family: 'SmileySans';
}
</style>

