<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from "./components/AppBar.vue"


</script>

<template>
  <v-app>
    <RouterView />
    <AppBar />
  </v-app>
</template>