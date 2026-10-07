<template>
    <section id="hero" ref="root" class="relative flex min-h-screen items-center overflow-hidden">
        <div
            class="bg-grid pointer-events-none absolute inset-0 [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div
            class="orb-1 pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-pink-200/55 blur-[140px]" />
        <div
            class="orb-2 pointer-events-none absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full bg-rose-200/50 blur-[140px]" />

        <div class="wrapper relative pb-20 pt-28">
            <div class="flex flex-col gap-10 items-start">
                <div class="flex flex-col gap-7 items-start">
                    <div class="flex flex-col gap-8 items-start">
                        <h1 class="font-display font-bold leading-[1.04] text-slate-900 text-[clamp(2.6rem,8vw,5.5rem)]">
                            <span class="block overflow-hidden pb-1">
                                <span class="hero-word block will-change-transform">Татевик</span>
                            </span>
                            <span class="block overflow-hidden pb-2">
                                <span class="hero-word text-gradient block will-change-transform">Габриелян</span>
                            </span>
                        </h1>
                    </div>
                    <p class="hero-fade max-w-xl text-lg leading-relaxed text-slate-600">
                        Frontend-разработчик. Делаю интерфейсы на
                        <span class="text-slate-800">Nuxt</span> и <span class="text-slate-800">Vue</span>:
                        от адаптивной вёрстки по макетам Figma до анимаций и интеграций с REST API.
                    </p>
                </div>
                <div class="flex flex-col gap-16 items-start">
                    <div class="hero-fade flex flex-wrap items-center gap-4">
                        <a href="#contacts" class="btn-primary">Связаться со мной</a>
                        <a href="https://github.com/TatyaG" target="_blank" rel="noopener" class="btn-ghost">
                            GitHub
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </div>
                    <div class="hero-fade flex flex-wrap gap-x-10 gap-y-4 text-sm text-slate-500">
                        <span><b class="text-slate-800">3,5+ года</b> коммерческой разработки</span>
                        <span><b class="text-slate-800">Nuxt 2 / 3 / 4</b> в продакшене</span>
                        <span><b class="text-slate-800">Удалённо</b></span>
                    </div>
                </div>

            </div>
        </div>

        <a href="#about"
            class="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-rose-700"
            aria-label="Вниз">
            <svg class="scroll-icon h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14m0 0-6-6m6 6 6-6" />
            </svg>
        </a>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const root = ref<HTMLElement | null>(null)
let ctx: ReturnType<typeof gsap.context> | undefined

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
        // каскадное появление
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.hero-word', { yPercent: 120, duration: 1.1, stagger: 0.14 }).from(
            '.hero-fade',
            { y: 28, opacity: 0, duration: 0.8, stagger: 0.12 },
            '-=0.55'
        )

        // «дышащий» скролл-хинт
        gsap.to('.scroll-icon', { y: 8, duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut' })

        // параллакс свечений при скролле
        gsap.to('.orb-1', {
            yPercent: 40,
            ease: 'none',
            scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('.orb-2', {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
        })
    }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>
