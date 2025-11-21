<template>
  <v-card class="mx-auto transformation-card" max-width="50%" elevation="4">
    <v-card-title class="justify-center text-h6">{{ title }}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-img :src="before" alt="Before" class="rounded-lg" cover></v-img>
          <p class="text-center mt-2">Before</p>
        </v-col>
        <v-col cols="6">
          <v-img :src="after" alt="After" class="rounded-lg" cover></v-img>
          <p class="text-center mt-2">After</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: { type: String, default: "Transformation" },
  before: { type: String, required: true },
  after: { type: String, required: true }
})
</script>

<style scoped>
p {
  font-weight: bold;
  color: #333;
}

.transformation-card {
  margin-bottom: 1rem;
}
</style>