<template>
  <header
    ref="header"
    class="sticky inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-pink-100 bg-night/90 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="wrapper flex h-16 items-center justify-between">

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-slate-600 transition-colors hover:text-rose-800"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3 max-md:w-full max-md:justify-between">
        <a href="#contacts" class="btn-primary hidden px-5 py-2 text-sm sm:inline-flex">
          Связаться
        </a>
        <button
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-pink-200 md:hidden"
          aria-label="Меню"
          @click="open = !open"
        >
          <span
            class="h-0.5 w-5 bg-slate-700 transition-transform"
            :class="open ? 'translate-y-1 rotate-45' : ''"
          />
          <span
            class="h-0.5 w-5 bg-slate-700 transition-transform"
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
      <nav v-if="open" class="border-t fixed w-full border-pink-100 bg-night/95 backdrop-blur-md md:hidden">
        <div class="wrapper flex flex-col py-3">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="py-3 text-slate-700 transition-colors hover:text-rose-800"
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

const header = ref<HTMLElement | null>(null)
const headerStore = useHeaderStore();
const links = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Образование', href: '#education' },
  { label: 'Контакты', href: '#contacts' },
]

const scrolled = ref(false);
const open = ref(false);
let resizeObserver: ResizeObserver | undefined

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
}

const updateHeaderHeight = () => {
  if (header.value) {
    headerStore.height = header.value.getBoundingClientRect().height;
  }
}

onMounted(() => {
  onScroll()
  updateHeaderHeight()
  resizeObserver = new ResizeObserver(updateHeaderHeight)
  if (header.value) resizeObserver.observe(header.value)
  window.addEventListener('scroll', onScroll, { passive: true });
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  resizeObserver?.disconnect()
})
</script>
