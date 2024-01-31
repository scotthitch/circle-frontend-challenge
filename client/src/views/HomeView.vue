<script setup lang="ts">
import axios from 'axios'    
import { ref, onMounted } from 'vue'
import type { Book } from "../types"
import { URLFormatter } from "../lib/myUtils"


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
        <router-link :to="URLFormatter(book.title, book.id)">
            <h3>{{ book.title }} - {{ book.author }}</h3>
            <p>${{ book.price }} NZD</p>
        </router-link>
        <hr /> 
    </div>
</template>

<style scoped>
</style>