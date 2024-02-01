<script setup lang="ts">
import { defineProps } from 'vue'
import type { Book } from "../types.ts"
import { URLFormatter } from "../lib/myUtils"

defineProps<{bookData: Book;}>();

</script>

<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-card
                :title="bookData.title"
                :text="`$${bookData.price} NZD`"
                :subtitle="bookData.author"
                v-bind="props"
                :color="isHovering ? 'secondary' : undefined"
                :to="URLFormatter(bookData.title, bookData.id)"
            ></v-card>
        </template>
    </v-hover>
</template>