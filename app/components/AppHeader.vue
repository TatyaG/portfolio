<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-white/5 bg-night/80 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="wrapper flex h-16 items-center justify-between">
      <a href="#hero" class="font-display text-lg font-bold text-white">
        ТГ<span class="text-violet-400">.</span>
      </a>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-zinc-400 transition-colors hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="#contacts" class="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
          Связаться
        </a>
        <button
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
          aria-label="Меню"
          @click="open = !open"
        >
          <span
            class="h-0.5 w-5 bg-zinc-200 transition-transform"
            :class="open ? 'translate-y-1 rotate-45' : ''"
          />
          <span
            class="h-0.5 w-5 bg-zinc-200 transition-transform"
            :class="open ? '-translate-y-1 -rotate-45' : ''"
          />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav v-if="open" class="border-t border-white/5 bg-night/95 backdrop-blur-md md:hidden">
        <div class="wrapper flex flex-col py-3">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="py-3 text-zinc-300 transition-colors hover:text-white"
            @click="open = false"
          >
            {{ link.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">

const links = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Образование', href: '#education' },
  { label: 'Контакты', href: '#contacts' },
]

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true });
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

