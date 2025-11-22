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

const base = import.meta.env.BASE_URL

const transformations = [
  {
    title: 'Matvei Isbell',
    before: `${base}images/transformations/matvei1.jpg`,
    after: `${base}images/transformations/matvei2.jpg`
  },
  {
    title: 'Silar Moore',
    before: `${base}images/transformations/silar1.jpg`,
    after: `${base}images/transformations/silar3.jpg`
  }
]
</script>
