<template>
  <v-card elevation="0" style="border-radius: 12px; background-color: #f5f5f5">
    <v-container class="d-flex justify-center align-center no-border" style="height: 100vh; background-color: #f5f5f5">
      <v-card class="pa-5" elevation="10" style="max-width: 400px; width: 100%; border-radius: 12px">
        <v-card-title class="text-h5 text-center mb-4" style="color: #1976d2">AppFinanças</v-card-title>
        <v-divider class="mb-4"></v-divider>
        <v-text-field v-model="name" label="Name" variant="outlined" dense class="mb-3" />
        <v-text-field v-model="email" label="Usuário" variant="outlined" dense class="mb-3" />
        <v-text-field v-model="password" label="password" variant="outlined" dense type="password" class="mb-4" />
        <v-text-field v-model="confirmarpassword" label="Confirmar password" variant="outlined" dense type="password"
          class="mb-4" />
        <div class="d-flex justify-space-between">
          <v-btn variant="outlined" color="primary" class="ma-2" style="flex: 1" @click="handleRegister">
            Cadastrar
          </v-btn>
          <v-btn variant="text" color="secondary" class="ma-2" style="flex: 1" @click="$router.push('/login')">
            Voltar
          </v-btn>
        </div>
      </v-card>
    </v-container>
    <v-alert
      v-model="alert"
      :type="alertType"
      dismissible
      class="mt-4"
      :style="{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }"
      :color="alertType === 'success' ? 'green' : 'red'"
      :icon="alertType === 'success' ? 'mdi-check-circle' : 'mdi-alert-circle'"
      :elevation="2"
    >
      {{ alertMessage }}
    </v-alert>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '../api/auth';

const router = useRouter();
const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmarpassword = ref<string>('');
const alert = ref<boolean>(false);
const alertMessage = ref<string>('');
const alertType = ref<'error' | 'success' | 'info' | 'warning' | undefined>('error');

const handleRegister = async () => {
  const validations = [
    { condition: email.value === '', message: 'Por favor, preencha o email.' },
    { condition: password.value === '', message: 'Por favor, preencha a password.' },
    { condition: confirmarpassword.value === '', message: 'Por favor, confirme a password.' },
    { condition: password.value !== confirmarpassword.value, message: 'As passwords não coincidem.' },
  ];

  const failedValidation = validations.find(validation => validation.condition);
  if (failedValidation) {
    alertMessage.value = failedValidation.message;
    alertType.value = 'error';
    showAlert();
    return;
  }

  try {
    await register(name.value, email.value, password.value);
    alertMessage.value = 'Cadastro realizado com sucesso!';
    alertType.value = 'success';
    showAlert();
    setTimeout(() => {
      router.push('/login');
    });
  } catch (error) {
    alertMessage.value = String(error);
    alertType.value = 'error'; // Define o tipo como erro
    showAlert();
  }
};

const showAlert = () => {
  alert.value = true;
  setTimeout(() => {
    alert.value = false;
  }, 3000);
};
</script>

<style scoped>
.no-border {
  border: none !important;
}
</style>
