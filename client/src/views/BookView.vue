<script setup lang="ts">
import axios from 'axios'    
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from 'vue'
import router from '../router'
import { URLFormatter } from "../lib/myUtils"
import type { Book } from "../types"

// TODO: hmm need to figure out how to deal with this error
const bookData = ref<Book>({});
const pageHasLoaded = ref<Boolean>(false);

onBeforeMount(() => {
    const route = useRoute()

    axios.get(`books/${route.params.id}`)
    .then((res) => {
        bookData.value = res.data.book

        // Always redirect to path with correct title format.
        /* TODO: figure out if this always needs to be done or only if user inputs wrong 
        book title */
        console.log(bookData.value)
        router.push(URLFormatter(bookData.value.title, bookData.value.id))
    })
    .catch((err) => {
        console.error(err)
    }).finally(() => {
      pageHasLoaded.value = true;
    })

})

</script>


<template>
  <div v-if="pageHasLoaded">
    {{ bookData }}
  </div>
</template>

<style scoped>
</style>