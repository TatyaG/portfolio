<template>
  <div>
    <AppHeader />
    <main class="flex flex-col gap-24 max-md:gap-12" :style="{paddingTop: `${headerStore.height}px`}">
      <AboutSection />
      <MarqueeStrip />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const headerStore = useHeaderStore();

useHead({
  meta: [
    { property: 'og:title', content: 'Татевик Габриелян — Frontend-разработчик' },
    {
      property: 'og:description',
      content: 'Интерфейсы на Nuxt и Vue: вёрстка, компоненты, REST API, анимации.',
    },
    { property: 'og:type', content: 'website' },
  ],
})

onMounted(() => {
  // пересчёт триггеров после загрузки шрифтов
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
})
</script>
