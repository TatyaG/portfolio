<template>
    <section id="experience" ref="root" :style="{ scrollMarginTop: `calc(${headerStore.height}px + 1rem)` }">
        <div class="wrapper">
            <div class="flex flex-col gap-14 items-start">
                <div class="flex flex-col gap-6 items-start">
                    <SectionTitle kicker="Опыт работы" title="Где я работала" />
                </div>


                <div class="timeline relative w-full">
                    <div
                        class="timeline-line absolute bottom-0 left-[11px] top-0 w-px origin-top scale-y-0 bg-gradient-to-b from-rose-400 via-pink-300 to-transparent" />

                    <ol class="space-y-10">
                        <li v-for="job in jobs" :key="job.company" class="timeline-item relative pl-12">
                            <span
                                class="timeline-dot absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-pink-300 bg-night">
                                <span class="h-2 w-2 rounded-full bg-rose-500" />
                            </span>

                            <div class="card flex-col flex gap-4">
                                <div class="flex flex-col gap-1 items-start">
                                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        <h3 class="font-display text-xl font-semibold text-slate-900">{{ job.company }}</h3>
                                        <span
                                            class="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs text-rose-700">
                                            {{ job.period }}
                                        </span>
                                    </div>
                                    <p class="text-sm text-slate-500">{{ job.place }}</p>
                                </div>

                                <div class="flex flex-col gap-4">
                                    <p class="font-medium text-slate-700">{{ job.role }}</p>

                                    <ul class="flex flex-col gap-2 text-sm leading-relaxed text-slate-600">
                                        <li v-for="point in job.points" :key="point" class="flex gap-2.5">
                                            <span class="mt-0.5 text-rose-500">▸</span>
                                            <span>{{ point }}</span>
                                        </li>
                                    </ul>
                                </div>


                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in job.stack" :key="tech" class="tag text-xs">{{ tech }}</span>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerStore = useHeaderStore();

const jobs = [
    {
        company: 'CoffeeStudio',
        role: 'Frontend-разработчик',
        period: 'Сентябрь 2024 — настоящее время',
        place: 'Псков · интернет-компания',
        stack: ['Nuxt 2/3/4', 'Vue', 'Pinia', 'Vanilla JS', 'Figma'],
        points: [
            'Разработка и поддержка клиентской части веб-приложений на Nuxt.js / Vue.js',
            'Проектирование архитектуры переиспользуемых UI-компонентов и бизнес-логики',
            'Интеграции с REST API, состояние на Pinia / Vuex, асинхронная загрузка данных',
            'Клиентская логика на Vanilla JS для проектов на Django',
            'Адаптивная кроссбраузерная вёрстка по макетам Figma, анимации и интерактив',
            'Микроразметка Schema.org / Open Graph, участие в код-ревью',
        ],
    },
    {
        company: 'Falcon Space',
        role: 'HTML-верстальщик, SQL-разработчик',
        period: 'Июнь 2023 — Сентябрь 2024',
        place: 'Платформа для создания веб-приложений',
        stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
        points: [
            'Вёрстка веб-страниц на HTML, CSS и JavaScript',
            'Внесение правок и доработка существующих страниц',
            'Разработка SQL-запросов',
            'Взаимодействие с менеджерами, разработчиками, дизайнерами и тестировщиками',
        ],
    },
    {
        company: 'ITitans',
        role: 'Frontend-разработчик',
        period: 'Май 2023 — Сентябрь 2024',
        place: 'Разработка сайтов и веб-сервисов',
        stack: ['HTML', 'CSS', 'JavaScript', 'Библиотеки'],
        points: [
            'Адаптивные и кроссбраузерные веб-страницы на HTML, CSS, JavaScript',
            'Доработка существующих страниц сайта',
            'Вёрстка email-писем',
            'Работа в связке с разработчиками, аналитиками, маркетологами и дизайнерами',
        ],
    },
]

const root = ref<HTMLElement | null>(null)
let ctx: ReturnType<typeof gsap.context> | undefined

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    ctx = gsap.context(() => {
        // линия растёт по мере скролла
        gsap.to('.timeline-line', {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 70%',
                end: 'bottom 60%',
                scrub: 0.6,
            },
        })

        gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
            gsap.from(item, {
                x: -48,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: item, start: 'top 82%', once: true },
            })
            gsap.from(item.querySelector('.timeline-dot'), {
                scale: 0,
                duration: 0.5,
                delay: 0.15,
                ease: 'back.out(2.5)',
                scrollTrigger: { trigger: item, start: 'top 82%', once: true },
            })
        })
    }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>
