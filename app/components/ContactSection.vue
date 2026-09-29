<template>
    <section id="contacts" class="relative scroll-mt-20 overflow-hidden py-28">
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div class="wrapper relative text-center">
            <div class="flex flex-col gap-14">
                <div class="flex flex-col items-center gap-10">
                    <div class="flex flex-col gap-4 items-center">
                        <p v-reveal class="kicker">Контакты</p>
                        <h2 v-reveal class="font-display text-4xl font-bold text-white sm:text-5xl">
                            Давайте работать <span class="text-gradient">вместе</span>
                        </h2>
                        <p v-reveal="{ delay: 0.1 }" class="mx-auto max-w-xl text-zinc-400">
                            Открыта к предложениям: полная занятость или стажировка, удалённо.
                            Готова выполнить тестовое задание.
                        </p>
                    </div>

                    <div v-reveal="{ delay: 0.15 }" class="flex flex-wrap items-center justify-center gap-4">
                        <a ref="cta" href="mailto:tatya-gabrielyan@mail.ru" class="btn-primary">Написать мне</a>
                    </div>
                </div>


                <div class="mx-auto grid max-w-3xl gap-4 text-left sm:grid-cols-2">
                    <a v-reveal href="mailto:tatya-gabrielyan@mail.ru"
                        class="card group transition-colors hover:border-violet-400/40">
                        <svg class="h-6 w-6 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-10 6L2 7" />
                        </svg>
                        <p class="mt-4 text-xs uppercase tracking-widest text-zinc-500">Email</p>
                        <p class="mt-1 break-all text-sm text-zinc-200 group-hover:text-white">tatya-gabrielyan@mail.ru
                        </p>
                    </a>

                    <a v-reveal="{ delay: 0.05 }" href="https://github.com/TatyaG" target="_blank" rel="noopener"
                        class="card group transition-colors hover:border-violet-400/40">
                        <svg class="h-6 w-6 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <p class="mt-4 text-xs uppercase tracking-widest text-zinc-500">GitHub</p>
                        <p class="mt-1 text-sm text-zinc-200 group-hover:text-white">github.com/TatyaG</p>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const cta = ref<HTMLElement | null>(null)
let removeMagnetic: (() => void) | undefined

onMounted(() => {
    const btn = cta.value
    if (!btn || !window.matchMedia('(pointer: fine)').matches) return

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' })
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' })

    const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        xTo((e.clientX - rect.left - rect.width / 2) * 0.25)
        yTo((e.clientY - rect.top - rect.height / 2) * 0.25)
    }
    const onLeave = () => {
        xTo(0)
        yTo(0)
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    removeMagnetic = () => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
    }
})

onBeforeUnmount(() => removeMagnetic?.())
</script>
