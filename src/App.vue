<template>
  <v-app>
    <v-main>
      <HeroSection />
      <TransformationCarousel />
      <AboutSection />
      <ServicesSection />
    </v-main>
  </v-app>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import TransformationCarousel from "./components/TransformationCarousel.vue";
</script>
