<template>
    <section id="education" :style="{ scrollMarginTop: `calc(${headerStore.height}px + 1rem)` }">
        <div class="wrapper">
            <div class="flex flex-col gap-12 items-start">
                <SectionTitle kicker="Образование" title="Учёба и курсы" />

                <div class="grid gap-6 md:grid-cols-2">
                    <div v-for="(item, i) in items" :key="item.title" v-reveal="{ delay: i * 0.1 }"
                        class="card relative overflow-hidden flex flex-col gap-5 items-start">
                        <span class="absolute -right-4 -top-6 font-display text-7xl font-bold text-rose-900/[0.05]">
                            {{ item.year }}
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-col gap-3">
                                <p class="kicker">{{ item.type }}</p>
                                <h3 class="font-display text-xl font-semibold text-slate-900">{{ item.title }}</h3>
                            </div>
                            <p class="text-sm text-slate-600">{{ item.subtitle }}</p>
                        </div>

                        <p class="text-sm leading-relaxed text-slate-600">{{ item.text }}</p>
                        <span class="inline-block rounded-full bg-pink-50 px-3 py-1 text-xs text-rose-700">
                            {{ item.year }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const headerStore = useHeaderStore();

const items = [
    {
        year: '2022',
        type: 'Высшее образование',
        title: 'ГСГУ, г.Коломна',
        subtitle: 'Государственный социально-гуманитарный университет',
        text: 'Факультет математики, физики, химии, информатики. Педагогическое образование с двумя профилями подготовки.',
    },
    {
        year: '2023',
        type: 'Повышение квалификации',
        title: 'Skillbox',
        subtitle: 'Курс «Frontend-разработчик»',
        text: 'Современный стек frontend-разработки: вёрстка, JavaScript, работа с библиотеками и инструментами сборки.',
    },
]
</script>
