<template>
  <v-container class="py-16">
    <h2 class="text-h4 font-weight-bold mb-6">Contact Me</h2>
    <v-form>
      <v-text-field label="Name" required></v-text-field>
      <v-text-field label="Email" required></v-text-field>
      <v-textarea label="Message" rows="4"></v-textarea>
      <v-btn color="primary" class="mt-4">Send</v-btn>
    </v-form>
  </v-container>
</template>
