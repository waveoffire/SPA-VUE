import { reactive } from 'vue'


export const osoby = reactive({
lista: [],


dodaj(imie,nazwisko) {
    this.lista.push({imie:imie,nazwisko:nazwisko})

    }
})
