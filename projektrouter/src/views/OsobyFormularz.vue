<script setup>
import { ref,reactive,computed  } from 'vue';

import { osoby } from '../store.js'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

defineProps({ header: String })

const imie = ref("");
const nazwisko = ref("");







</script>
<template>
    <h1>{{ header }}</h1>

<span>Imie</span> <br>
<input v-model="imie"><br>
<span>Nazwisko</span><br>

<input v-model="nazwisko"><br><br>
<button @click="osoby.dodaj(imie,nazwisko);    router.push({ name: 'lista'});">
dodaj
</button><br><br>

</template>
<style scoped>
button {
font-weight: bold;
}
</style>