<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="60%">
    <v-card id="contact-dialog-card">
      <v-card-title class="text-h5" id="contact-dialog-title">
        Contact Me
      </v-card-title>

      <v-row justify="center" class="px-4" >
        <v-col cols="12">
          <v-form ref="form" @submit.prevent="sendEmail">
            <v-text-field 
              v-model="name" 
              label="Name"
              :rules="nameRules"
              required></v-text-field>
            <v-text-field 
              v-model="email" 
              label="Email"
              :rules="emailRules"
              required></v-text-field>
            <v-textarea
              v-model="message"
              label="Message"
              :rules="messageRules"
              rows="4"></v-textarea>
            <v-btn :loading="loading" type="submit" class="mt-4" id="send-msg-btn">Send</v-btn>
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
  <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
    {{ snackbarText }}
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

// Form state
const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)

// Validation rules
const nameRules = [
  v => !!v || 'Name is required',
  v => v.length >= 2 || 'Name must be at least 2 characters'
]
const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email is invalid'
]
const messageRules = [
  v => !!v || 'Message is required',
  v => v.length >= 10 || 'Message must be at least 10 characters'
]

// EmailJS configuration
const SERVICE_ID = 'trainedbyvei'
const TEMPLATE_ID = 'template_17nzpmp'
const PUBLIC_KEY = 'IF2mEdPZwwhrt0v4e'

// Snackbar state
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

function showSnackbar(message, color = 'success') {
  snackbarText.value = message
  snackbarColor.value = color
  snackbar.value = true
}

// Function to send email using EmailJS
async function sendEmail() {
  // Validate the form
  const { valid } = await form.value.validate()
  if (!valid) {
    showSnackbar('Please fix the errors in the form.', 'error')
    return
  }

  loading.value = true

  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    name: name.value,
    email: email.value,
    message: message.value
  }, PUBLIC_KEY)
    .then(() => {
      loading.value = false
      success.value = true
      name.value = ''
      email.value = ''
      message.value = ''
      showSnackbar('Message sent!', 'success')
    })
    .catch(() => {
      loading.value = false
      error.value = true
      showSnackbar('Failed to send. Try again.', 'error')
    })
}

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