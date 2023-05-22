<script>
export default {
data() {
return {
imie: "",
nazwisko:"",
osoby:[]
}
},
methods: {
dodaj() {
this.osoby.push({imie:this.imie,nazwisko:this.nazwisko})
}
},computed: {
personCount() {
return this.osoby.length;
}
}

}
</script>
<template>
<span>Imie</span> <br>
<input v-model="imie"><br>
<span>Nazwisko</span><br>

<input v-model="nazwisko"><br><br>
<button @click="dodaj()">
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