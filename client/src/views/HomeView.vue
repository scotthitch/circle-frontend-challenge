<script setup lang="ts">
import axios from 'axios'    
import { ref, onMounted } from 'vue'
import type { Book } from "../types"
import BookDetailsCard from "../components/BookDetailsCard.vue"

const books = ref<Book[]>([]);
        
onMounted(() => {
    // create fnc to get books data
    axios.get('books')
    .then((res) => {
        books.value = res.data.books
    })
    .catch((err) => {
        console.error(err)
    })
})


</script>


<template>
    <div v-for="book in books" :key="book.id">
        <BookDetailsCard :bookData="book"/>
        <hr /> 
    </div>
</template>

<style scoped>
</style>