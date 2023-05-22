<script setup>
import { ref,reactive,computed  } from 'vue';
import { osoby } from '../store.js';
defineProps({ header: String })

const imie = ref("");
const nazwisko = ref("");



const personCount = computed(() => { return osoby.lista.length; });



</script>
<template>
<h1>{{ header }}</h1>
<li v-for="(item, index) in osoby.lista">{{ item.imie }} {{ item.nazwisko }}</li>
Osob jest: {{ personCount }}
</template>
<style scoped>
button {
font-weight: bold;
}
</style>