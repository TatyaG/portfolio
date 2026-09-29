<template>
  <div v-reveal class="flex flex-col gap-3">
    <p class="kicker">{{ kicker }}</p>
    <h2 class="font-display text-3xl font-semibold text-white sm:text-4xl">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
    kicker: string; 
    title: string }>
    ()
</script>

