<template>
  <v-container class="text-center py-16">
    <v-icon icon="mdi-dumbbell" id="main-dumbell-icon"/>
    <h1 class="text-h2 font-weight-bold">Trained by Vei</h1>
    <p class="text-h6 mt-4">
      Personalized coaching to help you reach your fitness goals.
    </p>
    <v-btn 
    size="large" 
    class="mt-6"
    @click="dialog = true"
    id="book-call-btn">
        Apply for Coaching Today
    </v-btn>

    <ContactDialog v-model="dialog" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import ContactDialog from './ContactDialog.vue'

const dialog = ref(false)
</script>

<style scoped>
#book-call-btn {
    background-color: #49B568;
    transition: background-color 0.3s ease;
    color: white;
}

#book-call-btn:hover {
  background-color: #388f51ff;
}

#main-dumbell-icon {
  font-size: 5rem;
  /* transform: rotate(-45deg); */
}
</style>