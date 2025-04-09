<template>
  <v-card
    elevation="0"
    style="
      height: 100%;
      width: 100%;
      border-radius: 12px;
      background-color: #f5f5f5;
    "
  >
    <v-container
      class="d-flex justify-center align-center no-border"
      style="
        height: 100%;
        max-width: 500px;
        width: 100%;
        border-radius: 16px;
        padding: 32px;
        text-align: center;
      "
    >
      <v-card
        class="pa-5"
        elevation="10"
        style="max-width: 400px; width: 100%; border-radius: 12px"
      >
        <v-icon size="64" color="red" class="mb-4">mdi-alert-circle</v-icon>
        <h1 class="text-h4" style="color: #ff5252; margin: 0">
          404 - Página Não Encontrada
        </h1>
        <p class="text-subtitle-1" style="color: #757575; margin: 16px 0">
          A página que você está tentando acessar não existe ou foi removida.
        </p>
        <v-btn color="primary" @click="$router.push('/login')" elevation="2">
          Voltar para Login
        </v-btn>
      </v-card>
    </v-container>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
