<script setup lang="ts">
import axios from 'axios'    
import {useRoute} from "vue-router";
import { ref, onMounted } from 'vue'


interface Book {
    id: number,
    title: string,
    author: string,
    price: number
}

const bookData = ref<Book[]>([]);


onMounted(() => {
    const route = useRoute()

    console.log(route.params)

    axios.get(`books/${route.params.id}`)
    .then((res) => {
        bookData.value = res.data.book
    })
    .catch((err) => {
        console.error(err)
    })
})

</script>


<template>
<div>
  {{ bookData }}
</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>