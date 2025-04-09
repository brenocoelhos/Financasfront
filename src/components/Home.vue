<template>
  <v-card>
    <v-container
      class="d-flex justify-center align-center no-border"
      style="height: 100vh; background-color: #f5f5f5"
    >
      <v-title>Home</v-title>
      
    </v-container>
  </v-card>
  <v-alert
    v-model="alert"
    type="error"
    dismissible
    class="mt-4"
    :style="{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
    }"
    closable
    :border="false"
    :color="'red'"
    :icon="'mdi-alert-circle'"
    :elevation="2"
  >
    {{ alertMessage }}
  </v-alert>
</template>

<script setup lang="ts">
import { VAlert } from "vuetify/components";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const usuario = ref<string>("");
const senha = ref<string>("");
const alert = ref<boolean>(false);
const alertMessage = ref<string>("");

const handleLogin = () => {
  if (usuario.value === "" && senha.value === "") {
    alertMessage.value = "Por favor, preencha o usuário e a senha.";
    showAlert();
  } else if (usuario.value === "") {
    alertMessage.value = "Por favor, preencha o usuário.";
    showAlert();
  } else if (senha.value === "") {
    alertMessage.value = "Por favor, preencha a senha.";
    showAlert();
  } else {
    alert.value = false;
    router.push("/home");
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
