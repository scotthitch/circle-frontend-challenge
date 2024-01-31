<script setup lang="ts">
import axios from 'axios'    
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue'
import router from '../router'
import { bookTitleURLFormatter } from "../lib/myUtils"

interface Book {
    id: number,
    title: string,
    author: string,
    price: number
}

// TODO: hmm need to figure out how to deal with this error
const bookData = ref<Book>({});


onMounted(() => {
    const route = useRoute()

    axios.get(`books/${route.params.id}`)
    .then((res) => {
        bookData.value = res.data.book

        // Always redirect to path with correct title format.
        /* TODO: figure out if this always needs to be done or only if user inputs wrong 
        book title */
        router.push(`/${bookTitleURLFormatter(bookData.value.title)}-${bookData.value?.id}`)
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