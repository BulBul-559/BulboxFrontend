<script setup>
import '../assets/css/banner.css'
import ModeTitle from './ModeTitle.vue';

defineProps(['IAskYou', 'youAskMe'])

</script>

<template>
    <div class="boxBanner center-col">
        <div class="profileBox center-col">
            <ModeTitle :-i-ask-you="IAskYou" :you-ask-me="youAskMe" />
        </div>

        <div class="banner"></div>
    </div>
</template>

<style></style>