<template>
  <section ref="root" class="relative overflow-hidden border-y border-white/5 bg-panel/50 py-5">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />

    <div ref="track" class="flex w-max will-change-transform">
      <div v-for="n in 2" :key="n" class="flex items-center gap-10 pr-10" aria-hidden="true">
        <div v-for="item in items" :key="item" class="flex items-center gap-10">
          <span class="whitespace-nowrap font-display text-sm uppercase tracking-[0.25em] text-zinc-500">
            {{ item }}
          </span>
          <span class="h-1.5 w-1.5 rounded-full bg-violet-400/70" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const items = [
  'Vue', 'Nuxt', 'JavaScript', 'HTML5', 'CSS3', 'SCSS',
  'Pinia', 'Vuex', 'REST API', 'SQL', 'Git', 'Figma', 'Webpack', 'Bootstrap',
]

const root = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)
let tween: gsap.core.Tween | undefined
let cleanup: (() => void) | undefined

onMounted(() => {
  tween = gsap.to(track.value, { xPercent: -50, ease: 'none', duration: 24, repeat: -1 })

  const el = root.value
  if (!el) return
  // замедление при наведении
  const slow = () => tween && gsap.to(tween, { timeScale: 0.2, duration: 0.5 })
  const normal = () => tween && gsap.to(tween, { timeScale: 1, duration: 0.5 })
  el.addEventListener('mouseenter', slow)
  el.addEventListener('mouseleave', normal)
  cleanup = () => {
    el.removeEventListener('mouseenter', slow)
    el.removeEventListener('mouseleave', normal)
  }
})

onBeforeUnmount(() => {
  cleanup?.()
  tween?.kill()
})
</script>

