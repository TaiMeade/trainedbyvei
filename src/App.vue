<template>
  <v-app>
    <v-main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </v-main>
  </v-app>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>
