<template>
  <v-container class="text-center py-16">
    <v-icon icon="mdi-dumbbell" id="main-dumbell-icon"/>
    <h1 class="text-h2 font-weight-bold">Trained by Vei</h1>
    <p class="text-h6 mt-4">
      Personalized coaching to help you reach your fitness goals.
    </p>

    <v-row class="mx-auto my-8"  justify="center" style="max-width: 80%;">
      <v-col cols="5">
        <v-avatar size="25vw">
          <v-img
            src="./images/matveiCasual1.jpg"
            alt="Hero Image"
          />
        </v-avatar>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-center mb-6">
        <AboutSection />
      </v-col>
    </v-row>

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
import AboutSection from "./AboutSection.vue";

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