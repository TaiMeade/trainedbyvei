<template>
  <v-app>
    <v-main max-width="80%" class="mx-auto">
      <HeroSection />
      <TransformationCarousel />
      <AboutSection />
      <ServicesSection />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import TransformationCarousel from "./components/TransformationCarousel.vue";
import Footer from "./components/Footer.vue";
</script>
