<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="60%">
    <v-card id="contact-dialog-card">
      <v-card-title class="text-h5" id="contact-dialog-title">
        Contact Me
      </v-card-title>

      <v-row justify="center" class="px-4" >
        <v-col cols="12">
          <v-form>
            <v-text-field label="Name" required></v-text-field>
            <v-text-field label="Email" required></v-text-field>
            <v-textarea label="Message" rows="4"></v-textarea>
            <v-btn class="mt-4" id="send-msg-btn">Send</v-btn>
          </v-form>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="secondary" @click="$emit('update:modelValue', false)">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
#send-msg-btn {
    background-color: #49B568;
    transition: background-color 0.3s ease;
    color: white;
}

#send-msg-btn:hover {
  background-color: #388f51ff;
}

#contact-dialog-card {
  border-radius: 16px;
  padding: 1rem;
}
</style>