<template>
    <section id="skills" ref="root" :style="{ scrollMarginTop: `calc(${headerStore.height}px + 1rem)` }">
        <div class="wrapper">
            <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-4">
                    <SectionTitle kicker="Навыки" title="Технологии и инструменты" />
                    <p v-reveal class="max-w-2xl text-slate-600">
                        Основной стек — Vue и Nuxt. Уверенно работаю с вёрсткой любой сложности,
                        сборщиками и системами контроля версий.
                    </p>
                </div>


                <div class="grid gap-6 md:grid-cols-2">
                    <div v-for="(group, gi) in groups" :key="group.title" v-reveal="{ delay: (gi % 2) * 0.1 }"
                        class="skill-card card flex flex-col gap-5">
                        <h3 class="font-display text-base font-semibold text-slate-900">{{ group.title }}</h3>
                        <div class="flex flex-wrap gap-2.5">
                            <span v-for="skill in group.skills" :key="skill" class="skill-tag tag">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerStore = useHeaderStore();

const groups = [
    { title: 'Языки и разметка', skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vanilla JS', 'SQL'] },
    { title: 'Фреймворки и состояние', skills: ['Vue 2', 'Nuxt 2 / 3 / 4', 'Pinia', 'Vuex', 'Bootstrap'] },
    { title: 'Вёрстка', skills: ['Адаптивная', 'Кроссбраузерная', 'Pixel Perfect', 'Email-вёрстка', 'Figma'] },
    { title: 'Инструменты', skills: ['Git', 'Webpack', 'Gulp', 'Parcel', 'Npm', 'REST API', 'Schema.org / Open Graph'] },
]

const root = ref<HTMLElement | null>(null)
let ctx: ReturnType<typeof gsap.context> | undefined

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    ctx = gsap.context(() => {
        // каскадное «выпрыгивание» тегов
        gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card) => {
            gsap.from(card.querySelectorAll('.skill-tag'), {
                y: 18,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.05,
                scrollTrigger: { trigger: card, start: 'top 82%', once: true },
            })
        })
    }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>
