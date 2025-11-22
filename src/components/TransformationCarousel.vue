<template>
  <v-carousel class="pb-5" height="auto" cycle :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(t, i) in transformations"
      :key="i"
    >
      <Transformation
        :title="t.title"
        :before="t.before"
        :after="t.after"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import Transformation from './Transformation.vue'

const transformations = [
  {
    title: 'Matvei Isbell',
    before: 'trainedbyvei/images/transformations/matvei1.jpg',
    after: 'trainedbyvei/images/transformations/matvei1.jpg'
  }
]
</script>
