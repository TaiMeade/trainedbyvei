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
    before: '/images/beforeTransformations/before1.jpg',
    after: '/images/afterTransformations/after1.jpg'
  },
  {
    title: 'Client 2',
    before: '/images/beforeTransformations/before2.jpg',
    after: '/images/afterTransformations/after2.jpg'
  }
]
</script>
