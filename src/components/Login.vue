<template>
  <v-card elevation="0" style="border-radius: 12px; background-color: #f5f5f5">
    <v-container class="d-flex justify-center align-center no-border" style="height: 100vh; background-color: #f5f5f5">
      <v-card class="pa-5" elevation="10" style="max-width: 400px; width: 100%; border-radius: 12px">
        <v-card-title class="text-h5 text-center mb-4" style="color: #1976d2">AppFinanças</v-card-title>
        <v-divider class="mb-4"></v-divider>
        <v-text-field v-model="usuario" label="Usuário" variant="outlined" dense class="mb-3" />
        <v-text-field
          v-model="senha"
          :type="showPassword ? 'text' : 'password'"
          label="Senha"
          variant="outlined"
          dense
          class="mb-4"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="togglePasswordVisibility"
        />
        <div class="d-flex justify-space-between">
          <v-btn variant="outlined" color="primary" class="ma-2" style="flex: 1" @click="handleLogin">
            Entrar
          </v-btn>
          <v-btn variant="text" color="secondary" class="ma-2" style="flex: 1" @click="$router.push('/cadastro')">
            Cadastrar
          </v-btn>
        </div>
      </v-card>
    </v-container>
    <v-alert v-model="alert" type="error" dismissible class="mt-4"
      :style="{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }" closable
      :border="false" :color="'red'" :icon="'mdi-alert-circle'" :elevation="2">
      {{ alertMessage }}
    </v-alert>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/auth';

const router = useRouter();
const usuario = ref<string>('');
const senha = ref<string>('');
const alert = ref<boolean>(false);
const alertMessage = ref<string>('');
const showPassword = ref<boolean>(false);

const handleLogin = async () => {
  if (usuario.value === '' && senha.value === '') {
    alertMessage.value = 'Por favor, preencha o usuário e a senha.';
    showAlert();
    return;
  } else if (usuario.value === '') {
    alertMessage.value = 'Por favor, preencha o usuário.';
    showAlert();
    return;
  } else if (senha.value === '') {
    alertMessage.value = 'Por favor, preencha a senha.';
    showAlert();
    return;
  }

  try {
    const data = await login(usuario.value, senha.value); 
    console.log('Login bem-sucedido:', data);
    router.push('/home'); 
  } catch (error) {
    alertMessage.value = String(error);
    showAlert();
  }
};

const showAlert = () => {
  alert.value = true;
  setTimeout(() => {
    alert.value = false;
  }, 3000);
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.no-border {
  border: none !important;
}
</style>
