<template>
  <div v-reveal class="flex flex-col gap-3">
    <p class="kicker">{{ kicker }}</p>
    <h2 class="section-heading text-4xl text-slate-900 max-md:text-2xl">
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
