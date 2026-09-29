import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: any) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const opts = (binding.value ?? {}) as { delay?: number; y?: number }

      gsap.fromTo(
        el,
        { y: opts.y ?? 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: opts.delay ?? 0,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      )
    },
    // обязательно для SSR
    getSSRProps() {
      return {}
    },
  })
})