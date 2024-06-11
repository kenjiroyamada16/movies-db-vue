<template>
  <div class="placeholder">
    <span>Oops, houve um erro na requisição, por favor tente novamente.</span>
    <v-btn @click="emit('onTapTryAgain')">Tentar novamente</v-btn>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits<{(event: "onTapTryAgain"): void}>();
</script>

<style scoped lang="scss">
  .placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    padding: 40px;
    text-align: center;
    flex-direction: column;

    button {
      margin: 20px 40px;
      transition: 0.3s;
      background-color: rgb(195, 26, 26);
    }
  }
</style>