<template>
  <v-container class="py-16">
    <h2 class="text-h4 font-weight-bold mb-8">Coaching Programs</h2>

    <v-row>
      <v-col cols="12" md="4" v-for="service in services" :key="service.title">
        <v-card>
          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-text>{{ service.desc }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const services = [
  { title: "1-on-1 Training", desc: "Customized workouts and personal coaching." },
  { title: "Nutrition Coaching", desc: "Meal planning and healthy eating guidance." },
  { title: "Online Programs", desc: "Train anywhere with structured video sessions." }
];
</script>
