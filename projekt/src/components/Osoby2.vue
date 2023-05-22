<script setup>
import { ref,reactive,computed  } from 'vue';

const imie = ref("");
const nazwisko = ref("");
const osoby = reactive([]);

function dodaj() {
osoby.push({imie:imie,nazwisko:nazwisko})
}

const personCount = computed(() => { return osoby.length; });



</script>
<template>
<span>Imie</span> <br>
<input v-model="imie"><br>
<span>Nazwisko</span><br>

<input v-model="nazwisko"><br><br>
<button @click="dodaj">
dodaj
</button><br><br>
<li v-for="(item, index) in osoby">{{ item.imie }} {{ item.nazwisko }}</li>
Osob jest: {{ personCount }}
</template>
<style scoped>
button {
font-weight: bold;
}
</style>